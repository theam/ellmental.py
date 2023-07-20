from typing import Optional, Any

from pydantic import BaseModel
from common.utils import flatten
from stores.base import SearchResult
from chromadb import Client, PersistentClient
from chromadb.config import Settings
from chromadb.types import Metadata, Where
import uuid
import json

from stores.base import EmbeddingsStore, StoreRequest

class ChromaEmbeddingsStoreSettings(BaseModel):
    host: str
    port: str
    collection: str

class ChromaEmbeddingsStore(EmbeddingsStore):
    def __init__(self, path: Optional[str] = None, settings: Optional[ChromaEmbeddingsStoreSettings] = None) -> None:
        if path is not None:
            self.client = PersistentClient(path=path, settings=Settings(anonymized_telemetry=False))
        elif settings is not None:
            self.client = Client(Settings(
                chroma_api_impl="rest",
                chroma_server_host=settings.host,
                chroma_server_http_port=settings.port,
                anonymized_telemetry=False
            ))
        else:
            raise Exception("Missing path or settings")
        
        collection_name = "embeddings" if settings is None else settings.collection
        self.collection = self.client.get_or_create_collection(collection_name, metadata={ "hnsw:space": "ip" })

    def store(self, embeddings: list[StoreRequest]) -> list[str]:
        ids = []
        embeddings_items = []
        metadatas = []

        for embedding in embeddings:
            metadata: Metadata = {}
            if embedding.cluster_id is not None:
                metadata["cluster_id"] = embedding.cluster_id
            metadata["metadata"] = json.dumps(embedding.metadata)

            ids.append(str(uuid.uuid4()))
            embeddings_items.append(embedding.embedding)
            metadatas.append(metadata)

        self.collection.upsert(ids=ids, embeddings=embeddings_items, metadatas=metadatas)
        return ids

    def search(self, embedding: list[float], cluster_ids: list[str], match_threshold: float = 0.8, limit: int = 10) -> list[SearchResult]:

        filters: Optional[Where] = None if not cluster_ids else { 
            "cluster_id": { "$eq": cluster_ids[0] } 
        } if len(cluster_ids) == 1 else { "$or": [
            { "cluster_id": { "$eq": cluster_id } 
        } for cluster_id in cluster_ids ]}

        result = self.collection.query(query_embeddings=[embedding], n_results=limit, where=filters, include=["metadatas", "distances"])

        matches: list[SearchResult] = []

        if result["ids"] is None or result["metadatas"] is None or result["distances"] is None:
            raise Exception("Error searching: No rows found")

        for id, metadata, distance in zip(flatten(result["ids"]), flatten(result["metadatas"]), flatten(result["distances"])):
            cluster_id: str | None = str(metadata.get('cluster_id', None))
            raw_metadata = metadata.get('metadata', '{}')
            real_metadata: dict[str, Any] = {}
            if isinstance(raw_metadata, str):
                real_metadata = json.loads(raw_metadata)

            matches.append(SearchResult(
                id=id,
                metadata=real_metadata,
                score=self.__cosine_distance_to_normalized_similarity(distance),
                cluster_id=cluster_id
            ))
            
        return matches

    def __cosine_distance_to_normalized_similarity(self, distance: float) -> float:
        similarity = 1 - distance
        normalized_similarity = (similarity + 1) / 2
        return normalized_similarity
import uuid
from typing import Any

import pinecone
from pinecone import Index, Vector
from pydantic import BaseModel
from stores.base import EmbeddingsStore, SearchResult, StoreRequest


class PineconeEmbeddingsStoreSettings(BaseModel):
    key: str
    environment: str
    index: str


class PineconeMatch(BaseModel):
    id: str
    score: float
    values: list[float]
    metadata: dict[str, Any]


class PineconeEmbeddingsStore(EmbeddingsStore):
    def __init__(self, settings: PineconeEmbeddingsStoreSettings) -> None:
        pinecone.init(api_key=settings.key, environment=settings.environment)

        self.index = Index(settings.index)

    def store(self, embeddings: list[StoreRequest]) -> list[str]:
        self._validate_configuration()

        pinecone_vectors: list[Vector] = []
        for embedding in embeddings:
            pinecone_metadata = embedding.metadata.copy()
            pinecone_metadata["cluster_id"] = embedding.cluster_id
            vector = Vector(
                id=str(uuid.uuid4()),
                values=embedding.embedding,
                metadata=pinecone_metadata,
            )
            pinecone_vectors.append(vector)

        result = self.index.upsert(vectors=pinecone_vectors)

        result.get("upsertedData")
        if result.get("upsertedData") == 0:
            raise Exception("Error inserting: No rows added")

        return [vector["id"] for vector in pinecone_vectors]

    def search(
        self,
        embedding: list[float],
        cluster_ids: list[str],
        match_threshold: float = 0.8,
        limit: int = 10,
    ) -> list[SearchResult]:
        self._validate_configuration()

        query_response = self.index.query(
            top_k=limit,
            include_values=True,
            include_metadata=True,
            vector=embedding,
            filter={"cluster_id": {"$in": cluster_ids}},
        )

        matches: list[PineconeMatch] = query_response.get("matches")
        search_results: list[SearchResult] = []
        for match in matches:
            if match.score < match_threshold:
                continue

            cluster_id = match.metadata.pop("cluster_id")
            search_result = SearchResult(
                id=match.id,
                metadata=match.metadata,
                score=match.score,
                cluster_id=cluster_id,
            )
            search_results.append(search_result)
        return search_results

    def _validate_configuration(self):
        if not self.index:
            raise ValueError("Pinecone index is required.")

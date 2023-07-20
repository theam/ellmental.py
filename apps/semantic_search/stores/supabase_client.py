import uuid

from typing import Any

from pydantic import BaseModel
from supabase.client import create_client, Client
from stores.base import EmbeddingsStore, StoreRequest, SearchResult


class SupabaseEmbeddingsStoreSettings(BaseModel):
    url: str
    key: str
    table: str
    query_function: str

class SupabaseEmbeddingsStore(EmbeddingsStore):
    def __init__(self, settings: SupabaseEmbeddingsStoreSettings) -> None:
        self.client: Client = create_client(settings.url, settings.key)
        self.table = settings.table
        self.query_function = settings.query_function

    def _validate_configuration(self):
        if not self.client:
            raise ValueError("Supabase client is required.")

        if not self.table:
            raise ValueError("Supabase document table_name is required.")

        if not self.query_function:
            raise ValueError("Supabase matching function name is required.")

    def store(self, embeddings: list[StoreRequest]) -> list[str]:
        self._validate_configuration()

        rows: list[dict[str, Any]] = [
            {
                "id": str(uuid.uuid4()),
                "embedding": embedding.embedding,
                "metadata": embedding.metadata,
                "cluster_id": embedding.cluster_id,
            }
            for embedding in embeddings
        ]

        result = self.client.from_(self.table).insert(rows, upsert=True).execute()

        if len(result.data) == 0:
            raise Exception("Error inserting: No rows added")

        return [row["id"] for row in rows]

    def search(
        self,
        embedding: list[float],
        cluster_ids: list[str],
        match_threshold: float = 0.8,
        limit: int = 10,
    ) -> list[SearchResult]:
        self._validate_configuration()

        result = self.client.rpc(
            self.query_function,
            {
                "query_embedding": embedding,
                "cluster_ids": cluster_ids,
                "match_threshold": match_threshold,
                "match_count": limit,
            },
        ).execute()

        return [
            SearchResult(
                id=row["id"],
                metadata=row["metadata"],
                score=row["similarity"],
                cluster_id=row["cluster_id"],
            )
            for row in result.data
        ]

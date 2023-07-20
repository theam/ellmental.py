from abc import ABC, abstractmethod
from typing import Any, Optional, Mapping
from pydantic import BaseModel


class StoreRequest(BaseModel):
    embedding: list[float]
    metadata: dict[str, Any]
    cluster_id: Optional[str]


class SearchResult(BaseModel):
    id: str
    metadata: dict[str, Any]
    score: float
    cluster_id: Optional[str]


class EmbeddingsStore(ABC):
    @abstractmethod
    def store(self, embeddings: list[StoreRequest]) -> list[str]:
        """Store embeddings and return a list of ids."""

    @abstractmethod
    def search(
        self,
        embedding: list[float],
        cluster_ids: list[str],
        match_threshold: float = 0.8,
        limit: int = 10,
    ) -> list[SearchResult]:
        """Search for embeddings and return a list of results, with its search scores."""

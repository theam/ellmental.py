from typing import TypeVar, Generic, Union

from fastapi import APIRouter
from pydantic import BaseModel

from embeddings.base import EmbeddingsGenerator, InstructionTextContent, TextContent
from stores.base import EmbeddingsStore, SearchResult


ContentType = TypeVar("ContentType", bound=Union[TextContent, InstructionTextContent])


class SearchRequest(BaseModel, Generic[ContentType]):
    query: ContentType
    cluster_ids: list[str]
    limit: int


def router(
    embeddings_generator: EmbeddingsGenerator[ContentType],
    embeddings_store: EmbeddingsStore,
    match_threshold: float,
) -> APIRouter:
    async def search(request: SearchRequest[ContentType]) -> list[SearchResult]:
        embedding = embeddings_generator.embed([request.query])[0]
        return embeddings_store.search(
            embedding, request.cluster_ids, match_threshold, request.limit
        )

    router = APIRouter()
    router.add_api_route("/search", search, methods=["POST"])
    return router

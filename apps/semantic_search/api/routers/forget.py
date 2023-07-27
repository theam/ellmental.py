from typing import Generic, TypeVar, Union

from embeddings.base import EmbeddingsGenerator, InstructionTextContent, TextContent
from fastapi import APIRouter
from pydantic import BaseModel
from stores.base import EmbeddingsStore


class ForgetRequest(BaseModel):
    cluster_ids: list[str]


class ForgetResult(BaseModel):
    cluster_ids: list[str]


def router(
    embeddings_store: EmbeddingsStore,
) -> APIRouter:
    async def forget(request: ForgetRequest) -> ForgetResult:
        success = embeddings_store.delete(request.cluster_ids)
        return ForgetResult(cluster_ids=request.cluster_ids) if success else []

    router = APIRouter()
    router.add_api_route("/forget", forget, methods=["POST"])
    return router

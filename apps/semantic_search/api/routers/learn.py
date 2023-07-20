from typing import Any, Dict, Optional, TypeVar, Generic, Union

from fastapi import APIRouter
from pydantic import BaseModel

from embeddings.base import EmbeddingsGenerator, InstructionTextContent, TextContent
from stores.base import EmbeddingsStore, StoreRequest

ContentType = TypeVar("ContentType", bound=Union[TextContent, InstructionTextContent])

class RequestItem(BaseModel, Generic[ContentType]):
    content: ContentType
    metadata: Dict[str, Any]
    cluster_id: Optional[str]


class LearnRequest(BaseModel, Generic[ContentType]):
    items: list[RequestItem[ContentType]]


class Response(BaseModel):
    ids: list[str]


def __sanitize_value(data: Any) -> Any:
    if isinstance(data, str):
        return data.replace("\u0000", "")
    elif isinstance(data, dict):
        return {k: __sanitize_value(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [__sanitize_value(item) for item in data]

    return data


def router(
    embeddings_generator: EmbeddingsGenerator[ContentType],
    embeddings_store: EmbeddingsStore,
) -> APIRouter:
    async def learn(request: LearnRequest[ContentType]) -> Response:
        embeddings = embeddings_generator.embed(
            [item.content for item in request.items]
        )
        ids = embeddings_store.store(
            [
                StoreRequest(
                    embedding=__sanitize_value(embedding),
                    cluster_id=__sanitize_value(item.cluster_id),
                    metadata=__sanitize_value(item.metadata),
                )
                for embedding, item in zip(embeddings, request.items)
            ]
        )

        return Response(ids=ids)
    
    router = APIRouter()
    router.add_api_route("/learn", learn, methods=["POST"])
    return router

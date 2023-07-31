from api.routers.forget import router as forget_router
from api.routers.learn import router as learn_router
from api.routers.search import router as search_router
from embeddings.base import EmbeddingsGenerator
from fastapi import FastAPI
from stores.base import EmbeddingsStore


def create_app(
    embeddings_generator: EmbeddingsGenerator,
    embeddings_store: EmbeddingsStore,
    match_threshold: float,
) -> FastAPI:
    app = FastAPI()
    app.include_router(
        search_router(embeddings_generator, embeddings_store, match_threshold)
    )
    app.include_router(learn_router(embeddings_generator, embeddings_store))
    app.include_router(forget_router(embeddings_store))
    return app

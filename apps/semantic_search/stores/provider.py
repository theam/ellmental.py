from common.utils import get_env_or_fail
from stores.base import EmbeddingsStore
from stores.chroma import ChromaEmbeddingsStore, ChromaEmbeddingsStoreSettings
from stores.supabase_client import (
    SupabaseEmbeddingsStore,
    SupabaseEmbeddingsStoreSettings,
)


class EmbeddingStoreProvider:
    @staticmethod
    def get_client(name: str) -> EmbeddingsStore:
        if name == "LOCAL":
            return ChromaEmbeddingsStore(path=get_env_or_fail("STORE_PATH"))
        if name == "CHROMA":
            return ChromaEmbeddingsStore(
                settings=ChromaEmbeddingsStoreSettings(
                    host=get_env_or_fail("CHROMA_URL"),
                    port=get_env_or_fail("CHROMA_PORT"),
                    collection=get_env_or_fail("CHROMA_COLLECTION"),
                )
            )
        if name == "SUPABASE":
            return SupabaseEmbeddingsStore(
                SupabaseEmbeddingsStoreSettings(
                    url=get_env_or_fail("SUPABASE_URL"),
                    key=get_env_or_fail("SUPABASE_KEY"),
                    table=get_env_or_fail("SUPABASE_TABLE"),
                    query_function=get_env_or_fail("SUPABASE_FUNCTION"),
                )
            )

        raise Exception("Missing valid store client name")

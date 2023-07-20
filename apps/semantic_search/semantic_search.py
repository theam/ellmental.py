import os
import uvicorn
from dotenv import load_dotenv

from api.app import create_app
from embeddings.provider import EmbeddingsGeneratorProvider
from stores.provider import EmbeddingStoreProvider
from common.utils import get_env_or_fail

dotenv_path = os.getenv('ENV_PATH') if os.getenv('ENV_PATH') else ".env"

load_dotenv(dotenv_path=dotenv_path)

app = create_app(
    EmbeddingsGeneratorProvider.get_client(get_env_or_fail("EMBEDDING_GENERATOR")),
    EmbeddingStoreProvider.get_client(get_env_or_fail("EMBEDDING_STORE")),
    float(get_env_or_fail("MATCH_THRESHOLD")),
)

def start():
    port = int(os.getenv("SERVER_PORT", "8000"))
    uvicorn.run("semantic_search:app", host="0.0.0.0", port=port, reload=True)

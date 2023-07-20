from gradio_client import Client

from embeddings.base import EmbeddingsGenerator, TextContent
from common.utils import map_batched

class SpacesGradioTextEmbeddings(EmbeddingsGenerator[TextContent]):
    def __init__(
        self,
        endpoint_url: str,
        endpoint_key: str,
        batch_size: int,
    ) -> None:
        self.client = Client(
            endpoint_url,
            hf_token=endpoint_key,
            serialize=False,
        )
        self.batch_size = batch_size

    def embed(self, content: list[TextContent]) -> list[list[float]]:
        texts = [item.text for item in content]
        return map_batched(texts, self.batch_size, self.__embedBatch)
    
    def __embedBatch(self, batch: list[str]) -> list[list[float]]:
        result = [
            self.client.predict(
                {
                    "headers": [index for index in range(len(batch))],
                    "data": [batch],
                },
                api_name="/predict",
            )
        ]
        data: list[list[float]] = result[0]["data"]
        return data

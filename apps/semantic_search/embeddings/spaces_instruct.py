from gradio_client import Client

from embeddings.base import EmbeddingsGenerator, InstructionTextContent
from common.utils import map_batched


class SpacesGradioInstructTextEmbeddings(EmbeddingsGenerator[InstructionTextContent]):
    def __init__(
        self,
        endpoint_url: str,
        endpoint_key: str,
        batch_size: int
    ) -> None:
        self.client = Client(
            endpoint_key,
            hf_token=endpoint_url,
            serialize=False,
        )
        self.batch_size = batch_size

    def embed(self, content: list[InstructionTextContent]) -> list[list[float]]:
        return map_batched(content, self.batch_size, self.__embedBatch)

    def __embedBatch(
        self, batch: list[InstructionTextContent]
    ) -> list[list[float]]:
        result = self.client.predict(
            {"data": [[item.instruction, item.text] for item in batch]},
            api_name="/predict",
        )
        data: list[list[float]] = result["data"]
        return data

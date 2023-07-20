from typing import Literal, Optional, Union
from pydantic import BaseModel
import openai
from embeddings.base import EmbeddingsGenerator, TextContent
from common.utils import map_batched

OpenAITypes = Union[Literal["azure"], Literal["openai"]]

class AzureOpenAISettings(BaseModel):
    api_endpoint: str
    api_version: str
    useActiveDirectory: bool

class OpenAISettings(BaseModel):
    type: OpenAITypes
    key: str
    model: str
    batch_size: int
    azure_settings: Optional[AzureOpenAISettings]

class OpenAIEmbeddings(EmbeddingsGenerator[TextContent]):
    """
    Azure vs OpenAI implementation differents are documented here:
    https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/switching-endpoints
    """
    def __init__(
        self,
        settings: OpenAISettings,
    ) -> None:
        if settings.type == "azure":
            if settings.azure_settings is None:
                raise Exception("Missing azure settings")
            openai.api_base = settings.azure_settings.api_endpoint
            openai.api_version = settings.azure_settings.api_version
            openai.api_type = "azuread" if settings.azure_settings.useActiveDirectory else "azure"
        
        openai.api_key = settings.key
        self.type = settings.type
        self.model = settings.model
        self.batch_size = settings.batch_size

    def embed(self, content: list[TextContent]) -> list[list[float]]:
        texts = [item.text for item in content]
        if self.type == "azure":
            # Azure doen't support batched requests
            return [self.__requestEmbeddingAzure(text) for text in texts]
        else:
            return map_batched(texts, self.batch_size, self.__requestEmbeddingsOpenAI)
    
    def __requestEmbeddingAzure(self, text: str) -> list[float]:
        response = openai.Embedding.create(deployment_id=self.model, input=text)
        return response["data"]["embedding"][0] # type: ignore
    
    def __requestEmbeddingsOpenAI(self, texts: list[str]) -> list[list[float]]:
        response = openai.Embedding.create(model=self.model, input=texts)
        batch_embeddings = [entry["embedding"] for entry in response["data"]] # type: ignore
        return batch_embeddings
    

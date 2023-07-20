from abc import abstractmethod
from typing import Generic, TypeVar, TypedDict

from pydantic import BaseModel


ContentType = TypeVar("ContentType")


class EmbeddingsGenerator(Generic[ContentType]):
    @abstractmethod
    def embed(self, content: list[ContentType]) -> list[list[float]]:
        """Embed search docs."""
        pass

class InstructionTextContent(BaseModel):
    text: str
    instruction: str


class TextContent(BaseModel):
    text: str

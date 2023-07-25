from pydantic import BaseModel

from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine, func

from .embedding import Embedding
from ..base import EmbeddingsStore, StoreRequest, SearchResult


class PostgresEmbeddingsStoreSettings(BaseModel):
    url: str


class PostgresEmbeddingsStore(EmbeddingsStore):
    def __init__(self, settings: PostgresEmbeddingsStoreSettings) -> None:
        self.engine = create_engine(settings.url)
        self.Session = sessionmaker(bind=self.engine)
        Embedding.metadata.create_all(self.engine)
        self.table = 'embeddings'
        self.query_function = 'search_embeddings'

    def _validate_configuration(self):
        if not self.engine:
            raise ValueError("postgres client is required.")

        if not self.table:
            raise ValueError("postgres document table_name is required.")

        if not self.query_function:
            raise ValueError("postgres matching function name is required.")

    def store(self, embeddings: list[StoreRequest]) -> list[str]:
        self._validate_configuration()

        rows = [
            Embedding(embedding.embedding, embedding.metadata, embedding.cluster_id)
            for embedding in embeddings
        ]

        session = self.Session()
        session.add_all(rows)

        try:
            session.commit()
        except Exception as e:
            session.rollback()
            raise Exception(f"Error inserting: {str(e)}")

        return [row.id for row in rows]

    def search(
            self,
            embedding: list[float],
            cluster_ids: list[str],
            match_threshold: float = 0.8,
            limit: int = 10,
    ) -> list[SearchResult]:
        self._validate_configuration()

        session = self.Session()

        result = session.query(
            Embedding.id,
            func.search_embedding(
                embedding,
                match_threshold,
                limit,
                cluster_ids
            ).alias('similarity'),
            Embedding.metadata,
            Embedding.cluster_id
        ).filter(
            Embedding.cluster_id.in_(cluster_ids)
        ).order_by(
            'similarity'
        ).limit(limit).all()

        return [
            SearchResult(
                id=row.id,
                metadata=row.metadata,
                score=row.similarity,
                cluster_id=row.cluster_id
            )
            for row in result
        ]

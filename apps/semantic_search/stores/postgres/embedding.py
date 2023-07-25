import uuid
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, UUID, JSON, Integer

Base = declarative_base()


class Embedding(Base):
    __tablename__ = "embeddings"

    id = Column(UUID, primary_key=True)
    embedding = Column(JSON)
    metadata = Column(JSON)
    cluster_id = Column(Integer)

    def __init__(self, embedding, metadata, cluster_id):
        self.id = str(uuid.uuid4())
        self.embedding = embedding
        self.metadata = metadata
        self.cluster_id = cluster_id

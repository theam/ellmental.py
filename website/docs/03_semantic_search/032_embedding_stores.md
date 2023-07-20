---
slug: /semantic-search/embedding-stores
title: Embedding Stores
sidebar_label: Embedding Stores
---

# Embedding stores

Once the embeddings have been generated, we need to store them in a database. However, not all databases are suitable for this task. The main problem is that the embeddings are high-dimensional vectors, which makes it difficult to store them in a database. It is also required that the database has a way to perform similarity searches on the embeddings.

Only a subset of databases can be used to store embeddings. ELLMental provides built-in clients to use different embedding stores, you just have to choose which one you want to use. Then, provide the required configuration for that store and eLLMental will take care of the rest.

## Local store

This is the most basic of the stores. It stores the embeddings in a local file using the Chroma client. This is useful for testing purposes, but it is not recommended for production environments.

```.env
EMBEDDING_STORE="LOCAL"
STORE_PATH="<STORE_PATH>"
```

- `STORE_PATH` is the path where the ChromaDB will be generated locally.

## Chroma store

In case you want to use ChromaDB as a production database, you can use this store. It uses the Chroma client to store the embeddings in a ChromaDB database. This Chroma database doesn't have to be local, it can be a remote ChromaDB, which is recommended for production environments.

```.env
EMBEDDING_STORE="CHROMA"
CHROMA_URL="<CHROMA_URL>"
CHROMA_PORT="<CHROMA_PORT>"
CHROMA_COLLECTION="<CHROMA_COLLECTION>"
```

- `CHROMA_URL` is the URL of the ChromaDB database.
- `CHROMA_PORT` is the port of the ChromaDB database.
- `CHROMA_COLLECTION` is the collection where the embeddings are stored.

## Supabase store

```.env
EMBEDDING_STORE="SUPABASE"
SUPABASE_URL="<SUPABASE_URL>"
SUPABASE_KEY="<SUPABASE_KEY>"
SUPABASE_TABLE="<SUPABASE_TABLE>"
SUPABASE_FUNCTION="<SUPABASE_FUNCTION>"
```

- `SUPABASE_URL` is the URL of the Supabase database.
- `SUPABASE_KEY` is the access key of the Supabase database.
- `SUPABASE_TABLE` is the table where the embeddings are stored.
- `SUPABASE_FUNCTION` is the function that is used to perform similarity searches.

You can check out how to set up your Supabase database [here](https://supabase.com/blog/openai-embeddings-postgres-vector).
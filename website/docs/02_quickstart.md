---
slug: /quickstart
title: Quickstart
sidebar_label: Quickstart
---

# Quickstart

In this guide, you'll have your very own instance of a semantic search service up and running on your computer,
powered by OpenAI embeddings and the practicality of a local database. The whole process takes less than 5 minutes! 🌈

To begin working locally with **eLLMental**, you'll need to first run the `quickstart.sh` script, which underneath calls
a local Docker instance. Said that here's a summary of the steps you'll need to follow:

1. Make sure [Docker](https://www.docker.com/) is installed on your system.
2. Clone the repository: `git clone https://github.com/theam/ellmental.py`
3. Navigate to the semantic search directory: `cd apps/semantic_search`

In this directory, you'll find the `quickstart.sh` script that will help you set up a semantic search service in no time, by
just running: `./quickstart.sh`

> This script will ask you for your OPENAI API key, and then it will start the service using
> docker.

Once the docker container is running, you will get a semantic search service running exposing two endpoints:

1. The documentation endpoint, with information about how to use the API: `http://localhost:8000/docs`
2. [The learn endpoint](#learn-endpoint): `http://localhost:8000/learn`
3. [The search endpoint](#search-endpoint): `http://localhost:8000/search`

## Learn endpoint

With the `learn` endpoint, you can make your service learn from a set of documents' content (or any text you'd like!). You
just need to provide the endpoint with `content`, so it can then be turned into embeddings and stored in the local database.

You can try the service by sending a POST request to `http://localhost:8000/learn` with the following body:

```json
{
    "items": [
        {
            "content": "Grain in dogs' food is not good for them.",
            "metadata": {"key1": "value1", "key2": "value2"},
            "cluster_id": "your_file_id"
        },
        ...
    ]
}
```

---

**CURL command:**

```bash
  curl --location 'http://127.0.0.1:8000/learn' \
  --header 'Content-Type: application/json' \
  --data '{
    "items": [
        {
            "content": "Grain in dogs'\'' food is not good for them.",
            "metadata": {"key1": "value1", "key2": "value2"},
            "cluster_id": "your_file_id"
        }
    ]
  }'
```

## Search endpoint

With the search endpoint, you will get answers to your questions, based on what you have ingested with
the `learn` endpoint. You just need to provide the endpoint with a `query`, and the service will return the most
relevant information based on the embeddings stored in the local database.

You can try this endpoint by sending a POST request to `http://localhost:8000/search` with the following body:

```json
{
  "query": "How does grain food affect dogs?",
  "cluster_ids": ["your_file_id"]
}
```

---

**CURL command:**

```bash
  curl --location 'http://127.0.0.1:8000/search' \
  --header 'Content-Type: application/json' \
  --data '{
  "query": "How does grain food affect dogs?",
  "cluster_ids": ["your_file_id"]
  }'
```

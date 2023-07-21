---
slug: /quickstart
title: Quickstart
sidebar_label: Quickstart
---

# Quickstart

In this guide, you'll have your very own instance of a semantic search service up and running on your computer,
powered by OpenAI embeddings and the practicality of a local database. The whole process takes less than 5 minutes! 🌈

## Running the service

To begin working locally with **eLLMental**, you'll need to first run the `quickstart.sh` script, which underneath calls
a local Docker instance. Said that here's a summary of the steps you'll need to follow:

1. Make sure [Docker](https://www.docker.com/) is installed on your system.
2. Clone the repository: `git clone https://github.com/theam/ellmental.py`
3. Navigate to the semantic search directory: `cd apps/semantic_search`

In this directory, you'll find the `quickstart.sh` script that will help you set up a semantic search service in no time, by
just running: `./quickstart.sh`

> This script will ask you for your OPENAI API key, and then it will start the service using
> docker.

## Using the service

Once the service is up and running, you can start using it by sending requests to the different endpoints. You can find more information about the endpoints in the [Usage](./03_semantic_search/033_semantic_search_usage.mdx) section.

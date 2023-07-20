---
slug: /semantic-search
title: Semantic Search
sidebar_label: Semantic Search
---

# Semantic search

Semantic search is the ability to search any document by its meaning or intent, rather than by the exact words it contains. It is based on the idea that natural language is inherently semantic, which means that two similar sentences will have similar meanings.

Up to now, the most common way to search for information is by using keywords. Semantic search adds a new layer of understanding to the search process so that the results are more relevant to what the user is looking for. Users no longer have to worry about using the right keywords to find what they are looking for. Instead, they can simply type in a question or phrase and get back relevant results.

## How does it work?

To perform a semantic search, we need a way to get how similar a piece of text to a query. In other words, we need to compare the meaning of some text and how related it is to a question. We cant perform calculations on words, just numbers. However, there is a way to generate a vector that represents the meaning of a piece of text. This vector representation is called an embedding. This transformation is usually done by a neural network trained for this kind of task. This vector is then compared to other vectors to find similar documents.

To have a semantic search system, you would need to have the following components:

1. A system that can ingest text and create embeddings for it.
2. A database that can store those embeddings.
3. A system that can take a query and find the most similar embeddings in the database.

With eLLMental, instead of building all these components from scratch, you can use its different prebuilt modules to create a semantic search system. You only need to provide the configuration, and eLLMental will take care of the rest.
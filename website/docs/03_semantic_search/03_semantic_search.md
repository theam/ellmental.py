---
slug: /semantic-search
title: Semantic Search
sidebar_label: Semantic Search
---

# Semantic search

Semantic search is the ability to search any document by its meaning or intent, rather than by the exact words it contains. It is based on the idea that natural language is inherently semantic, which means that two similar sentences will have similar meanings.

Up to now, the most common way to search for information is by using keywords. Semantic search adds a new layer of understanding to the search process so that the results are more relevant to what the user is looking for. Users no longer have to worry about using the right keywords to find what they are looking for. Instead, they can simply type in a question or phrase and get back relevant results.

## How does it work?

A semantic search service allows us to generate embeddings based on natural language text. An embedding is a 
semantic representation of a text in the "semantics space", an imaginary high-dimensional mathematical representation of 
all the possible semantics. In this space, each concept is associated with a specific point in a way that words or 
phrases that are similar from a meaning point of view are placed closer than those with different meanings. In short, an embedding is an array of numbers representing the text's meaning in the semantics space.

For example, If we were to represent the embeddings of the words swimming, swam, walking, walked in a very simplified 
visualization, we could see them like this:

<img
  alt="Visualization of word embeddings"
  src={require("../../static/img/word2vec.png").default}
  style={{
    width: "300px",
  }}/>

Embeddings are useful because they allow you to compare pieces of text by their meaning rather than by their characters 
or other properties. For example, the embeddings of the sentences "I like apples" and "I like oranges" will be very 
similar, because the vector representation of the sentences is similar.

Overall, you would need to have the following components to have an end-to-end semantic search system:

1. A system that can ingest text and create embeddings for it.
2. A database that can store those embeddings.
3. A system that can take a query and find the most similar embeddings in the database.

With eLLMental, instead of building all these components from scratch, you can use its different prebuilt modules to create a semantic search system. You only need to provide the configuration, and eLLMental will take care of the rest.
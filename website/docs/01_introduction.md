---
slug: /
---
# Introduction

eLLMental is a project that aims to **create an open-source toolkit that provides pluggable, modular and minimalistic utilities and services** to create **production-ready AI applications.**

Its objective is to create an ecosystem of specific and finished components that enable:

- **Direct production usage**, with minimal/zero programmatic intervention.
- **Flexible configuration** capabilities if needed.
- **Effective cost of replacement** thanks to its modularity.
- **Seamless interconnection** between modules.

## Why not use other tools of the market (Langchain, ChromaDB, Pinecone, etc.)?

This initiative started when we were developing use cases for our own clients. We tried using the tools and utilities available at the moment to achieve our objectives, but they weren’t good for us so we had to discard them.

Because of that, we decided to build our own solution with these core principles in mind:

1. **Creating functional solutions that don’t sacrifice flexibility**: Many existing solutions were not adaptable enough and introduced unnecessary complexity. They relied on specific, non-configurable prompts and required additional programming and integration. While we advocate opinionated approaches, we prefer smaller, fully functional pieces that are easy to use and allow for proper configuration when necessary.

2. **Reliability from the start**: On many libraries, we encountered critical bugs when building our production use cases. Due to the lack of configuration options and our need for fast development, we decided to build components that were simpler, easier to trace and debug and with escape hatches to allow configuration when a core maintainer can’t handle your ticket.

3. **Modular, pluggable and decoupled architecture**: Some tools provided a great and fast experience. However, they were very coupled to specific providers and didn’t have room for integrating others. We want to create an ecosystem of tools that enable modularity and pluggability, so our teams can change pieces of the whole puzzle without a huge toll on development resources.

## What can I do with eLLMental now?

eLLMental.py aims to provide a series of ready-to-use and production-ready services that you can deploy in your Kubernetes cluster and start adding powerful AI features to your existing products right away.

This repository provides the Alpha version of the first of these services: **a semantic search service** that will be able to learn the semantics of your data and provide powerful semantic search functionality.

It works as an **independent service with a REST API**, so you can use the eLLMental semantic search service from any programming language with very simple integration.
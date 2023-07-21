![eLLMental](website/static/img/logoellmental.png#gh-light-mode-only)
![eLLMental](website/static/img/ellemental%20white.png#gh-dark-mode-only)

<div align="center">

[📚 Documentation site](https://python.ellmental.com) | [💬 Discord](https://discord.gg/34cBbvjjAx) | [🤝 Contributing](./CONTRIBUTING.md)

</div>

<div align="center">

![Discord Badge](https://img.shields.io/discord/1130503844024029294)
![License Badge](https://img.shields.io/github/license/theam/ellmental.py)
![GitHub issues Badge](https://img.shields.io/github/issues/theam/ellmental.py)

</div>

eLLMental is a project that aims to **create an open-source toolkit that provides pluggable, modular and minimalistic utilities and services** to create **production-ready AI applications.**

Its objective is to create an ecosystem of specific and finished components that enable:

- **Direct production usage**, with minimal/zero programmatic intervention.
- **Flexible configuration** capabilities if needed.
- **Effective cost of replacement** thanks to its modularity.
- **Seamless interconnection** between modules.

## Table of Contents

- [Why not use other tools (Langchain, ChromaDB, Pinecone, etc.)?](#why-not-use-other-tools-of-the-market-langchain-chromadb-pinecone-etc)
- [What can I do with eLLMental now?](#what-can-i-do-with-ellmental-now)
- [What can I do with a Semantic Search service?](#what-can-i-do-with-a-semantic-search-service)
- [Quick Start Guide](#quick-start-guide)
- [Contributing and Community](#contributing-and-community)
- [License](#license)
- [Contact](#contact)

## Why not use other tools (Langchain, ChromaDB, Pinecone, etc.)?

This initiative started when we were developing use cases for our own clients. We tried using the tools and utilities available at the moment to achieve our objectives, but they weren’t good for us so we had to discard them.

Because of that, we decided to build our own solution with these core principles in mind:

1. **Creating functional solutions that don’t sacrifice flexibility**: Many existing solutions were not adaptable enough and introduced unnecessary complexity. They relied on specific, non-configurable prompts and required additional programming and integration. While we advocate opinionated approaches, we prefer smaller, fully functional pieces that are easy to use and allow for proper configuration when necessary.

2. **Reliability from the start**: On many libraries, we encountered critical bugs when building our production use cases. Due to the lack of configuration options and our need for fast development, we decided to build components that were simpler, easier to trace and debug and with escape hatches to allow configuration when a core maintainer can’t handle your ticket.

3. **Modular, pluggable and decoupled architecture**: Some tools provided a great and fast experience. However, they were very coupled to specific providers and didn’t have room for integrating others. We want to create an ecosystem of tools that enable modularity and pluggability, so our teams can change pieces of the whole puzzle without a huge toll on development resources.

## What can I do with eLLMental now?

eLLMental.py aims to provide a series of ready-to-use and production-ready services that you can deploy in your Kubernetes cluster and start adding powerful AI features to your existing products right away.

This repository provides the Alpha version of the first of these services: **a semantic search service** that will be able to learn the semantics of your data and provide powerful semantic search functionality.

It works as an **independent service with a REST API**, so you can use the eLLMental semantic search service from any programming language with very simple integration.

## What can I do with a semantic search service?

A semantic search service is like a super-smart search engine. Instead of just looking for exact word matches, it tries to understand what you really mean when you type in a search. It does this by figuring out the context of words and understanding synonyms. This way, it can give you more relevant and personalized results.

You can use a semantic search for a huge variety of use cases. These are some of them:

- **Empowering Large Language Models (LLMs) with Factual Grounding**: Semantic search can dramatically enhance the performance of Large Language Models for specific use cases, ensuring quality, accuracy, and relevance of the outputs of the model by injecting context and therefore, reducing its scope.

- **Revolutionizing End-user Search Tools**: Semantic search can redefine how end-users navigate data. From trawling through intricate websites to decoding comprehensive codebases or databases, semantic search equips users to query textual data in ways previously unimaginable, enhancing the overall user experience.

- **Optimizing Content Recommendation Systems**: Leveraging semantic search, recommendation systems can understand the deep-seated interests and preferences of users, facilitating the generation of highly personalized content suggestions. This can significantly augment user engagement and satisfaction, whether it's for recommending movies, books, or even shopping items.

- **Augmenting Customer Support Services**: Semantic search can be employed to transform customer service platforms. By understanding the customer's intent and context, it can assist in providing quicker and more accurate responses, reducing response times, and improving customer satisfaction.

- **Enhancing Social Media Monitoring**: By decoding the semantic meaning behind social media posts, businesses can gain insightful understanding into customer sentiment, trends, and preferences. This can be pivotal in designing marketing strategies, improving brand image, and providing proactive customer service.

## Quick Start Guide

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

Once the docker container is running, you will get a semantic search service running exposing three endpoints:

1. The documentation endpoint, with information about how to use the API: `http://localhost:8000/docs`
2. The learn endpoint: `http://localhost:8000/learn`
3. The search endpoint: `http://localhost:8000/search`

In our [documentation site](https://python.ellmental.com) you will find more information about the capabilities of the service. Like for example, how to use Azure OpenAI to generate the embeddings, or how to make use of your own database.

## Contributing and Community

We believe that community contributions are essential to the development and refinement of eLLMental. You can become a part of the eLLMental community in the following ways:

1. Join the conversation in our [Discord server](https://discord.gg/34cBbvjjAx).
2. Send us suggestions, questions, or feature requests by creating a [New Issue](https://github.com/theam/ellmental.py/issues/new).
3. Look at the [Open Issues](https://github.com/theam/ellmental.py/issues), choose one that interests you, and start contributing.
4. Spread the word about eLLMental!

Detailed instructions for community contributions can be found in our [Contributing Guide](./CONTRIBUTING.md).

## License

The eLLMental project operates under the terms of the Apache License, Version 2.0. You can view the full license in the [LICENSE](LICENSE) file.

eLLMental is a proud open-source initiative by [The Agile Monkeys](https://www.theagilemonkeys.com/).

## Contact

Your feedback and questions are important to us. For any inquiries or issues, feel free to reach out to us at [info@theagilemonkeys.com](mailto:info@theagilemonkeys.com).

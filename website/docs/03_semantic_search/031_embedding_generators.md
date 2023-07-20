---
slug: /semantic-search/embedding-generators
title: Embedding Generators
sidebar_label: Embedding Generators
---

# Embedding generators

One of the components that make the semantic search system work is the embedding generator. The embedding generator is a neural network that takes some text as input and outputs a vector that represents its meaning. This vector is called an embedding.

ELLMental provides built-in clients to use different embedding generators, you just have to choose which one you want to use. Then, provide the required configuration for that generator and eLLMental will take care of the rest.

All embedding generators have to have configured the following parameters to work:

```.env
EMBEDDING_GENERATOR= # Can be OPENAI | SPACES_TEXT | SPACES_INSTRUCT
BATCH_SIZE= # Number of embeddings to generate in each batch
```

- `EMBEDDING_GENERATOR` let you select between the different types of generators that you can use natively. For now, we support:
  - [`OPENAI`](#openai-generators)
  - [`SPACES_TEXT`](#hugging-face-spaces)
  - [`SPACES_INSTRUCT`](#hugging-face-spaces)
- `BATCH_SIZE` is the size of the chunks to be generated. It is recommended to have a batch size of `50`.

## OpenAI Generators

OpenAI provides a set of pre-trained models that can be used to generate embeddings for text. ELLMental has a built-in module that allows you to connect to these models and use them to generate embeddings. To use them you have to provide the following environment variables:

```.env
OPENAI_TYPE= # Can be azure | openai
OPENAI_API_KEY= # Your OpenAI API key
OPENAI_MODEL=  # Your OpenAI model. See: https://platform.openai.com/docs/guides/embeddings
```

- `OPENAI_TYPE` you can select between two different implementations:
  - `azure`, which requires specific implementation that can be found [here](#azure-openai-configuration).
  - `openai`, which doesn't need specific configuration.
- `OPENAI_API_KEY` can be found in your [OpenAI dashboard](https://platform.openai.com/) or it can be through the [Azure Integration](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service).
- `OPENAI_MODEL` has to be the name of one of the [OpenAI Embeddings models](https://platform.openai.com/docs/models/overview). We recommend using the `text-embeddings-ada-002` or the `gpt-4` model.

### Azure OpenAI configuration

To make use of [Azure OpenAI](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/overview), you need to configure the following environment variables.

```.env
AZURE_OPENAI_ENDPOINT= # E.g: https://example-endpoint.openai.azure.com
AZURE_OPENAI_VERSION= # E.g: "2023-05-15"
AZURE_OPENAI_USE_ACTIVE_DIRECTORY= # True if you want to use a token provided by Azure Active Directory
```

- `AZURE_OPENAI_ENDPOINT`, the endpoint to the service in your resource group.
- `AZURE_OPENAI_VERSION`, the version of the API.
- `AZURE_OPENAI_USE_ACTIVE_DIRECTORY` is a flag to indicate that the token comes from Azure Active Directory.

## Hugging Face Spaces

The eLLMental team has worked on providing ready-to-use alternative models. These are models that have been hosted as [Hugging Face Spaces](https://huggingface.co/spaces). The team has worked on preparing these models to be ready to use and hosted on Hugging Face.

- `EMBEDDINGS_GENERATION_URL` is the URL of the model hosted on Huggingface.
- `EMBEDDINGS_GENERATION_KEY` is the access key of the model hosted on Huggingface.

### Instruct Embedding Generator

Some interesting embedding generators are those that use [instructions to represent embedding intention](https://instructor-embedding.github.io/). This is an instruction-finetuned text embedding model that can generate text embeddings tailored to any task.

You can integrate yours by setting the proper environment variable:

```.env
EMBEDDING_GENERATOR=SPACES_INSTRUCT
```

### Text Embedding Generator

You can integrate your own text embedding generators hosted on [Hugging Face Spaces](https://huggingface.co/spaces) by setting the proper environment variable:

```.env
EMBEDDING_GENERATOR=SPACES_TEXT
```

You can find a curated and production-ready model [here](https://github.com/theam/embedding-models/tree/main/e5-multilanguage).

# Embedding generators

This directory contains all the clients to connect to different embedding generators. Each file on this directory contains a different implementation of the `Embeddings Generator` on the [base.py](./base.py) file.

There is also a `EmbeddingsGeneratorProvider` that will determine which embedding generator to use based on the environment variables. You can find it on the [provider.py](./provider.py) file.

If you want to add a new embedding generator, you just have to create a new file with the implementation of the `EmbeddingsGenerator` class and add it to the `EmbeddingsGeneratorProvider` on the [provider.py](./provider.py) file.
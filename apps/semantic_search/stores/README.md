# Embedding stores

This directory contains all the clients to connect to different embedding stores. Each file in this directory contains a different implementation of the `Embeddings Store` on the [base.py](./base.py) file.

There is also an `EmbeddingsStoreProvider` that will determine which embedding store to use based on the environment variables. You can find it on the [provider.py](./provider.py) file.

If you want to add a new embedding store, you just have to create a new file with the implementation of the `EmbeddingsStore` class and add it to the `EmbeddingsStoreProvider` on the [provider.py](./provider.py) file.
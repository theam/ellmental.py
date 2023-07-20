# Semantic Search

Semantic search is a project that enables searching documents based on their meaning or intent, rather than solely 
relying on exact keyword matches. This README provides instructions on how to set up the project using different methods.

> For any of these options, you'll need to properly set up the .env file. You can do this by copying the `.env.example` file 
and rename it to `.env`.

## Setup with Docker

To set up the project using Docker, please follow these steps:

1. Ensure that [Docker](https://www.docker.com/) is installed on your system.
2. Open a terminal and navigate to the project directory.
3. Build the Docker image by running the following command: `docker build -t semantic-search .`
4. Start the project using the Docker image: `docker run -p 8000:8000 semantic-search`

## Setup with Makefile

1. Ensure that both [Make](https://makefiletutorial.com/) and [Poetry](https://python-poetry.org/docs/) are installed on your system.
2. Open a terminal and navigate to the project directory.
3. Run `make init` to configure the project for the first time.
4. To build and run the project on your local machine, run `make dev`.

## Setup with Poetry

1. Make sure [Poetry](https://python-poetry.org/docs/) is installed on your system.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install the project dependencies: `poetry install`
4. To start the project, run the following command: `poetry run start`

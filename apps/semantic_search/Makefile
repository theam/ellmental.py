.DEFAULT_GOAL := help

help:
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*## *" | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

init: ## Configure the project for the first time
	@echo "⚙️ Initialling project..."
	@poetry install

type-check:
	@echo "🔎 Checking types..."
	@poetry run pyright .

dev: type-check
	@echo "🏃‍♀️ Running project..."
	@poetry run start

build-docker: ## Build Docker image of the project
	@echo "👷🏻‍♀️ Building Docker image..."
	@docker build . -t semantic-search --no-cache

start-docker: build-docker ## Execute project with Docker image
	@echo "🏃‍♀️ Running project with Docker..."
	@docker run semantic-search

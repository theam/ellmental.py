#!/bin/bash

# Ask the user for the OPENAI_API_KEY environment variable
read -p "Enter the value for OPENAI_API_KEY: " OPENAI_API_KEY

# Set the OPENAI_API_KEY environment variable input by the user
export OPENAI_API_KEY=$OPENAI_API_KEY
export ENV_PATH='.env.local.simple'

docker build -t semantic-search .

docker run -p 8000:8000 --env-file ".env.local.simple" -e "OPENAI_API_KEY=${OPENAI_API_KEY}" -e "ENV_PATH=${ENV_PATH}" semantic-search

FROM python:3.11

ENV POETRY_VERSION=1.5.1

WORKDIR /app

RUN pip install poetry==${POETRY_VERSION}

COPY . .

RUN poetry cache clear --all pypi
RUN poetry install --no-interaction

EXPOSE 8000

CMD ["poetry", "run", "start"]

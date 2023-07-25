FROM ankane/pgvector:latest

WORKDIR /postgres

COPY init.sql /docker-entrypoint-initdb.d

ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB postgres

EXPOSE 5432

CMD ["postgres"]

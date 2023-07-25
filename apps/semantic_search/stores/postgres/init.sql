-- pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- embeddings table
CREATE TABLE embeddings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    embedding vector(768),
    cluster_id TEXT,
    metadata JSONB
);


CREATE OR REPLACE FUNCTION search_embeddings(query_embedding vector(768), match_threshold float, match_count integer, cluster_ids text[])
RETURNS TABLE (id integer, similarity float, metadata jsonb, cluster_id text) AS $$
BEGIN
RETURN QUERY
SELECT
   embeddings.id,
  (embeddings.embedding <#> query_embedding) * -1 as similarity,
   embeddings.metadata,
   embeddings.cluster_id
 FROM embeddings
 WHERE (cluster_ids = '{}' OR embeddings.cluster_id = ANY(cluster_ids))
   AND (embeddings.embedding <#> query_embedding) * -1 > match_threshold
 ORDER BY embeddings.embedding <#> query_embedding
 LIMIT match_count;
END;
$$ LANGUAGE plpgsql;
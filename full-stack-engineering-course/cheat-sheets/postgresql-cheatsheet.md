# PostgreSQL Cheat Sheet

## psql CLI Commands
| Command | Description |
|---|---|
| `\l` | List all databases |
| `\c dbname` | Connect to database |
| `\dt` | List tables in current db |
| `\d tablename`| Describe table schema |
| `\du` | List roles/users |
| `\x` | Toggle expanded display |
| `\q` | Quit psql |

## Specific Data Types
- `UUID`: Universally Unique Identifier (`uuid-ossp` extension).
- `JSON / JSONB`: JSONB stores data in a decomposed binary format (indexed, faster).
- `ARRAY`: E.g., `text[]`, `integer[]`.
- `TIMESTAMPTZ`: Timestamp with timezone (highly recommended over `TIMESTAMP`).

## Working with JSONB
```sql
-- Insert
INSERT INTO events (data) VALUES ('{"user": "john", "type": "click"}');

-- Extract value as text (->>)
SELECT data->>'user' AS username FROM events;

-- Filter by JSON property
SELECT * FROM events WHERE data->>'type' = 'click';

-- Check if key exists (?)
SELECT * FROM events WHERE data ? 'user';

-- Update JSONB
UPDATE events SET data = jsonb_set(data, '{type}', '"scroll"');
```

## Arrays
```sql
-- Insert
INSERT INTO posts (tags) VALUES (ARRAY['tech', 'sql']);

-- Query array contains (@>)
SELECT * FROM posts WHERE tags @> ARRAY['tech'];

-- Unnest array (convert to rows)
SELECT unnest(tags) as tag, count(*) FROM posts GROUP BY tag;
```

## Full Text Search (FTS)
```sql
-- tsvector represents a document optimized for search
-- tsquery represents the search query
SELECT title, body 
FROM articles 
WHERE to_tsvector('english', title || ' ' || body) @@ to_tsquery('english', 'database & scaling');

-- Create a GIN index for fast search
CREATE INDEX articles_search_idx ON articles USING GIN (to_tsvector('english', title || ' ' || body));
```

## Performance & Optimization
```sql
-- View query execution plan
EXPLAIN SELECT * FROM users WHERE email = 'test@test.com';

-- View plan AND execute it to see actual timings
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@test.com';

-- Vacuum (Reclaim storage and update planner statistics)
VACUUM ANALYZE users;
```

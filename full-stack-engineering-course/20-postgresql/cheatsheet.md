# PostgreSQL Cheat Sheet

## JSONB
```sql
-- Extract JSON Object
SELECT payload->'user' FROM events;
-- Extract Text
SELECT payload->>'browser' FROM events;
-- Containment (Does payload contain this exact key/val pair?)
SELECT * FROM events WHERE payload @> '{"browser": "Chrome"}';
-- Has Key
SELECT * FROM events WHERE payload ? 'error_code';
```

## Arrays
```sql
-- Create Array
SELECT ARRAY[1, 2, 3];
-- Any
SELECT * FROM posts WHERE 'sql' = ANY(tags);
-- Containment
SELECT * FROM posts WHERE tags @> ARRAY['sql', 'db'];
```

## Advanced Indexes
```sql
-- GIN (For JSONB / Arrays)
CREATE INDEX idx_payload ON events USING GIN (payload);
-- Partial Index
CREATE INDEX idx_active_users ON users(email) WHERE active = true;
-- Expression Index
CREATE INDEX idx_lower_email ON users(LOWER(email));
```

## Full Text Search
```sql
SELECT * FROM articles 
WHERE to_tsvector('english', body) @@ to_tsquery('english', 'search & terms');
```

## Useful Commands (psql)
- `\x` : Toggle expanded display (great for wide tables)
- `\d table_name` : Describe table
- `\timing` : Show query execution time

# PostgreSQL Practice Exercises

## Setup: The Schema
```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    tags TEXT[],
    payload JSONB
);

INSERT INTO events (name, tags, payload) VALUES 
('page_view', '{"analytics", "frontend"}', '{"browser": "Chrome", "userId": 101}'),
('button_click', '{"analytics", "frontend"}', '{"browser": "Firefox", "buttonId": "submit"}'),
('server_error', '{"backend", "critical"}', '{"code": 500, "message": "Connection Timeout"}');
```

---

## Exercise 1: JSONB Querying
1. Write a query to find all events where the browser in the payload was 'Chrome'.
2. Write a query to extract just the `message` text from the `server_error` event.

## Exercise 2: Array Querying
1. Write a query to find all events that have the tag 'critical'.
2. Write a query to find events that contain BOTH 'analytics' and 'frontend' tags.

## Exercise 3: Indexing
1. Write the SQL to create an index that will make your query for `Exercise 1, Question 1` extremely fast. What type of index did you use?
2. Write the SQL to create an index to make `LIKE '%error'` fast. (Assume `pg_trgm` is enabled).

## Exercise 4: Full Text Search
Given this table:
```sql
CREATE TABLE docs (id SERIAL, content TEXT);
INSERT INTO docs (content) VALUES ('The fast databases serve queries quickly.');
```
Write a query using `to_tsvector` and `to_tsquery` to find this document using the search term "fast query". Explain why it matches even though the words aren't exact.

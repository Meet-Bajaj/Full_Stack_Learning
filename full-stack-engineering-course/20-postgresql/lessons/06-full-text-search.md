# Lesson 06: Full-Text Search

## 1. Introduction and Learning Objectives
Implementing search using `LIKE '%term%'` is slow and dumb (it doesn't understand language, pluralization, or ranking). Before jumping to Elasticsearch, you should know that Postgres has built-in Full-Text Search (FTS).

**Learning Objectives:**
- Understand `tsvector` and `tsquery`.
- Convert text to searchable tokens using `to_tsvector`.
- Perform searches using `@@`.
- Index search data with GIN.

---

## 2. Core Concepts: tsvector and tsquery

- **`tsvector`:** A data type representing a parsed document, optimized for search. It removes stop words (a, the, and) and applies stemming (running -> run).
- **`tsquery`:** A data type representing the search query, which can include boolean operators (AND, OR, NOT).

```sql
-- See how Postgres parses text:
SELECT to_tsvector('english', 'The quick brown foxes jumped over the lazy dogs');
-- Result: 'brown':3 'dog':9 'fox':4 'jump':5 'lazi':8 'quick':2
-- Notice "foxes" became "fox", and "jumped" became "jump".
```

---

## 3. Querying Data

The `@@` operator checks if a `tsvector` matches a `tsquery`.

```sql
-- Standard search
SELECT title, body 
FROM articles
WHERE to_tsvector('english', body) @@ to_tsquery('english', 'jump & dog');
```
*(`plainto_tsquery` is often better for user input, as it safely converts plain text into a tsquery without throwing syntax errors).*

---

## 4. Indexing FTS

Running `to_tsvector` on the fly for every row is incredibly slow.
You should either:
1. Create an Expression Index.
2. Create a dedicated `tsvector` column that updates automatically (via triggers or generated columns).

**Using a Generated Column (Postgres 12+):**
```sql
ALTER TABLE articles 
ADD COLUMN search_vector tsvector 
GENERATED ALWAYS AS (to_tsvector('english', title || ' ' || body)) STORED;

-- Now create a GIN index on it
CREATE INDEX idx_articles_search ON articles USING GIN (search_vector);
```
Now searches against `search_vector` are instantaneous.

---

## 5. Summary & Checklist
**Summary:** FTS in Postgres is powerful enough to replace Elasticsearch for most medium-sized applications. Use `tsvector` to store stemmed text, `tsquery` to execute searches, and GIN indexes to make it fast.

**Completion Checklist:**
- [ ] I understand the difference between `tsvector` and `tsquery`.
- [ ] I can perform a basic full-text search query.
- [ ] I know how to use a Generated Column and a GIN index to optimize search.

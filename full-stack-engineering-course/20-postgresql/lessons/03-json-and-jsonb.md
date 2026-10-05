# Lesson 03: JSON and JSONB

## 1. Introduction and Learning Objectives
PostgreSQL's JSON support is its "killer feature." It allows you to store schemaless data within a relational schema.

**Learning Objectives:**
- Understand the difference between `JSON` and `JSONB`.
- Query inside JSON documents using Postgres operators.
- Index JSONB columns.

---

## 2. JSON vs JSONB

- **`JSON` Type:** Stores an exact copy of the input text (including whitespace). Processing is slow because it must be reparsed every time you query it.
- **`JSONB` Type:** Stores data in a decomposed binary format. It is slightly slower to insert, but significantly faster to query, and it supports indexing. **Always use JSONB.**

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    attributes JSONB
);

INSERT INTO products (name, attributes) 
VALUES ('Laptop', '{"brand": "Apple", "ram": "16GB", "tags": ["electronics", "computers"]}');
```

---

## 3. Querying JSONB Data

Postgres uses special operators to interact with JSONB.

### Extracting Data
- `->` Returns a JSON object.
- `->>` Returns text.

```sql
-- Get the brand as text
SELECT name, attributes->>'brand' AS brand 
FROM products;

-- Filter based on JSONB property
SELECT * FROM products 
WHERE attributes->>'brand' = 'Apple';
```

### Checking for Existence & Containment
- `@>` : Does the left JSON contain the right JSON?
- `?` : Does the string exist as a top-level key?

```sql
-- Find products where attributes contains {"brand": "Apple"}
SELECT * FROM products 
WHERE attributes @> '{"brand": "Apple"}';

-- Find products where the attributes JSON has a key called 'ram'
SELECT * FROM products 
WHERE attributes ? 'ram';
```

---

## 4. Indexing JSONB

If you run `WHERE attributes->>'brand' = 'Apple'`, Postgres will do a full table scan. To make it fast, you use a GIN index (Generalized Inverted Index).

```sql
-- Index the entire JSONB column to support @> and ? operators
CREATE INDEX idx_products_attributes ON products USING GIN (attributes);

-- Now this query uses the index and is blazingly fast:
SELECT * FROM products WHERE attributes @> '{"brand": "Apple"}';
```

---

## 5. Summary & Checklist
**Summary:** `JSONB` gives Postgres NoSQL capabilities. Use the `->>` operator to extract text, and the `@>` operator for containment checks. Always use GIN indexes for JSONB columns that you plan to query against.

**Completion Checklist:**
- [ ] I know why `JSONB` is better than `JSON`.
- [ ] I can use `->>` to extract data.
- [ ] I can use `@>` to filter data.
- [ ] I know which index type to use for JSONB.

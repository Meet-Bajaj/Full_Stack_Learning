# Lesson 05: Advanced Indexes

## 1. Introduction and Learning Objectives
We learned about B-Tree indexes in the SQL module. Postgres offers several advanced index types tailored for specific kinds of data.

**Learning Objectives:**
- Understand the different index types in Postgres (B-tree, Hash, GIN, GiST, BRIN).
- Create Partial Indexes.
- Create Expression Indexes.

---

## 2. Index Types in Postgres

1. **B-Tree:** The default. Great for equality (`=`) and range queries (`<`, `>`).
2. **Hash:** Only handles equality checks. Rarely used since B-Tree is usually better.
3. **GIN (Generalized Inverted Index):** Used when the item being indexed contains multiple values, like Arrays or JSONB documents. Also used for Full Text Search.
4. **GiST (Generalized Search Tree):** Used for complex geometric data (PostGIS) or network address data.
5. **BRIN (Block Range Index):** Used for massive tables (billions of rows) where data is naturally ordered (like a timestamp). It stores min/max values for blocks of data. Very small memory footprint.

---

## 3. Partial Indexes

A Partial Index is an index built over a subset of a table. It is defined by a `WHERE` clause.

**Why use it?** It saves disk space and speeds up writes because you aren't indexing data you don't care about.

```sql
-- We often query for unread messages.
-- There's no point indexing the millions of read messages.
CREATE INDEX idx_unread_messages 
ON messages (user_id) 
WHERE is_read = false;
```
If you run `SELECT * FROM messages WHERE user_id = 1 AND is_read = false`, Postgres uses the partial index.

---

## 4. Expression Indexes

Normally, indexes are created on column values. An Expression Index is created on the *result of a function* applied to one or more columns.

```sql
-- You want to allow case-insensitive login.
-- If you just use WHERE LOWER(email) = 'test@test.com', standard indexes are ignored.

-- Solution: Create an index on the LOWER function
CREATE INDEX idx_users_lower_email 
ON users (LOWER(email));
```
Now, `SELECT * FROM users WHERE LOWER(email) = 'test@test.com'` will use the index!

---

## 5. Summary & Checklist
**Summary:** Postgres's indexing engine is extremely powerful. GIN indexes handle JSON/Arrays, BRIN indexes handle massive time-series data, Partial Indexes save space, and Expression Indexes allow for function-based lookups.

**Completion Checklist:**
- [ ] I can list the 5 main index types in Postgres.
- [ ] I know when to use a GIN index.
- [ ] I can write the SQL to create a Partial Index.
- [ ] I understand the purpose of an Expression Index.

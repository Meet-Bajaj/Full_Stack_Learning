# Lesson 10: Indexes

## 1. Introduction and Learning Objectives
As your database grows to millions of rows, queries will start to slow down. Indexes are the primary tool used to speed up database reads.

**Learning Objectives:**
- Understand the mental model of an index (the book index analogy).
- Know how B-Tree indexes work conceptually.
- Create single and composite indexes.
- Understand the trade-offs of indexing (slower writes, storage space).
- Understand index selectivity.

---

## 2. What is an Index? (The Mental Model)

Imagine a textbook with 1,000 pages. If I ask you to find every mention of the word "SQL", you have two options:
1. **Full Table Scan:** Read the book page by page, from page 1 to 1000. (Very slow).
2. **Use the Index:** Flip to the back of the book, find "SQL", and look at the exact page numbers listed. (Very fast).

A database index works exactly the same way. It is a separate data structure (usually a B-Tree) that stores a copy of a specific column, sorted, with a pointer to the actual row on disk.

---

## 3. Creating Indexes

### Single Column Index
If you frequently search for users by their email:
```sql
-- Creating an index on the email column
CREATE INDEX idx_users_email ON users(email);
```
Now, `SELECT * FROM users WHERE email = 'test@test.com';` will be nearly instant, even with 10 million users.

### Composite Index
If you frequently query using multiple columns together:
```sql
-- Find orders for a specific user within a date range
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);
```
**Rule of Thumb:** Order matters in composite indexes. An index on `(A, B)` can be used to search for `A`, or `A and B`, but it **cannot** be efficiently used to search for just `B`.

---

## 4. The Trade-offs of Indexing

If indexes make reads fast, why not index every single column?

1. **Storage Space:** Indexes are separate data structures. They consume RAM and disk space.
2. **Slower Writes:** Every time you `INSERT`, `UPDATE`, or `DELETE` a row, the database must also update the index. Too many indexes will cripple your write performance.

*Rule:* Only index columns that are frequently used in `WHERE`, `JOIN` (`ON`), `ORDER BY`, or `GROUP BY` clauses.

---

## 5. Index Selectivity

**Selectivity** is a measure of how many distinct values exist in a column compared to the total number of rows.
- **High Selectivity:** Email addresses (mostly unique). GREAT for indexing.
- **Low Selectivity:** Gender or Boolean status like `is_active` (only 2 possible values). BAD for standard indexing. 

If you query `WHERE is_active = true`, and 90% of your users are active, the database query optimizer will likely ignore the index entirely and just do a full table scan, because reading the index and then jumping to the disk for 90% of the rows is slower than just reading the disk directly.

---

## 6. Summary & Checklist

**Summary:**
Indexes (specifically B-Trees) turn $O(N)$ full-table scans into $O(\log N)$ lookups, drastically speeding up reads. However, they cost memory and slow down writes. Index strategically based on your application's query patterns.

**Completion Checklist:**
- [ ] I can explain how a database index is like a book index.
- [ ] I can write the syntax to create an index.
- [ ] I understand why the order of columns in a composite index matters.
- [ ] I can explain the read/write trade-off of adding indexes.
- [ ] I know what index selectivity is.

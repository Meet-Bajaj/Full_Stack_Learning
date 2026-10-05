# SQL Interview Questions

## Junior Level
1. **Explain the difference between `INNER JOIN` and `LEFT JOIN`.**
   - *Answer:* INNER JOIN returns only rows with a match in both tables. LEFT JOIN returns all rows from the left table, and the matched rows from the right table (or NULL if no match).
2. **What is the difference between `WHERE` and `HAVING`?**
   - *Answer:* WHERE filters rows before aggregation. HAVING filters groups after aggregation.
3. **What is a Primary Key?**
   - *Answer:* A column (or set of columns) that uniquely identifies a row. It implies NOT NULL and UNIQUE.

## Mid Level
4. **What is the N+1 query problem and how do you solve it?**
   - *Answer:* It occurs when an ORM fetches a list of N parent records, and then executes a separate query for each parent to fetch its children (1 + N queries). Solved by using `IN` clauses or `JOIN`s to fetch all data in 1 or 2 queries.
5. **Explain the difference between a Clustered and Non-Clustered Index.**
   - *Answer:* A clustered index determines the physical order of data on disk (usually the Primary Key; a table can only have one). A non-clustered index is a separate data structure (like a book's index) that points to the physical row.
6. **What are ACID properties?**
   - *Answer:* Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent safety), Durability (saved permanently).

## Senior Level
7. **Explain Transaction Isolation Levels.**
   - *Answer:* They define how databases handle concurrent access. Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (strict sequential execution).
8. **When would you intentionally denormalize a database?**
   - *Answer:* In read-heavy systems where complex JOINs across highly normalized tables cause unacceptable latency. E.g., maintaining a `total_comments` counter on a Post table instead of running `COUNT()` over millions of rows.
9. **How do you optimize a slow query?**
   - *Answer:* Use `EXPLAIN ANALYZE` to read the execution plan. Look for Sequential Scans. Add targeted B-Tree indexes based on the WHERE/JOIN clauses. Ensure queries are sargable (no functions on indexed columns). Avoid `SELECT *`.

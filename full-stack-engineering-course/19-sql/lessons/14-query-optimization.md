# Lesson 14: Query Optimization

## 1. Introduction and Learning Objectives
When you write SQL, you describe *what* data you want, not *how* to get it. The database's Query Optimizer figures out the "how". Sometimes, it makes bad choices. Query optimization is the art of helping the database retrieve data faster.

**Learning Objectives:**
- Use the `EXPLAIN` command to read execution plans.
- Understand the difference between Sequential Scans and Index Scans.
- Identify and fix the N+1 Query Problem.
- Learn best practices for writing efficient queries.

---

## 2. EXPLAIN and Execution Plans

Prepend `EXPLAIN` (or `EXPLAIN ANALYZE` in Postgres to actually run it and get timing) to any query to see the execution plan.

```sql
EXPLAIN ANALYZE 
SELECT * FROM users WHERE email = 'test@test.com';
```

### What to look for in the output:
- **Seq Scan (Sequential Scan):** The database reads the entire table top to bottom. Fine for small tables, terrible for large tables.
- **Index Scan:** The database uses an index to find the row quickly. This is what you want for point-lookups.
- **Cost:** An arbitrary number the database uses to estimate how "expensive" the query is. Lower is better.
- **Actual Time:** (If using `ANALYZE`) The real execution time in milliseconds.

---

## 3. The N+1 Query Problem

This is the most common performance killer in Full-Stack ORM applications.

**The Scenario:** You want to fetch 100 users, and for each user, fetch their posts.

**The N+1 Way (Bad):**
1. `SELECT * FROM users LIMIT 100;` (1 query)
2. Application loops 100 times: `SELECT * FROM posts WHERE user_id = ?;` (100 queries)
Total Queries = 101. Network latency destroys performance.

**The Optimized Way (Good):**
Use an `IN` clause or a `JOIN`.
```sql
SELECT u.*, p.* 
FROM users u 
LEFT JOIN posts p ON u.id = p.user_id 
WHERE u.id IN (...list of 100 ids...);
```
Total Queries = 1.

---

## 4. Query Rewriting and Best Practices

1. **Avoid `SELECT *`:** Only fetch the columns you need. It reduces memory usage and network bandwidth.
2. **Avoid Functions on Indexed Columns in `WHERE`:**
   ```sql
   -- BAD: Disables the index on created_at (Full Table Scan)
   SELECT * FROM orders WHERE YEAR(created_at) = 2023;
   
   -- GOOD: Uses the index (Index Range Scan)
   SELECT * FROM orders WHERE created_at >= '2023-01-01' AND created_at < '2024-01-01';
   ```
3. **Use `EXISTS` instead of `COUNT` for existence checks:**
   If you just want to know if a user has orders, don't use `COUNT(*) > 0`. The DB has to count every order. Use `EXISTS`, which stops scanning the moment it finds the first match.
4. **Be careful with `LIKE '%term'`:** A leading wildcard (`%`) prevents the database from using a standard B-Tree index.

---

## 5. Summary & Checklist

**Summary:**
Query optimization is driven by analyzing execution plans with `EXPLAIN`. Ensure your queries leverage indexes (avoiding functions on indexed columns and leading wildcards). At the application layer, absolutely ensure you are not falling victim to the N+1 query problem.

**Completion Checklist:**
- [ ] I know how to use `EXPLAIN` to read an execution plan.
- [ ] I can differentiate between a Seq Scan and an Index Scan.
- [ ] I can explain the N+1 query problem and how to fix it.
- [ ] I understand why running functions on columns in a `WHERE` clause ruins indexing.

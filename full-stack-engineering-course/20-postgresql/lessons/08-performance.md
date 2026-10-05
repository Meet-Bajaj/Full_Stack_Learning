# Lesson 08: Performance

## 1. Introduction and Learning Objectives
Database performance goes beyond query optimization (covered in Module 19). It includes understanding database internals like statistics, vacuuming, and connection management.

**Learning Objectives:**
- Understand Table Statistics and `ANALYZE`.
- Understand MVCC Bloat and `VACUUM`.
- Conceptually understand Connection Pooling (PgBouncer).

---

## 2. Table Statistics (ANALYZE)
The Postgres Query Planner uses statistics to decide if it should use a Seq Scan or an Index Scan. If the statistics are wrong, the planner makes bad choices.
The `ANALYZE` command collects statistics about the contents of tables and stores them in `pg_statistic`.

```sql
-- Manually analyze a table if queries suddenly get slow after massive inserts
ANALYZE users;
```
*(Note: Postgres usually runs `autovacuum` which also runs analyze automatically).*

---

## 3. VACUUM and MVCC

Postgres uses MVCC (Multi-Version Concurrency Control). When you `UPDATE` or `DELETE` a row, Postgres **does not actually delete the old row immediately**. It keeps it around for other concurrent transactions that might still be reading it.

These "dead tuples" cause **Table Bloat**.
- **VACUUM:** Scans the table for dead tuples and marks their space as available for future inserts. It does *not* shrink the physical file size.
- **VACUUM FULL:** Physically rewrites the entire table to shrink the file. **Warning:** This locks the table completely. Never run this in production during peak hours!

Postgres runs a daemon called `autovacuum` in the background to handle this, but it requires tuning for very high-write databases.

---

## 4. Connection Pooling (PgBouncer)

Postgres spawns a whole new operating system process for every single connection. This consumes significant RAM (usually ~10MB per connection). 
If a Serverless function (like AWS Lambda) opens thousands of connections to Postgres simultaneously, the database will crash (OOM - Out of Memory).

**Solution: PgBouncer**
PgBouncer is a lightweight connection pooler.
1. Your app connects to PgBouncer.
2. PgBouncer holds a small pool of actual connections to Postgres (e.g., 20 connections).
3. It multiplexes thousands of incoming app requests over those 20 real connections.

---

## 5. Summary & Checklist
**Summary:** Performance at the infrastructure level requires accurate statistics (`ANALYZE`), healthy bloat management (`autovacuum`), and strict control over the number of active connections via poolers like PgBouncer.

**Completion Checklist:**
- [ ] I understand why `ANALYZE` is critical for query planning.
- [ ] I can explain what a "dead tuple" is and why `VACUUM` is necessary.
- [ ] I understand the danger of `VACUUM FULL`.
- [ ] I understand why connection poolers like PgBouncer are used.

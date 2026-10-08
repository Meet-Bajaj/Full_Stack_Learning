# Lesson 4: Database Performance

## Learning Objectives
- Use Indexes effectively.
- Understand query execution plans (`EXPLAIN`).
- Solve the N+1 query problem.

## Indexing
An index is like a book's glossary. Without it, the DB must scan every row (Table Scan). Add indexes to columns frequently used in `WHERE`, `JOIN`, or `ORDER BY` clauses.

## The N+1 Problem
Occurs when you fetch a list of items (1 query), and then loop through them to fetch related data (N queries).
*Fix*: Use `JOIN`s, or a DataLoader to batch requests.

## Connection Pooling
Opening a DB connection is expensive. Use a connection pool (like `pg-pool`) to reuse open connections.

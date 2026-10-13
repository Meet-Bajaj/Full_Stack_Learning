# Lesson 07: Database Interview Questions

## Learning Objectives
- Master SQL queries, Joins, and Indexing.
- Understand normalization, ACID properties, and transaction isolation levels.
- Differentiate between SQL and NoSQL databases.

## 1. ACID Properties

**Concept:** A set of properties that guarantee database transactions are processed reliably.
- **Atomicity:** All or nothing. The transaction is completely executed or completely rolled back.
- **Consistency:** The database must remain in a consistent state before and after the transaction.
- **Isolation:** Multiple transactions occurring at the same time must not impact each other's execution.
- **Durability:** Once a transaction is committed, it will remain so, even in the event of a power loss.

## 2. Indexes

**Mental Model:** An index is like the table of contents in a book. Instead of reading every page (a full table scan), the database looks at the index to find exactly where the data lives.
- **B-Trees:** The most common index structure.
- **Trade-offs:** Indexes speed up read operations but slow down write operations (INSERT, UPDATE, DELETE) because the index must also be updated.

## 3. Normalization vs Denormalization

- **Normalization:** Organizing data to reduce redundancy and improve data integrity (1NF, 2NF, 3NF). Often used in OLTP (Online Transaction Processing) systems.
- **Denormalization:** Adding redundant data to optimize read performance. Often used in read-heavy applications or OLAP (Online Analytical Processing) systems.

## 4. SQL Joins

- **INNER JOIN:** Returns records that have matching values in both tables.
- **LEFT (OUTER) JOIN:** Returns all records from the left table, and the matched records from the right table.
- **RIGHT (OUTER) JOIN:** Returns all records from the right table, and the matched records from the left table.
- **FULL (OUTER) JOIN:** Returns all records when there is a match in either left or right table.

## Summary & Checklist
- [ ] Explain ACID properties.
- [ ] Describe how a database index works and its trade-offs.
- [ ] Write a SQL query using an INNER and LEFT JOIN.

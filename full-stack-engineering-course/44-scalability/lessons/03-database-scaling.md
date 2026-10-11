# Lesson 3: Database Scaling

## Learning Objectives
- Understand connection pooling.
- Explain the concept of Read Replicas (Primary/Replica architecture).
- Differentiate between Partitioning and Sharding.
- Understand the role of database caching.

## The Database Bottleneck
You can easily scale stateless web servers horizontally. However, scaling a stateful, relational database is the hardest part of system design. 

## Connection Pooling
Every time a web server opens a connection to a database, it costs time and memory. If 1,000 requests hit your app, opening 1,000 DB connections will crash the database. 
**Solution**: Connection Pooling. The app maintains a small pool (e.g., 20) of active, persistent connections and reuses them for multiple requests.

## Read Replicas
Most web applications are read-heavy (90% reads, 10% writes). 
- **Primary (Master)**: Handles all writes (INSERT, UPDATE, DELETE).
- **Replicas (Slaves)**: Read-only copies of the Primary.
- The Primary asynchronously replicates data to the Replicas. The application routes read queries (SELECT) to the Replicas, drastically reducing the load on the Primary.
*Trade-off*: Eventual consistency. A user might update their profile (write to Primary), immediately refresh the page (read from Replica), and see the old data because the replication hasn't finished yet (replication lag).

## Partitioning and Sharding
When a single table gets too massive (billions of rows), queries slow down.

- **Vertical Partitioning**: Splitting a table by columns. (e.g., separating a `Users` table into `UserAuth` and `UserProfile`).
- **Horizontal Partitioning**: Splitting a table by rows within the same database instance based on ranges (e.g., rows from 2022 in one partition, 2023 in another).
- **Sharding**: A type of horizontal partitioning where the data is distributed across entirely **different physical database servers**. 
  - *Example*: Users with IDs ending in 0-4 go to Database Server A. IDs ending in 5-9 go to Database Server B.
  - *Cons*: Extremely complex. Makes JOINs across shards nearly impossible.

## Summary
Scaling databases requires a progressive approach: first optimize queries and use connection pooling, then introduce read replicas, and only rely on sharding as a last resort for massive scale.

## Completion Checklist
- [ ] I understand how Read Replicas relieve database load.
- [ ] I know the difference between Partitioning and Sharding.
- [ ] I can explain the concept of replication lag.

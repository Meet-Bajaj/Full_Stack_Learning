# Lesson 7: Databases at Scale

## 1. Learning Objectives
- Design read replica architectures.
- Implement sharding and partitioning strategies.
- Understand the Database-per-Service pattern.

## 2. Scaling Relational vs. NoSQL
Relational DBs (Postgres, MySQL) are great for structured, relational data but hard to scale horizontally. NoSQL DBs (MongoDB, Cassandra) are built for horizontal scale but sacrifice strong relations/ACID properties.

## 3. Read Replicas
Most web applications are read-heavy (90% read / 10% write).
By directing writes to a Primary DB and syncing to multiple Read Replicas, you can handle massive read traffic.

## 4. Sharding
When a single database gets too large, you split the data across multiple databases.
- **Vertical Partitioning:** Split by feature (e.g., User DB, Product DB).
- **Horizontal Partitioning (Sharding):** Split by data ranges (e.g., Users A-M in DB1, N-Z in DB2).

## 5. Summary and Checklist
- [ ] Explain Replication vs Sharding.
- [ ] Determine when to use NoSQL vs SQL.

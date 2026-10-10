# Lesson 4: Cloud Databases

## Managed Relational Databases (Amazon RDS)
Relational Database Service (RDS) manages PostgreSQL, MySQL, MariaDB, Oracle, or SQL Server.
**Why use RDS instead of DB on EC2?**
- Automated backups and patching.
- Multi-AZ deployments for high availability (auto-failover).
- Read Replicas to scale read-heavy workloads.

## Managed In-Memory Cache (Amazon ElastiCache)
Managed Redis or Memcached. Used to cache database queries, store session state, or manage queues.

## NoSQL (Amazon DynamoDB)
A fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. It offers single-digit millisecond performance but requires careful data modeling compared to relational databases.

## Choosing the Right Database
- **Transactional Data (E-commerce, Users):** RDS (PostgreSQL/MySQL)
- **High Read/Write, Unstructured:** DynamoDB
- **Session Store, Caching:** ElastiCache (Redis)
- **Data Warehousing / Analytics:** Redshift

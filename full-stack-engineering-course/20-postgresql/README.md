# Module 20: PostgreSQL

## Overview
Welcome to the PostgreSQL module. PostgreSQL is the world's most advanced open-source relational database. While it supports standard SQL (covered in Module 19), it also offers incredibly powerful advanced features like JSON/JSONB support, full-text search, arrays, and advanced indexing strategies.

## Learning Objectives
By the end of this module, you will be able to:
- Understand when to choose PostgreSQL over other databases like MySQL or MongoDB.
- Work with advanced data types unique to Postgres (JSONB, Arrays, UUIDs).
- Implement Full-Text Search without needing external tools like Elasticsearch.
- Design Multi-tenant applications using PostgreSQL Schemas.
- Understand MVCC, indexing strategies (GIN, GiST), and performance tuning.
- Configure backups, replication, and database security.

## Module Structure

### Lessons
1. **[01. Introduction to PostgreSQL](./lessons/01-introduction-to-postgresql.md)** - PostgreSQL vs other databases, features, when to use, installation, psql
2. **[02. Data Types](./lessons/02-data-types.md)** - Numeric, text, boolean, date/time, UUID, JSON/JSONB, arrays, enum, custom types
3. **[03. JSON and JSONB](./lessons/03-json-and-jsonb.md)** - JSON vs JSONB, operators (->, ->>, @>, ?), indexing JSONB with GIN
4. **[04. Arrays](./lessons/04-arrays.md)** - Array types, array functions, querying arrays, ANY/ALL, indexing arrays
5. **[05. Advanced Indexes](./lessons/05-advanced-indexes.md)** - B-tree, Hash, GIN, GiST, BRIN, partial indexes, expression indexes
6. **[06. Full-Text Search](./lessons/06-full-text-search.md)** - tsvector, tsquery, to_tsvector, ranking, GIN indexes for FTS
7. **[07. Schemas](./lessons/07-schemas.md)** - PostgreSQL schemas, public schema, search_path, multi-tenant with schemas
8. **[08. Performance](./lessons/08-performance.md)** - EXPLAIN ANALYZE, query plans, statistics, vacuum, autovacuum, PgBouncer
9. **[09. Transactions & Concurrency](./lessons/09-transactions-and-concurrency.md)** - MVCC, isolation levels, advisory locks, deadlocks
10. **[10. Extensions](./lessons/10-extensions.md)** - Popular extensions (uuid-ossp, pgcrypto, PostGIS concepts, pg_trgm)
11. **[11. Backups & Recovery](./lessons/11-backups-and-recovery.md)** - pg_dump, pg_restore, continuous archiving, PITR
12. **[12. Replication](./lessons/12-replication.md)** - Streaming replication, logical replication, read replicas
13. **[13. Security](./lessons/13-security.md)** - Roles, permissions, GRANT/REVOKE, RLS (Row-Level Security), pg_hba.conf
14. **[14. Production Configuration](./lessons/14-production-configuration.md)** - postgresql.conf tuning, shared_buffers, work_mem

### Practice & Assessment
- **[Exercises](./exercises/exercises.md)** - Postgres-specific coding exercises
- **[MCQs](./mcqs/mcqs.md)** - 120 Multiple Choice Questions
- **[Interview Questions](./interview.md)** - Postgres interview prep
- **[Cheat Sheet](./cheatsheet.md)** - Postgres commands and operators reference
- **[Assessment](./assessment.md)** - Final module assessment
- **[Progress Tracker](./progress.md)** - Track your completion status

## Prerequisites
- Completion of Module 19 (SQL). You must know standard SQL before learning Postgres-specific features.

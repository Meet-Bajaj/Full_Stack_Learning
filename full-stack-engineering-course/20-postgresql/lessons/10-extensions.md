# Lesson 10: Extensions

## 1. Introduction and Learning Objectives
PostgreSQL is designed to be extensible. If a feature doesn't exist in core Postgres, it can likely be loaded via an Extension.

**Learning Objectives:**
- Learn how to enable extensions.
- Understand popular extensions: `uuid-ossp`, `pgcrypto`, `pg_trgm`, and `PostGIS`.

---

## 2. Enabling Extensions
Extensions must be explicitly created in the database before they can be used. (Usually requires superuser privileges).
```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

---

## 3. Popular Extensions

### uuid-ossp / pgcrypto
Used for generating UUIDs. In Postgres 13+, `gen_random_uuid()` is built-in, but historically `uuid-ossp` was required.
`pgcrypto` is used for hashing passwords directly in the database (though hashing should usually be done in the application layer).

### pg_trgm (Trigram Indexing)
Standard B-Tree indexes don't work for `LIKE '%term%'` (leading wildcards). 
`pg_trgm` breaks text down into 3-letter chunks (trigrams). It allows you to build GIN indexes that make `LIKE '%term%'` and fuzzy string matching incredibly fast.
```sql
CREATE EXTENSION pg_trgm;
CREATE INDEX idx_users_name_trgm ON users USING GIN (name gin_trgm_ops);
```

### PostGIS
The crown jewel of Postgres extensions. It adds support for geographic objects, allowing you to run location queries in SQL.
- Calculate the distance between two points.
- Find all users within a 5-mile radius.
- Find if a specific GPS coordinate falls inside a complex polygon (like a city boundary).
*(Note: PostGIS is massive and is virtually a database system in itself).*

---

## 4. Summary & Checklist
**Summary:** Extensions transform Postgres from a standard relational database into a specialized tool for geospatial data, fuzzy text search, and advanced cryptography.

**Completion Checklist:**
- [ ] I know how to run `CREATE EXTENSION`.
- [ ] I understand what `pg_trgm` is used for.
- [ ] I know that PostGIS is used for geospatial data.

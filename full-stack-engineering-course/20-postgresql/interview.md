# PostgreSQL Interview Questions

## Junior Level
1. **What is the difference between VARCHAR and TEXT in Postgres?**
   - *Answer:* Under the hood, they are the same type. `TEXT` has unlimited length, while `VARCHAR(n)` imposes a length constraint. There is no performance penalty for using `TEXT` in Postgres.
2. **Explain `JSON` vs `JSONB`.**
   - *Answer:* `JSON` stores exact text (slower queries, no indexing). `JSONB` stores decomposed binary format (faster queries, supports GIN indexing).

## Mid Level
3. **How does Full-Text Search work in Postgres?**
   - *Answer:* It uses `tsvector` to parse and stem text (removing stop words) and `tsquery` to represent the search term. The `@@` operator matches them. GIN indexes are used to make it fast.
4. **What is a Partial Index? Give a use case.**
   - *Answer:* An index built on a subset of data using a `WHERE` clause. Useful for indexing only unread messages `WHERE is_read = false`, saving disk space and speeding up writes.
5. **How does Postgres handle Multi-Tenancy?**
   - *Answer:* Often through Schemas. Each tenant gets their own schema containing the same tables. The app changes the `search_path` per tenant, ensuring strict data isolation without altering queries.

## Senior Level
6. **Explain MVCC and Table Bloat.**
   - *Answer:* Multi-Version Concurrency Control allows concurrent reads/writes without locking. `UPDATE`s don't overwrite data; they create new rows and mark old ones as dead. This causes table bloat. `VACUUM` cleans up these dead tuples so the space can be reused.
7. **How does Connection Pooling work and why is it necessary for Postgres?**
   - *Answer:* Postgres forks a new OS process per connection, using ~10MB RAM. Too many connections cause OOM errors. PgBouncer is a pooler that multiplexes thousands of lightweight app connections over a small pool of heavy Postgres connections.
8. **What is the WAL and how does it relate to PITR?**
   - *Answer:* The Write-Ahead Log records every transaction before it's written to data files. Point-in-Time Recovery (PITR) involves restoring a base physical backup and replaying archived WAL files up to the exact millisecond before a crash.

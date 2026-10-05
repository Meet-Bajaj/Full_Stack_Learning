# Lesson 14: Production Configuration

## 1. Introduction and Learning Objectives
Out of the box, PostgreSQL is configured to run on a machine with very limited resources (like a Raspberry Pi). If you install it on a 64-core, 256GB RAM server, it will still act like it has limited resources unless you tune it.

**Learning Objectives:**
- Understand the `postgresql.conf` file.
- Tune memory settings: `shared_buffers`, `work_mem`.
- Configure logging.

---

## 2. The postgresql.conf File

This is the primary configuration file. Any changes here usually require a restart or a reload of the Postgres service.
*Tip: Tools like PGTune (pgtune.leopard.in.ua) will generate an optimal configuration based on your hardware.*

---

## 3. Critical Memory Settings

1. **`shared_buffers`**: This is how much dedicated RAM Postgres uses to cache data. The general rule of thumb is to set this to **25% of the machine's total RAM**. (Postgres also relies heavily on the OS filesystem cache).
2. **`work_mem`**: The amount of memory used for complex sorting operations (like `ORDER BY` and `HASH JOINs`) *per operation*. If a query needs more memory than this, it writes temporary files to disk, which is very slow. Be careful: 100 concurrent connections doing complex sorts will use 100 * `work_mem`.
3. **`effective_cache_size`**: Tells the query planner how much total memory is available for caching (usually set to 50%-75% of total RAM). It doesn't allocate memory; it just helps the planner make smart index choices.

---

## 4. Logging and Monitoring

By default, Postgres logs very little. In production, you must log slow queries to identify bottlenecks.

```ini
# postgresql.conf settings
log_min_duration_statement = 1000 # Log any query taking longer than 1 second
log_connections = on
log_disconnections = on
log_lock_waits = on
```

Additionally, always enable the `pg_stat_statements` extension. It records execution statistics for all SQL statements, allowing you to easily find the queries consuming the most cumulative time in your system.

---

## 5. Summary & Checklist
**Summary:** Never deploy standard Postgres to production without tuning `postgresql.conf`. Adjust `shared_buffers` for caching, `work_mem` for sorting, and configure logging and `pg_stat_statements` to maintain visibility into database health.

**Completion Checklist:**
- [ ] I understand why default Postgres settings are inadequate for production.
- [ ] I know what `shared_buffers` and `work_mem` do.
- [ ] I can configure Postgres to log slow queries.
- [ ] I know what `pg_stat_statements` is.

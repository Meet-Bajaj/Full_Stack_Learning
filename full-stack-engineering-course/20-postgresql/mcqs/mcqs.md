# PostgreSQL Multiple Choice Questions (120 Questions)

*Note: This is a representative sample covering Postgres-specific topics.*

## Intermediate Level

41. **What is the primary advantage of `JSONB` over `JSON` in PostgreSQL?**
    - A) `JSONB` preserves whitespace and key order.
    - B) `JSONB` can be indexed using GIN and queries faster.
    - C) `JSONB` uses less disk space upon initial insert.
    - D) `JSONB` integrates directly with GraphQL.
    - **Answer:** B

42. **Which of the following creates an array of integers?**
    - A) `INT ARRAY`
    - B) `INT[]`
    - C) `LIST(INT)`
    - D) `ARRAY_INT`
    - **Answer:** B

43. **Which operator checks if a JSONB document contains a specific key/value pair?**
    - A) `->>`
    - B) `@>`
    - C) `?`
    - D) `<@`
    - **Answer:** B

## Advanced Level

81. **Why might you use a Partial Index?**
    - A) To index only half the characters in a TEXT column.
    - B) To index only rows that match a specific `WHERE` condition, saving space and improving write speed.
    - C) To index JSONB columns partially.
    - D) To bypass the query planner.
    - **Answer:** B

82. **What does the `tsvector` data type do?**
    - A) Stores mathematical vectors for machine learning.
    - B) Parses text into stemmed, searchable tokens, removing stop words.
    - C) Represents a 2D spatial coordinate.
    - D) Creates a time-series vector.
    - **Answer:** B

## Production / Architecture Level

111. **What is the purpose of `autovacuum`?**
     - A) To automatically delete rows older than 30 days.
     - B) To clean up "dead tuples" created by MVCC updates/deletes, preventing table bloat.
     - C) To shrink the physical size of the database file on disk.
     - D) To automatically backup the database.
     - **Answer:** B

112. **Which configuration setting determines the amount of dedicated RAM Postgres uses for caching?**
     - A) `work_mem`
     - B) `maintenance_work_mem`
     - C) `shared_buffers`
     - D) `effective_cache_size`
     - **Answer:** C

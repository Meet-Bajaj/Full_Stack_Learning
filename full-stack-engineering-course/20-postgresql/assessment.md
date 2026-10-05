# PostgreSQL Module Assessment

## Part 1: Advanced Types & Querying
1. Write a query to create a `users` table with a UUID primary key, a `TEXT` email, and a `JSONB` preferences column.
2. Insert a user with preferences: `{"theme": "dark", "notifications": {"email": true, "sms": false}}`.
3. Write a query to find all users who have `email` notifications set to `true` inside their JSONB preferences.

## Part 2: Indexing Architecture
1. You have a table of 100 million `logs`. 99% of queries are searching for `level = 'error'`. Explain exactly how you would index this table to optimize performance while saving disk space.
2. A developer complains that `WHERE LOWER(username) = 'admin'` is doing a sequential scan even though there is an index on `username`. Why? How do you fix it?

## Part 3: System Architecture
1. A Serverless application scales to 5,000 concurrent Lambda functions, instantly crashing your Postgres database. Explain the architectural flaw and how to resolve it.
2. Your CTO asks you to implement a search feature for the blog. They suggest installing Elasticsearch. Write a brief proposal on how you would use Postgres to solve this without adding new infrastructure.
3. Explain the difference between `VACUUM` and `VACUUM FULL`, and state when you should run `VACUUM FULL` in a high-traffic production environment.

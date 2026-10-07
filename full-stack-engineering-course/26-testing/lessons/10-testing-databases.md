# Lesson 10: Testing Databases

## Learning Objectives
- Set up test databases with Docker.
- Seed and clean up databases.
- Use transactions for test isolation.

## Test Isolation Strategies
1. **Truncate Tables**: Slower, but guarantees empty tables.
2. **Transactions**: Wrap each test in a transaction and roll back at the end. Much faster, but requires ORM support.

## Docker for Test Databases
Using Docker ensures consistency across developer machines and CI. 

```bash
docker run --name test-db -e POSTGRES_PASSWORD=secret -d -p 5432:5432 postgres
```

## Summary Checklist
- [ ] I can spin up a test DB.
- [ ] I know how to isolate database state between tests.

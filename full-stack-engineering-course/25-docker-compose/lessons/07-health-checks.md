# Lesson 07: Health Checks

## Learning Objectives
- Define `HEALTHCHECK` in Compose.
- Use `depends_on` with `condition: service_healthy`.
- Ensure proper startup ordering.

## The Startup Order Problem
If you have an API that depends on a Database, you might use:
```yaml
    depends_on:
      - db
```
Compose will start `db`, then immediately start `api`. But Postgres takes 5-10 seconds to initialize. The `api` container boots in 1 second, tries to connect to Postgres, fails, and crashes.

## The Solution: Health Checks
We need to tell Compose how to verify the database is actually ready to accept connections.

```yaml
services:
  db:
    image: postgres:15
    environment:
      - POSTGRES_PASSWORD=secret
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5

  api:
    image: my-api
    depends_on:
      db:
        condition: service_healthy
```

### How it works:
1. Compose starts `db`.
2. Compose runs `pg_isready` every 5 seconds.
3. Once the command returns a success (exit code 0), the `db` container's status changes from `starting` to `healthy`.
4. Only then does Compose start the `api` container.

## Health Check Commands
- **Postgres**: `pg_isready -U postgres`
- **MySQL**: `mysqladmin ping -h localhost`
- **Redis**: `redis-cli ping`
- **Node.js/Web**: `curl -f http://localhost:3000/health || exit 1`

## Summary Checklist
- [ ] Understand why simple `depends_on` isn't enough.
- [ ] Write a `healthcheck` block.
- [ ] Use `condition: service_healthy`.

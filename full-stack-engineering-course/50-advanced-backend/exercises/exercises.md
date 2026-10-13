# Module 50 Exercises

## Exercise 1: Implement Optimistic Locking
**Task**: Modify a provided Prisma schema and NestJS service to use optimistic locking.
1. Add a `version` field to the `Ticket` model.
2. When booking a ticket, ensure the update query includes the expected version.
3. Handle the `PrismaClientKnownRequestError` if the update fails and return a 409 Conflict.

## Exercise 2: Idempotent Payment API
**Task**: Create an Express middleware that implements idempotency for a `/charge` endpoint.
1. Extract `Idempotency-Key` from headers.
2. Use Redis to store the response against this key.
3. If the key exists, return the cached response immediately instead of charging again.

## Exercise 3: Graceful Shutdown
**Task**: Write a Node.js script that listens for `SIGTERM`.
1. Create an HTTP server.
2. On `SIGTERM`, stop accepting new requests (`server.close()`).
3. Wait for existing requests to finish.
4. Close the database connection and exit `process.exit(0)`.

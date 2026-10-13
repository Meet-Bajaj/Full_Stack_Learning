# Module 50: Advanced Backend Cheat Sheet

## Clean Architecture Layers
- **Domain**: Entities, Value Objects. No external dependencies.
- **Application**: Use Cases, Ports (Interfaces). Orchestrates domain logic.
- **Infrastructure**: Database adapters, external API integrations. Implements Ports.
- **Presentation**: Controllers, Resolvers. Routes requests to Application layer.

## Concurrency Control
- **Optimistic Locking**: Uses `version` field. Best for high-read/low-write conflicts.
- **Pessimistic Locking**: Uses DB locks (`SELECT FOR UPDATE`). Best for high-write conflicts.
- **Distributed Locks (Redis)**: Use `Redlock` algorithm to lock resources across multiple servers.

## Idempotency
Ensure retrying operations yields the same result.
- Requires `Idempotency-Key` from client.
- Cache the response of the first successful processing and return it for subsequent identical keys.

## Graceful Shutdown Steps
1. Listen for `SIGTERM` / `SIGINT`.
2. Stop accepting new connections.
3. Finish processing active requests.
4. Close database and Redis connections.
5. Exit process.

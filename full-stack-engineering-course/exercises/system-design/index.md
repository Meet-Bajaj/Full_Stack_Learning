# 🛠️ Distributed System Design Problems
> **Curriculum Track:** Scalability, CAP theorem trade-offs, caching topologies, and event streaming

---

## 🎯 Lab Exercise 01: Production Problem Statement

### 1. Context & Business Requirement
You are handling a high-throughput webhook receiver receiving thousands of JSON events per minute from payment gateways. Events may arrive duplicate or out-of-order due to network retries.

### 2. Constraints & Specifications
- Zero duplicate processing (Strict Idempotency).
- In-memory processing time < 5ms per event.
- Failed events must be quarantined in a Dead Letter Queue (DLQ).
- Clean unit test suite with 100% boundary test coverage.

### 3. Starter Skeleton (TypeScript)
```typescript
export interface WebhookEvent {
  id: string;
  eventType: string;
  payload: Record<string, unknown>;
  timestamp: number;
}

export class ResilientWebhookProcessor {
  constructor(private readonly redisClient: any, private readonly db: any) {}

  async process(event: WebhookEvent): Promise<{ status: 'processed' | 'skipped' | 'failed' }> {
    // 1. Atomic check-and-set idempotency key with TTL
    // 2. Wrap database mutation inside an ACID transaction
    // 3. Handle failure and route to DLQ
    throw new Error('Not implemented');
  }
}
```

### 4. Verification & Solution Walkthrough
1. **Idempotency Strategy:** Use Redis `SET key value NX EX 86400` to acquire atomic lock on event ID.
2. **Transaction Integrity:** Use Prisma `$transaction` or PostgreSQL `BEGIN ... COMMIT` ensuring atomic write to event log and balance table.
3. **Dead Letter Routing:** If unrecoverable schema validation occurs, emit message to BullMQ dead-letter stream for engineer triage.

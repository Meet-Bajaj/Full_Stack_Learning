# 🏆 Phase 1: Foundation Assessment
> **Scope:** Computer Science, Programming, JS, TS, Git  
> **Passing Score:** 85% combined across Theory, Practical, and Architectural Design.  
> **Duration:** 3 Hours.

---

## Part 1: Comprehensive Multiple Choice Questions (40 Points)

#### Q1. In a high-concurrency Node.js application, which operation directly blocks the V8 main event loop thread?
- [ ] A) Streaming a 1GB file using `fs.createReadStream`
- [x] B) Synchronously hashing a password with `crypto.pbkdf2Sync`
- [ ] C) Executing a PostgreSQL query via a connection pool
- [ ] D) Listening on a WebSocket server with 10,000 idle connections
*Answer: B — Synchronous cryptographic operations execute on the main thread rather than libuv threadpool workers.*

#### Q2. What is the fundamental purpose of the database isolation level `REPEATABLE READ`?
- [ ] A) Preventing dirty reads only
- [x] B) Preventing dirty reads and non-repeatable reads
- [ ] C) Preventing dirty reads, non-repeatable reads, and phantom reads in all SQL databases
- [ ] D) Allowing dirty writes while prohibiting concurrent commits
*Answer: B — Repeatable read guarantees snapshots such that re-querying within the transaction returns identical data.*

#### Q3. In Next.js 14 App Router, what happens when a Server Component imports and executes client-only code?
- [x] A) The build fails with an environment violation error
- [ ] B) The server component automatically downgrades into a client component
- [ ] C) It silently falls back to client-side hydration
- [ ] D) The code executes on both the server and client simultaneously
*Answer: A — Next.js enforces strict boundary separation via module graph verification.*

#### Q4. Which caching strategy updates the cache synchronously during a database write?
- [ ] A) Cache-Aside (Lazy Loading)
- [x] B) Write-Through
- [ ] C) Write-Behind (Write-Back)
- [ ] D) Refresh-Ahead
*Answer: B — Write-Through writes to the data store and cache simultaneously before returning.*

---

## Part 2: Practical Coding Challenges (35 Points)

### Challenge 1: Resilient Fetch with Exponential Backoff and Jitter
**Specification:**
Implement a TypeScript function `fetchWithRetry<T>(url: string, options: RequestInit, maxRetries: number): Promise<T>` that:
1. Retries on HTTP status codes 408, 429, and 5xx.
2. Computes delay with exponential backoff: Delay = Base * (2 ** attempt) + Jitter.
3. Respects AbortController cancellation signals.

### Challenge 2: In-Memory Token Bucket Rate Limiter
**Specification:**
Create a high-performance TypeScript class `TokenBucketRateLimiter`:
- Configurable capacity and refill rate (tokens/second).
- Thread-safe / asynchronous atomicity without deadlocks.
- Unit tests verifying consumption and replenishment boundaries.

---

## Part 3: Architecture & System Design Scenario (25 Points)

### Scenario: Real-Time Auction & Bidding Platform
You are tasked with designing the backend infrastructure for a live auction platform:
- **Traffic Profile:** 50,000 concurrent bidders per auction item; 5,000 bid submissions per second during closing seconds.
- **Constraints:**
  1. Strict linearizability: No bid below current highest bid can ever succeed.
  2. Sub-50ms latency for bid broadcast to all active bidders.
  3. Zero lost bids during sudden traffic bursts.

**Deliverables Required:**
1. Mermaid diagram illustrating the request pipeline (Load Balancers, Edge, API Gateway, Redis Streams, Worker nodes, PostgreSQL).
2. Data model schema (SQL + Prisma) supporting atomic bid placement.
3. Concurrency control strategy (Optimistic vs Pessimistic vs Redis Distributed Lock).
4. Failure mode analysis (Redis master failover, database disconnect, network partition).

---

## 🎯 Evaluation Rubric
- **Theory (MCQs):** Correctness and depth of conceptual rationale (40%)
- **Code Quality:** Type safety, error handling, edge cases, immutability (35%)
- **System Design:** Scalability, bottleneck mitigation, fault tolerance (25%)

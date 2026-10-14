# System Design Cheat Sheet

## Scalability Patterns
- **Vertical Scaling (Scale Up)**: Adding more CPU/RAM to a single server. Limited by hardware, single point of failure.
- **Horizontal Scaling (Scale Out)**: Adding more servers to a pool. Requires load balancing, handles distributed state.

## Load Balancing
Distributes incoming network traffic across a group of backend servers.
- **Algorithms**: Round Robin, Least Connections, IP Hash.
- **Layer 4 (Transport)**: Routes based on IP and Port (TCP/UDP). Fast.
- **Layer 7 (Application)**: Routes based on HTTP headers, URLs. Slower but smarter.

## Caching Strategies
- **Cache Aside**: Application checks cache; on miss, reads from DB and updates cache.
- **Write-Through**: Application writes to cache, cache writes to DB synchronously.
- **Write-Behind (Write-Back)**: Application writes to cache, cache writes to DB asynchronously.
- **Eviction Policies**: LRU (Least Recently Used), LFU (Least Frequently Used), TTL (Time to Live).

## Database Scaling
- **Replication**: Primary (Read/Write) syncs to Replicas (Read-Only). Improves read throughput.
- **Partitioning / Sharding**: Distributing data across multiple DBs based on a key (e.g., User ID). Improves write throughput and storage capacity.
- **Federation**: Splitting databases by function (e.g., Forums DB, Users DB).

## CAP Theorem
In a distributed system, you can only guarantee TWO of the following:
- **Consistency**: Every read receives the most recent write.
- **Availability**: Every request receives a non-error response.
- **Partition Tolerance**: System continues to operate despite network drops between nodes.
*Modern systems usually sacrifice strong consistency (CP) for high availability (AP) resulting in "Eventual Consistency".*

## PACELC Theorem
Extension of CAP. 
If **P**artition, choose between **A**vailability and **C**onsistency.
**E**lse (running normally), choose between **L**atency and **C**onsistency.

## Asynchronous Processing & Queues
Use Message Brokers (RabbitMQ, SQS) or Event Streaming (Kafka) to decouple services.
- **Point-to-Point**: Queue, one consumer per message. (Task queues).
- **Pub/Sub**: Topic, multiple consumers get the same message. (Event broadcasting).

## Microservices vs Monolith
- **Monolith**: Simple to deploy, test, and debug. Can become a big ball of mud. Scales as a single unit.
- **Microservices**: Independent deployment, independent scaling, polyglot persistence. High operational complexity, distributed tracing needed.

# System Design Cheatsheet

## The CAP Theorem
- **CP:** Consistent & Partition Tolerant (Redis, MongoDB)
- **AP:** Available & Partition Tolerant (Cassandra, DynamoDB)

## Load Balancing Algorithms
- **Round Robin:** Equal distribution.
- **Least Connections:** Routes to server with fewest active connections.
- **IP Hash:** Sticky sessions.

## Scaling
- **Vertical:** Bigger machine (RAM, CPU).
- **Horizontal:** More machines (Stateless app servers).

## Databases
- **Read Replicas:** Scale reads.
- **Sharding:** Scale writes and storage size.

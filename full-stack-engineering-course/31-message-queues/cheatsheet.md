# Message Queues Cheatsheet

## Brokers
- **BullMQ:** Node.js library backed by Redis. Great for jobs.
- **RabbitMQ:** AMQP broker. Uses Exchanges, Bindings, and Queues.
- **Kafka:** Distributed log. Uses Topics and Partitions. Built for high-throughput event streaming.

## Patterns
- **Pub/Sub:** One message to many consumers.
- **Point-to-Point:** One message to one consumer (Work Queue).
- **Dead Letter Queue (DLQ):** Storage for permanently failed jobs.

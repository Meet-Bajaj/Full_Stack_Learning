# Lesson 6: Choosing a Queue

## 1. Learning Objectives
- Compare Redis (BullMQ), RabbitMQ, and Kafka.
- Select the right tool for specific architectural requirements.

## 2. Comparison Matrix

| Feature | BullMQ (Redis) | RabbitMQ | Kafka |
|---------|---------------|----------|-------|
| Primary Use | Background Jobs | Complex Routing | Big Data Streaming |
| Persistence | In-memory (Disk optional) | Disk / Memory | Disk (Log) |
| Speed | Extremely Fast | Fast | Extremely Fast at scale |
| Replayability | Poor | Poor | Excellent (built-in) |
| Complexity | Low | Medium | High |

## 3. Use Cases
- **Choose BullMQ:** You're a Node.js shop and need to process background tasks (emails, PDF generation) easily.
- **Choose RabbitMQ:** You have complex microservice routing rules and need polyglot support (Python, Java, Node).
- **Choose Kafka:** You are processing millions of events per second (e.g., clickstream analytics) or building an Event Sourced architecture.

## 4. Summary and Checklist
- [ ] Evaluate the trade-offs of complexity vs capability when choosing a broker.

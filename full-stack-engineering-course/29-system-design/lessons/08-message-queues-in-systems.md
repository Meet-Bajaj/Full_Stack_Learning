# Lesson 8: Message Queues in Systems

## 1. Learning Objectives
- Understand asynchronous processing.
- Explain publish/subscribe (pub/sub) architectures.
- Apply event-driven design to microservices.

## 2. Why Message Queues?
Synchronous systems block and wait. If a user uploads a video, you shouldn't make them wait on a loading screen for 5 minutes while it compresses. 

### Mental Model
A fast-food drive-through. The order taker (Web Server) takes your order and gives you a receipt, pushing the ticket to a queue. The cooks (Workers) read tickets from the queue and prepare the food asynchronously.

## 3. Pub/Sub vs Point-to-Point
- **Point-to-Point (e.g., RabbitMQ, BullMQ):** A message is consumed by exactly one worker. Great for tasks (e.g., send an email).
- **Pub/Sub (e.g., Kafka, Redis Pub/Sub):** A message is broadcasted to multiple subscribers. Great for events (e.g., User Created event triggers Email Service, Analytics Service, and Billing Service).

## 4. Summary and Checklist
- [ ] Understand decoupling systems via queues.
- [ ] Differentiate between Pub/Sub and Point-to-Point.

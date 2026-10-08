# Lesson 1: Message Queue Fundamentals

## 1. Learning Objectives
- Define what a message queue is and why it's necessary for asynchronous processing.
- Understand the roles of Producers and Consumers.
- Differentiate between Point-to-Point and Pub/Sub messaging models.

## 2. Why Asynchronous Processing?
Synchronous processing requires the client to wait for a response. If a task takes 10 seconds (e.g., generating a PDF report or sending an email), the client is blocked. Asynchronous processing offloads this task to the background, returning an immediate "Task Accepted" response to the client.

## 3. Producers and Consumers
- **Producer (Publisher):** The service that creates the message and sends it to the queue (e.g., the Web Server).
- **Consumer (Worker):** The service that reads messages from the queue and executes the task (e.g., the Email Service).

## 4. Point-to-Point vs Pub/Sub
- **Point-to-Point (Work Queue):** A message is consumed by exactly *one* consumer. If you have 5 workers, they share the load. Best for tasks like sending emails or processing payments.
- **Pub/Sub (Publish/Subscribe):** A message is broadcast to *multiple* subscribers. If an "Order Created" event happens, the Inventory Service, Billing Service, and Shipping Service all receive a copy of the event.

## 5. Summary and Checklist
- [ ] Understand how message queues decouple services.
- [ ] Choose the correct model (Point-to-Point vs Pub/Sub) based on the use case.

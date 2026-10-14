# Lesson 07: Design a Notification System

## Learning Objectives
- Design a multi-channel notification system (Push, SMS, Email).
- Manage third-party integrations reliably.

## Core Architecture
- **API Gateway:** Receives trigger events (e.g., `send_order_confirmation`).
- **Notification Servers:** Authenticate the request, validate the payload, and fetch user preferences (e.g., Did they opt out of SMS?).
- **Message Queues (Kafka/RabbitMQ):** Separate queues for Email, SMS, and Push. Essential for decoupling and handling spikes.
- **Workers:** Consume from queues and call 3rd-party APIs (SendGrid, Twilio, APNS). Retry on failure.

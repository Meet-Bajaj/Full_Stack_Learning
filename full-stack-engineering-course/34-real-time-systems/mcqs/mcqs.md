# Module 34: Real-Time Systems MCQs

## Beginner

**Q1: In an Event-Driven Architecture, which component is responsible for routing events from publishers to subscribers?**
A) The API Gateway
B) The Load Balancer
C) The Message Broker / Event Bus
D) The Database Trigger
**Correct Answer:** C
**Explanation:** A Message Broker (like Redis, RabbitMQ, Kafka) accepts events from publishers and routes them to the appropriate subscribed consumers.
**Difficulty:** Beginner
**Topic:** Architecture
**Subtopic:** Pub/Sub

**Q2: What is the primary difference between WebSockets and Server-Sent Events (SSE)?**
A) SSE only works on mobile devices.
B) WebSockets are bidirectional; SSE is unidirectional (Server to Client).
C) SSE uses a custom TCP protocol, while WebSockets use HTTP.
D) WebSockets automatically reconnect, SSE does not.
**Correct Answer:** B
**Explanation:** SSE is strictly for pushing data from the server down to the client over a standard HTTP connection.
**Difficulty:** Beginner
**Topic:** SSE
**Subtopic:** Concepts

## Intermediate

**Q3: Which of the following HTTP headers is REQUIRED for a Server-Sent Events endpoint?**
A) `Content-Type: application/json`
B) `Upgrade: websocket`
C) `Content-Type: text/event-stream`
D) `Transfer-Encoding: chunked`
**Correct Answer:** C
**Explanation:** The browser's EventSource API expects the server to respond with `Content-Type: text/event-stream`.
**Difficulty:** Intermediate
**Topic:** SSE
**Subtopic:** Implementation

**Q4: When building a real-time financial dashboard displaying 10,000 trades per second, what is the best strategy to send this data to the web client?**
A) Open a raw WebSocket and push every trade instantly.
B) Use SSE and push every trade instantly.
C) Aggregate the data on the server into time-windows and push the summary every 500ms.
D) Have the client use short-polling every 10ms.
**Correct Answer:** C
**Explanation:** Pushing thousands of events per second to a browser will crash the DOM and overwhelm the network. Aggregation/throttling is required.
**Difficulty:** Intermediate
**Topic:** Data Streaming
**Subtopic:** Throttling

## Advanced / Production

**Q5: In a microservices architecture, you want to send a push notification when an order is shipped. What is the most decoupled approach?**
A) The Order Service imports the Firebase SDK and sends the push notification directly.
B) The Order Service makes a synchronous HTTP POST to the Notification Service, waiting for a response before completing the transaction.
C) The Order Service publishes an `OrderShipped` event to a Message Broker; a dedicated Notification Service subscribes to this event and handles delivery.
D) The Order Service inserts a row into the Notifications table, which the user's mobile app polls every minute.
**Correct Answer:** C
**Explanation:** Using a message broker decouples the domains. The Order Service doesn't need to know *how* notifications are sent, it just announces that an order shipped.
**Difficulty:** Advanced
**Topic:** Architecture
**Subtopic:** Microservices

**Q6: Why is relying on a WebSocket `disconnect` event to update a database's "Online Status" flawed in production?**
A) Because WebSockets don't have disconnect events.
B) If the Node.js server crashes abruptly (e.g. out of memory), the disconnect event never fires, leaving users permanently "online".
C) It causes database deadlocks due to rapid connects/disconnects.
D) Disconnect events are only fired on Safari.
**Correct Answer:** B
**Explanation:** Explicit disconnect logic fails during hard crashes. The production standard is using TTL (Time-To-Live) keys in Redis tied to a heartbeat.
**Difficulty:** Production
**Topic:** Presence Systems
**Subtopic:** Reliability

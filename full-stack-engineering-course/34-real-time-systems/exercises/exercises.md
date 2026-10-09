# Module 34: Real-Time Systems Exercises

## Exercise 1: Server-Sent Events (SSE) Ticker
**Objective:** Build a unidirectional data stream.
1. Create an Express.js route `GET /ticker`.
2. Set the appropriate headers for SSE (`text/event-stream`).
3. Set up a `setInterval` that generates a random number between 1 and 100 every 1 second.
4. Send the data to the client using the `data: ...\n\n` format.
5. Create an `index.html` that uses `new EventSource('/ticker')` to listen to the stream and update a `<div>` with the latest number.

## Exercise 2: Aggregation and Throttling
**Objective:** Protect the client from high-frequency data.
*Scenario: You are receiving raw trade data from a message broker at 500 events per second.*

**Task:**
1. Create an event emitter that emits a `trade` event every 2 milliseconds with a random price.
2. Write a server-side buffer that calculates the `averagePrice` and `tradeCount` over a 1-second window.
3. Every 1 second, emit the `averagePrice` and `tradeCount` to connected WebSocket clients, then reset the buffer.

## Exercise 3: Architecture Diagram (Mental Exercise)
**Objective:** Design a decoupled Notification System.
**Task:** Using Mermaid.js syntax or paper, draw an architecture diagram that handles the following flow:
1. User uploads a video to the `Video Service`.
2. The video finishes processing.
3. The user needs to receive an in-app notification (WebSocket) AND an email.
*Constraint:* The Video Service cannot talk directly to the Email provider or the WebSocket server. Use a Message Broker (Redis/RabbitMQ).

## Exercise 4: Redis Presence System
**Objective:** Implement an expiring presence heartbeat.
1. Install and connect to a local Redis instance (`redis` npm package).
2. Create a Socket.IO server.
3. When a client emits a `heartbeat` event (containing their `userId`), the server should run `redis.set(user:ID:online, true, { EX: 10 })`.
4. Create an Express route `GET /online-users` that scans Redis keys to return a list of currently online users.

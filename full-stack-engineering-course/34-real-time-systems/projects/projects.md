# Module 34: Real-Time Systems Projects

## Project 1: Live Server Monitor
**Difficulty:** Beginner
**Description:** Build a real-time dashboard that monitors the health of a server.
**Requirements:**
- Backend: Node.js Express.
- Setup an endpoint `GET /stream` that returns Server-Sent Events (SSE).
- Every 1 second, the server should read its own RAM usage (`process.memoryUsage()`) and CPU usage.
- Frontend: Vanilla JS using the `EventSource` API to capture the stream.
- Display the memory and CPU usage on a live updating Chart.js or Recharts graph.

## Project 2: Microservice Notification Fan-out
**Difficulty:** Intermediate
**Description:** Build a decoupled notification system.
**Requirements:**
- **Service A (Order Service):** An Express API with a POST `/order` endpoint. When called, it publishes an `OrderPlaced` event to a local Redis Pub/Sub channel.
- **Service B (Notification Service):** A separate Node.js script that subscribes to the Redis channel.
- When Service B receives the event, it should:
  1. Print a mock email to the console.
  2. Emit a WebSocket event to a connected frontend client saying "Your order was placed!".

## Project 3: Scalable Heartbeat Presence Tracker
**Difficulty:** Advanced
**Description:** Track the online status of users in a distributed architecture reliably.
**Requirements:**
- Backend: NestJS or Express with Socket.IO.
- Clients connect and pass a `userId`.
- Clients send a `heartbeat` event every 10 seconds.
- The server writes a key to a real Redis database: `user:{userId}:status` with a TTL of 15 seconds.
- Create an HTTP endpoint `GET /online-users` that scans Redis and returns the IDs of all currently online users.
- *Test:* Terminate a client abruptly (close the browser tab). Prove that after 15 seconds, they disappear from the `/online-users` HTTP endpoint.

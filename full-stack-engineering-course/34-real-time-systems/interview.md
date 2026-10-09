# Module 34: Real-Time Systems Interview Questions

## Junior Level

**1. What are Server-Sent Events (SSE)?**
*Expected Answer:* SSE is a web standard that allows a browser to receive automatic updates from a server via a standard HTTP connection. It is unidirectional (Server to Client only).

**2. How do Push Notifications differ from In-App Notifications?**
*Expected Answer:* In-App notifications only work when the user has the website/app open and actively running (usually via WebSockets). Push Notifications are delivered to the Operating System (via Apple APNs or Google FCM) and pop up on the lock screen even if the app is completely closed.

## Mid Level

**1. Compare WebSockets, Long-Polling, and Server-Sent Events. When would you use each?**
*Expected Answer:*
- **WebSockets:** Bidirectional, low latency. Use for Chat, Multiplayer Games, Collaborative Editing.
- **SSE:** Unidirectional, standard HTTP, native auto-reconnect. Use for Live Feeds, Stock Tickers, Social Media Timelines.
- **Long-Polling:** Client requests data, server holds the request open until data is ready. Only use as a legacy fallback when WebSockets/SSE are blocked by firewalls.

**2. Describe the Publish-Subscribe (Pub/Sub) pattern.**
*Expected Answer:* It's an architectural pattern where publishers emit events without knowing who will consume them, and subscribers listen for specific events without knowing who produced them. A Message Broker (like Redis or RabbitMQ) acts as the middleman, routing the events. It heavily decouples services.

## Senior Level

**1. You are building a real-time analytics dashboard receiving 10,000 events per second from an internal Kafka stream. How do you pass this to the frontend React application?**
*Expected Answer:* You *cannot* stream 10,000 events/sec over WebSockets to a browser; it will crash the client-side DOM and saturate the network. The backend Node.js service must act as a buffer/aggregator. It consumes the Kafka stream, calculates rolling averages or aggregates the data over a time window, and pushes a single consolidated state update to the frontend via SSE or WebSockets at a manageable rate (e.g., 2 times per second).

**2. How do you reliably track "Online Presence" (who is online) in a distributed system?**
*Expected Answer:* Never rely on explicit WebSocket "disconnect" events writing to a persistent database, as a server crash will leave users permanently "online". Instead, use a heartbeat pattern. The client pings the server every 10 seconds. The server updates a Redis key (`user:123:status`) with an Expiration (TTL) of 15 seconds. If the client disconnects or crashes, the heartbeat stops, and Redis automatically expires the key, marking them offline.

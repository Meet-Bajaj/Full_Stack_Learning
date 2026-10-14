# Lesson 05: Design a Chat System

## Learning Objectives
- Design a real-time messaging app (e.g., WhatsApp, Discord).
- Understand WebSocket connections and presence management.
- Discuss message storage for fast retrieval.

## 1. Requirements
- **Functional:** 1-on-1 chat, Group chat, Online presence (status).
- **Non-Functional:** Real-time (low latency), highly available, message ordering is preserved.

## 2. Real-Time Connections
HTTP is request/response (client initiates). For a chat app, the server needs to push messages to the client.
- **WebSockets:** Persistent, bi-directional connection. Ideal for chat.

## 3. Core Architecture
- **Chat Servers:** Hold thousands of active WebSocket connections.
- **Message Sync (Pub/Sub):** If User A is connected to Chat Server 1, and User B is on Chat Server 2, how do they chat? Chat Server 1 publishes the message to a Redis Pub/Sub channel, and Chat Server 2 (subscribed to User B's channel) receives it and pushes it via WebSocket.
- **Presence Server:** Tracks who is online by monitoring heartbeat (ping/pong) messages over the WebSocket.

## 4. Message Storage
- Messages are append-only.
- Read access is mostly for recent messages.
- A NoSQL database like Cassandra or HBase is often used because they excel at high write throughput and range queries (fetching the last 50 messages).

## Summary & Checklist
- [ ] Explain why WebSockets are used over HTTP polling.
- [ ] Describe how Pub/Sub connects different chat servers.
- [ ] Understand the database requirements for message storage.

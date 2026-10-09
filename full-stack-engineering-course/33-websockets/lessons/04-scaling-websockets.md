# Lesson 04: Scaling WebSockets

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand the challenge of scaling stateful WebSocket connections.
- Implement the Redis Adapter for Socket.IO to sync events across instances.
- Configure load balancers for WebSocket traffic using sticky sessions.

---

## 1. The Scaling Problem (The WHY)

### The Mental Model
Imagine you run a massive call center. If Caller A is talking to Agent 1, and Caller B is talking to Agent 2, Caller A and Caller B cannot hear each other unless the agents have an intercom system connecting them.

### The Technical Reality
Standard HTTP APIs are **stateless**. Any server instance can handle any request.
WebSockets are **stateful**. 
- User A connects to `Server 1`. 
- User B connects to `Server 2`.
- User A sends a chat message in "Room 1".
- `Server 1` broadcasts the message to everyone connected to it in "Room 1".
- User B never sees the message because `Server 2` doesn't know about it!

---

## 2. The Solution: Pub/Sub with Redis

To solve this, we introduce a **Message Broker** (usually Redis) acting as the "intercom" between servers.

When `Server 1` wants to broadcast a message, it does two things:
1. Emits the message to its local connected clients.
2. Publishes the message to Redis.

`Server 2` is subscribed to Redis. It receives the message from Redis and emits it to its local connected clients.

### Implementing Socket.IO Redis Adapter

Socket.IO provides an official Redis adapter that handles all this complexity automatically.

```bash
npm install @socket.io/redis-adapter redis
```

```javascript
const { createClient } = require('redis');
const { createAdapter } = require('@socket.io/redis-adapter');
const { Server } = require('socket.io');

const io = new Server(3000);

const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  // Tell Socket.IO to use Redis for broadcasting
  io.adapter(createAdapter(pubClient, subClient));
  
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      // This will now automatically broadcast to clients on ALL server instances!
      io.emit('chat message', msg);
    });
  });
});
```

---

## 3. Load Balancing WebSockets

When you have multiple server instances, you usually put a Load Balancer (like Nginx or AWS ALB) in front of them.

### The Sticky Sessions Requirement
If a client relies on HTTP Long-Polling as a fallback (which Socket.IO does by default during the initial connection phase), their subsequent HTTP requests *must* go to the same server instance that holds their connection state.

If Request 1 goes to Server A, and Request 2 goes to Server B, Server B will say "I don't know who you are" and drop the connection.

This is solved via **Sticky Sessions** (Session Affinity). The Load Balancer uses a cookie (or the client's IP address) to route all requests from a specific user to the same server.

### Nginx Sticky Session Example
```nginx
upstream io_nodes {
  # IP Hash ensures sticky sessions based on client IP
  ip_hash;
  server 127.0.0.1:3001;
  server 127.0.0.1:3002;
  server 127.0.0.1:3003;
}

server {
  listen 80;
  location / {
    proxy_pass http://io_nodes;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
  }
}
```

*Note: If you disable long-polling and force WebSockets only (`transports: ['websocket']`), sticky sessions are technically not required, as the single TCP connection will stay pinned to one server.*

---

## Summary
- WebSockets are stateful; scaling requires a pub/sub backplane.
- Redis Adapter syncs rooms and broadcasts across Node.js instances.
- Load balancers must be configured to pass `Upgrade` headers and use sticky sessions if long-polling is enabled.

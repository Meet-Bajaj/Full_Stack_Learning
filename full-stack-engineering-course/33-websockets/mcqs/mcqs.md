# Module 33: WebSockets MCQs

## Beginner

**Q1: What is the primary limitation of standard HTTP that WebSockets solve?**
A) HTTP cannot transmit binary data.
B) HTTP requires the client to initiate every request, making real-time server pushes inefficient.
C) HTTP connections are encrypted by default, slowing down real-time games.
D) HTTP only supports JSON payloads.
**Correct Answer:** B
**Explanation:** HTTP is a request-response protocol. The server cannot send data to the client unless the client asks for it first. WebSockets provide a persistent, bidirectional channel.
**Difficulty:** Beginner
**Topic:** Fundamentals
**Subtopic:** HTTP vs WebSockets
**Learning Objective:** Understand the limitations of HTTP for real-time applications.

**Q2: Which HTTP header is crucial for initiating a WebSocket connection?**
A) `Content-Type: application/websocket`
B) `Connection: keep-alive`
C) `Upgrade: websocket`
D) `Authorization: Bearer <token>`
**Correct Answer:** C
**Explanation:** The WebSocket handshake begins with an HTTP GET request containing the `Upgrade: websocket` and `Connection: Upgrade` headers.
**Difficulty:** Beginner
**Topic:** Fundamentals
**Subtopic:** Handshake

## Intermediate

**Q3: Why is Socket.IO often chosen over raw WebSockets for production applications?**
A) Socket.IO uses a faster binary protocol than native WebSockets.
B) Socket.IO provides automatic reconnection, fallback to long-polling, and broadcasting rooms.
C) Socket.IO does not require a Node.js server.
D) Raw WebSockets cannot run over HTTPS.
**Correct Answer:** B
**Explanation:** Socket.IO adds a robustness layer (auto-reconnect, rooms, namespaces, fallback) that raw WebSockets lack natively.
**Difficulty:** Intermediate
**Topic:** Socket.IO
**Subtopic:** Features

**Q4: Look at the following Socket.IO server code:**
```javascript
io.on('connection', (socket) => {
  socket.on('join', (room) => {
    socket.join(room);
  });
  socket.on('message', (data) => {
    socket.emit('new_message', data);
  });
});
```
**If User A and User B are in the 'general' room, and User A sends a 'message' event, who receives 'new_message'?**
A) Only User A.
B) Only User B.
C) Both User A and User B.
D) No one, the syntax is wrong.
**Correct Answer:** A
**Explanation:** `socket.emit()` sends the event *only* to the socket that triggered it. To send to the room, it should be `io.to(room).emit()` or `socket.to(room).emit()`.
**Difficulty:** Intermediate
**Topic:** Socket.IO
**Subtopic:** Emitting

## Advanced / Production

**Q5: You have 3 instances of a Node.js Socket.IO server behind an Nginx Load Balancer. User A connects to Server 1. User B connects to Server 2. User A broadcasts a message to 'Room X'. User B does not receive it. How do you fix this?**
A) Configure Nginx to use `ip_hash` to force all traffic to Server 1.
B) Use the `@socket.io/redis-adapter` so servers can publish/subscribe to messages via Redis.
C) Change `socket.emit()` to `io.emit()`.
D) Use Server-Sent Events instead of WebSockets.
**Correct Answer:** B
**Explanation:** WebSockets are stateful. Server 1 knows nothing about Server 2's connected users. A pub/sub broker like Redis is required to sync messages across multiple instances.
**Difficulty:** Advanced
**Topic:** Scaling
**Subtopic:** Redis Adapter

**Q6: What is a critical security vulnerability when using WebSocket connections authenticated via cookies?**
A) Cookies cannot be read during a WebSocket upgrade request.
B) Cross-Site WebSocket Hijacking (CSWSH).
C) Cookies force the connection to drop to HTTP long-polling.
D) WebSockets bypass TLS encryption if cookies are present.
**Correct Answer:** B
**Explanation:** If relying solely on cookies, a malicious site can initiate a WebSocket connection to your server on behalf of the user (since the browser automatically sends the cookie). You must validate the `Origin` header.
**Difficulty:** Production
**Topic:** Security
**Subtopic:** CSWSH

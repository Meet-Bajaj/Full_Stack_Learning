# Lesson 05: WebSocket Security

## Learning Objectives
By the end of this lesson, you will be able to:
- Authenticate WebSocket connections using JWTs.
- Implement origin validation to prevent Cross-Site WebSocket Hijacking (CSWSH).
- Apply rate limiting to WebSocket events to prevent DoS attacks.

---

## 1. Authentication in WebSockets

Standard HTTP authentication often relies on cookies or `Authorization` headers. The WebSocket API in browsers **does not allow customizing HTTP headers** during the handshake (except for basic auth in the URL).

### Approach 1: Query Parameters (Common but slightly insecure)
Pass the token in the URL.
*Warning:* URLs are often logged in server access logs, potentially exposing tokens.

```javascript
// Client
const socket = io('http://localhost:3000?token=YOUR_JWT');

// Server
io.use((socket, next) => {
  const token = socket.handshake.query.token;
  verifyJwt(token, (err, decoded) => {
    if (err) return next(new Error('Authentication error'));
    socket.user = decoded;
    next();
  });
});
```

### Approach 2: Socket.IO Auth Payload (Recommended)
Socket.IO allows passing an `auth` object during connection, which is sent securely in the initial payload, not the URL.

```javascript
// Client
const socket = io('http://localhost:3000', {
  auth: {
    token: 'YOUR_JWT'
  }
});

// Server Middleware
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = payload.id;
    next();
  } catch (err) {
    next(new Error("Not authorized"));
  }
});
```

---

## 2. Cross-Site WebSocket Hijacking (CSWSH)

If a user visits an attacker's website, the attacker's script can attempt to open a WebSocket connection to *your* server. If you rely solely on session cookies (which the browser sends automatically), the connection will succeed, and the attacker can interact with your server as the user.

### Prevention: CORS and Origin Validation
Always validate the `Origin` header during the initial handshake.

```javascript
const io = new Server(server, {
  cors: {
    origin: "https://your-production-app.com",
    methods: ["GET", "POST"]
  }
});
```
*Never use `origin: "*"` in production for authenticated WebSockets.*

---

## 3. Rate Limiting and Input Validation

WebSockets keep connections open, making them prime targets for Denial of Service (DoS) attacks by flooding the server with thousands of events per second.

### Input Validation
Always validate the schema of incoming WebSocket messages, just as you would an HTTP POST body. Use Zod, Joi, or class-validator.

```javascript
socket.on('send_message', (data) => {
  const result = messageSchema.safeParse(data);
  if (!result.success) return socket.emit('error', 'Invalid data');
  // process message...
});
```

### Rate Limiting
Apply rate limiting per socket connection.

```javascript
const rateLimitMap = new Map();

socket.on('chat_message', (msg) => {
  const now = Date.now();
  const lastMessage = rateLimitMap.get(socket.id) || 0;
  
  if (now - lastMessage < 500) { // Limit to 1 msg per 500ms
    return socket.emit('error', 'You are sending messages too fast');
  }
  
  rateLimitMap.set(socket.id, now);
  // process message...
});
```

For robust production rate limiting, you can use libraries like `rate-limiter-flexible` backed by Redis, which can limit based on IP or User ID across all server instances.

---

## Summary
- Pass authentication tokens via the `auth` payload, not query strings.
- Strictly enforce CORS Origins to prevent hijacking.
- Validate all incoming event data payloads.
- Implement rate limiting per connection to prevent socket-level DoS attacks.

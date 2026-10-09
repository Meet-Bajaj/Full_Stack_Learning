# Module 33: WebSockets Interview Questions

## Junior Level

**1. What is a WebSocket, and how does it differ from HTTP?**
*Expected Answer:* HTTP is unidirectional and stateless; the client must request data, and the server responds and closes the connection. WebSockets provide a persistent, bidirectional (full-duplex) connection over a single TCP socket, allowing the server to push data to the client at any time without a request.

**2. Explain the WebSocket Handshake.**
*Expected Answer:* The connection starts as a standard HTTP `GET` request with an `Upgrade: websocket` header. If the server supports it, it responds with an HTTP 101 (Switching Protocols) status. From then on, the HTTP protocol is dropped, and the connection uses the WebSocket binary framing protocol.

**3. When should you NOT use WebSockets?**
*Expected Answer:* For standard CRUD operations, fetching static assets, or data that rarely changes. WebSockets have stateful overhead on the server, so using them for a simple REST API replacement is an anti-pattern.

## Mid Level

**1. Why do we typically use Socket.IO instead of the native `ws` API?**
*Expected Answer:* The native API is barebones. Socket.IO provides crucial production features: 
- Automatic reconnections with backoff.
- Fallback to HTTP Long-Polling if WebSockets are blocked by a corporate firewall.
- High-level APIs for broadcasting, namespaces, and rooms.
- Acknowledgements (callbacks).

**2. How do you handle authentication in WebSockets?**
*Expected Answer:* You cannot send custom HTTP headers (like `Authorization: Bearer`) in the browser's native WebSocket API. You must either pass a token in the query string (e.g., `?token=...`) or, preferably, use Socket.IO's `auth` payload during initialization. The server verifies the JWT in middleware and attaches the user data to the socket object.

**3. What is Cross-Site WebSocket Hijacking (CSWSH) and how do you prevent it?**
*Expected Answer:* If authentication relies solely on cookies, a malicious site can open a WebSocket connection to your server, and the browser will automatically send the victim's cookies. Prevent it by strictly validating the `Origin` header during the initial HTTP handshake.

## Senior Level

**1. You have a chat application that is crashing because it reached 50,000 concurrent users. You decide to spin up 5 Node.js servers behind a Load Balancer. What two architectural changes MUST you make?**
*Expected Answer:*
1. **Sticky Sessions (Session Affinity):** The load balancer must route all HTTP requests from a specific client to the same server, particularly if long-polling is used during the handshake phase.
2. **Pub/Sub Backplane (Redis Adapter):** WebSockets are stateful. User A on Server 1 cannot broadcast a message to User B on Server 2 natively. The servers must publish the message to a Redis cluster, and all servers subscribe to it to emit to their local clients.

**2. How do you prevent a single malicious WebSocket connection from taking down your server (DoS)?**
*Expected Answer:*
- Implement aggressive rate limiting per socket connection (e.g., max 5 messages per second).
- Validate the payload size before parsing it (preventing massive JSON payloads from locking the main thread).
- Validate the schema of incoming messages (using Zod or Joi) to prevent prototype pollution or unexpected logic execution.
- Implement Ping/Pong heartbeats and aggressively sever idle or unresponsive connections to free up file descriptors.

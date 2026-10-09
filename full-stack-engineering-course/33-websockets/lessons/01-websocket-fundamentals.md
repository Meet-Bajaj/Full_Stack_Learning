# Lesson 01: WebSocket Fundamentals

## Learning Objectives
By the end of this lesson, you will be able to:
- Explain why traditional HTTP is insufficient for real-time applications.
- Compare and contrast polling, long-polling, Server-Sent Events (SSE), and WebSockets.
- Understand the WebSocket protocol, handshake process, and framing mechanism.
- Implement a basic raw WebSocket server and client using Node.js and the browser API.

---

## 1. The HTTP Limitation: Why Do We Need WebSockets?

### The Mental Model
Think of traditional HTTP like sending a physical letter (or making a phone call where you have to hang up immediately after speaking). 
1. You (the client) ask a question.
2. The server answers.
3. The connection is closed.

If you want to know if there's an update, you have to keep asking ("Are we there yet? Are we there yet?"). The server cannot tap you on the shoulder to tell you something new has happened; you always have to initiate the conversation.

### Real-World Analogy
**HTTP:** Going to a restaurant counter, ordering a burger, waiting for it, taking it, and leaving. If you want fries later, you have to get back in line, re-introduce yourself, and order again.
**WebSocket:** Sitting at a table with a dedicated waiter standing next to you. You can ask for things at any time, and the waiter can bring you complimentary bread at any time, without you asking.

### Technical Limitations of HTTP for Real-Time
1. **Unidirectional:** The client must always request; the server cannot push.
2. **High Overhead:** Every HTTP request includes headers, cookies, and a new TCP connection (historically, though HTTP/1.1 keep-alive and HTTP/2 multiplexing mitigated this somewhat). 
3. **Latency:** Establishing connections takes time (DNS, TCP handshake, TLS handshake).

---

## 2. The Evolution of Real-Time Hacks

Before WebSockets became a standard, developers used various "hacks" to simulate real-time behavior.

### 1. Short Polling
The client sends an AJAX request every $N$ seconds.
- **Pros:** Simple to implement.
- **Cons:** Horribly inefficient. Most requests return "no new data", wasting bandwidth, server CPU, and battery on mobile devices.

### 2. Long Polling
The client sends a request. The server holds the request open until new data is available. Once data is sent, the client immediately opens a new long-polling request.
- **Pros:** Less empty responses than short polling. Data arrives almost instantly.
- **Cons:** Still carries HTTP overhead. Requires complex server-side connection management to hold requests open without blocking threads.

### 3. Server-Sent Events (SSE)
A unidirectional standard where the client opens a single HTTP connection, and the server streams events down to the client.
- **Pros:** Native browser API (`EventSource`), standard HTTP, automatic reconnection.
- **Cons:** Unidirectional (Server -> Client only).

---

## 3. Enter WebSockets (RFC 6455)

WebSockets provide a **persistent, full-duplex, bidirectional communication channel over a single TCP connection.**

### The Handshake
WebSockets start as an HTTP request! This is brilliant because it allows WebSockets to easily pass through existing firewalls and proxies that expect HTTP on ports 80 and 443.

The client sends a standard HTTP `GET` request with special headers asking to "upgrade" the connection.

**Client Request:**
```http
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

**Server Response:**
```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Once this handshake is complete, HTTP is discarded. The TCP connection stays open, and both sides begin exchanging **WebSocket Frames** (binary or text) with minimal overhead (just 2-10 bytes of framing overhead compared to hundreds of bytes of HTTP headers).

---

## 4. Building a Raw WebSocket Server (Node.js)

While frameworks like `Socket.IO` are standard for production (as we'll see in the next lesson), understanding the raw `ws` library is crucial.

### Initial Setup
```bash
npm init -y
npm install ws
```

### Server (`server.js`)
```javascript
const WebSocket = require('ws');

// Start a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws, req) => {
  const clientIp = req.socket.remoteAddress;
  console.log(`New client connected from ${clientIp}`);

  // Send a welcome message immediately upon connection
  ws.send(JSON.stringify({ type: 'WELCOME', message: 'Hello Client!' }));

  // Listen for messages from this specific client
  ws.on('message', (messageAsString) => {
    console.log(`Received: ${messageAsString}`);
    
    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      // Check if the client's connection is still open
      if (client.readyState === WebSocket.OPEN) {
        client.send(messageAsString.toString());
      }
    });
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
```

### Client (`index.html`)
The WebSocket API is built directly into all modern browsers.

```html
<!DOCTYPE html>
<html>
<body>
  <h2>Raw WebSocket Chat</h2>
  <div id="messages" style="height: 200px; border: 1px solid #ccc; overflow-y: scroll;"></div>
  <input type="text" id="msgInput" placeholder="Type a message..." />
  <button onclick="sendMessage()">Send</button>

  <script>
    // 1. Establish the connection
    const ws = new WebSocket('ws://localhost:8080');

    // 2. Handle connection open
    ws.onopen = () => {
      console.log('Connected to the server');
    };

    // 3. Handle incoming messages
    ws.onmessage = (event) => {
      const messagesDiv = document.getElementById('messages');
      const data = event.data; // Usually JSON, sometimes plain text
      
      try {
        const parsed = JSON.parse(data);
        messagesDiv.innerHTML += `<p>${parsed.message || data}</p>`;
      } catch (e) {
        messagesDiv.innerHTML += `<p>${data}</p>`;
      }
    };

    // 4. Handle connection close
    ws.onclose = () => {
      console.log('Disconnected from server');
    };

    function sendMessage() {
      const input = document.getElementById('msgInput');
      const text = input.value;
      
      // Send data to the server
      ws.send(JSON.stringify({ type: 'CHAT', text: text }));
      input.value = '';
    }
  </script>
</body>
</html>
```

---

## 5. Common Pitfalls & Considerations

1. **Connections Dropping:** Proxies (like Nginx) and load balancers often silently drop idle TCP connections after 30-60 seconds. 
   *Solution:* Implement **Ping/Pong** heartbeats. The server sends a Ping, the client replies with a Pong to keep the connection alive.
2. **Statefulness:** WebSockets are stateful. If a user connects to Server A, their WebSocket lives in Server A's memory. If Server A restarts, the connection dies. If a user on Server B sends a message, Server A doesn't naturally know about it. (We'll solve this with Redis in Lesson 04).
3. **No Built-in Authentication:** The WebSocket protocol doesn't have an authentication mechanism. You must pass tokens in the query string or the initial HTTP headers during the handshake.

---

## 6. Summary and Checklist
- [ ] Understand the difference between Polling, Long-Polling, SSE, and WebSockets.
- [ ] Understand the 101 Protocol Upgrade handshake.
- [ ] Can create a basic `ws` server in Node.js.
- [ ] Can connect to a server using the browser's native `WebSocket` API.

---

## Challenge Exercise
Modify the server code above so that when a user connects, the server asks them for a "username". Store this username in a `Map` associating the `ws` object with the string username, and prefix all their broadcasted messages with `[Username]: `.

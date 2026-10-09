# Lesson 02: Server-Sent Events (SSE)

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand what Server-Sent Events (SSE) are and how they differ from WebSockets.
- Implement an SSE server endpoint in Node.js.
- Consume SSE data using the browser's `EventSource` API.
- Identify the correct use cases for SSE.

---

## 1. What are Server-Sent Events?

Server-Sent Events (SSE) is a web standard allowing servers to push real-time updates to clients over a standard HTTP connection.

Unlike WebSockets (which are bidirectional), **SSE is strictly unidirectional (Server -> Client).**

### The Mental Model
If a WebSocket is a two-way radio, SSE is a radio broadcast tower. The client tunes in (connects) and just listens to the music (events) the server broadcasts. If the client wants to talk to the server, they must make a separate, standard HTTP request (like calling into the radio station via a regular phone).

### Why use SSE over WebSockets?
1. **Simplicity:** It uses standard HTTP/1.1 or HTTP/2. No special upgrade protocols.
2. **Native Reconnection:** The browser automatically attempts to reconnect if the connection drops.
3. **Corporate Firewalls:** Since it's standard HTTP traffic (Content-Type: `text/event-stream`), it is rarely blocked by strict firewalls, whereas WebSockets sometimes are.
4. **Caching & Proxies:** Plays much nicer with standard web infrastructure.

---

## 2. Implementing SSE

### Server-Side (Express.js)
To create an SSE endpoint, you must set specific HTTP headers and keep the response object open.

```javascript
const express = require('express');
const app = express();

app.get('/stream', (req, res) => {
  // 1. Set SSE required headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Send an initial message
  res.write('data: Connected to stream\n\n');

  // Simulate a live feed (e.g., stock price updates)
  const intervalId = setInterval(() => {
    const data = JSON.stringify({ price: Math.random() * 100, time: new Date() });
    
    // SSE Format: "event: [name]\ndata: [payload]\n\n"
    res.write(`event: price_update\n`);
    res.write(`data: ${data}\n\n`);
  }, 1000);

  // Handle client disconnection
  req.on('close', () => {
    clearInterval(intervalId);
    console.log('Client disconnected from SSE');
  });
});

app.listen(3000, () => console.log('SSE server running on port 3000'));
```

### Client-Side (`EventSource` API)
The browser provides a built-in API for SSE.

```javascript
// Connect to the stream
const eventSource = new EventSource('http://localhost:3000/stream');

// Listen for default unnamed events
eventSource.onmessage = (event) => {
  console.log('Received data:', event.data);
};

// Listen for specific named events (from 'event: price_update')
eventSource.addEventListener('price_update', (event) => {
  const parsedData = JSON.parse(event.data);
  console.log('New Price:', parsedData.price);
});

// Handle errors or disconnections
eventSource.onerror = (error) => {
  console.error('SSE Error:', error);
  // EventSource will automatically attempt to reconnect!
};

// Close the connection manually if needed
// eventSource.close();
```

---

## 3. SSE Format Rules

SSE data is strictly plain text. The protocol requires specific keywords followed by a colon.

- `data: Hello World\n\n` - Basic data payload.
- `event: customEvent\ndata: Payload\n\n` - Named event.
- `id: 12345\n\n` - Assigns an ID to the event. If the client disconnects, it sends this ID back in the `Last-Event-ID` HTTP header on reconnect!
- `retry: 5000\n\n` - Tells the browser to wait 5 seconds before trying to reconnect on failure.

---

## 4. When to use SSE vs WebSockets

| Feature | WebSockets | Server-Sent Events (SSE) |
|---------|------------|--------------------------|
| **Direction** | Bidirectional | Unidirectional (Server to Client) |
| **Protocol** | Custom TCP Protocol (`ws://`) | Standard HTTP (`http://`) |
| **Data Format** | Binary or Text | UTF-8 Text only |
| **Auto-Reconnect**| No (requires custom code or library) | Yes (Built into browser) |
| **Best For** | Chat apps, Multiplayer Games, Collaborative Editing | Live feeds, Twitter timelines, Dashboards, Notification streams |

## Summary
SSE is an incredibly underrated technology. For 80% of web applications that just need to push updates (like "Order Shipped" or "New Tweet") to the client, SSE is vastly simpler and more robust than WebSockets.

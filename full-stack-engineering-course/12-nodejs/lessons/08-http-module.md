# Lesson 8: The HTTP Module

Node.js has a built-in `http` module to create web servers without needing external dependencies like Apache or Nginx.

## Creating a Server

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // `req` is a Readable stream
  // `res` is a Writable stream
  
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } else if (req.url === '/api' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'API is working' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

## Handling POST Requests
Because `req` is a readable stream, you must listen for `data` events to reconstruct the request body payload chunk by chunk.

```javascript
if (req.url === '/submit' && req.method === 'POST') {
  let body = '';
  
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  
  req.on('end', () => {
    console.log('Received data:', body);
    res.writeHead(201);
    res.end('Data received');
  });
}
```

## Why We Use Frameworks (e.g., Express, Fastify)
As you can see, routing manually with `if/else` blocks and manually concatenating stream chunks for POST bodies is extremely tedious. 
Frameworks abstract this away:
- They provide built-in routers.
- They provide middleware for parsing JSON bodies automatically.
- They handle errors gracefully.

However, understanding the raw `http` module is essential because Express is just a wrapper around `http.createServer()`.

## Summary Checklist
- [ ] Create a basic HTTP server.
- [ ] Understand that `req` and `res` are streams.
- [ ] Read JSON data from a POST request manually.

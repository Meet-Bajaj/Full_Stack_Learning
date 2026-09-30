# Lesson 01: Introduction to Express.js

## 🎯 Learning Objectives
- Understand what Express.js is and why it exists.
- Contrast Express with the native Node.js `http` module.
- Understand the core philosophy of Express (minimal, unopinionated).
- Compare Express with other frameworks (Fastify, Koa, NestJS).

## 🧠 Mental Model: The Fast-Food Counter
Think of building a server with native Node.js like cooking a full meal from scratch in an empty kitchen—you have to build the oven before you can bake. 
Express.js is like a **Fast-Food Counter**. You have a predefined counter (the server) where customers (clients) line up. They give you an order (`request`), you process it quickly using predefined stations (middleware), and you hand them their food back (`response`). Express gives you the stations and the counter, you just decide what food to serve.

## 📖 Concept Explanation

### What is Express.js?
Express is a fast, unopinionated, minimalist web framework for Node.js. It sits on top of Node's native `http` module and abstracts away the tedious parts of building web servers (like parsing URLs, handling streaming chunks of data, and managing response headers).

### Why use Express?
If you've ever tried to build an API using just `require('http')`, you know how difficult it is to:
- Parse a JSON body.
- Handle different URL paths (routing).
- Extract parameters from a URL (`/users/:id`).
Express handles all of this natively with a clean, readable API.

### Native Node.js vs Express

**Native Node.js:**
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello World' }));
  } else if (req.method === 'GET' && req.url === '/users') {
    // Handling routes is a nightmare of if/else statements
  }
});

server.listen(3000);
```

**Express.js:**
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.get('/users', (req, res) => {
  res.json([{ name: 'Alice' }]);
});

app.listen(3000, () => console.log('Server running!'));
```

### Express vs Other Frameworks
- **Express**: Minimalist, unopinionated. You choose your own database, validation, and architecture.
- **Fastify**: Focuses heavily on performance and speed. Very similar to Express but faster.
- **Koa**: Created by the team behind Express. Uses modern async/await patterns heavily but is even more barebones than Express.
- **NestJS**: Highly opinionated, uses TypeScript, heavily inspired by Angular. (Covered in Module 14).

## ⚠️ Common Mistakes
- **Assuming Express solves everything**: Express doesn't come with a database ORM, an input validator, or an authentication strategy. You have to piece these together using community packages.
- **Not understanding it's just Node**: Express is just a wrapper around `http`. Any native Node.js HTTP feature still works inside Express.

## 🏋️ Exercises
1. Initialize a new npm project, install `express`, and create a server that listens on port 8080.
2. Create three routes: `/` (returns "Home"), `/about` (returns "About Us"), and `/contact` (returns a JSON object with your email).

## ✅ Summary Checklist
- [ ] I understand how Express simplifies native Node.js HTTP.
- [ ] I can explain the difference between opinionated and unopinionated frameworks.
- [ ] I can initialize and start a basic Express server.

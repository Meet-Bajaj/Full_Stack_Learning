# Express.js Cheat Sheet

## Basic Server Setup
```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Built-in middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Routing
```javascript
// GET request
app.get('/api/users', (req, res) => {
  res.json({ message: 'Get all users' });
});

// POST request with body
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json(newUser);
});

// Route Parameters
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Query Parameters (/api/search?q=express)
app.get('/api/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search query: ${query}`);
});
```

## Middleware
```javascript
// Global Middleware (runs on all routes)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
});

// Route-specific Middleware
const requireAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

app.get('/api/protected', requireAuth, (req, res) => {
  res.json({ secret: 'data' });
});
```

## Error Handling
```javascript
// Catch-all route for 404
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global Error Handler (must have 4 arguments)
app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || 'Internal Server Error'
  });
});
```

## Express Router (Modular Routes)
```javascript
// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Users list'));
router.post('/', (req, res) => res.send('Create user'));

module.exports = router;

// app.js
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
```

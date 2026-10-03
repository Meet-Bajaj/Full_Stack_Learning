# Express.js Cheat Sheet

## Server Setup
```javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Basic middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.listen(port, () => console.log(`Listening on ${port}`));
```

## Routing & Requests
```javascript
// Basic Route
app.get('/api/users', (req, res) => res.json(users));

// Route Parameters
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
});

// Query Strings (?search=abc&limit=10)
app.get('/api/posts', (req, res) => {
  const { search, limit } = req.query;
});

// Modular Routers
const router = express.Router();
router.get('/', handler);
app.use('/api/v1', router); // Mounts router at /api/v1
```

## Middleware
```javascript
// Global Middleware
app.use((req, res, next) => {
  console.log('Request received');
  next(); // MUST CALL NEXT
});

// Route-specific Middleware
const checkAuth = (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).send('Unauthorized');
  next();
};
app.post('/protected', checkAuth, (req, res) => res.send('Success'));
```

## Response Methods
```javascript
res.send('Hello');            // Send string/buffer
res.json({ key: 'value' });   // Send JSON
res.status(404).json(...);    // Chain status code
res.redirect('/home');        // Redirect
res.sendFile('/path/to/file');// Send file to browser
res.cookie('name', 'val');    // Set cookie
```

## Global Error Handler
```javascript
// Must have exactly 4 arguments and be placed AT THE END of all routes
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});
```

## Essential Packages
- `cors` - Enable Cross-Origin Resource Sharing
- `helmet` - Security headers
- `express-rate-limit` - Prevent brute-force/DDoS
- `morgan` - Request logging
- `multer` - File uploads (`multipart/form-data`)
- `express-async-errors` - Handle async errors without try/catch everywhere (Express 4.x)
- `zod` - Input validation

# Lesson 02: Routing

## 🎯 Learning Objectives
- Master HTTP methods (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`).
- Learn to extract dynamic data using Route Parameters and Query Strings.
- Understand how to use `express.Router` to organize routes modularly.

## 🧠 Mental Model: The Post Office Sorting Room
When a letter (HTTP request) arrives at a post office, the sorter looks at the zip code and address (URL path) and the delivery instruction (HTTP method). 
Routing in Express is the sorting room. It guarantees that a `GET` request for `/users/5` goes to the specific worker (route handler) responsible for fetching user #5, while a `DELETE` request for `/users/5` goes to the worker who deletes users.

## 📖 Concept Explanation

### Route Methods
Express provides methods that correspond to HTTP verbs.

```javascript
app.get('/api/data', (req, res) => { /* Read data */ });
app.post('/api/data', (req, res) => { /* Create data */ });
app.put('/api/data', (req, res) => { /* Replace data completely */ });
app.patch('/api/data', (req, res) => { /* Update data partially */ });
app.delete('/api/data', (req, res) => { /* Delete data */ });
```

### Route Parameters (Path Variables)
Used to capture values specified at a specific position in the URL.
```javascript
// URL: /users/34/books/8989
app.get('/users/:userId/books/:bookId', (req, res) => {
  const { userId, bookId } = req.params;
  res.send(`User: ${userId}, Book: ${bookId}`);
});
```

### Query Strings
Used for optional parameters, filtering, pagination, and sorting. They come after the `?` in the URL.
```javascript
// URL: /products?category=shoes&sort=price_asc
app.get('/products', (req, res) => {
  const category = req.query.category; // "shoes"
  const sort = req.query.sort; // "price_asc"
  res.send(`Filtering by ${category}, sorting by ${sort}`);
});
```

### Modular Routing with `express.Router`
As your application grows, putting all routes in `index.js` becomes unmaintainable. `express.Router` lets you create mini-Express applications.

**users.router.js:**
```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Get all users'));
router.post('/', (req, res) => res.send('Create a user'));
router.get('/:id', (req, res) => res.send(`Get user ${req.params.id}`));

module.exports = router;
```

**index.js:**
```javascript
const express = require('express');
const userRouter = require('./users.router');

const app = express();

// All routes inside userRouter are now prefixed with '/users'
app.use('/users', userRouter); 
```

## ⚠️ Common Mistakes
1. **Route Ordering:** Express checks routes top-to-bottom. 
   ```javascript
   // WRONG
   app.get('/users/:id', ...); 
   app.get('/users/admin', ...); // This will never run! "admin" is captured by ":id"
   ```
   **Fix**: Put specific routes *before* dynamic routes.
2. **Missing `req.params` mapping:** Typos in the parameter name are common (e.g., using `req.params.userId` when the route is defined as `/:id`).

## 🔐 Security & Performance
- **Query limits:** Malicious users might send huge arrays in query strings (`?id=1&id=2...`). Always validate the shape of `req.query` (covered in Lesson 06).
- **Route limits:** Use strict regex for route parameters if they should only be numbers: `app.get('/users/:id(\\d+)', ...)`

## 🏋️ Exercises
1. Build an Express router for a `/posts` resource with full CRUD operations.
2. Create a route that handles a search query `GET /search?q=express&limit=10` and returns the parsed query object.

## ✅ Summary Checklist
- [ ] I can define routes for different HTTP methods.
- [ ] I can extract data from `req.params` and `req.query`.
- [ ] I can split routes into separate files using `express.Router()`.

# Lesson 11: Testing Express Applications

## 🎯 Learning Objectives
- Learn how to test HTTP endpoints using **Supertest**.
- Differentiate between Unit testing (Services) and Integration testing (Routes/Controllers).
- Understand how to isolate the database for testing.

## 🧠 Mental Model: The Quality Assurance Team
- **Unit Testing**: Testing the engine parts individually before building the car. (Testing your `UserService` functions directly).
- **Integration Testing**: Turning the key and seeing if the engine, transmission, and wheels work together. (Sending a fake HTTP request to your Express app and checking the HTTP response).

## 📖 Concept Explanation

### Tooling
We use **Jest** as our test runner and assertion library, and **Supertest** to simulate HTTP requests against our Express app without actually opening a network port.

### Setting up the App for Testing
If your `server.js` both creates the app AND calls `app.listen()`, Supertest will hang because the port is occupied.
**Solution:** Export `app` without listening!

```javascript
// app.js - Setup Express
const express = require('express');
const app = express();
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
module.exports = app;

// server.js - Actually start the server
const app = require('./app');
app.listen(3000, () => console.log('Running!'));
```

### Writing an Integration Test with Supertest
```javascript
// __tests__/health.test.js
const request = require('supertest');
const app = require('../app'); // Import the unstarted Express app

describe('GET /api/health', () => {
  it('should return 200 OK and JSON status', async () => {
    const response = await request(app).get('/api/health');
    
    // Assertions
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body.status).toBe('ok');
  });
});
```

### Testing Protected Routes
How do you test a route that requires authentication? You have to send the JWT in the test!

```javascript
describe('POST /api/posts', () => {
  it('should deny access if no token provided', async () => {
    const res = await request(app).post('/api/posts').send({ title: 'Hello' });
    expect(res.status).toBe(401);
  });

  it('should create a post if authenticated', async () => {
    // 1. You can either mock the auth middleware, OR
    // 2. Generate a valid token for testing
    const token = generateTestToken({ id: 1, role: 'admin' });

    const res = await request(app)
      .post('/api/posts')
      .set('Authorization', `Bearer ${token}`) // Set the header!
      .send({ title: 'My New Post' });
      
    expect(res.status).toBe(201);
  });
});
```

## ⚠️ Common Mistakes
- **Testing against the Production Database:** NEVER do this. Use a separate test database or an in-memory database like SQLite for testing, and clear it before every test suite using `beforeAll()` or `beforeEach()`.
- **Not separating `app.js` and `server.js`:** Leading to EADDRINUSE (port already in use) errors when running test suites in parallel.

## 🏋️ Exercises
1. Set up Jest and Supertest in a project.
2. Write a test suite for a `GET /users` endpoint that verifies it returns a `200` status code, is an array, and contains specific mocked user data.

## ✅ Summary Checklist
- [ ] I can separate `app.js` from `server.js` to enable testing.
- [ ] I can use Supertest to simulate GET and POST requests.
- [ ] I know how to set HTTP headers (like Authorization) in Supertest.

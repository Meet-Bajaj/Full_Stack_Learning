# Lesson 6: API Testing

## Learning Objectives
- Test API endpoints using Supertest.
- Test middlewares and authentication flows.
- Validate API responses.

## Supertest Basics
Supertest allows you to test HTTP requests without actually spinning up a port.

```javascript
const request = require('supertest');
const app = require('./app');

it('GET /api/users returns 200', async () => {
  const res = await request(app).get('/api/users');
  expect(res.statusCode).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});
```

## Testing Authentication
For protected routes, inject a mock token or session cookie directly into the Supertest request headers.

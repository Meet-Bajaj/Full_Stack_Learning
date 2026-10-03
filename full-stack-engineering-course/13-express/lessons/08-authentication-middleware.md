# Lesson 08: Authentication Middleware

## 🎯 Learning Objectives
- Understand how to protect routes using JSON Web Tokens (JWT).
- Write a custom authentication middleware.
- Understand the Authorization HTTP header.
- Differentiate between Authentication (Who are you?) and Authorization (What can you do?).

## 🧠 Mental Model: The VIP Club Wristband
When a user logs in, it's like showing their ID to get a **Wristband** (the JWT). 
Once they have the wristband, they don't need to show their ID (password) again. When they want to enter the VIP section (a protected route), the bouncer (Authentication Middleware) just checks the wristband. If it's valid, they enter. If it's fake or expired, they get thrown out (401 Unauthorized).

## 📖 Concept Explanation

### The JWT Flow
1. Client sends `POST /login` with email/password.
2. Server verifies password, creates a JWT, and sends it back.
3. Client stores the JWT (in localStorage or cookies).
4. Client sends `GET /protected-route` with the JWT in the `Authorization: Bearer <token>` header.
5. Server middleware verifies the token and allows/blocks access.

### Creating the Middleware
We use the `jsonwebtoken` package to verify the token.

```javascript
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  // 1. Get token from header
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]; // Extract the actual token
  }

  // 2. Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Not authorized to access this route. No token.' });
  }

  try {
    // 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 4. Attach user data to the request object!
    req.user = decoded; // decoded contains whatever payload we signed (e.g., { id: 1, role: 'admin' })
    
    next(); // Let them in
  } catch (err) {
    return res.status(401).json({ message: 'Token is invalid or expired' });
  }
};
```

### Applying the Middleware
```javascript
// Only authenticated users can access the dashboard
app.get('/dashboard', protect, (req, res) => {
  res.json({ message: `Welcome User ID: ${req.user.id}` });
});
```

### Authorization (Role-Based Access Control)
Authentication tells us the user is logged in. Authorization tells us if they have permission.
We can write a factory function middleware for this:

```javascript
const authorize = (...roles) => {
  return (req, res, next) => {
    // req.user was set by the `protect` middleware!
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: 'Forbidden. You do not have permission.' 
      });
    }
    next();
  };
};

// Protect first, THEN authorize
app.delete('/users/:id', protect, authorize('admin', 'superadmin'), (req, res) => {
  res.send('User deleted');
});
```

## ⚠️ Common Mistakes
1. **Not keeping `JWT_SECRET` secret:** Never hardcode your secret. Always use `process.env.JWT_SECRET`.
2. **Missing `next()`:** If authentication passes, you must call `next()`, or the request hangs.
3. **Not handling expired tokens:** `jwt.verify` throws an error if the token is expired. Your try/catch block must catch it.

## 🏋️ Exercises
1. Write a login route that accepts `username` and `password` (hardcode a valid pair), and returns a signed JWT valid for 1 hour.
2. Build an endpoint `/me` that uses the `protect` middleware to return the user's decoded information.

## ✅ Summary Checklist
- [ ] I can extract a Bearer token from the headers.
- [ ] I can verify a JWT and handle failures.
- [ ] I can attach the decoded payload to the `req` object for downstream use.
- [ ] I understand the difference between 401 Unauthorized and 403 Forbidden.

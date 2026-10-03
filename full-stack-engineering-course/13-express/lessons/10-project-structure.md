# Lesson 10: Project Structure & Clean Architecture

## 🎯 Learning Objectives
- Move beyond putting everything in `index.js`.
- Understand the separation of concerns: Routes, Controllers, Services, and Data Access.
- Structure an Express app for scalability and maintainability.

## 🧠 Mental Model: The Corporate Office
If a company only has 1 employee, that person answers the phone, does the math, and files the paperwork (everything in `index.js`). 
As the company grows, it needs departments:
- **Routers (Receptionist)**: Answers the phone and routes the call to the right department.
- **Controllers (Managers)**: Receives the call, understands what is needed, and delegates the heavy lifting to the workers. Handles the HTTP Response.
- **Services (Workers/Engineers)**: Does the actual complex business logic. Doesn't know anything about HTTP.
- **Repositories / Models (Filing Clerks)**: The only ones allowed to talk to the database (filing cabinets).

## 📖 Concept Explanation

### A Scalable Folder Structure
Express doesn't enforce a structure. Here is the industry standard for medium-to-large apps:

```text
src/
├── config/           # Environment variables, DB connection setup
├── controllers/      # Route handlers (req, res)
├── services/         # Business logic
├── models/           # Database schemas/models (Mongoose, Prisma, etc.)
├── routes/           # Express routers mapping URLs to Controllers
├── middlewares/      # Custom middleware (auth, validation, error handler)
├── utils/            # Helper functions (logger, email sender)
├── app.js            # Express instance setup (middleware, routes)
└── server.js         # Entry point (app.listen)
```

### Layer Separation in Practice

**1. The Route (`routes/user.routes.js`)**
Only responsible for mapping HTTP methods to controller functions and applying middleware.
```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { protect } = require('../middlewares/auth');

router.post('/', userController.createUser);
router.get('/:id', protect, userController.getUser);

module.exports = router;
```

**2. The Controller (`controllers/user.controller.js`)**
Only responsible for handling the HTTP request/response. It extracts data from `req` and passes it to the Service.
```javascript
const userService = require('../services/user.service');

exports.createUser = async (req, res, next) => {
  try {
    // 1. Extract data
    const { email, password } = req.body;
    
    // 2. Call service layer
    const newUser = await userService.register(email, password);
    
    // 3. Send response
    res.status(201).json(newUser);
  } catch (error) {
    next(error); // Pass to global error handler
  }
};
```

**3. The Service (`services/user.service.js`)**
Pure business logic. It does NOT take `req` or `res` objects. This makes it incredibly easy to test or reuse!
```javascript
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.register = async (email, password) => {
  // Business logic: check if user exists
  const existingUser = await User.findByEmail(email);
  if (existingUser) {
    throw new Error('Email already in use'); 
  }

  // Business logic: hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Database operation
  return await User.create({ email, password: hashedPassword });
};
```

## ⚠️ Common Mistakes
- **Fat Controllers:** Putting all database queries, password hashing, and email sending directly inside the `(req, res)` function. This makes testing impossible and code unreadable.
- **Services talking to HTTP:** If your `user.service.js` uses `res.status()`, you've broken the architecture. Services should throw errors or return data, leaving the Controller to decide what HTTP status code to send.

## 🏋️ Exercises
1. Refactor a basic "fat controller" CRUD app (provided in the exercises folder) into the Route-Controller-Service pattern.
2. Write a pure unit test for a Service function (since it doesn't require mocking `req` and `res`).

## ✅ Summary Checklist
- [ ] I understand why separation of concerns is necessary.
- [ ] I can differentiate the responsibilities of a Controller vs a Service.
- [ ] I can set up a modular file structure for a new Express project.

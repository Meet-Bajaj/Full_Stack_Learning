# Lesson 06: Input Validation & Sanitization

## 🎯 Learning Objectives
- Understand the security risks of trusting client data.
- Learn how to validate incoming request data using **Zod**.
- Implement a reusable validation middleware.
- Understand the difference between validation and sanitization.

## 🧠 Mental Model: The Bouncer and The Metal Detector
When people (HTTP requests) enter a club (your server), you don't just let anyone in. 
- **Validation** is the bouncer checking IDs: "Are you 18? Is your name on the list?" (Is the email a valid string? Is the age a number?).
- **Sanitization** is the metal detector and pat-down: "Let me remove these dangerous items before you go in." (Stripping HTML tags to prevent XSS, trimming whitespace).

## 📖 Concept Explanation

If you don't validate input, your database might crash, you might suffer NoSQL injection, or your UI might break when it expects a number but gets a string.

### Using Zod for Schema Validation
Zod is a TypeScript-first schema declaration and validation library. It is heavily preferred over older libraries like Joi or express-validator because of its strict typing.

```javascript
const { z } = require('zod');

// Define a schema for a new user
const createUserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(20),
  email: z.string().email("Invalid email address"),
  age: z.number().int().positive().optional(),
});
```

### The Validation Middleware
Instead of validating inside every controller, we write a generic middleware that takes a Zod schema and validates the `req.body`, `req.query`, or `req.params`.

```javascript
const validate = (schema) => {
  return (req, res, next) => {
    try {
      // parse() throws an error if validation fails
      // It also strips out unknown properties if configured to do so!
      schema.parse(req.body); 
      next();
    } catch (error) {
      // Zod errors are detailed, we map them to a readable format
      const errorMessages = error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }));
      
      return res.status(400).json({
        success: false,
        errors: errorMessages
      });
    }
  };
};
```

### Using the Middleware
```javascript
app.post('/register', validate(createUserSchema), (req, res) => {
  // If we reach here, we are 100% sure req.body matches our schema!
  const { username, email, age } = req.body;
  // Save to database...
  res.status(201).json({ message: 'User created' });
});
```

### Sanitization
Zod can also sanitize data (transforming it).
```javascript
const querySchema = z.object({
  // If the user sends ?limit=10, it comes in as a string "10".
  // coerce.number() sanitizes/transforms the string into a real integer!
  limit: z.coerce.number().min(1).max(100).default(10),
  
  // trim() removes whitespace, toLowerCase() normalizes it
  search: z.string().trim().toLowerCase().optional(),
});
```

## ⚠️ Common Mistakes
1. **Trusting the frontend**: "I have HTML5 form validation, I don't need backend validation." **FALSE.** Attackers bypass the frontend entirely using Postman or cURL. The backend MUST validate everything.
2. **Returning raw error objects**: Don't just dump Zod's raw error object to the user. Format it nicely (as shown in the middleware example) so the frontend can display errors next to the form fields.

## 🔐 Security Considerations
- **Excessive Data**: Always prevent users from sending data they shouldn't. If `req.body` contains `{ "role": "admin" }` and you don't filter it out, you might accidentally save them as an admin! Zod's `.strip()` (default behavior) automatically removes fields that aren't defined in the schema.

## 🏋️ Exercises
1. Create a validation schema for a "Login" route (email and password). Password must be at least 8 characters.
2. Write a schema for a query string that accepts `page` and `limit`, coercing both to integers and ensuring they fall within sensible bounds (e.g., max limit 50).

## ✅ Summary Checklist
- [ ] I understand why backend validation is strictly required.
- [ ] I can create a Zod schema.
- [ ] I can write and apply a generic validation middleware.

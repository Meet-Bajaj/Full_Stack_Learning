# Lesson 13: Environment Variables & Configuration

Hardcoding configuration (like Database passwords, API keys, and Ports) into your source code is a major security risk and bad practice according to the **12-Factor App methodology**.

## process.env
Node.js provides the `process.env` object, which contains the user environment.

```javascript
// Starting the app: PORT=8080 node server.js
const port = process.env.PORT || 3000;
console.log(`Starting server on port ${port}`);
```

## The dotenv Package
Passing variables via the command line gets tedious. The community standard is the `dotenv` package.
1. `npm install dotenv`
2. Create a `.env` file in your project root:
```env
PORT=8080
DB_HOST=localhost
DB_PASS=supersecret123
```
3. Load it at the *very top* of your application:
```javascript
require('dotenv').config();
console.log(process.env.DB_PASS);
```

**CRITICAL:** NEVER commit your `.env` file to Git. Always add `.env` to your `.gitignore` file. Instead, commit a `.env.example` file with dummy values.

## Environment-Specific Configuration
Often you will check `NODE_ENV` to determine how the app should behave:
```javascript
if (process.env.NODE_ENV === 'production') {
  // Use secure cookies, connect to production DB
} else {
  // Enable verbose logging, connect to local DB
}
```

## Summary Checklist
- [ ] Understand the 12-Factor App config principle.
- [ ] Use `process.env`.
- [ ] Setup and use the `dotenv` package.
- [ ] Add `.env` to `.gitignore`.

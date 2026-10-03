# Express.js Exercises

## 1. Code Reading Exercise: Spot the Bug
**Scenario:** A junior developer wrote this code to fetch a user and update their last login date. It works sometimes, but randomly crashes the server. Find the bug.

```javascript
app.get('/users/:id', async (req, res, next) => {
  const user = await User.findById(req.params.id);
  
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  }

  user.lastLogin = new Date();
  await user.save();

  res.json(user);
});
```

*Solution Hint:* What happens to the execution flow after `res.status(404).json()`? Does the function stop?

## 2. Fill in the Blanks: Middleware Chain
Complete the middleware chain so that it logs the request, checks for an API key, and then serves the data.

```javascript
const express = require('express');
const app = express();

const logger = (req, res, ____) => {
  console.log(req.method, req.url);
  ____();
};

const checkApiKey = (req, res, ____) => {
  if (req.headers['x-api-key'] !== '123') {
    return res.________(403).json({ error: 'Forbidden' });
  }
  ____();
};

app.use(____);

app.get('/data', ____, (req, res) => {
  res.json({ secret: 'data' });
});
```

## 3. Architecture Refactoring
Take the following "fat controller" and separate it into a Controller and a Service.

```javascript
// Route: POST /register
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // DB Check
    const existing = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existing.length > 0) return res.status(400).send('Email exists');
    
    // Hash
    const hash = await bcrypt.hash(password, 10);
    
    // Insert
    await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hash]);
    
    res.status(201).send('Created');
  } catch (err) {
    res.status(500).send('Server Error');
  }
});
```

## 4. Debugging Error Handlers
Why won't this global error handler catch errors thrown in the `/api/data` route?

```javascript
const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
});

app.get('/api/data', (req, res) => {
  throw new Error('Database disconnected!');
});

app.listen(3000);
```

# Module 27 Cheatsheet

### XSS Prevention
- Never trust user input.
- Use `DOMPurify.sanitize()` before `dangerouslySetInnerHTML`.
- Use React's default text rendering.

### SQLi Prevention
```javascript
// Parameterized (Safe)
db.query('SELECT * FROM users WHERE id = $1', [userId])
```

### Helmet Setup
```javascript
const helmet = require('helmet');
app.use(helmet());
```

### Password Hashing
```javascript
const bcrypt = require('bcrypt');
const hash = await bcrypt.hash(password, 10);
const match = await bcrypt.compare(password, hash);
```

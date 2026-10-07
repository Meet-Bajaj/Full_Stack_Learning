# Lesson 5: Injection

## Learning Objectives
- Identify SQL, NoSQL, and Command injection vulnerabilities.
- Prevent injections using parameterized queries and ORMs.

## SQL Injection Example
```sql
-- Vulnerable Node.js code
const query = `SELECT * FROM users WHERE email = '${req.body.email}'`;
```
If `email` is `admin@a.com' OR '1'='1`, the query becomes:
`SELECT * FROM users WHERE email = 'admin@a.com' OR '1'='1'`

## Prevention
Always use **Parameterized Queries** or an ORM/Query Builder (like Prisma or Kysely).

```javascript
// Secure
await db.query('SELECT * FROM users WHERE email = $1', [req.body.email]);
```

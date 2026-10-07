# Lesson 11: API Security

## Learning Objectives
- Implement Rate Limiting.
- Prevent Broken Object Level Authorization (BOLA).
- Prevent Mass Assignment.

## BOLA (IDOR)
Broken Object Level Authorization occurs when an API endpoint uses an ID from the client without verifying the user actually owns that resource.
*Fix*: Always check ownership: `SELECT * FROM posts WHERE id = $1 AND user_id = $2`.

## Mass Assignment
Occurs when you blindly bind client input to the database.
```javascript
// BAD
await db.user.update(req.body); // Attacker sends { isAdmin: true }
```
*Fix*: Explicitly pick the fields allowed to be updated.

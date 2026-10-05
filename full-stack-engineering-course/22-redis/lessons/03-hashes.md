# Lesson 3: Hashes

Hashes are maps between string fields and string values, ideal for representing objects (e.g., a User).
- `HSET user:1000 username alice email alice@example.com`
- `HGET user:1000 username`
- `HGETALL user:1000`

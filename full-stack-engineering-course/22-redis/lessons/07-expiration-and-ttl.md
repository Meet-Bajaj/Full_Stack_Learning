# Lesson 7: Expiration and TTL

Keys can be volatile. Redis uses active and passive expiration to clean up keys.
- `TTL key` returns remaining time to live.
- `PERSIST key` removes the expiration.

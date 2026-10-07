# Lesson 6: Authentication Security

## Learning Objectives
- Hash passwords securely.
- Prevent brute force and credential stuffing.
- Secure sessions and JWTs.

## Password Hashing
Never store plaintext passwords. Use **bcrypt** or **Argon2** with a salt.
- *Salt*: Random data added before hashing to defend against rainbow tables.
- *Work Factor*: Makes hashing computationally expensive, slowing down brute-force attacks.

## JWT vs Sessions
- **Sessions**: Stored in DB/Redis. Statefull. Easy to revoke.
- **JWTs**: Stored on client. Stateless. Hard to revoke (requires blocklists or short expiration times).

## Prevention Measures
- Implement Rate Limiting on login endpoints.
- Enforce Multi-Factor Authentication (MFA).

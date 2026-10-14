# Security Cheat Sheet

## OWASP Top 10 (Key Vulnerabilities)
1. **Injection (SQLi, NoSQLi, Command Injection)**
   - *Fix*: Use parameterized queries (Prepared Statements) or ORMs. Never concatenate strings for queries.
2. **Broken Authentication**
   - *Fix*: MFA, secure session management, strong password hashing (bcrypt, Argon2).
3. **Sensitive Data Exposure**
   - *Fix*: Encrypt data at rest and in transit (TLS). Do not store sensitive info in plain text.
4. **XML External Entities (XXE)**
   - *Fix*: Disable XML external entity processing, use JSON where possible.
5. **Broken Access Control (IDOR)**
   - *Fix*: Implement strict authorization (RBAC/ABAC). Verify user owns the resource requested.
6. **Security Misconfiguration**
   - *Fix*: Remove default passwords, keep software patched, disable unused features.
7. **Cross-Site Scripting (XSS)**
   - *Fix*: Escape/sanitize user input before rendering. React/Next.js does this automatically (mostly). Use CSP headers.
8. **Insecure Deserialization**
   - *Fix*: Do not deserialize untrusted data. Use digital signatures.
9. **Using Components with Known Vulnerabilities**
   - *Fix*: Run `npm audit` regularly. Use tools like Dependabot.
10. **Insufficient Logging & Monitoring**
    - *Fix*: Log critical actions, setup alerts for suspicious activities.

## Security Headers (Helmet.js)
```javascript
// Express with Helmet
const helmet = require('helmet');
app.use(helmet());
```
- **Strict-Transport-Security (HSTS)**: Forces HTTPS.
- **Content-Security-Policy (CSP)**: Prevents XSS by dictating where resources can be loaded from.
- **X-Frame-Options**: Prevents Clickjacking (disallows embedding in iframes).
- **X-Content-Type-Options**: Prevents MIME-sniffing (`nosniff`).

## Authentication Best Practices
### JWT (JSON Web Tokens)
- Store JWTs in **HttpOnly, Secure** cookies to prevent XSS theft. (Do not store in localStorage).
- Keep expiration times short (e.g., 15 mins).
- Use Refresh Tokens (stored securely, longer lived) to get new Access Tokens.

### Password Storage
- Never store plain text.
- Use **Bcrypt** or **Argon2** with a unique salt per user.

## CSRF (Cross-Site Request Forgery)
- *Fix*: Use Anti-CSRF tokens for form submissions.
- Set `SameSite=Lax` or `Strict` on session cookies.

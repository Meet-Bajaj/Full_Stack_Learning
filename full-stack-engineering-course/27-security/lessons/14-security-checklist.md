# Lesson 14: Security Checklist

## Pre-Deployment Checklist
- [ ] Dependencies audited and free of critical CVEs.
- [ ] All inputs validated and sanitized server-side.
- [ ] Prepared statements/ORMs used exclusively (No SQLi).
- [ ] Passwords hashed with bcrypt/Argon2.
- [ ] API routes protected against BOLA/IDOR.
- [ ] Rate limiting applied to critical endpoints (login, password reset).
- [ ] Security headers (Helmet) configured.
- [ ] Secrets removed from codebase and handled via environment variables/Secret Manager.
- [ ] Database restricted to private VPC subnet.
- [ ] Docker containers running as non-root user.

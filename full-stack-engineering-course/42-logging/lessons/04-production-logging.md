# Lesson 4: Production Logging Strategies

## Learning Objectives
- Identify what information is essential to log.
- Understand the critical importance of redacting Personally Identifiable Information (PII) and secrets.
- Differentiate between application logs and audit logs.

## What to Log
To make logs useful for debugging, you should include context.
- **Timestamp**: In UTC (ISO 8601 format).
- **Log Level**: (INFO, ERROR, etc.)
- **Request Context**: Correlation ID, HTTP Method, Path, Status Code.
- **Execution Context**: Service name, environment (prod/staging), pod ID, function name.
- **Event Description**: What actually happened.

## What NOT to Log (Security & Compliance)
Logging sensitive data is a massive security risk and can violate laws like GDPR, CCPA, or HIPAA.

**NEVER LOG:**
- Passwords (even hashed ones shouldn't be logged casually).
- API Keys, Access Tokens, JWTs.
- Credit Card Numbers.
- Personally Identifiable Information (PII) like Social Security Numbers, exact dates of birth, or full names (unless strictly necessary and legally compliant).

**How to prevent it:**
Use log redact features in your logging library.
```javascript
// Pino example
const logger = pino({
  redact: ['user.ssn', 'req.headers.authorization', 'payment.card']
});
```

## Audit Logging
Audit logs are different from application debug logs. 
- **Application Logs**: Used by engineers to debug the system. Can be aggressive with retention (delete after 14 days).
- **Audit Logs**: Used by security and compliance teams to track *who* did *what* and *when* (e.g., "Admin Jane changed User Bob's permissions"). These must be strictly retained for years, often in a tamper-proof database.

## Summary
Production logging requires a delicate balance between logging enough context to debug effectively and protecting user privacy and system security.

## Completion Checklist
- [ ] I know exactly what types of data should never be logged.
- [ ] I understand the difference between application logs and audit logs.
- [ ] I can configure a logger to redact sensitive fields.

# Lesson 10: Security Interview Questions

## Learning Objectives
- Master the OWASP Top 10 concepts (XSS, CSRF, SQLi).
- Understand web security headers, encryption, and hashing.
- Know how to securely manage authentication state.

## 1. Cross-Site Scripting (XSS)

**Concept:** XSS occurs when an application includes untrusted data in a web page without proper validation or escaping. If an attacker can inject a script into your site, it will run in the user's browser, potentially stealing session cookies.
**Prevention:**
- Escape all user input before rendering.
- Use Content Security Policy (CSP).
- React automatically escapes string variables in JSX.

## 2. Cross-Site Request Forgery (CSRF)

**Concept:** CSRF forces a logged-on victim's browser to send a forged HTTP request, including the victim's session cookie, to a vulnerable web application.
**Prevention:**
- Use Anti-CSRF tokens (Synchronizer Token Pattern).
- Use `SameSite=Lax` or `Strict` flag on cookies.

## 3. SQL Injection

**Concept:** Injection flaws occur when untrusted data is sent to an interpreter as part of a command or query.
**Prevention:**
- ALWAYS use parameterized queries or Prepared Statements (e.g., via Prisma or parameterized pg queries). Never concatenate strings to build SQL queries.

## 4. Security Headers

- **CORS (Cross-Origin Resource Sharing):** A mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.
- **HSTS (HTTP Strict Transport Security):** Forces browsers to only connect via HTTPS.

## Summary & Checklist
- [ ] Differentiate between XSS and CSRF.
- [ ] Explain how parameterized queries prevent SQL injection.
- [ ] Understand the purpose of CORS.

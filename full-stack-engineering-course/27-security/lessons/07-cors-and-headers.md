# Lesson 7: CORS and Security Headers

## Learning Objectives
- Understand Cross-Origin Resource Sharing (CORS).
- Configure security headers using Helmet.js.

## CORS Mental Model
CORS is a *browser* security feature, not a server security feature. It prevents a malicious website loaded in the victim's browser from reading data from your API. It does *not* stop a server-to-server request.

## Essential Security Headers
- `Strict-Transport-Security (HSTS)`: Forces HTTPS.
- `X-Frame-Options`: Prevents Clickjacking (disallows framing).
- `X-Content-Type-Options`: Prevents MIME-sniffing.
- `Content-Security-Policy (CSP)`: Restricts origins of executable scripts.

In Node/Express, use the `helmet` package to automatically set these.

# Lesson 3: Cross-Site Scripting (XSS)

## Learning Objectives
- Understand XSS mechanisms.
- Differentiate Reflected, Stored, and DOM-based XSS.
- Apply XSS prevention strategies.

## How XSS Works
An attacker injects malicious JavaScript into the victim's browser. When executed, it can steal cookies, session tokens, or modify the DOM.

## Types of XSS
1. **Reflected**: Malicious script is part of a request (e.g., in a URL parameter).
2. **Stored**: Malicious script is saved in the database (e.g., in a comment).
3. **DOM-based**: The vulnerability is in the client-side code (JavaScript modifying the DOM unsafely).

## Prevention
- **Output Encoding**: Escape all user input before rendering (React does this by default).
- **Sanitization**: If you must render HTML, use a library like DOMPurify.
- **Content Security Policy (CSP)**: Restrict where scripts can be loaded from.

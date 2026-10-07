# Module 27 Exercises

## Exercise 1: Find the XSS
Review the provided React component that uses `dangerouslySetInnerHTML`. Exploit it by creating an alert payload, then patch it using `DOMPurify`.

## Exercise 2: SQL Injection Patching
You are given an Express route that concatenates user input into a SQL string. Rewrite the route to use parameterized queries using `pg`.

## Exercise 3: Configure Helmet
Take a barebones Express app and implement `helmet`. Use a browser inspector to verify that HSTS, X-Frame-Options, and Content-Security-Policy headers are correctly applied.

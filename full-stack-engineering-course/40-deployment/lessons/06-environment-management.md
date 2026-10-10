# Lesson 6: Environment Management

## The Problem with Hardcoding
Never hardcode configuration that changes between environments (like Database URLs, API keys, or port numbers) in your source code.

## Environment Variables
The standard way to handle configuration is via environment variables.
- In Node.js: `process.env.DATABASE_URL`
- In Docker Compose: Pass them via the `environment:` block or an `env_file`.

## Managing Secrets Securely
- **Local:** Use an `.env` file (ensure it is in `.gitignore`).
- **CI/CD:** Use GitHub Secrets.
- **Production VPS:** Create an `.env` file directly on the server, or use a tool like Doppler or AWS Secrets Manager.

## Feature Flags
For large changes, deploy code to production but hide it behind a "Feature Flag". This allows you to test the feature in production safely and instantly roll it back by toggling the flag off, without doing a full redeployment.

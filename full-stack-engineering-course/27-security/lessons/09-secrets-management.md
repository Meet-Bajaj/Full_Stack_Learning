# Lesson 9: Secrets Management

## Learning Objectives
- Securely manage environment variables.
- Use secret managers (AWS Secrets Manager, HashiCorp Vault).
- Handle secret rotation and accidental commits.

## Rule Zero
**NEVER commit secrets to version control.** Add `.env` to `.gitignore`.

## Production Secrets
In production, rely on Secret Managers rather than raw environment variables injected via CI/CD. They allow for automatic rotation and fine-grained access control.

## What if I commit a secret?
If a secret hits GitHub, consider it compromised immediately.
1. Revoke the key in the provider (e.g., AWS, Stripe).
2. Generate a new key.
3. (Optional) Scrub git history using BFG Repo-Cleaner.

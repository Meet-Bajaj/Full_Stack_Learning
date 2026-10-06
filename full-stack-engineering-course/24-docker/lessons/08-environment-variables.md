# Lesson 08: Environment Variables

## Learning Objectives
- Inject environment variables into containers.
- Differentiate between `ENV` and `ARG` in Dockerfiles.
- Use `.env` files with Docker.
- Understand basic secrets management.

## Why Environment Variables?
Following the Twelve-Factor App methodology, configuration that varies between deployments (development, staging, production) should be stored in the environment. This includes database URLs, API keys, and port numbers.

## 1. Setting Variables in the Dockerfile (`ENV`)
You can bake default environment variables into an image using `ENV`.
```dockerfile
FROM node:18
ENV NODE_ENV=production
ENV PORT=3000
```
These variables will be present in every container created from this image unless overridden.

## 2. Setting Variables at Runtime (`-e`)
You can pass or override environment variables when running a container using the `-e` flag.
```bash
docker run -d -e DB_PASSWORD=supersecret -e PORT=8080 my-app
```

## 3. Using `.env` Files (`--env-file`)
Passing multiple `-e` flags gets tedious. You can put your variables in a file (e.g., `.env`) and pass the file.

**.env file:**
```env
DB_USER=admin
DB_PASSWORD=secret123
API_KEY=xyz789
```

**Run command:**
```bash
docker run -d --env-file ./.env my-app
```

## Security Warning: Secrets
**Never** put sensitive secrets (passwords, API keys) directly in your Dockerfile `ENV` instructions or source code. If you push the image to a registry, anyone can inspect the image layers and see the secrets.

For true secrets in production, use Docker Swarm Secrets, Kubernetes Secrets, or a dedicated secrets manager like HashiCorp Vault. In development, `--env-file` is acceptable (provided `.env` is in your `.gitignore`).

## Summary Checklist
- [ ] Use `ENV` for default configuration in Dockerfiles.
- [ ] Use `-e` to pass variables at runtime.
- [ ] Use `--env-file` for managing multiple variables.
- [ ] Understand the security risks of hardcoding secrets in images.

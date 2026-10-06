# Lesson 08: Development Workflow

## Learning Objectives
- Use Docker Compose for local development.
- Implement hot-reloading with bind mounts.
- Use override files (`docker-compose.override.yml`).

## Local Development Setup
When developing, you don't want to rebuild the Docker image every time you save a file. You want hot-reloading (e.g., using `nodemon` or Vite).

To achieve this:
1. Define a `CMD` that runs the dev server.
2. Bind mount your source code.

```yaml
services:
  frontend:
    build: 
      context: ./frontend
    volumes:
      - ./frontend:/app
      - /app/node_modules # Protect container modules
    ports:
      - "5173:5173"
    environment:
      - NODE_ENV=development
    command: npm run dev
```
Now, when you edit a React component on your host machine, Vite inside the container detects the change and hot-reloads instantly.

## The Override Pattern
Often, you have a base `docker-compose.yml` that defines the production-like state (using pre-built images, strict ports, etc.).
You can create a second file named `docker-compose.override.yml`. Compose automatically reads this file and merges it with the base file.

**docker-compose.yml (Base)**
```yaml
services:
  api:
    image: myorg/api:latest
    restart: always
```

**docker-compose.override.yml (Dev)**
```yaml
services:
  api:
    build: ./api  # Overrides image with a local build
    volumes:
      - ./api:/app # Adds hot-reloading mount
    command: npm run dev
```

In production, you only use the base file. In dev, Compose automatically merges them, giving you a perfect dev environment without breaking the prod config.

## Summary Checklist
- [ ] Mount source code for hot reloading.
- [ ] Override the `command` for dev servers.
- [ ] Use `docker-compose.override.yml` effectively.

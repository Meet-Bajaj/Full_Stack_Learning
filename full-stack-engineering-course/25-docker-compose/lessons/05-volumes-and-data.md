# Lesson 05: Volumes and Data

## Learning Objectives
- Define named volumes in Compose.
- Configure bind mounts for local development.
- Share data between services.

## Named Volumes
Named volumes are the preferred way to persist database data.

```yaml
services:
  db:
    image: postgres
    volumes:
      - pg-data:/var/lib/postgresql/data # Mounts the volume into the container

# You MUST declare the named volume at the root level
volumes:
  pg-data:
```
When you run `docker-compose down`, Compose removes the containers and networks, but **it does not remove named volumes**. Your data is safe. To destroy volumes, you must run `docker-compose down -v`.

## Bind Mounts
Bind mounts map a folder on your host machine to a folder in the container. This is crucial for local development so your container sees code changes instantly.

```yaml
services:
  web:
    build: .
    volumes:
      - .:/app          # Maps current host directory to /app in container
      - /app/node_modules # Anonymous volume to prevent host node_modules overriding container node_modules
```

### The `node_modules` Trick
If you bind mount `.`, you overwrite the container's `node_modules` (installed during image build) with your host's `node_modules` (which might not exist, or might be for the wrong OS).
By adding a second, anonymous volume `- /app/node_modules`, you tell Docker: "Map the host directory, but keep the container's `/app/node_modules` folder intact."

## Read-Only Mounts
You can append `:ro` to a bind mount to make it read-only. Useful for configuration files.
```yaml
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
```

## Summary Checklist
- [ ] Use named volumes for persistent data.
- [ ] Remember to declare named volumes at the root level.
- [ ] Use bind mounts for local dev (hot-reloading).
- [ ] Master the anonymous volume trick for `node_modules`.

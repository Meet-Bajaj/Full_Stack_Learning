# Lesson 03: Services

## Learning Objectives
- Define a service.
- Choose between `image` and `build`.
- Configure `ports` and `environment`.
- Use `depends_on` and `restart`.

## Service Configuration Basics

Inside the `services` block, you define the name of the service (e.g., `api`, `database`). Underneath that, you provide the configuration.

### `image` vs `build`
You must provide either an `image` to pull from a registry, or a `build` context to build a Dockerfile locally.

```yaml
services:
  db:
    image: postgres:15 # Pulls from Docker Hub

  backend:
    build: . # Builds the Dockerfile in the current directory
    # OR for more complex builds:
    # build:
    #   context: ./backend
    #   dockerfile: Dockerfile.dev
```

### `ports`
Maps host ports to container ports (Format: `"HOST:CONTAINER"`). Always use quotes to avoid YAML parsing issues.
```yaml
    ports:
      - "3000:80"
```

### `environment`
Sets environment variables.
```yaml
    environment:
      - NODE_ENV=production
      - DB_HOST=db
```

### `depends_on`
Controls startup order. If the `backend` depends on `db`, Compose will start `db` before starting `backend`.
*Crucial Note: `depends_on` only waits for the container to start. It does NOT wait for the database inside the container to be "ready" to accept connections. We will solve this with Health Checks later.*
```yaml
    depends_on:
      - db
```

### `restart`
Defines the restart policy if the container crashes or the host reboots.
- `no` (default)
- `always`: Always restart the container if it stops.
- `on-failure`: Restart only if it exits with a non-zero exit code.
- `unless-stopped`: Always restart, unless manually stopped by the user.

```yaml
    restart: always
```

## Summary Checklist
- [ ] Use `image` for pre-built images and `build` for custom code.
- [ ] Map ports correctly.
- [ ] Use `depends_on` for startup ordering.

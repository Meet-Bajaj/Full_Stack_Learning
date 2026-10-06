# Lesson 06: Environment and Secrets

## Learning Objectives
- Use `environment` arrays and `env_file`.
- Interpolate variables from the host.
- Understand Docker Secrets in Compose.

## Setting Variables
You can pass environment variables to a service in two main ways:

### 1. The `environment` block
```yaml
services:
  api:
    environment:
      - NODE_ENV=production
      - PORT=3000
```

### 2. The `env_file` property
For passing many variables, use a `.env` file.
```yaml
services:
  api:
    env_file:
      - .env.production
```

## Variable Interpolation
Compose automatically reads the `.env` file located in the same directory as `docker-compose.yml`. You can use variables from that `.env` file *inside* your Compose file using `${VAR}`.

**.env**
```env
DB_PASS=supersecret
DB_PORT=5432
```

**docker-compose.yml**
```yaml
services:
  db:
    image: postgres
    environment:
      - POSTGRES_PASSWORD=${DB_PASS}
    ports:
      - "${DB_PORT}:5432"
```

### Default Values
You can provide fallback defaults: `${DB_PASS:-defaultpassword}`. If `DB_PASS` is not in the `.env` file or host environment, it uses `defaultpassword`.

## Docker Secrets
For high security, Docker Swarm uses "Secrets". While regular Compose is for a single host, it simulates secrets by mounting files into `/run/secrets/`.

```yaml
services:
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    secrets:
      - db_password

secrets:
  db_password:
    file: ./secrets/db_password.txt
```
Postgres reads the password directly from the file, keeping it out of the environment variables (which are easily leaked).

## Summary Checklist
- [ ] Understand `environment` vs `env_file`.
- [ ] Master `${VAR:-default}` interpolation.
- [ ] Know how to use file-based secrets.

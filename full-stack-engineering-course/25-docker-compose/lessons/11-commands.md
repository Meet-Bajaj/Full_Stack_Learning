# Lesson 11: Compose Commands

## Learning Objectives
- Master the Docker Compose CLI.
- Manage the lifecycle of multi-container apps.
- Scale services.

## Core Commands

### 1. `up`
Builds, (re)creates, starts, and attaches to containers.
- `docker-compose up`: Starts in foreground.
- `docker-compose up -d`: Starts in detached mode (background).
- `docker-compose up --build`: Forces a rebuild of images before starting.

### 2. `down`
Stops containers and removes containers, networks, and anonymous volumes.
- `docker-compose down`: Tears down everything except named volumes.
- `docker-compose down -v`: Tears down everything AND deletes named volumes (destroys database data).

### 3. `build`
Only builds the images defined in the Compose file, does not start them.
- `docker-compose build`

### 4. `logs`
Views output from containers.
- `docker-compose logs`: Shows logs for all services.
- `docker-compose logs -f`: Follows logs live.
- `docker-compose logs api`: Shows logs only for the `api` service.

### 5. `exec`
Runs a command in a running container.
- `docker-compose exec db psql -U postgres`

### 6. `ps`
Lists containers specific to the current Compose project.
- `docker-compose ps`

## Scaling Services
If your API is stateless, you can easily spin up multiple instances behind a load balancer.
```bash
# Starts 3 instances of the 'api' service
docker-compose up -d --scale api=3
```
*Note: This only works if your `api` service does not bind to a specific host port (e.g., `- "3000:3000"`), otherwise you will get port conflict errors. The load balancer (like Nginx) will handle the routing.*

## Profiles
Compose profiles allow you to selectively run services. For example, a `debug` profile.
```yaml
services:
  api:
    image: api
  admin-panel:
    image: admin
    profiles: ["debug"]
```
Running `docker-compose up` only starts `api`.
Running `docker-compose --profile debug up` starts both.

## Summary Checklist
- [ ] Memorize `up -d` and `down`.
- [ ] Know how to view `logs`.
- [ ] Understand how to `--scale` services.

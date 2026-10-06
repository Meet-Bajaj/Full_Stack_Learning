# Docker Compose Cheatsheet

## Basic Commands
- `docker-compose up`: Start all services (foreground).
- `docker-compose up -d`: Start all services (background/detached).
- `docker-compose up --build`: Rebuild images before starting.
- `docker-compose down`: Stop and remove containers and networks.
- `docker-compose down -v`: Stop everything AND remove named volumes (DESTROYS DATA).

## Management Commands
- `docker-compose ps`: List running services in the current project.
- `docker-compose logs`: View logs from all services.
- `docker-compose logs -f <service_name>`: Follow logs for a specific service.
- `docker-compose build`: Build or rebuild services.
- `docker-compose exec <service_name> <command>`: Run a command in a running service container.
- `docker-compose restart <service_name>`: Restart a specific service.

## Important YAML Keys
- `image`: The Docker image to pull.
- `build`: Build from a local Dockerfile.
- `ports`: `"HOST:CONTAINER"` port mapping.
- `volumes`: Mount host paths or named volumes.
- `environment`: Set inline environment variables.
- `env_file`: Load variables from a file (e.g., `.env`).
- `depends_on`: Startup order control.
- `restart`: Restart policy (`always`, `unless-stopped`).

# Docker Cheat Sheet

## Container & Image Commands
```bash
# Images
docker pull ubuntu:latest      # Download image
docker images                  # List local images
docker rmi <image_id>          # Remove image
docker build -t myapp .        # Build image from Dockerfile in current dir

# Containers
docker run myapp               # Run container
docker run -d -p 8080:80 myapp # Run detached, map port 8080(host) to 80(container)
docker ps                      # List running containers
docker ps -a                   # List all containers (including stopped)
docker stop <container_id>     # Stop container gracefully
docker kill <container_id>     # Force stop
docker rm <container_id>       # Remove stopped container
docker logs <container_id>     # View logs
docker exec -it <id> /bin/sh   # Open interactive shell in running container
```

## Cleanup (System Prune)
```bash
docker system prune            # Remove unused containers, networks, dangling images
docker system prune -a         # Remove ALL unused images
docker volume prune            # Remove unused volumes
```

## Dockerfile Instructions
```dockerfile
# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy rest of application code
COPY . .

# Expose port (Documentation purpose)
EXPOSE 3000

# Environment variables
ENV NODE_ENV=production

# Command to run on container start (Only one per Dockerfile)
CMD ["npm", "start"]
```

## Docker Compose (`docker-compose.yml`)
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
    depends_on:
      - db
      
  db:
    image: postgres:14
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

## Compose Commands
```bash
docker-compose up              # Start all services
docker-compose up -d           # Start in background (detached)
docker-compose down            # Stop and remove containers/networks
docker-compose down -v         # Also remove volumes
docker-compose logs -f         # View logs continuously
```

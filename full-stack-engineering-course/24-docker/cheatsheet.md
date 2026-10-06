# Docker Cheatsheet

## Images
- `docker pull <image>`: Pull image
- `docker images`: List images
- `docker rmi <image>`: Remove image
- `docker build -t <name> .`: Build image

## Containers
- `docker run -d -p 8080:80 <image>`: Run detached with port mapping
- `docker ps`: List running containers
- `docker ps -a`: List all containers
- `docker stop <container>`: Stop container
- `docker rm <container>`: Remove container
- `docker exec -it <container> /bin/bash`: Interactive shell

## System
- `docker system prune -a`: Remove unused data
- `docker logs <container>`: View logs

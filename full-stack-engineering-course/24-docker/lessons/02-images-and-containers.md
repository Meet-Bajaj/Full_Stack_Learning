# Lesson 02: Images and Containers

## Learning Objectives
- Differentiate between Docker images and containers.
- Learn how to pull images from a registry.
- Run, list, stop, and remove containers.
- Use interactive mode in containers.

## Mental Model: The Blueprint and the House
Think of a **Docker Image** as an architectural blueprint for a house. It contains all the plans, specifications, and materials needed to build the house. However, you can't live in a blueprint.
A **Docker Container** is the actual, physical house built from that blueprint. You can build multiple houses (containers) from a single blueprint (image), and they will all be identical when first constructed.

## Images
An image is a read-only template with instructions for creating a Docker container.
- `docker pull nginx`: Downloads the nginx image from Docker Hub to your local machine.
- `docker images` or `docker image ls`: Lists all images on your machine.
- `docker rmi nginx`: Removes the image from your local machine.

## Containers
A container is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI.

### Running a Container
```bash
docker run nginx
```
This command does several things:
1. Checks if the `nginx` image exists locally.
2. If not, pulls it from Docker Hub.
3. Creates a new container from the image.
4. Starts the container.

By default, this runs in the foreground. To run in detached mode (background), use `-d`:
```bash
docker run -d nginx
```

### Port Mapping
Containers have their own isolated network. If `nginx` is running on port 80 *inside* the container, you can't reach it from your browser unless you map a port from your host machine to the container.
```bash
docker run -d -p 8080:80 nginx
```
Now, navigating to `localhost:8080` on your machine connects to port 80 in the container.

### Interactive Mode
Sometimes you need to jump into a container to debug. Use `-i` (interactive) and `-t` (tty) to allocate a terminal.
```bash
docker run -it ubuntu /bin/bash
```
This runs an Ubuntu container and immediately opens a bash shell inside it.

### Managing Containers
- `docker ps`: Lists running containers.
- `docker ps -a`: Lists all containers (including stopped ones).
- `docker stop <container_id_or_name>`: Gracefully stops a container.
- `docker rm <container_id_or_name>`: Removes a stopped container. Use `-f` to force remove a running one.

## Summary Checklist
- [ ] Understand the difference between images and containers.
- [ ] Know how to pull images and run them.
- [ ] Master port mapping with `-p`.
- [ ] Learn how to enter a container interactively.

# Lesson 06: Volumes

## Learning Objectives
- Understand container ephemerality.
- Master named volumes and bind mounts.
- Know when to use `tmpfs`.
- Implement data persistence for databases.

## Container Ephemerality
By default, all files created inside a container are stored on a writable container layer. When the container is deleted, the writable layer is also deleted, and the data is lost. Containers are designed to be *ephemeral* (temporary).

If you are running a database (like PostgreSQL) in a container, you absolutely do not want the data to disappear when the container stops!

## Docker Volumes
Docker provides mechanisms to persist data beyond the lifecycle of a container.

### 1. Named Volumes
Named volumes are created and managed completely by Docker. They are stored in a part of the host filesystem which is managed by Docker (e.g., `/var/lib/docker/volumes/` on Linux). Non-Docker processes should not modify this part of the filesystem. This is the best way to persist data in Docker.

**Creating and Using:**
```bash
# Create a volume
docker volume create my-db-data

# Use the volume when running a container
docker run -d -v my-db-data:/var/lib/postgresql/data postgres
```
Data written by Postgres into `/var/lib/postgresql/data` is safely stored in the `my-db-data` volume on the host.

### 2. Bind Mounts
Bind mounts allow you to map an exact, specific path on your host machine to a path inside the container. 
They are highly dependent on the directory structure of the host machine.

**Usage:**
```bash
docker run -d -v /path/on/my/host:/app/data my-app
```
**When to use:** Bind mounts are extremely useful for **local development**. You can mount your source code into the container. When you edit the code on your host, the container sees the changes immediately (hot reloading).

### 3. tmpfs Mounts (Linux Only)
`tmpfs` mounts are stored in the host system's memory only. They are never written to the host system's filesystem.
**When to use:** For security reasons (e.g., storing temporary secrets) or performance (fast I/O for temporary data).

## `tmpfs` vs `volume` vs `bind`
- **Named Volumes**: Best for persistent application data (databases, uploaded files). managed by Docker.
- **Bind Mounts**: Best for development (sharing source code). Managed by the host OS.
- **tmpfs**: Best for temporary, sensitive data.

## Summary Checklist
- [ ] Understand that containers lose data when removed.
- [ ] Know how to create and use named volumes.
- [ ] Know how to use bind mounts for local development.
- [ ] Differentiate between volumes, bind mounts, and tmpfs.

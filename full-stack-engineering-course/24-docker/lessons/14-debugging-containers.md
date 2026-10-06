# Lesson 14: Debugging Containers

## Learning Objectives
- Use Docker CLI tools to inspect containers.
- Read container logs.
- Execute commands in running containers.
- Implement Health Checks.

## 1. Reading Logs (`docker logs`)
Containers should log to `stdout` and `stderr`. Docker captures these streams.
```bash
# View all logs
docker logs my-container

# Tail the logs (follow live)
docker logs -f my-container

# View the last 50 lines
docker logs --tail 50 my-container
```

## 2. Executing Commands (`docker exec`)
Sometimes you need to inspect the filesystem or run a manual script inside a running container.
```bash
# Open an interactive bash shell
docker exec -it my-container /bin/bash

# Open an alpine shell (alpine uses 'sh' instead of 'bash')
docker exec -it my-container /bin/sh

# Run a single command (e.g., check env vars)
docker exec my-container env
```

## 3. Inspecting Metadata (`docker inspect`)
`inspect` outputs a massive JSON object containing everything about the container: its IP address, environment variables, mounts, and state.
```bash
docker inspect my-container
```

## 4. Resource Usage (`docker stats`)
Similar to the `top` command in Linux, this shows real-time CPU, RAM, and Network usage for your containers.
```bash
docker stats
```

## 5. Health Checks
Instead of hoping your app is running, tell Docker how to check if it's healthy.
```dockerfile
# In the Dockerfile
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:3000/api/health || exit 1
```
Docker will periodically run this command. If it fails, the container is marked "unhealthy". Container orchestrators (like Swarm or Kubernetes) will automatically restart unhealthy containers.

## Summary Checklist
- [ ] Master `docker logs` and `docker exec`.
- [ ] Use `docker inspect` to debug network issues.
- [ ] Implement `HEALTHCHECK` for self-healing applications.

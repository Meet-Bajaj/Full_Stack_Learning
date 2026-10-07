# Lesson 12: Docker Security

## Learning Objectives
- Run containers as non-root.
- Build minimal images.
- Scan containers for vulnerabilities.

## Non-Root Containers
By default, Docker runs processes as root. If an attacker breaks out of the container, they might have root access to the host.
*Fix*: Add a user in your Dockerfile:
```dockerfile
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
```

## Minimal Images
Use `alpine` or `distroless` base images. Fewer installed utilities (like curl or bash) mean a smaller attack surface if the container is compromised.

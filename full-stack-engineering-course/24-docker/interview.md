# Docker Interview Questions

## Junior Level
1. **What is the difference between an Image and a Container?**
   *Answer*: An image is a read-only template (like a class in OOP). A container is a running instance of that image (like an object).
2. **What does the `-p` flag do in `docker run`?**
   *Answer*: It maps a port from the host machine to a port inside the container's isolated network.
3. **What is the purpose of `.dockerignore`?**
   *Answer*: It prevents files (like `node_modules` or `.git`) from being sent to the Docker daemon during the build context transfer, speeding up builds and reducing image size.

## Mid Level
4. **Explain how Docker layer caching works.**
   *Answer*: Every instruction in a Dockerfile creates a layer. Docker caches these layers. If an instruction changes (e.g., a file copied by `COPY` changes), that layer and all subsequent layers are invalidated and rebuilt.
5. **Why should you use a multi-stage build?**
   *Answer*: To separate the build environment (which needs heavy tools like compilers and SDKs) from the runtime environment, resulting in dramatically smaller and more secure production images.
6. **What is the difference between a Bind Mount and a Named Volume?**
   *Answer*: Bind mounts map an exact path on the host to the container (good for dev). Named volumes are managed entirely by Docker in a specific host directory (good for persistent DB data).

## Senior Level
7. **How does Docker isolate containers at the OS level?**
   *Answer*: It uses Linux Namespaces for isolating resources (PID, NET, IPC, MNT, UTS) and Control Groups (cgroups) for limiting resource usage (CPU, Memory).
8. **Explain the PID 1 problem in Docker.**
   *Answer*: The first process in a container runs as PID 1. PID 1 is responsible for reaping zombie processes and handling system signals (SIGTERM). If your app (or a wrapper like `npm`) doesn't handle these correctly, the container won't shut down gracefully.
9. **How would you secure a production Docker container?**
   *Answer*: Use minimal base images (Alpine/Distroless), run as a non-root user, use `--read-only` filesystems, drop capabilities (`--cap-drop=ALL`), do not hardcode secrets, and scan for CVEs.

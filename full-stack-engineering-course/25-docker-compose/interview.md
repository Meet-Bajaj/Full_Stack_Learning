# Docker Compose Interview Questions

## Junior Level
1. **What is Docker Compose and why do we use it?**
   *Answer*: It is a tool for defining and running multi-container applications using a declarative YAML file, replacing complex imperative bash scripts.
2. **How do containers in a Compose file communicate with each other?**
   *Answer*: They communicate over the default bridge network created by Compose, using the service names as hostnames for DNS resolution.
3. **What does `docker-compose up -d` do?**
   *Answer*: It builds, (re)creates, and starts all services in the background (detached mode).

## Mid Level
4. **Explain how to set up local development with hot-reloading in Compose.**
   *Answer*: You use a bind mount to map the host source code directory into the container, and override the `command` to run a dev server (like nodemon or vite). You must also use an anonymous volume to protect the container's `node_modules`.
5. **How does `env_file` differ from the `environment` block?**
   *Answer*: `environment` defines variables explicitly in the YAML. `env_file` reads a separate file (like `.env`) and injects all its variables into the container.
6. **What is the Override pattern in Compose?**
   *Answer*: Compose automatically merges `docker-compose.yml` (usually prod/base configs) with `docker-compose.override.yml` (dev overrides like bind mounts), allowing you to maintain one set of files for both environments.

## Senior Level
7. **Explain the race condition solved by `depends_on` with `condition: service_healthy`.**
   *Answer*: Services boot faster than databases initialize. Standard `depends_on` only waits for the container process to start. `condition: service_healthy` polls a specific command (like `pg_isready`) and blocks dependent services from starting until the database is fully initialized and accepting connections.
8. **Is Docker Compose suitable for large-scale production? Why or why not?**
   *Answer*: No. Compose is designed for single-host deployments. It lacks high-availability (if the host dies, the app dies), rolling updates across machines, and multi-node orchestration. For true production at scale, Kubernetes or Docker Swarm is required. Compose is fine for a single VPS or CI/CD pipelines.

# Lesson 02: The Compose File

## Learning Objectives
- Understand the anatomy of `docker-compose.yml`.
- Define version, services, networks, and volumes.

## Anatomy of `docker-compose.yml`

At the root level, a Compose file generally has four main sections:

```yaml
version: '3.8' # 1. The Version

services:      # 2. The Services (Containers)
  web:
    # ... service config ...
  db:
    # ... service config ...

networks:      # 3. Custom Networks
  # ... network config ...

volumes:       # 4. Named Volumes
  # ... volume config ...
```

### 1. `version`
*Note: In the newest versions of Compose (Compose V2), the `version` attribute is deprecated and optional, but you will still see it in 99% of tutorials and legacy codebases.* It dictates the schema version of the file.

### 2. `services`
A "service" is a concept in Compose that represents a single container. If you have a backend and a database, those are two services. This is where you define the image, ports, environments, etc.

### 3. `networks`
By default, Compose automatically creates a single bridge network for your entire application. All services are attached to it and can talk to each other. You only need to use the `networks` block if you want to define multiple complex networks (e.g., isolating a database network from a frontend network).

### 4. `volumes`
If a service uses a named volume, that volume must be declared in the root `volumes` block.

## Summary Checklist
- [ ] Know the four main root keys of a Compose file.
- [ ] Understand that a "service" usually maps to a single container.
- [ ] Understand that Compose creates a default network automatically.

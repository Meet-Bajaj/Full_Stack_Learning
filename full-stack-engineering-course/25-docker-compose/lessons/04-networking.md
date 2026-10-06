# Lesson 04: Networking

## Learning Objectives
- Understand the default Compose network.
- Utilize service discovery by name.
- Connect to external networks.

## The Default Network
When you run `docker-compose up`, Compose does the following:
1. Creates a new network called `<project-name>_default`.
2. Connects all services defined in the file to this network.
3. Automatically sets up internal DNS so services can discover each other.

## Service Discovery (CRITICAL)
In Docker Compose, **the service name becomes the hostname**.

```yaml
services:
  my-database:
    image: postgres

  my-api:
    image: node
    environment:
      - DATABASE_URL=postgres://user:pass@my-database:5432/db
```
Notice that the API connects to `my-database`, not `localhost` or an IP address. Docker's internal DNS automatically routes `my-database` to the correct container IP.

## Custom Networks
If you want to isolate traffic, you can define custom networks. For example, the database should only talk to the backend, not the frontend.

```yaml
services:
  frontend:
    networks:
      - front-tier
  
  backend:
    networks:
      - front-tier
      - back-tier
      
  db:
    networks:
      - back-tier

networks:
  front-tier:
  back-tier:
```
In this setup, `frontend` cannot reach `db`.

## External Networks
If you have an existing network created via `docker network create outside-net`, and you want Compose to connect to it instead of creating a new one:

```yaml
networks:
  my-network:
    external: true
    name: outside-net
```

## Summary Checklist
- [ ] Understand that Compose creates a default network.
- [ ] Master service discovery (Service Name = Hostname).
- [ ] Use custom networks for isolation.

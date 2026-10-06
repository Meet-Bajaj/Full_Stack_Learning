# Lesson 07: Networking

## Learning Objectives
- Understand Docker's networking drivers.
- Master Bridge networks for container-to-container communication.
- Use Docker's internal DNS.
- Troubleshoot networking issues.

## Default Network Types
When you install Docker, it creates three default networks automatically:
1. `bridge`: The default network for containers.
2. `host`: Removes network isolation; the container shares the host's networking namespace.
3. `none`: Disables all networking for the container.

## Custom Bridge Networks (Best Practice)
While the default `bridge` network works, it's considered legacy. For production and complex applications, you should always create a **User-Defined Bridge Network**.

Why?
1. **Automatic DNS Resolution**: Containers on the default bridge can only communicate via IP addresses. Containers on a custom bridge can resolve each other using their container names as hostnames.
2. **Better Isolation**: You can segment applications into different networks.

### Creating and Using a Network
```bash
# 1. Create the network
docker network create my-app-network

# 2. Run a database container on this network
docker run -d --name my-db --network my-app-network postgres

# 3. Run a backend application on the same network
# The backend can connect to the database using the hostname "my-db"
docker run -d --name my-backend -e DB_HOST=my-db --network my-app-network my-backend-image
```

## Port Mapping Revisited
Remember that containers on the same custom network can talk to each other without exposing ports to the outside world.
- If `my-backend` needs to talk to `my-db` on port 5432, it just connects to `my-db:5432`. You **do not** need to use `-p 5432:5432` for `my-db`.
- You only use `-p` when you need to expose a service to your host machine (e.g., exposing the frontend to your browser).

## Network Commands
- `docker network ls`: List networks.
- `docker network inspect <network_name>`: View details about a network, including which containers are connected to it.
- `docker network connect <network> <container>`: Connect a running container to a network.

## Summary Checklist
- [ ] Understand bridge, host, and none networks.
- [ ] Create custom bridge networks.
- [ ] Use container names for DNS resolution.
- [ ] Know when to use `-p` (port mapping) vs internal network communication.

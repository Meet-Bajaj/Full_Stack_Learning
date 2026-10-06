# Lesson 01: Introduction to Docker

## Learning Objectives
- Understand what containerization is and why it exists.
- Compare Docker with Virtual Machines (VMs).
- Explore the Docker architecture (daemon, client, registry).
- Identify when to use Docker.

## Mental Model: Shipping Containers
Before shipping containers existed, transporting goods was a nightmare. You had bags of coffee, boxes of electronics, and barrels of oil, all requiring different handling methods. Loading and unloading took forever.
Then came the **standardized shipping container**. It didn't matter what was inside; the container could be loaded onto a truck, a train, or a ship using the exact same cranes and processes.

Docker is the software equivalent. Before Docker, deploying an app meant worrying about the host OS, dependencies, specific library versions, and configuration files. Docker wraps your application and all its dependencies into a standardized "container" that runs the same everywhere. "It works on my machine" becomes "It runs in a container, so it will work everywhere."

## What is Containerization?
Containerization is OS-level virtualization. Unlike a VM that virtualizes the hardware and requires a full guest OS, containers share the host machine's OS kernel but isolate the application processes, file systems, and networks.

### Docker vs. Virtual Machines

| Feature | Docker Containers | Virtual Machines |
| :--- | :--- | :--- |
| **Architecture** | Share host OS kernel | Independent Guest OS per VM |
| **Size** | Lightweight (MBs) | Heavy (GBs) |
| **Boot Time** | Milliseconds/Seconds | Minutes |
| **Resource Usage** | Very low overhead | High overhead (hypervisor) |
| **Isolation** | Process-level isolation | Hardware-level isolation |

## Docker Architecture

Docker uses a client-server architecture:
1. **Docker Client**: The CLI (`docker run`, `docker build`). It talks to the daemon.
2. **Docker Daemon (dockerd)**: The background service that does the heavy lifting: building, running, and managing containers.
3. **Docker Registry**: The central repository for images (e.g., Docker Hub). Like npm for Node or PyPI for Python.

## Summary & Completion Checklist
- [ ] Understand the shipping container analogy.
- [ ] Know the difference between containers and VMs.
- [ ] Understand the Docker Client, Daemon, and Registry.

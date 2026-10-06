# Lesson 01: Introduction to Docker Compose

## Learning Objectives
- Understand what Docker Compose is.
- Identify the problems it solves for multi-container applications.
- Understand the role of `docker-compose.yml`.

## The Problem
In the previous module, we learned how to run a container using `docker run`. 
If you have a full-stack application with a React frontend, a Node.js backend, and a PostgreSQL database, you have to run three separate `docker run` commands. 

```bash
# This gets tedious quickly
docker network create my-net
docker run -d --name db --network my-net postgres
docker run -d --name backend --network my-net -p 3001:3001 my-backend
docker run -d --name frontend --network my-net -p 3000:3000 my-frontend
```
If you want to stop them, you have to stop them one by one. If you want to share this setup with a coworker, you have to write a bash script.

## The Solution: Docker Compose
Docker Compose is a tool for defining and running multi-container Docker applications. 
Instead of imperative bash scripts, you use a declarative YAML file to configure your application's services. Then, with a single command (`docker-compose up`), you create and start all the services from your configuration.

## The `docker-compose.yml` File
This file is the heart of Docker Compose. It describes the desired state of your application:
- Which images to use.
- Which ports to expose.
- Which volumes to mount.
- How containers connect to each other.

Compose acts as an orchestrator for a single host machine (unlike Kubernetes, which orchestrates across multiple host machines).

## Summary Checklist
- [ ] Understand the limitations of raw `docker run` commands.
- [ ] Understand the purpose of Docker Compose.
- [ ] Know that Compose uses a YAML file for declarative configuration.

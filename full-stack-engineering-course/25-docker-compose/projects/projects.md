# Docker Compose Projects

## Project 1: Full-Stack Microservices Architecture
**Goal**: Build a complex, multi-tier application mimicking a production environment.
**Requirements**:
1. **Frontend**: Next.js service built from a Dockerfile.
2. **API Gateway**: Nginx service routing traffic to specific backend services.
3. **Auth Service**: Node.js microservice handling logins.
4. **Data Service**: Python microservice handling data processing.
5. **Databases**: Postgres for Auth, MongoDB for Data.
6. **Cache**: Redis.
7. **Networking**: Ensure strict isolation (e.g., Frontend cannot talk to Databases, only to API Gateway).
8. **Health Checks**: Proper startup sequencing for all services.

## Project 2: Dev vs Prod Configuration
**Goal**: Master the Override pattern.
**Requirements**:
1. Create a `docker-compose.yml` configured for production (pre-built images, strict resource limits, logging drivers).
2. Create a `docker-compose.override.yml` for local development (bind mounts, hot-reloading commands, exposed DB ports).
3. Demonstrate running the development setup, and then write a script to deploy the production setup.

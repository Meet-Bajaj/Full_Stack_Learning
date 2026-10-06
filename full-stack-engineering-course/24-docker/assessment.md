# Docker Module Assessment

## Section 1: Multiple Choice
1. Which command removes all stopped containers, unused networks, and dangling images?
   a) `docker rm -all`
   b) `docker system prune`
   c) `docker clean`
   d) `docker wipe`

## Section 2: Code Debugging
Look at the following Dockerfile. Identify at least 3 security or performance flaws.
```dockerfile
FROM ubuntu:latest
WORKDIR /app
COPY . .
RUN apt-get update
RUN apt-get install -y nodejs npm
RUN npm install
ENV DB_PASSWORD=supersecret
CMD npm start
```
*Expected Answer Points:*
1. Uses a massive base image (`ubuntu:latest`) instead of `node:alpine`.
2. Poor layer caching (`COPY . .` before `npm install`).
3. Chaining `RUN` commands poorly (apt-get update and install should be combined).
4. Runs as root user.
5. Uses `npm start` instead of `node`.
6. Hardcodes a secret in `ENV`.

## Section 3: Architecture
Design a containerization strategy for a microservices architecture consisting of a React Frontend, a Python FastAPI backend, a Celery worker, a Redis queue, and a PostgreSQL database. 
- Detail the network strategy.
- Detail the volume strategy for the DB.
- Explain the multi-stage build for the React frontend.

# Docker Compose Exercises

## Exercise 1: The Basics
**Task**: Write a `docker-compose.yml` that runs Nginx and Redis.
1. Create a `docker-compose.yml` file.
2. Define a service named `web` using the `nginx:alpine` image.
3. Map port 8080 on the host to port 80 in the `web` container.
4. Define a service named `cache` using the `redis:alpine` image.
5. Run `docker-compose up -d`. Verify Nginx is accessible.
6. Run `docker-compose down`.

## Exercise 2: Volumes and Hot Reloading
**Task**: Create a Node.js development environment.
1. Create an `index.js` file that prints "Hello from Compose!".
2. Create a `Dockerfile` for Node.js.
3. Write a Compose file with a service named `app`.
4. Configure a bind mount so that changes to `index.js` reflect inside the container.
5. Provide an overriding `command: nodemon index.js`.

## Exercise 3: Health Checks
**Task**: Fix a broken startup sequence.
You have a Python script that crashes immediately if it cannot connect to Postgres. 
1. Define a `db` service (Postgres).
2. Add a `healthcheck` to `db` that uses `pg_isready`.
3. Define an `app` service that depends on `db` being healthy.

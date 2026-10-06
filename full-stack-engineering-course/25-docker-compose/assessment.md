# Docker Compose Module Assessment

## Section 1: Code Review
Review this `docker-compose.yml` and identify 3 flaws.
```yaml
version: '3'
services:
  app:
    image: my-node-app
    depends_on:
      - db
    ports:
      - "3000:3000"
  db:
    image: postgres:15
    environment:
      - POSTGRES_PASSWORD=secret
```
*Expected Answer Points:*
1. No volume is defined for `db`. Data will be lost when the container is removed.
2. `app` depends on `db`, but `db` has no healthcheck, so `app` might crash on startup.
3. The password `secret` is hardcoded in the Compose file, which is bad practice (should use `.env`).

## Section 2: Architecture Design
You need to deploy a Wordpress site. It requires the `wordpress` image (PHP/Apache) and a `mysql` image. 
Write the complete, production-ready `docker-compose.yml` incorporating:
- Named volumes for both DB data and Wordpress files.
- Restart policies.
- An `.env` file for database credentials.
- Resource limits on the DB (max 1GB RAM).

## Section 3: Commands
Which command stops all containers and permanently deletes the database volumes?
a) `docker-compose stop`
b) `docker-compose down`
c) `docker-compose down -v`
d) `docker-compose rm`

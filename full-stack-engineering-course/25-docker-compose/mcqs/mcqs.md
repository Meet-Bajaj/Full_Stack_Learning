# Docker Compose Multiple Choice Questions (MCQs)

## Beginner Level
1. What is the primary advantage of Docker Compose over raw Docker commands?
A) Compose makes containers run faster.
B) Compose allows defining multi-container apps in a single declarative YAML file.
C) Compose replaces the need for a Dockerfile.
D) Compose automatically load balances traffic.
**Correct Answer:** B
**Explanation:** Compose allows you to store your container configurations in code (YAML) and bring up the entire stack with one command.

2. Which key is NOT a valid root-level property in `docker-compose.yml`?
A) `services`
B) `networks`
C) `containers`
D) `volumes`
**Correct Answer:** C
**Explanation:** The valid top-level keys are `version`, `services`, `networks`, and `volumes`.

## Intermediate Level
3. You have an API service that needs to connect to a Postgres service named `database`. What hostname should the API use in its connection string?
A) `localhost`
B) `127.0.0.1`
C) `database`
D) `postgres`
**Correct Answer:** C
**Explanation:** Docker Compose automatically provides DNS resolution where the service name acts as the hostname.

4. If you run `docker-compose down -v`, what happens?
A) It stops containers, removes networks, and deletes named volumes.
B) It stops containers and removes images.
C) It restarts the containers with a verbose flag.
D) It only stops containers.
**Correct Answer:** A
**Explanation:** The `-v` flag stands for volumes. It destroys all named volumes declared in the Compose file, wiping persistent data.

## Advanced Level
5. Why does `depends_on: [db]` alone not prevent your API container from crashing on startup if it requires an immediate database connection?
A) Because `depends_on` only guarantees the *container* has started, not that the *process inside it* (the DB) is ready to accept connections.
B) Because `depends_on` is deprecated.
C) Because you must also specify `links: [db]`.
D) Because the API starts first anyway.
**Correct Answer:** A
**Explanation:** To wait for the database process to actually be ready, you must define a `healthcheck` on the DB service and use `depends_on: { db: { condition: service_healthy } }`.

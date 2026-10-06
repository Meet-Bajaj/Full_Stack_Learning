# Lesson 11: Docker for Databases

## Learning Objectives
- Run databases (PostgreSQL, Redis) in containers.
- Ensure data persistence with volumes.
- Use initialization scripts for databases.

## Why Run Databases in Docker?
Running databases in Docker is standard practice for local development and CI/CD pipelines because it eliminates the need to install and configure complex database servers on your host machine. However, running databases in production containers requires careful orchestration (like Kubernetes StatefuSets) and volume management.

## 1. PostgreSQL
```bash
docker run -d \
  --name my-postgres \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=secret \
  -e POSTGRES_DB=mydb \
  -v pgdata:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres:15-alpine
```

### Initialization Scripts
The official Postgres image allows you to run `.sql` or `.sh` scripts automatically when the container starts for the first time.
If you mount a directory containing scripts to `/docker-entrypoint-initdb.d/`, Postgres will execute them.
```bash
docker run -v ./init.sql:/docker-entrypoint-initdb.d/init.sql postgres:15-alpine
```

## 2. Redis
Redis is an in-memory data store, often used for caching or queues.
```bash
docker run -d \
  --name my-redis \
  -v redisdata:/data \
  -p 6379:6379 \
  redis:7-alpine redis-server --appendonly yes
```
*Note: `redis-server --appendonly yes` enables persistence so Redis data survives container restarts.*

## 3. MinIO (S3 Compatible Object Storage)
MinIO is excellent for local development when your production app relies on AWS S3.
```bash
docker run -d \
  --name minio \
  -p 9000:9000 \
  -p 9001:9001 \
  -v miniodata:/data \
  -e MINIO_ROOT_USER=admin \
  -e MINIO_ROOT_PASSWORD=password \
  minio/minio server /data --console-address ":9001"
```

## Summary Checklist
- [ ] Spin up Postgres, Redis, and MinIO via Docker.
- [ ] Understand the absolute necessity of named volumes for databases.
- [ ] Learn how to use initialization scripts for Postgres.

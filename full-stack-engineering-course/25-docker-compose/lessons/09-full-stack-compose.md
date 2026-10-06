# Lesson 09: Full Stack Compose (CRITICAL)

## Learning Objectives
- Write a complex `docker-compose.yml` for a real-world full-stack application.
- Understand how Next.js, NestJS, PostgreSQL, Redis, MinIO, and Nginx connect.

## The Architecture
We are building a production-like setup:
- **Frontend**: Next.js (port 3000)
- **Backend**: NestJS API (port 3001)
- **Database**: PostgreSQL (port 5432)
- **Cache/Queue**: Redis (port 6379)
- **Object Storage**: MinIO (S3 compatible) (port 9000)
- **Reverse Proxy**: Nginx (port 80) routing traffic to the frontend or backend based on the URL.

## The Complete `docker-compose.yml`

```yaml
version: '3.8'

services:
  db:
    image: postgres:15-alpine
    restart: always
    environment:
      POSTGRES_USER: ${DB_USER:-postgres}
      POSTGRES_PASSWORD: ${DB_PASSWORD:-password}
      POSTGRES_DB: ${DB_NAME:-myapp}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - app-network

  redis:
    image: redis:7-alpine
    restart: always
    volumes:
      - redis_data:/data
    networks:
      - app-network

  minio:
    image: minio/minio
    restart: always
    command: server /data --console-address ":9001"
    environment:
      MINIO_ROOT_USER: ${MINIO_ROOT_USER:-admin}
      MINIO_ROOT_PASSWORD: ${MINIO_ROOT_PASSWORD:-password123}
    volumes:
      - minio_data:/data
    networks:
      - app-network

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    restart: always
    environment:
      - DATABASE_URL=postgres://${DB_USER:-postgres}:${DB_PASSWORD:-password}@db:5432/${DB_NAME:-myapp}
      - REDIS_URL=redis://redis:6379
      - MINIO_ENDPOINT=minio
      - MINIO_PORT=9000
    depends_on:
      - db
      - redis
      - minio
    networks:
      - app-network

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    restart: always
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost/api
    depends_on:
      - backend
    networks:
      - app-network

  proxy:
    image: nginx:alpine
    restart: always
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - frontend
      - backend
    networks:
      - app-network

networks:
  app-network:
    driver: bridge

volumes:
  postgres_data:
  redis_data:
  minio_data:
```

## Explanation
1. **db (PostgreSQL)**: Uses a named volume `postgres_data` for persistence. Connects to `app-network`.
2. **redis**: Caching layer, uses `redis_data` volume.
3. **minio**: Object storage. We expose a custom command to enable the console on port 9001.
4. **backend**: Built from `./backend`. The `DATABASE_URL` references `db:5432`. It uses `depends_on` to ensure DB, Redis, and MinIO start first.
5. **frontend**: Built from `./frontend`. 
6. **proxy (Nginx)**: The only service exposing a port (`80:80`) to the host. It routes traffic internally to `frontend` or `backend` on the `app-network`.

## Summary Checklist
- [ ] Understand how services refer to each other by service name (e.g., `db`, `redis`).
- [ ] Know how to use `.env` fallback values (`${VAR:-default}`).
- [ ] Understand why only the proxy exposes a port to the outside world.

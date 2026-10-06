# Lesson 10: Production Compose

## Learning Objectives
- Prepare Compose files for production environments.
- Configure restart policies and resource limits.
- Set up proper logging.

## Is Compose for Production?
Yes and No. Docker Compose is great for single-server deployments (e.g., a VPS on DigitalOcean or AWS EC2). However, it lacks high-availability and auto-scaling across multiple machines. For multi-node setups, you need Kubernetes or Docker Swarm. 

For single-server production, you must harden your Compose file.

## 1. Restart Policies
Always set `restart: unless-stopped` or `always` so your apps recover from crashes and server reboots.

## 2. Resource Limits
A memory leak in your Node app could crash the whole server. Limit resources using the `deploy` key (Compose V2).

```yaml
services:
  api:
    image: my-api
    deploy:
      resources:
        limits:
          cpus: '0.50' # Max 50% of 1 CPU core
          memory: 512M # Max 512MB RAM
        reservations:
          memory: 128M
```

## 3. Logging Strategy
By default, Docker stores logs as JSON files on the host, which can grow infinitely and consume all disk space.

```yaml
services:
  api:
    image: my-api
    logging:
      driver: "json-file"
      options:
        max-size: "10m"  # Keep logs up to 10MB
        max-file: "3"    # Keep max 3 files (rotates)
```
Alternatively, you can ship logs directly to AWS CloudWatch or Splunk using different logging drivers.

## 4. Run Detached
Never run `docker-compose up` in production. Always run:
```bash
docker-compose up -d
```
This runs everything in the background.

## Summary Checklist
- [ ] Understand the limitations of Compose in production.
- [ ] Apply `restart` policies.
- [ ] Prevent server crashes with resource `limits`.
- [ ] Prevent disk-full errors with `logging` max-size.

# Lesson 4: Database Deployment

## Production Database Setup
Deploying databases is significantly harder than deploying stateless applications. Data persistence is critical.

## Managed vs Self-Hosted
- **Managed (AWS RDS, DigitalOcean Managed DB):** Highly recommended for production. Handles backups, failover, and updates automatically. High cost.
- **Self-Hosted (Docker/VPS):** You are responsible for everything. Lower cost, higher operational burden.

## Self-Hosted Considerations
If hosting PostgreSQL via Docker Compose:
1.  **Persistent Volumes:** You *must* map the database data directory to a named volume or host directory so data survives container restarts.
    ```yaml
    volumes:
      - pgdata:/var/lib/postgresql/data
    ```
2.  **Passwords:** Never hardcode passwords in the compose file. Use an `.env` file or Docker Secrets.
3.  **Backups:** Set up a cron job on the host machine to run `pg_dump` daily and upload to S3.

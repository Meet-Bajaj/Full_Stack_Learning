# Lesson 5: Deployment Process

## Manual Deployment vs Automated Deployment
- **Manual:** SSH into the server, `git pull`, `npm install`, `npm run build`, restart PM2/Docker. Error-prone and slow.
- **Automated:** Code push triggers a CI/CD pipeline (like GitHub Actions) that builds the artifact and automatically deploys it to the server.

## Deploying with Docker Compose
Docker Compose is ideal for single-VPS deployments.

1. Create a `docker-compose.prod.yml`.
2. Push your code.
3. On the server, pull the code.
4. Run: `docker compose -f docker-compose.prod.yml up -d --build`

## Process Management with PM2 (Non-Docker)
If you are deploying native Node.js apps without Docker, use PM2 to keep them running in the background and restart them on crashes.

```bash
npm install -g pm2
pm2 start npm --name "my-app" -- run start:prod
pm2 save
pm2 startup
```

## Health Checks
Implement a `/health` endpoint in your API that returns a `200 OK` status. This allows your reverse proxy or monitoring tools to verify the app is running correctly.

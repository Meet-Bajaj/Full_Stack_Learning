# Lesson 06: The Deployment Pipeline

## Learning Objectives
By the end of this lesson, you will be able to:
- Deploy applications to a Virtual Private Server (VPS) via SSH within a CI/CD pipeline.
- Manage environment variables securely across different environments.
- Use `appleboy/ssh-action` for remote execution.

---

## 1. Remote SSH Deployment

If you are not using a PaaS (like Vercel or Heroku), deploying to a bare-metal VPS (like DigitalOcean or AWS EC2) involves connecting to the server via SSH and executing commands.

### The Manual Process (What we are automating)
1. SSH into the server: `ssh user@192.168.1.100`
2. Pull the latest code: `git pull origin main`
3. Restart the server: `pm2 restart api` or `docker-compose up -d`

### Automating with GitHub Actions
We can use the `appleboy/ssh-action` to execute scripts on a remote server securely.

First, you must add these secrets to your GitHub repo:
- `SERVER_HOST`: The IP address of your VPS.
- `SERVER_USER`: The SSH username (e.g., `ubuntu` or `root`).
- `SERVER_SSH_KEY`: The private RSA/Ed25519 key that grants access.

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Execute Remote SSH Commands
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          script: |
            cd /var/www/myapp
            git pull origin main
            npm ci
            npm run build
            pm2 restart myapp
```

---

## 2. Deploying Docker Containers via SSH

If you built and pushed a Docker image in the previous step (Lesson 5), deploying becomes even cleaner. The VPS doesn't need Node.js or Git installed; it just needs Docker.

```yaml
jobs:
  deploy-docker:
    needs: docker-build-push # Waits for the image to be pushed to registry
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to VPS
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          script: |
            # Pull the new image
            docker pull myusername/myapp:latest
            
            # Stop and remove the old container
            docker stop myapp || true
            docker rm myapp || true
            
            # Start the new container
            docker run -d --name myapp -p 80:3000 myusername/myapp:latest
```

---

## 3. Environment Management

When deploying, your app needs `.env` variables (Database URLs, API keys).
**Never commit `.env` files to Git.**

### Injecting Environments in CI
You can inject secrets directly into the SSH command or write them to a file.

```yaml
          script: |
            cd /var/www/myapp
            
            # Recreate the .env file on the server securely
            echo "DATABASE_URL=${{ secrets.PROD_DB_URL }}" > .env
            echo "API_KEY=${{ secrets.PROD_API_KEY }}" >> .env
            
            docker-compose up -d
```

### Staging vs Production
You can create multiple jobs for different branches.
- If push is to `main`, deploy to Staging.
- If a Release Tag is created, deploy to Production.

## Summary
- Use SSH actions to trigger pulls or Docker restarts on a remote VPS.
- Keep server credentials securely in GitHub Secrets.
- Always regenerate or inject `.env` files dynamically during the deployment step.

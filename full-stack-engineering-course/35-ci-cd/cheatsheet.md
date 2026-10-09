# Module 35: CI/CD Cheatsheet (GitHub Actions)

## Basic Workflow Syntax
Create files in `.github/workflows/name.yml`

```yaml
name: CI Pipeline

# Triggers
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch: # Allows manual trigger button

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
        
      - name: Run command
        run: echo "Hello World"
```

## Node.js CI Best Practices
Always use `npm ci` instead of `npm install`.
Always utilize caching.

```yaml
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm' # Automatically caches based on package-lock.json
      - run: npm ci
```

## Passing Files Between Jobs (Artifacts)
Jobs run on isolated VMs. Use artifacts to share compiled code.

```yaml
      # In Job 1: Build
      - uses: actions/upload-artifact@v4
        with:
          name: dist-folder
          path: ./dist
          
      # In Job 2: Deploy (Requires `needs: build`)
      - uses: actions/download-artifact@v4
        with:
          name: dist-folder
          path: ./dist
```

## Docker Build & Push (GHCR)
```yaml
      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          
      - uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ghcr.io/${{ github.repository }}:latest
```

## Remote SSH Deployment
```yaml
      - uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          script: |
            cd /var/www/myapp
            git pull
            npm ci
            pm2 restart app
```

## Important Environment Variables / Secrets
- `${{ secrets.MY_SECRET }}` - Defined in Repo Settings > Secrets.
- `${{ github.sha }}` - The git commit hash (great for Docker tags).
- `${{ github.actor }}` - The username of the person who triggered the workflow.

# Lesson 09: Complete Pipeline Example

## Learning Objectives
By the end of this lesson, you will be able to:
- Synthesize the concepts from previous lessons into a single, production-ready CI/CD workflow.

---

## 1. The Full Architecture

We will create a pipeline that:
1. Triggers on pushes to the `main` branch.
2. Lints and Tests the code.
3. Builds a Docker Image and pushes it to GitHub Container Registry.
4. SSHs into a production VPS, pulls the image, and restarts the app.

---

## 2. The Final Workflow File

Create `.github/workflows/production.yml`:

```yaml
name: Production CI/CD

on:
  push:
    branches:
      - main

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  # -------------------------
  # JOB 1: TEST & LINT
  # -------------------------
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run Linter
        run: npm run lint
        
      - name: Run Tests
        run: npm test

  # -------------------------
  # JOB 2: BUILD DOCKER IMAGE
  # -------------------------
  build-and-push:
    needs: test # MUST pass tests first
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Log in to GitHub Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest, ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}

  # -------------------------
  # JOB 3: DEPLOY TO PROD
  # -------------------------
  deploy:
    needs: build-and-push # MUST wait for image to build
    runs-on: ubuntu-latest
    
    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.PROD_HOST }}
          username: ${{ secrets.PROD_USERNAME }}
          key: ${{ secrets.PROD_SSH_KEY }}
          script: |
            # Login to registry on server
            echo ${{ secrets.GITHUB_TOKEN }} | docker login ghcr.io -u ${{ github.actor }} --password-stdin
            
            # Pull new image
            docker pull ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
            
            # Stop existing container
            docker stop prod-api || true
            docker rm prod-api || true
            
            # Run new container
            docker run -d \
              --name prod-api \
              --restart unless-stopped \
              -p 80:3000 \
              -e DATABASE_URL="${{ secrets.PROD_DB_URL }}" \
              ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
```

## Summary
You now possess a complete, professional CI/CD pipeline that tests, builds, and deploys securely and automatically. This eliminates manual deploy steps and guarantees that only code passing the test suite makes it to production!

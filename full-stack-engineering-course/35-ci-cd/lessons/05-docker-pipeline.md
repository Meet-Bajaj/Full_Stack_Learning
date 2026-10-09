# Lesson 05: The Docker Pipeline

## Learning Objectives
By the end of this lesson, you will be able to:
- Build Docker images inside a CI/CD pipeline.
- Push images to a Container Registry (Docker Hub, GitHub Container Registry).
- Optimize Docker builds in CI using layer caching.

---

## 1. Why Build Docker in CI?

When deploying modern applications, you rarely upload raw code files to a server via FTP/SSH. Instead, you package the application and its environment into a Docker Image. 

The CI server builds the image and pushes it to a central repository (Registry). The production server then simply pulls the image and runs it.

---

## 2. The Basic Docker Workflow

To build and push an image, the CI runner must:
1. Log in to the Container Registry.
2. Build the image.
3. Push the image.

GitHub provides official actions for this via Docker.

```yaml
jobs:
  docker-build-push:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      # 1. Login to Docker Hub
      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
          
      # 2. Build and Push
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: . # Uses the Dockerfile in the root of the repo
          push: true
          # Tag with the git commit hash for unique versioning
          tags: myusername/myapp:${{ github.sha }}, myusername/myapp:latest
```

### Tagging Strategy
Notice we tag the image with `${{ github.sha }}` (the unique Git commit hash) AND `latest`. 
- The unique tag allows you to roll back to a specific commit easily.
- The `latest` tag allows easy pulling if you don't care about the specific version.

---

## 3. GitHub Container Registry (GHCR)

You don't have to use Docker Hub. GitHub has its own built-in registry. You can authenticate using the automatic `GITHUB_TOKEN` provided to every workflow.

```yaml
      - name: Log in to the Container registry
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ghcr.io/${{ github.repository }}:latest
```
*(Ensure you modify your workflow permissions to grant `packages: write`)*.

---

## 4. Docker Layer Caching in CI

Building a Docker image from scratch every time takes a long time, especially `RUN npm install`. 
Docker uses layer caching on your local machine, but a GitHub runner is a fresh, empty VM every time.

To fix this, we can tell Docker to cache its layers using GitHub Actions' cache API.

```yaml
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Build and push with Cache
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: myusername/myapp:latest
          # Enable caching
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

## Summary
- Building Docker images in CI standardizes the deployment artifact.
- Images should be tagged with the Git commit SHA for traceability.
- Utilizing `docker/build-push-action` with `type=gha` caching drastically reduces build times.

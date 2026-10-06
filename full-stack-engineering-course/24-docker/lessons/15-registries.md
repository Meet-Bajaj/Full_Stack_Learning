# Lesson 15: Registries

## Learning Objectives
- Understand what an image registry is.
- Push and pull images from Docker Hub.
- Use GitHub Container Registry (GHCR).
- Implement tagging strategies.

## What is a Registry?
A registry is a stateless, highly scalable server-side application that stores and lets you distribute Docker images. 
- **Docker Hub**: The default public registry.
- **GHCR (GitHub Container Registry)**: Tightly integrated with GitHub Actions.
- **AWS ECR / GCP GCR / Azure ACR**: Cloud-provider specific registries.

## Tagging Strategy
Before pushing an image, it must be tagged with the registry's address.
The format is: `<registry_url>/<username_or_org>/<image_name>:<tag>`
If you omit `<registry_url>`, Docker assumes `docker.io` (Docker Hub).

Best practice for tagging:
- Push the Git commit SHA (e.g., `my-app:abc123f`) for absolute traceability.
- Update the `latest` tag so users can easily grab the newest version.

## Pushing to Docker Hub
```bash
# 1. Login
docker login

# 2. Tag the image
docker tag my-app:latest username/my-app:1.0.0
docker tag my-app:latest username/my-app:latest

# 3. Push the images
docker push username/my-app:1.0.0
docker push username/my-app:latest
```

## Pushing to GitHub Container Registry (GHCR)
Often used for private company images.
```bash
# 1. Login (requires a GitHub Personal Access Token)
echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin

# 2. Tag
docker tag my-app ghcr.io/username/my-app:1.0

# 3. Push
docker push ghcr.io/username/my-app:1.0
```

## Summary Checklist
- [ ] Understand how registries distribute images.
- [ ] Adopt a robust tagging strategy (using Git SHAs).
- [ ] Successfully push an image to Docker Hub or GHCR.

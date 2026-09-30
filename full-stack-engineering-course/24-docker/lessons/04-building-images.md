# Lesson 04: Building Images

## Learning Objectives
- Use `docker build` to create images from a Dockerfile.
- Understand tagging and versioning.
- Optimize layer caching for faster builds.
- Understand the build context.

## The `docker build` Command
The command to build an image from a Dockerfile is:
```bash
docker build -t my-app:1.0 .
```
- `-t my-app:1.0`: Tags the image with the name `my-app` and the tag `1.0`. If you omit the tag, Docker uses `latest` by default.
- `.`: The build context. This tells Docker where to find the files needed for the build.

## Build Context (Important)
The build context is the set of files located in the specified `PATH` (the `.` in the command above). Docker sends the *entire context* to the Docker daemon before it starts building. 
If your context is your entire home directory, Docker will try to upload gigabytes of data to the daemon! Always run `docker build` from the directory containing your code and use `.dockerignore`.

## Build Arguments (ARG)
You can pass variables at build time using `ARG`.
```dockerfile
# Dockerfile
ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine
```
Build it with:
```bash
docker build --build-arg NODE_VERSION=16 -t my-app .
```

## Optimizing Layer Caching
As discussed in Lesson 3, every `RUN`, `COPY`, and `ADD` creates a layer. Docker caches these layers.
To optimize builds, order your Dockerfile from the least frequently changed items to the most frequently changed.

```dockerfile
# 1. Base image (rarely changes)
FROM python:3.9-slim

# 2. System dependencies (infrequent)
RUN apt-get update && apt-get install -y gcc

# 3. Application dependencies (more frequent)
COPY requirements.txt .
RUN pip install -r requirements.txt

# 4. Source code (most frequent)
COPY . .

CMD ["python", "app.py"]
```
If you change `app.py`, Docker uses cached layers for steps 1-3 and only rebuilds step 4.

## Summary Checklist
- [ ] Understand the `docker build` command and its options.
- [ ] Know what the build context is and why it matters.
- [ ] Use `ARG` for build-time variables.
- [ ] Organize Dockerfiles to maximize cache hits.

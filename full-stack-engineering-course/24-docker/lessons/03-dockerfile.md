# Lesson 03: The Dockerfile

## Learning Objectives
- Master essential Dockerfile instructions.
- Understand how image layers and caching work.
- Learn how to use `.dockerignore`.

## What is a Dockerfile?
A Dockerfile is a recipe. It's a text file that contains a series of instructions that tell Docker how to build an image. 

## Essential Instructions

### 1. `FROM`
Every Dockerfile must start with a `FROM` instruction (except for some advanced use cases). It sets the base image.
```dockerfile
FROM node:18-alpine
```

### 2. `WORKDIR`
Sets the working directory for all subsequent instructions. Like running `cd`.
```dockerfile
WORKDIR /app
```

### 3. `COPY` and `ADD`
Copies files from your host machine into the container. `COPY` is preferred unless you specifically need `ADD`'s ability to extract tar files or download from URLs.
```dockerfile
COPY package*.json ./
COPY . .
```

### 4. `RUN`
Executes a command during the **build** phase. Usually used to install dependencies. Each `RUN` creates a new layer.
```dockerfile
RUN npm install
```

### 5. `ENV` and `ARG`
- `ENV` sets environment variables that persist in the running container.
- `ARG` sets variables only available during the build process.

### 6. `EXPOSE`
Documents the ports that the container will listen on. It does *not* actually publish the port (you still need `-p` when running).
```dockerfile
EXPOSE 3000
```

### 7. `CMD` and `ENTRYPOINT`
- `CMD` provides defaults for an executing container. Can be easily overridden by the user.
- `ENTRYPOINT` configures a container that will run as an executable. Harder to override.

```dockerfile
CMD ["npm", "start"]
```

## Layer Caching (CRITICAL)
Docker builds images layer by layer. Each instruction (`RUN`, `COPY`, `ADD`) creates a new layer.
Docker caches these layers to speed up subsequent builds. 
If a layer changes, all subsequent layers are invalidated and must be rebuilt.
**Best Practice**: Order instructions from least likely to change to most likely to change.

```dockerfile
# Bad Practice:
COPY . .
RUN npm install 
# Changing any source code file invalidates the cache, forcing npm install to run every time!

# Good Practice:
COPY package*.json ./
RUN npm install
COPY . .
# Now, npm install is only re-run if package.json changes.
```

## `.dockerignore`
Just like `.gitignore`, this prevents unnecessary files (like `node_modules`, `.git`, `.env`) from being copied into the container context, keeping the build fast and the image small.

## Summary Checklist
- [ ] Understand FROM, WORKDIR, COPY, RUN, CMD
- [ ] Master layer caching by copying dependencies before source code
- [ ] Always use a `.dockerignore`

# Docker Exercises

## Exercise 1: Containerizing a Static Website
**Task**: Create a Dockerfile that uses the `nginx:alpine` image to serve a simple `index.html` file.
1. Create a directory. Inside, create an `index.html` with "Hello Docker!".
2. Write a Dockerfile that copies `index.html` to `/usr/share/nginx/html`.
3. Build the image as `my-website:1.0`.
4. Run the image, mapping port 8080 on your host to port 80 in the container.
5. Verify it works by visiting `http://localhost:8080`.

## Exercise 2: Multi-Stage Build Debugging
**Task**: You are given a poorly written Dockerfile for a React app. Optimize it.
```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]
```
*Goal:* Rewrite this using a multi-stage build, resulting in an `nginx:alpine` final image. Utilize layer caching correctly by copying `package.json` separately.

## Exercise 3: Named Volumes
**Task**: Run a PostgreSQL container that persists its data.
1. Create a named volume called `pg-data`.
2. Run a `postgres:15-alpine` container.
3. Set the required `POSTGRES_PASSWORD` environment variable.
4. Mount the `pg-data` volume to `/var/lib/postgresql/data`.
5. Stop and remove the container.
6. Run a *new* container using the same volume. Verify your data survived.

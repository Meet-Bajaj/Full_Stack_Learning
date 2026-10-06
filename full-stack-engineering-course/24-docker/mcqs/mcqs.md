# Docker Multiple Choice Questions (MCQs)

## Beginner Level
1. What is the primary difference between a Docker container and a Virtual Machine?
A) Containers require a hypervisor, VMs do not.
B) Containers share the host OS kernel, VMs have their own guest OS.
C) VMs are faster to start than containers.
D) Containers cannot isolate processes.
**Correct Answer:** B
**Explanation:** Containers leverage the host machine's kernel and isolate at the process level, making them much lighter than VMs which require a full guest OS.

2. Which command downloads an image from a registry without running it?
A) `docker start`
B) `docker get`
C) `docker pull`
D) `docker download`
**Correct Answer:** C
**Explanation:** `docker pull` fetches the image layers from the registry to your local machine.

## Intermediate Level
3. You have a Dockerfile with `COPY . .` followed by `RUN npm install`. Why is this a bad practice for build times?
A) It causes npm to fail.
B) Changing any source code file will invalidate the layer cache for `npm install`, forcing it to run every time.
C) `COPY` must only be used at the end of a Dockerfile.
D) `RUN npm install` should be replaced with `CMD npm install`.
**Correct Answer:** B
**Explanation:** Docker caches layers. If the context of `COPY` changes, all subsequent layers are rebuilt. You should copy `package.json` first, run install, then copy source.

4. What is the primary purpose of a multi-stage build?
A) To run multiple containers at once.
B) To build images for multiple architectures simultaneously.
C) To reduce the final image size by discarding build dependencies.
D) To use multiple base OS kernels in one image.
**Correct Answer:** C
**Explanation:** Multi-stage builds let you copy compiled artifacts from a "builder" stage into a final, smaller base image.

## Advanced Level
5. When running a Node.js API in production, why should you avoid using `CMD ["npm", "start"]`?
A) `npm` consumes too much memory.
B) `npm` does not forward system signals (like SIGTERM) to the child node process, preventing graceful shutdown.
C) `npm start` is only for development environments.
D) It requires running the container as root.
**Correct Answer:** B
**Explanation:** When Docker stops a container, it sends SIGTERM. If `npm` is PID 1, it catches it but doesn't pass it to your app. Use `CMD ["node", "app.js"]`.

*(More MCQs to be added up to 130 in actual course material)*

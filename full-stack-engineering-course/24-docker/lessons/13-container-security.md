# Lesson 13: Container Security

## Learning Objectives
- Implement the principle of least privilege.
- Use non-root users.
- Configure read-only filesystems.
- Understand vulnerability scanning.

## 1. Non-Root Users (CRITICAL)
By default, processes inside a Docker container run as the `root` user (UID 0). If a hacker exploits a vulnerability in your Node app (e.g., via a remote code execution exploit), they gain root privileges inside the container. If there is a container escape vulnerability, they gain root on the host machine.

**Solution:** Always drop privileges.
```dockerfile
# Node images have a built-in 'node' user
USER node
CMD ["node", "app.js"]
```

## 2. Read-Only Filesystems
If an attacker compromises your app, they often try to download malware or modify your source code. You can block this by making the container's filesystem read-only at runtime.
```bash
docker run --read-only -p 3000:3000 my-app
```
If your app *needs* to write temp files (like uploading an image), mount a specific `tmpfs` just for that directory.

## 3. Capability Dropping
Linux uses "capabilities" to break down root privileges into smaller units. Docker drops many capabilities by default, but you can drop all of them and only add back what you strictly need.
```bash
docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE my-app
```

## 4. Vulnerability Scanning
Images built from outdated base images often contain hundreds of known CVEs (Common Vulnerabilities and Exposures).
You should scan your images in your CI/CD pipeline using tools like:
- `docker scout cves <image>` (built into Docker Desktop)
- Trivy (`trivy image my-app`)

## Summary Checklist
- [ ] NEVER run production apps as root.
- [ ] Use `--read-only` filesystems when possible.
- [ ] Scan images for CVEs regularly.

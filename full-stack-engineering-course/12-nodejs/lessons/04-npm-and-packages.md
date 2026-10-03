# Lesson 4: NPM and Package Management

## What is NPM?
NPM stands for Node Package Manager. It is two things:
1. An online repository for publishing open-source Node.js projects.
2. A command-line utility for interacting with said repository, aiding in package installation, version management, and dependency management.

*(Note: Yarn and pnpm are popular alternatives that offer caching and workspace features, but npm is the default).*

## package.json Anatomy
The `package.json` file is the heart of any Node.js project. It holds metadata and manages dependencies. Initialize it using:
```bash
npm init -y
```

**Key sections:**
- `name` & `version`: Identity of the project.
- `main`: Entry point of the package.
- `scripts`: Custom command-line scripts.
- `dependencies`: Packages required for the app to run in production.
- `devDependencies`: Packages required only for local development and testing.

## dependencies vs devDependencies
```bash
# Installs to dependencies
npm install express

# Installs to devDependencies
npm install --save-dev jest nodemon
```
**Why the distinction?** When you deploy to production, you run `npm install --production`. This skips `devDependencies`, saving disk space, reducing build time, and minimizing security surface area.

## Semantic Versioning (SemVer)
NPM uses SemVer: `MAJOR.MINOR.PATCH` (e.g., `1.4.2`).
- **PATCH (1.4.3):** Bug fixes, backward compatible.
- **MINOR (1.5.0):** New features, backward compatible.
- **MAJOR (2.0.0):** Breaking changes, NOT backward compatible.

**Prefixes in package.json:**
- `^1.4.2`: Update to future MINOR and PATCH versions.
- `~1.4.2`: Update to future PATCH versions only.
- `1.4.2`: Exact version only.

## package-lock.json
This file is generated automatically. It describes the *exact* dependency tree that was generated. It ensures that subsequent installs (on co-workers' machines or CI/CD pipelines) result in the exact same `node_modules` tree, regardless of `^` or `~` in `package.json`. **Always commit this file to version control.**

## NPX
`npx` is a package runner tool included with npm. It allows you to execute a package without installing it globally.
```bash
npx create-react-app my-app
```

## Summary Checklist
- [ ] Initialize a project with `npm init`.
- [ ] Understand `dependencies` vs `devDependencies`.
- [ ] Understand SemVer (`^` and `~`).
- [ ] Grasp the importance of `package-lock.json`.
- [ ] Use `npx` to run CLI tools.

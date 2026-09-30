# Lesson 03: Setting Up Your Environment

Your development environment is your workshop. A well-organized, properly configured workshop makes building things much easier.

We recommend macOS or Linux (Ubuntu) for development. If you are on Windows, you **must** use WSL2 (Windows Subsystem for Linux) for a smooth experience.

## 1. Terminal & Shell

The terminal is how you communicate directly with your operating system.
- **Mac:** Use the built-in `Terminal` or download `iTerm2`. Install `Homebrew` (`brew`) as your package manager.
- **Windows (WSL2):** Install Ubuntu from the Microsoft Store. Use `Windows Terminal`.
- **Linux:** You're already set.

We recommend using `zsh` with `Oh My Zsh` for a better terminal experience (auto-completion, themes, git status).

## 2. Visual Studio Code (VS Code)

Download and install [VS Code](https://code.visualstudio.com/). It is the industry standard.

**Essential Extensions to Install:**
- **ESLint:** Lints your JavaScript/TypeScript code to catch errors early.
- **Prettier - Code formatter:** Automatically formats your code to ensure consistent styling.
- **GitLens:** Supercharges Git inside VS Code (shows who wrote which line of code).
- **Thunder Client** or **Postman:** For testing API endpoints without leaving the editor.
- **Docker:** Syntax highlighting and management for Dockerfiles.
- **Error Lens:** Highlights errors directly in the code line, so you don't have to hover.

## 3. Node.js via NVM

Do **not** install Node.js directly from the official website installer. Different projects require different versions of Node.js. 

Instead, install **NVM (Node Version Manager)** (or `nvm-windows` if you aren't using WSL).
Once installed, run:
```bash
nvm install --lts
nvm use --lts
node -v # Verify installation
```

## 4. Git and GitHub

Git is a version control system. It tracks changes to your files over time.
1. Install Git for your OS.
2. Configure it:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
3. Create a free account on [GitHub](https://github.com/).
4. Set up SSH keys to authenticate your machine with GitHub securely without entering your password every time.

## 5. Docker Desktop

Docker allows you to run applications in isolated environments called containers. This guarantees that "if it works on my machine, it works on yours."
1. Download and install Docker Desktop.
2. Ensure it is running (you should see the whale icon in your taskbar/menu bar).
3. Test it: `docker run hello-world`

## 6. Databases

Instead of installing databases directly on your machine (which clutters your OS and causes version conflicts), we will run them via Docker throughout this course!

If you prefer local installations:
- **PostgreSQL:** Download pgAdmin and the Postgres server.
- **MongoDB:** Download MongoDB Community Server and MongoDB Compass (GUI).
- **Redis:** (Easiest via Docker or WSL).

**Next Step:** Proceed to `04-course-structure-guide.md`.

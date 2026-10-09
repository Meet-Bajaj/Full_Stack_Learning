# Lesson 01: Linux Fundamentals

## Learning Objectives
By the end of this lesson, you will be able to:
- Explain what Linux is, and distinguish between the Kernel and Distributions (Distros).
- Understand why Linux is the industry standard for web servers.
- Grasp the concept of the Shell and Command Line Interface (CLI).

---

## 1. What is Linux?

Linux is a free, open-source operating system created by Linus Torvalds in 1991. Unlike Windows or macOS, Linux is highly customizable and heavily relied upon in enterprise environments.

### The Kernel vs. The Distribution
- **The Linux Kernel:** The core of the operating system. It talks directly to the hardware (CPU, Memory, Devices). 
- **The Distribution (Distro):** The Kernel paired with a package manager, default software, and sometimes a graphical user interface (GUI). 
  - *Examples:* Ubuntu, Debian, CentOS, Alpine, RedHat.

### The Mental Model
If a computer is a restaurant:
- **Hardware:** The kitchen equipment.
- **The Kernel:** The Head Chef who manages the equipment and resources.
- **The Shell/CLI:** The Waiter who takes your order (command) and gives it to the Chef.
- **The Distro:** The brand/theme of the restaurant.

---

## 2. Why Linux for Servers?

As a Full-Stack Engineer, you might write code on a Mac or Windows machine, but 90%+ of the time, you will deploy that code to a Linux server. Why?

1. **Cost:** It is 100% free. No licensing fees.
2. **Stability & Reliability:** Linux servers can run for years without needing a reboot.
3. **Performance:** It has virtually no overhead. A server doesn't need a GUI taking up RAM; it operates entirely via text (CLI).
4. **Security:** Granular permission models and a massive open-source community patching vulnerabilities rapidly.
5. **Docker/Containers:** Containers share the host OS kernel. Docker was built natively for Linux.

---

## 3. The Shell (Bash / Zsh)

When you log into a Linux server, you are greeted by a black screen with text. This is the **Shell**.
The shell interprets your text commands and executes them. 

- **Bash (Bourne Again Shell):** The default on almost all Linux servers.
- **Zsh (Z Shell):** Popular on local Mac/Linux development machines due to better autocompletion plugins.

The command prompt usually looks like this:
`user@hostname:~$`
- `user`: Your current logged-in user.
- `hostname`: The name of the server.
- `~`: Indicates you are in your "home" directory.
- `$`: Indicates you are a standard user (a `#` usually indicates you are the `root` superuser).

## Summary
- Linux dominates the server market due to its stability, performance, and cost.
- As an engineer, interacting with Linux happens through the Shell (CLI).
- Ubuntu/Debian are the most common distros for web deployment.

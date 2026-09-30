# Lesson 03: Operating Systems

## Learning Objectives
- Describe the primary responsibilities of an Operating System (OS).
- Explain the difference between processes and threads.
- Understand basic memory management and file systems.
- Explain why OS concepts matter for web development.

## Prerequisites
- Lesson 01 and 02.

## Concept Explanation
An Operating System (Windows, macOS, Linux, iOS, Android) is the core software that manages computer hardware and provides common services for computer programs.

### Key Responsibilities
1. **Process Management**: Deciding which program gets to use the CPU and for how long.
2. **Memory Management**: Allocating RAM to programs and ensuring they don't overwrite each other's memory.
3. **File System**: Organizing how data is stored on and retrieved from the storage drive.
4. **Hardware Abstraction**: Providing a standard way for programs to interact with hardware (so a web browser doesn't need to know the specific brand of your Wi-Fi chip).

### Processes vs Threads
- **Process**: A program in execution. It has its own isolated memory space. (e.g., Google Chrome).
- **Thread**: The smallest sequence of programmed instructions that can be managed independently by the scheduler. Threads exist *within* a process and share the process's memory. (e.g., Multiple tabs in a browser might be threads, though modern Chrome uses separate processes for security).

## WHY it exists
Without an OS, every programmer would have to write custom code to talk to every possible keyboard, mouse, monitor, and hard drive. The OS provides an API (system calls) to make hardware interaction simple and secure.

## Mental Model & Real-World Analogy
**The OS as a Restaurant Manager**
- The Hardware is the restaurant building and staff.
- The Applications (Browser, Spotify) are the customers.
- The **OS is the Manager**. The manager seats customers (Process scheduling), makes sure they get their food (Hardware access), ensures one customer doesn't eat another's food (Memory isolation), and kicks them out if they misbehave (Crashing a process).

## OS Concepts in Web Development
Why do web developers care? 
1. **Servers run Linux**: Most web servers run Linux. You will need to know how to navigate its file system, manage permissions, and view running processes.
2. **Concurrency**: Node.js is single-threaded, but can spawn child processes. Knowing the difference between threads and processes helps you scale applications.
3. **Ports**: Web servers listen on specific "Ports" managed by the OS.

## Common Mistakes
- **Assuming multiple threads means multiple processes**: Threads share memory, making communication between them fast but dangerous (race conditions). Processes have separate memory, making them safer but harder to communicate across.

## Exercises
1. Open your terminal or command prompt. Find out how to list the current running processes (`tasklist` on Windows, `top` or `ps aux` on Mac/Linux).
2. What happens if a process tries to access memory that the OS didn't allocate to it? (Answer: The OS kills the process. This is called a Segmentation Fault).

## Summary
The OS is the master controller of the computer, safely managing hardware resources and allowing multiple programs to run seemingly at the same time.

## Completion Checklist
- [ ] I can list 3 responsibilities of an OS.
- [ ] I understand the difference between a Process and a Thread.
- [ ] I know why understanding the OS is important for deploying servers.

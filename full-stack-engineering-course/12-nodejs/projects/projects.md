# Module 12 Projects

## 1. File-Based Notes App (Beginner)
**Objective**: Build a CLI app to add, list, read, and delete notes using the `fs` module.
**Requirements**:
- Use `yargs` or `process.argv` for CLI arguments.
- Store notes in a `notes.json` file.
- Implement error handling for missing files or duplicate note titles.

## 2. Raw HTTP Server (Intermediate)
**Objective**: Build a RESTful API without using Express.
**Requirements**:
- Use the built-in `http` module.
- Implement manual routing for `/api/users` (GET, POST).
- Handle JSON request bodies manually using streams.
- Return appropriate HTTP status codes.

## 3. Log File Parser (Advanced)
**Objective**: Process a massive log file (1GB+) efficiently.
**Requirements**:
- Use `fs.createReadStream` and `fs.createWriteStream`.
- Parse Apache/Nginx logs, extract error lines, and pipe them to a new `errors.log` file.
- Implement a Transform stream to filter and format the data.
- Ensure the app stays under 50MB RAM usage (handle backpressure).

## 4. Multi-threaded Image Resizer (Advanced)
**Objective**: Use Worker Threads for CPU-intensive tasks.
**Requirements**:
- Accept a directory of images.
- Spawn a worker pool (using `worker_threads`).
- Distribute image resizing tasks to the workers.
- Log completion time and compare it against a single-threaded approach.

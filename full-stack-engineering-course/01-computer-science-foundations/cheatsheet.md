# CS Foundations Cheatsheet

## Hardware & Architecture
- **CPU**: Central Processing Unit. Executes instructions (Fetch, Decode, Execute).
- **RAM**: Random Access Memory. Volatile, fast, short-term storage for active processes.
- **Storage**: HDD/SSD. Non-volatile, slower, long-term storage.
- **Process**: A program in execution with isolated memory.
- **Thread**: A sequence of execution within a process; shares memory with other threads in the process.

## Data Representation
- **Bit**: A single 0 or 1.
- **Byte**: 8 bits (256 possible values).
- **ASCII**: 7-bit character encoding (English/symbols only).
- **UTF-8**: Variable length (1-4 bytes) character encoding (All languages, emojis).
- **Hexadecimal**: Base-16 number system. Used for colors (`#FF0000`) and memory addresses.

## Networking
- **IP Address**: Unique address for a device on a network (e.g., `192.168.1.1`).
- **DNS**: Domain Name System. Translates domains (`google.com`) to IPs.
- **TCP**: Transmission Control Protocol. Reliable, ordered, slower (used for Web, Email).
- **UDP**: User Datagram Protocol. Unreliable, unordered, fast (used for Video, Gaming).
- **Port**: A virtual endpoint for a specific service (HTTP=80, HTTPS=443).

## HTTP
- **Stateless**: Each request is independent.
- **Methods**:
  - `GET`: Read data.
  - `POST`: Create/Submit data.
  - `PUT`: Update data.
  - `DELETE`: Remove data.
- **Status Codes**:
  - `2xx`: Success (`200 OK`)
  - `3xx`: Redirection (`301 Moved`)
  - `4xx`: Client Error (`400 Bad Request`, `401 Unauthorized`, `404 Not Found`)
  - `5xx`: Server Error (`500 Internal Server Error`)

## Data Structures
- **Array**: Ordered, contiguous memory. Fast access `O(1)`. Slow insert/delete `O(n)`.
- **Hash Map (Object)**: Key-Value pairs. Fast access, insert, delete `O(1)`.
- **Stack**: LIFO (Last In, First Out). Think: Undo button.
- **Queue**: FIFO (First In, First Out). Think: Waiting line.
- **Linked List**: Nodes pointing to the next node. Fast insert/delete `O(1)`. Slow access `O(n)`.

## Algorithms (Big O)
- **O(1) - Constant**: Time does not change with input size. (Hash Map lookup).
- **O(log n) - Logarithmic**: Extremely fast for large data. (Binary Search).
- **O(n) - Linear**: Time grows linearly with input. (Looping an array).
- **O(n²) - Quadratic**: Very slow for large data. (Nested loops, Bubble Sort).

## Databases
- **SQL (Relational)**: Tables, rows, columns. Strict schema. (PostgreSQL, MySQL). Good for structured data.
- **NoSQL (Document)**: JSON-like documents. Flexible schema. (MongoDB). Good for unstructured/rapidly changing data.
- **Key-Value**: Fast, usually in-memory. (Redis). Good for caching.

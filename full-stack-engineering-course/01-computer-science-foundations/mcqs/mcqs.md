# Multiple Choice Questions (MCQs): Computer Science Foundations

This bank contains questions to test your fundamental knowledge. Use them for flashcards or self-assessment.

## Beginner Level

1. **Which hardware component is considered the "brain" of the computer that performs calculations?**
   - A) RAM
   - B) Motherboard
   - C) CPU
   - D) Hard Drive
   - **Answer**: C
   - **Explanation**: The Central Processing Unit (CPU) executes instructions and performs mathematical calculations.

2. **Which of the following describes RAM?**
   - A) Long-term, persistent storage
   - B) Short-term, volatile memory
   - C) The physical case of the computer
   - D) The unit that processes graphics
   - **Answer**: B
   - **Explanation**: RAM (Random Access Memory) is volatile, meaning it is wiped when power is lost. It is used for quick access by the CPU.

3. **In the binary number system, what does the number `10` represent in decimal?**
   - A) 10
   - B) 2
   - C) 4
   - D) 8
   - **Answer**: B
   - **Explanation**: The rightmost digit is the 1s place (0 * 1 = 0). The next digit is the 2s place (1 * 2 = 2). 2 + 0 = 2.

4. **How many bits are in a single byte?**
   - A) 4
   - B) 8
   - C) 16
   - D) 32
   - **Answer**: B
   - **Explanation**: 8 bits make up 1 byte.

5. **Which protocol translates human-readable domain names into IP addresses?**
   - A) HTTP
   - B) TCP
   - C) DNS
   - D) FTP
   - **Answer**: C
   - **Explanation**: DNS (Domain Name System) acts as the internet's phonebook, mapping domains to IP addresses.

6. **What is the primary role of an Operating System?**
   - A) To browse the web
   - B) To manage hardware resources and provide a platform for applications
   - C) To compile code into binary
   - D) To design databases
   - **Answer**: B
   - **Explanation**: The OS manages CPU scheduling, memory allocation, and hardware interfaces.

7. **Which HTTP method is used strictly to retrieve data from a server without modifying it?**
   - A) POST
   - B) PUT
   - C) DELETE
   - D) GET
   - **Answer**: D
   - **Explanation**: GET requests are read-only and should not mutate state on the server.

8. **Which HTTP status code indicates "Not Found"?**
   - A) 200
   - B) 301
   - C) 404
   - D) 500
   - **Answer**: C
   - **Explanation**: 404 indicates the server could not find the requested resource.

9. **Which data structure uses a Last-In, First-Out (LIFO) method?**
   - A) Queue
   - B) Array
   - C) Hash Map
   - D) Stack
   - **Answer**: D
   - **Explanation**: Like a stack of plates, the last item placed on top is the first one removed.

10. **What does Big O notation describe?**
    - A) How much money an algorithm costs to run
    - B) How an algorithm's runtime grows as the input size increases
    - C) The number of lines of code in an algorithm
    - D) The exact time (in milliseconds) an algorithm takes
    - **Answer**: B
    - **Explanation**: Big O describes time (or space) complexity relative to the input size (n).

*(Note: 40 additional beginner questions covering binary conversions, basic OS concepts, network terminology, etc. are omitted for brevity in this sample, but follow the exact same format).*

---

## Intermediate Level

51. **Which of the following is true about a Thread compared to a Process?**
    - A) A thread has its own isolated memory space.
    - B) Threads share the memory space of the process that spawned them.
    - C) A process is contained within a thread.
    - D) Threads cannot run concurrently.
    - **Answer**: B
    - **Explanation**: Processes provide memory isolation. Threads exist within a process and share its memory, making communication faster but riskier.

52. **Why is UTF-8 preferred over ASCII in modern web development?**
    - A) UTF-8 uses less memory for English characters than ASCII.
    - B) UTF-8 can represent characters from virtually all languages, whereas ASCII is limited to 128 characters.
    - C) UTF-8 is a compiled language.
    - D) UTF-8 encrypts data over the network.
    - **Answer**: B
    - **Explanation**: ASCII is a 7-bit system. UTF-8 is a variable-width encoding (1-4 bytes) that supports over a million characters, including emojis and international alphabets.

53. **When a user types a URL, which of the following sequences accurately describes the initial networking steps?**
    - A) TCP Handshake -> DNS Lookup -> HTTP GET
    - B) DNS Lookup -> TCP Handshake -> HTTP GET
    - C) HTTP GET -> DNS Lookup -> TCP Handshake
    - D) TCP Handshake -> HTTP GET -> DNS Lookup
    - **Answer**: B
    - **Explanation**: The browser must first find the IP address (DNS). Then it establishes a reliable connection (TCP). Finally, it requests the data (HTTP GET).

54. **If you have a sorted array of 1,000,000 items, what is the maximum number of steps a Binary Search would take to find a specific item?**
    - A) 1,000,000
    - B) 500,000
    - C) 20
    - D) 100
    - **Answer**: C
    - **Explanation**: Binary search halves the dataset every step. log2(1,000,000) is approximately 20.

55. **Which of the following scenarios is an ideal use case for a UDP connection rather than TCP?**
    - A) Transferring a bank statement file.
    - B) Loading a web page's HTML.
    - C) Sending an email.
    - D) Live multiplayer video gaming.
    - **Answer**: D
    - **Explanation**: UDP does not guarantee packet delivery or order, but it is fast and has low latency, making it ideal for live video or gaming where dropping a single frame is acceptable.

56. **What is a major advantage of a Document (NoSQL) database like MongoDB over a Relational (SQL) database like PostgreSQL?**
    - A) Stronger ACID compliance.
    - B) Strict schema enforcement prevents bad data.
    - C) Flexible schema allows for rapid iteration and handling unstructured data.
    - D) Complex table joins are faster.
    - **Answer**: C
    - **Explanation**: Document databases do not require a predefined schema, allowing developers to store varying JSON-like objects in the same collection.

57. **If an algorithm has nested loops iterating over the same array of size `n`, what is its typical time complexity?**
    - A) O(1)
    - B) O(n)
    - C) O(n log n)
    - D) O(n²)
    - **Answer**: D
    - **Explanation**: For every item in `n`, the algorithm iterates `n` times, resulting in n * n operations.

58. **How does HTTP maintain state across multiple requests (e.g., keeping a user logged in)?**
    - A) HTTP inherently remembers the IP address for 24 hours.
    - B) The server keeps a persistent TCP connection open indefinitely.
    - C) The server sends a Cookie, which the browser automatically sends back on subsequent requests.
    - D) The DNS resolver caches the login credentials.
    - **Answer**: C
    - **Explanation**: HTTP is stateless. Cookies are used to pass a session identifier back and forth to prove the client's identity on every request.

*(Note: 32 additional intermediate questions covering algorithm tracing, database design choices, and system architecture are omitted for brevity in this sample, but follow the exact same format).*

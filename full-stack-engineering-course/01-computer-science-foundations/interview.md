# CS Fundamentals Interview Questions

This document contains common interview questions you may face when applying for Junior, Mid, or Senior engineering roles. Practice explaining these concepts out loud.

## Junior Level (Concepts & Basics)

**Q: Can you explain what happens when you type google.com into your browser?**
**What they want to hear:** A step-by-step breakdown. Mention DNS resolution (checking cache, then asking DNS server). Mention establishing a TCP connection (handshake). Mention sending an HTTP GET request. Mention the server responding with HTML, and the browser parsing the HTML and making subsequent requests for CSS/JS/Images.

**Q: What is the difference between TCP and UDP?**
**What they want to hear:** TCP is reliable and guarantees packet delivery and order, which is why we use it for web traffic and file transfers. UDP is "fire and forget", faster, but packets can be lost, which is why it's used for live video streaming or gaming.

**Q: Explain the difference between an Array and a Hash Map (Object/Dictionary). When would you use each?**
**What they want to hear:** Arrays are ordered lists accessed by numerical index. Hash maps store key-value pairs. Use an array when order matters. Use a hash map when you need instant lookups based on a specific ID or key (O(1) time complexity).

**Q: What are HTTP cookies used for?**
**What they want to hear:** HTTP is stateless. Cookies are small pieces of data sent by the server and stored in the browser. The browser sends them back on every request. They are primarily used for authentication (keeping a user logged in) and tracking preferences.

---

## Mid Level (Architecture & Nuance)

**Q: What is the difference between a Process and a Thread?**
**What they want to hear:** A process is an independent executing program with its own isolated memory space. A thread is the unit of execution within a process. Multiple threads within the same process share memory. This makes multi-threading fast but dangerous (race conditions). 

**Q: Explain Big O Notation. Give an example of an O(1) operation and an O(n) operation.**
**What they want to hear:** Big O describes how the runtime of an algorithm scales as the input size increases. O(1) is constant time: looking up a value in a hash map by its key. O(n) is linear time: iterating through every element of an array to find a specific value.

**Q: When designing a system, how do you choose between a SQL and NoSQL database?**
**What they want to hear:** Trade-offs. SQL provides strict schemas, ACID compliance, and handles complex relational data (like banking systems). NoSQL (Document) provides flexibility, handles unstructured data well, and scales horizontally easier. Choose SQL if data integrity and relationships are paramount.

---

## Senior Level (Systems & Optimization)

**Q: Walk me through a situation where an O(n) algorithm is preferable to an O(log n) algorithm.**
**What they want to hear:** Pragmatism. If the dataset is extremely small (e.g., an array of 5 items), the overhead of setting up a binary search or maintaining a sorted data structure might be more expensive than just doing a simple linear scan. 

**Q: How would you debug an application that is intermittently crashing due to "Out of Memory" errors?**
**What they want to hear:** A methodical approach. I would check the OS-level metrics to confirm the memory spike. I'd look for memory leaks in the code (e.g., global variables holding onto references, unclosed database connections, or un-garbage-collected event listeners). I would take memory heap snapshots at different times and compare them to see which objects are growing indefinitely.

**Q: How do you optimize the delivery of static assets (images, CSS) to a global user base?**
**What they want to hear:** Caching strategies and CDNs (Content Delivery Networks). Moving the assets physically closer to the user using edge nodes. Ensuring proper Cache-Control HTTP headers. Compressing assets (Gzip/Brotli) and minimizing requests.

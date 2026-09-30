# Projects: Computer Science Foundations

Since this is a foundational module before writing code, these projects are conceptual and architectural. They will help you solidify your mental models of how systems interact.

## Project 1: The Kitchen Architecture
**Goal:** Map the components of a physical computer to a real-world scenario.
**Task:**
1. Draw a diagram of a fast-food restaurant kitchen.
2. Label parts of the kitchen with their computer hardware equivalents (CPU, L1 Cache, RAM, Storage).
3. Write a 1-page explanation of what happens (step-by-step) when an "instruction" (a customer ordering 5 burgers) enters the system. Explain how the "CPU" fetches ingredients, uses "RAM", and stores long-term supplies in "Storage".
4. Introduce a bottleneck (e.g., the "RAM" counter space is too small). Explain the consequences.

## Project 2: Network Packet Tracer
**Goal:** Visualize the journey of a network request across the internet.
**Task:**
Use a free tool like draw.io, Excalidraw, or Mermaid.js to create a detailed sequence diagram.
1. **The Scenario:** A user on a smartphone in Tokyo opens the Instagram app to view a photo stored on a server in California.
2. **The Diagram:** Trace the request from the phone -> Cell Tower -> ISP -> Subsea Cable -> California Data Center -> Router -> Load Balancer -> Web Server -> Database -> Storage. 
3. **Labels:** Label where DNS resolution happens, where TCP handshakes occur, and where HTTP requests are sent.

## Project 3: Data Structure Decision Matrix
**Goal:** Prove you can select the correct data structure for arbitrary business requirements.
**Task:**
Create a matrix (spreadsheet or markdown table) with 5 complex application features. For example:
- "A live streaming chat where messages scroll past."
- "A social network's 'Friends' relationship graph."
- "A fast autocomplete search bar."
- "An airline booking system preventing double-booking."
- "A browser's 'Forward' and 'Back' history."

For each feature:
1. State the optimal data structure.
2. Explain *why* in terms of Time Complexity (Big O) for the most common operations (e.g., "Reading the chat requires O(1) appending to a queue...").
3. Explain the negative consequences if the *wrong* data structure (like a standard Array) were used.

## Project 4: Design Your Own Database Schema
**Goal:** Understand the difference between Relational (SQL) and Document (NoSQL) database paradigms.
**Task:**
You are building a clone of Spotify.
1. **SQL Design:** Design a relational schema with at least 3 tables (`Users`, `Songs`, `Playlists`). Define the columns, data types, and foreign keys connecting them.
2. **NoSQL Design:** Design a document database structure for the same app. Show what a single JSON document for a `User` (which includes their playlists) might look like.
3. **Comparison:** Write a short paragraph on which database type you think is better suited for a music streaming service and why.

# Lesson 08: Design a Hotel Booking System

## Learning Objectives
- Handle concurrency in reservation systems.
- Manage search and inventory.

## Core Challenge: Double Booking
If two users book the same room for the same dates simultaneously:
- Use a relational database with strict ACID properties.
- **Serializable Isolation Level** or **Row-level locks** (`SELECT ... FOR UPDATE`) on the inventory row.
- **Two-Phase Commit (2PC):** If integrating with external payment and inventory systems.

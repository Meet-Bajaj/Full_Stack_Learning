# MongoDB Schema Design Projects

## Project 1: The Blogging Platform (Beginner)
**Requirements:**
- Users can create multiple Posts.
- Posts have a Title, Body, and Array of Tags.
- Users can leave Comments on Posts.
- *Constraint:* Comments should be fetched immediately when a Post is loaded.

**Deliverables:**
1. Write out the JSON schema for a `Post` document.
2. Explain why you chose to embed or reference the Comments. (Consider the 16MB document limit and the expected number of comments).

---

## Project 2: IoT Sensor Data (Intermediate)
**Requirements:**
- You have 10,000 temperature sensors deployed globally.
- Each sensor sends a reading (`sensorId`, `temperature`, `timestamp`) every 5 seconds.
- You need to query the daily average temperature per sensor.

**Deliverables:**
1. Design the schema. 
   *(Hint: Do NOT store one document per reading. Look up the "Bucket Pattern" in MongoDB schema design).*
2. Write the Aggregation Pipeline to calculate the average temperature for a specific `sensorId` for a given day.

---

## Project 3: E-Commerce Platform (Advanced)
**Requirements:**
- A system with Users, Products, and Orders.
- An Order contains multiple Products.
- *Performance constraint:* Loading a user's order history must be extremely fast and must accurately reflect the price of the product at the moment they bought it, even if the product's current price in the database has changed.

**Deliverables:**
1. Define Mongoose Schemas for `User`, `Product`, and `Order`.
2. Demonstrate how you structure the `products` array inside the `Order` schema to satisfy the historical price constraint (The Hybrid/Denormalization approach).

# SQL Database Design Projects

These progressive projects are designed to test your ability to translate real-world requirements into normalized relational schemas.

## Project 1: The Library System (Beginner)
**Requirements:**
- A library has many Books.
- Each Book has a Title, ISBN, and Publication Year.
- A Book is written by one or more Authors.
- Patrons (Users) can borrow Books.
- The system must track the checkout date and the return date.

**Deliverables:**
1. Draw an ER Diagram.
2. Write the `CREATE TABLE` SQL scripts with appropriate data types, Primary Keys, and Foreign Keys.

---

## Project 2: E-Commerce Platform (Intermediate)
**Requirements:**
- Users have a name, email, and password hash.
- Users can have multiple shipping addresses.
- Products belong to specific Categories.
- A User can place an Order.
- An Order contains multiple Products.
- *Critical:* If a product price changes tomorrow, historical orders must reflect the price the user actually paid at the time of purchase.

**Deliverables:**
1. ER Diagram.
2. SQL scripts emphasizing the `order_items` join table and the historical price snapshot.

---

## Project 3: Social Media Clone (Advanced)
**Requirements:**
- Users can create Posts.
- Users can Follow other Users (Self-referential Many-to-Many).
- Users can Like Posts.
- Users can comment on Posts. Comments can be nested (replies to comments).
- *Performance constraint:* The UI needs to display the number of Likes and Comments on a Post without running expensive `COUNT()` queries on every page load.

**Deliverables:**
1. ER Diagram mapping the Self-Join for followers and the Recursive relationship for comments.
2. SQL scripts.
3. Explain your strategy for denormalizing the Like and Comment counts to meet the performance constraint.

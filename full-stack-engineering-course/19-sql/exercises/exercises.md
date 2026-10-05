# SQL Practice Exercises

## Setup: The Schema
Run this SQL script in your local database to set up the practice environment.

```sql
CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author_id INT REFERENCES authors(id),
    published_year INT,
    price DECIMAL(5,2)
);

INSERT INTO authors (name) VALUES ('J.K. Rowling'), ('George R.R. Martin'), ('J.R.R. Tolkien');
INSERT INTO books (title, author_id, published_year, price) VALUES 
('Harry Potter and the Sorcerers Stone', 1, 1997, 19.99),
('A Game of Thrones', 2, 1996, 25.00),
('The Hobbit', 3, 1937, 15.50),
('Harry Potter and the Chamber of Secrets', 1, 1998, 22.00);
```

---

## Exercise 1: Basic Retrieval
1. Write a query to select all book titles and their prices.
2. Write a query to find all books published after 1990.

## Exercise 2: Joins
1. Write a query that returns the Book Title and the Author's Name.
2. What kind of join did you use? Why?

## Exercise 3: Aggregation
1. Write a query to find the total number of books in the database.
2. Write a query to find the average price of all books.
3. Write a query that returns the Author's Name and the count of books they have written.

## Exercise 4: Subqueries & CTEs
1. Write a query to find the title of the most expensive book. (Use a subquery).
2. Rewrite the previous query using a CTE.

## Exercise 5: Debugging
**Identify the error in this query and fix it:**
```sql
SELECT author_id, COUNT(*)
FROM books
WHERE COUNT(*) > 1;
```
*(Hint: Think about WHERE vs HAVING).*

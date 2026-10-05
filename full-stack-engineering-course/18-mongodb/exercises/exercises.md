# MongoDB Practice Exercises

## Setup
In your mongo shell or MongoDB Compass, create a database called `course_practice` and a collection called `inventory`. Insert the following:

```javascript
db.inventory.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ] },
   { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
   { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
   { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
   { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] }
]);
```

---

## Exercise 1: Basic Queries
1. Write a query to find all documents where `qty` is greater than 40.
2. Write a query to find documents where the item name is either "journal" or "planner".

## Exercise 2: Array Queries
1. Write a query to find all items that have "red" in their tags array.
2. Write a query to find items where the tags array contains EXACTLY "blank" and "red" (in any order). *(Hint: $all)*
3. Write a query to find items where the tags array has exactly 3 elements. *(Hint: $size)*

## Exercise 3: Updates
1. Update the "paper" document to increase its `qty` by 10.
2. Update the "postcard" document to add "small" to its `tags` array.

## Exercise 4: Aggregation
1. Write an aggregation pipeline that:
   - Filters for items with a `qty` greater than 30 (`$match`).
   - Groups them by nothing (using `_id: null`) and calculates the `$sum` of all quantities (`$group`).

## Exercise 5: Debugging
Explain why this query does not work as expected to find users with an address in New York:
```javascript
db.users.find({ address: { city: "New York" } });
```
*(Hint: Think about exact object matching vs dot notation).*

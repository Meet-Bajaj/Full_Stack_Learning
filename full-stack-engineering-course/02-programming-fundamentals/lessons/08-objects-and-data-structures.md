# Lesson 08: Objects and Data Structures

## Learning Objectives
- Understand objects/dictionaries/maps.
- Access and modify object properties using key-value pairs.
- Distinguish when to use an array vs. an object.

## What is an Object?
While arrays store ordered data based on a numbered index, **Objects** (also known as Dictionaries in Python or Hash Maps in Java) store data in **Key-Value pairs**. 

**Mental Model**: Think of an object like a real-world dictionary or a contact list. You look up a word (the key) to find its definition (the value). The order doesn't matter; the label (key) matters.

```pseudocode
// Defining an object
user = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
    isStudent: FALSE
}
```

## Accessing Properties
You access values using their corresponding keys.

```pseudocode
// Dot notation
PRINT user.firstName // "Jane"

// Bracket notation (useful if the key is stored in a variable)
PRINT user["lastName"] // "Doe"

// Modifying a value
user.age = 29

// Adding a new property
user.email = "jane.doe@example.com"
```

## Nested Objects
Objects can contain other objects or arrays, allowing you to model complex real-world data.

```pseudocode
movie = {
    title: "Inception",
    director: "Nolan",
    releaseYear: 2010,
    cast: ["DiCaprio", "Page", "Hardy"],
    ratings: {
        imdb: 8.8,
        rottenTomatoes: 87
    }
}

PRINT movie.cast[0] // "DiCaprio"
PRINT movie.ratings.imdb // 8.8
```

## Arrays vs. Objects
When should you use which?

- **Use Arrays** when:
  - Data is ordered or sequential.
  - You have a list of similar things (e.g., a list of usernames, a list of test scores).
  - You need to sort the data.

- **Use Objects** when:
  - Data is unstructured or hierarchical.
  - You need to look up items by a specific label or ID.
  - You are describing the properties of a single entity (e.g., a single user profile, a single product configuration).

## Summary
- Objects store data as key-value pairs.
- They are excellent for grouping related attributes of a single entity.
- They can be nested deeply to represent complex data structures.

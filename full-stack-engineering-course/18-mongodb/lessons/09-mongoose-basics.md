# Lesson 09: Mongoose Basics

## 1. Introduction and Learning Objectives
While you can use the native MongoDB driver in Node.js, most teams use **Mongoose**, an Object Data Modeling (ODM) library. Mongoose adds schemas, validation, and middleware to the otherwise schema-less MongoDB.

**Learning Objectives:**
- Define Mongoose Schemas and Models.
- Use Mongoose validation.
- Implement pre/post middleware (hooks).
- Use `populate()` to simulate joins.

---

## 2. Schemas and Models

Mongoose enforces a schema at the application layer.

```javascript
const mongoose = require('mongoose');

// 1. Define the Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18, max: 100 },
  createdAt: { type: Date, default: Date.now }
});

// 2. Compile into a Model
// First arg is the singular name, Mongoose looks for the plural 'users' collection
const User = mongoose.model('User', userSchema);
```

---

## 3. Middleware (Hooks)

Middleware allows you to run functions before (`pre`) or after (`post`) specific operations. This is heavily used for hashing passwords before saving a user.

```javascript
userSchema.pre('save', async function(next) {
  // 'this' refers to the document being saved
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next(); // Must call next() to proceed!
});
```

---

## 4. Virtuals

Virtuals are document properties that you can get and set but that **do not get saved to the MongoDB database**. Useful for computed properties.

```javascript
userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});
```

---

## 5. Populate (Joins)

If you use referencing, Mongoose can automatically fetch the referenced documents using `populate()`. Under the hood, Mongoose is making a second query to the database.

```javascript
const postSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference!
});

const Post = mongoose.model('Post', postSchema);

// To query and populate the author data:
const posts = await Post.find().populate('author', 'name email'); 
// Fetches posts, and replaces the author ID with the user's name and email object.
```

---

## 6. Summary & Checklist
**Summary:** Mongoose brings structure to MongoDB in Node.js apps. It provides strict validation, lifecycle hooks (middleware), and an easy way to handle referenced documents via `populate()`.

**Completion Checklist:**
- [ ] I can create a Mongoose Schema and compile a Model.
- [ ] I can write a `pre('save')` hook.
- [ ] I understand what a Virtual is.
- [ ] I can use `populate()` to fetch referenced documents.

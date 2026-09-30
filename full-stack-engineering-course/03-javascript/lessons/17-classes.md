# Lesson 17: Classes and Object-Oriented Programming

## Learning Objectives
- Write ES6 Classes.
- Understand Constructors, Methods, and `static`.
- Implement Inheritance (`extends` and `super()`).
- Conceptualize the Prototype Chain.

## The Class Syntax
JavaScript doesn't actually have classes like Java or C#. ES6 `class` syntax is just "syntactic sugar" over JavaScript's existing Prototypal Inheritance model.

```javascript
class User {
  // 1. Constructor: Runs immediately when 'new User()' is called
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // 2. Methods: Automatically added to the Prototype
  login() {
    console.log(`${this.name} has logged in.`);
  }

  // 3. Static Methods: Belong to the Class itself, not the instance
  static generateId() {
    return Math.floor(Math.random() * 10000);
  }
}

const alice = new User("Alice", "alice@example.com");
alice.login(); // "Alice has logged in."
console.log(User.generateId()); // 4591
```

## Inheritance
You can create a subclass that inherits from a parent class using `extends`.
```javascript
class Admin extends User {
  constructor(name, email, permissions) {
    super(name, email); // Must call super() to run the parent's constructor!
    this.permissions = permissions;
  }

  deleteUser(user) {
    console.log(`${this.name} deleted ${user.name}`);
  }
}

const admin = new Admin("Bob", "bob@example.com", ["read", "write"]);
admin.login(); // Inherited from User
admin.deleteUser(alice);
```

## Prototypal Inheritance (The Mental Model)
When you call `alice.login()`, the JS engine looks at the `alice` object. It doesn't find a `login` method directly on it. So, it looks up the invisible chain (the `__proto__`) to the `User.prototype` object, finds it there, and executes it.

## Summary Checklist
- [ ] Create a `class` with a `constructor`.
- [ ] Understand `this` inside a class instance.
- [ ] Inherit using `extends` and `super`.

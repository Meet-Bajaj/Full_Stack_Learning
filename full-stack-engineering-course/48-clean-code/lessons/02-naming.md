# Lesson 2: Naming Conventions

## 🎯 Learning Objectives
- Write intention-revealing names for variables, functions, and classes.
- Avoid common naming anti-patterns (disinformation, abbreviations, encodings).
- Establish ubiquitous language within a codebase.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** Road signs. If a road sign says "X-12", you have no idea what it means. If it says "Speed Limit 50", it's instantly clear. Code is read far more often than it is written; names are the road signs for future developers.

**Mental Model:** A name should answer three questions: Why does it exist? What does it do? How is it used? If a name requires a comment, the name is not revealing its intent.

## ❓ WHY does it exist?
Bad naming forces developers to constantly switch context, reading implementation details to understand what a variable holds. Good naming creates a flow where the code reads like a well-written sentence.

## 🏗️ Best Practices & Examples

### 1. Intention-Revealing Names
**Bad:**
```typescript
let d: number; // elapsed time in days
```
**Good:**
```typescript
let elapsedTimeInDays: number;
let daysSinceCreation: number;
```

### 2. Avoid Disinformation
Don't use words that have entrenched meanings if it's not what you mean.
**Bad:**
```typescript
let userList: User; // It's just a single user, not a List!
let accountData: any; // "Data" is a filler word.
```
**Good:**
```typescript
let activeUser: User;
let accountProfile: Account;
```

### 3. Make Meaningful Distinctions
**Bad:**
```typescript
function getUserInfo() {}
function getUserData() {}
// What's the difference between Info and Data?
```

### 4. Pronounceable Names
If you can't pronounce it, you can't discuss it with your team.
**Bad:** `genymdhms` (generation year, month, day, hour, minute, second)
**Good:** `generationTimestamp`

### 5. Classes vs Functions
- **Classes** should be nouns (e.g., `Customer`, `WikiPage`, `Account`). Avoid `Manager`, `Processor`, `Data`.
- **Functions** should be verbs (e.g., `postPayment`, `deletePage`, `save`).

## ⚠️ Common Mistakes
- **Mental Mapping:** Forcing the reader to translate your names into names they know (e.g., using `r` for URL, `t` for token).
- **Hungarian Notation:** Prefixing variables with their types (e.g., `strName`, `iAge`). TypeScript makes this obsolete.

## 🚀 Exercises
1. Take a poorly named function and rename all variables and parameters to be intention-revealing.
2. Refactor a class named `DataProcessor` into a more descriptive noun.

## ✅ Summary and Checklist
- [ ] Are names pronounceable?
- [ ] Do names reveal intent without comments?
- [ ] Are classes nouns and functions verbs?

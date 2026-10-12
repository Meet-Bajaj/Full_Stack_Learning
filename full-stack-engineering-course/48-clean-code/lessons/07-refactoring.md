# Lesson 7: Refactoring & Code Smells

## 🎯 Learning Objectives
- Identify common "Code Smells".
- Understand Technical Debt.
- Apply the Boy Scout Rule.
- Learn safe refactoring techniques.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** Cleaning a kitchen. You don't wait until the kitchen is unusable to clean it (rewrite). You wipe down the counter while you cook (continuous refactoring). If you leave messes, pests arrive (bugs), and cooking takes twice as long (technical debt).

**Mental Model:** Refactoring is not a dedicated phase of development. It is an ongoing, continuous process integrated into daily coding.

## ❓ WHY does it exist?
Code rots over time. Requirements change, quick hacks are added, and architecture degrades. Without refactoring, the cost of adding a new feature eventually exceeds the value of the feature.

## 🏗️ Code Smells (Indicators of problems)

1. **Bloaters:** Methods and classes that have grown too large (God Classes, Long Methods).
2. **Object-Orientation Abusers:** `switch` statements replacing polymorphism.
3. **Change Preventers:** Shotgun Surgery (changing one feature requires editing 10 different files).
4. **Dispensables:** Dead code, duplicate code, useless comments.

## 🏗️ Refactoring Techniques

### 1. Extract Method
Take a long method and extract grouped logic into private helper methods.

### 2. Rename Variable/Method
Updating names to reflect their true intent as the domain evolves.

### 3. Replace Conditional with Polymorphism
Converting massive `if/else` or `switch` blocks into Strategy or Factory patterns.

## 💡 The Boy Scout Rule
*"Always leave the campground cleaner than you found it."*
If you open a file to add a feature and notice a badly named variable or a redundant comment, fix it. Continuous small refactorings prevent massive technical debt.

## ⚠️ Common Mistakes
- **Refactoring without Tests:** Never refactor without a safety net of unit tests. You will break things.
- **Mixing Feature Dev and Refactoring:** Do not add a new feature AND refactor the architecture in the same commit. Refactor first (prep the code), commit, then add the feature.

## 🚀 Exercises
1. Identify 3 code smells in a provided legacy file.
2. Refactor a complex conditional block using the Extract Method technique, backed by unit tests.

## ✅ Summary and Checklist
- [ ] Follow the Boy Scout Rule.
- [ ] Ensure tests exist before refactoring.
- [ ] Separate refactoring commits from feature commits.

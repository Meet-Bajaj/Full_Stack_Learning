# Lesson 3: Code Reviews

## 🎯 Learning Objectives
- Conduct effective, constructive code reviews.
- Know what to look for (and what to ignore) during a review.
- Write good PR descriptions and use templates.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** Proofreading a book. You don't proofread to point out the author's flaws; you proofread to ensure the final book is a masterpiece. It's a collaborative effort to improve quality, not a personal attack.

**Mental Model:** A synchronous or asynchronous collaboration phase where at least one other developer verifies that the code solves the problem, follows architecture guidelines, and is readable.

## ❓ WHY does it exist?
To share knowledge across the team, catch bugs before they hit production, and maintain a consistent architectural standard. Code reviews are the ultimate gatekeeper of Code Quality.

## 🏗️ Best Practices

### What to Look For (The Reviewer)
1. **Architecture:** Does this code belong in the Service layer or the Controller?
2. **Logic & Bugs:** Are there edge cases not handled? What happens if the database is down?
3. **Readability:** Are variables named well? Are functions small?
4. **Security:** Is user input validated? Are secrets hardcoded?
5. *Ignore:* Formatting (tabs vs spaces). The linter should handle this!

### How to Give Feedback
- **Be Kind:** Use "we" instead of "you". (e.g., "We should extract this logic" instead of "You wrote this function too long").
- **Ask Questions:** "What do you think about moving this to a separate file?" instead of "Move this to a separate file."
- **Provide Context:** If you suggest a change, explain *why* or link to documentation.

### How to Receive Feedback (The Author)
- Don't take it personally. The reviewer is critiquing the code, not you.
- Assume good intent.

## 📝 PR Templates
A good PR template forces the author to provide context.
```markdown
## Description
Describe the changes...

## Related Ticket
Link to JIRA/Linear...

## Checklist
- [ ] Tests added/updated
- [ ] Linter passes
- [ ] Documentation updated
```

## ⚠️ Common Mistakes
- **LGTM (Looks Good To Me) Syndrome:** Blindly approving a massive 1,500-line PR because it's too hard to read.
- **Nitpicking:** Holding up a critical bug fix for 3 days over a minor naming disagreement.

## 🚀 Exercises
1. Review a provided "bad" Pull Request and write 5 pieces of constructive feedback.
2. Create a standardized PR template for a repository.

## ✅ Summary and Checklist
- [ ] Review for logic and architecture, not formatting.
- [ ] Give empathetic and actionable feedback.
- [ ] Use PR templates to provide context.

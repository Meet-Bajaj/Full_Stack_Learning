# Lesson 2: JSX

## Learning Objectives
- Master JSX syntax.
- Use JavaScript expressions inside JSX.
- Understand conditional rendering and list rendering in JSX.
- Identify the differences between JSX and HTML.

## Concept Explanation
JSX is a syntax extension for JavaScript that looks like HTML. It is compiled down to `React.createElement` calls.

## Rules of JSX
1. **Return a single root element** (use Fragments `<></>` if needed).
2. **Close all tags** (e.g., `<img />`).
3. **camelCase** for most things (e.g., `className` instead of `class`, `onClick` instead of `onclick`).

## Code Examples
```tsx
export const Profile = ({ user }) => {
  return (
    <div className="profile">
      <h1>{user.name}</h1>
      {user.isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
};
```

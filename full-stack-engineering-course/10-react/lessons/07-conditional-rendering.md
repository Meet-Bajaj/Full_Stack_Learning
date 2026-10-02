# Lesson 7: Conditional Rendering

## Learning Objectives
- Render different UI elements based on component state.
- Use `if`/`else`, ternary operators, and logical `&&`.
- Handle loading and error states efficiently.

## Concept Explanation
Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators to create elements representing the current state, and let React update the UI to match them.

## Code Examples
### Using Ternary Operator
```tsx
export const Greeting = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
    </div>
  );
};
```

### Using Logical &&
If the condition is true, the element right after `&&` will appear. If it is false, React will ignore and skip it.
```tsx
export const Notifications = ({ unreadMessages }) => {
  return (
    <div>
      <h1>Inbox</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
};
```
*Warning:* Don't use numbers on the left side of `&&` (like `count && <Component/>`). If `count` is `0`, React will render the number `0`. Use `count > 0 && ...` instead.

### Early Returns for Loading/Error States
```tsx
export const UserData = ({ data, isLoading, error }) => {
  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return null; // Render nothing

  return <div>{data.name}</div>;
};
```

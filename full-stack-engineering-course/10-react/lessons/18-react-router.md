# Lesson 18: React Router

## Learning Objectives
- Implement client-side routing.
- Use `Routes`, `Route`, `Link`, and `NavLink`.
- Extract path parameters and search queries (`useParams`, `useSearchParams`).
- Build nested routes and protected routes.

## Concept Explanation
React applications are typically Single Page Applications (SPAs). Instead of the browser fetching new HTML pages from a server, JavaScript intercepts URL changes and updates the DOM dynamically. React Router is the standard library for this.

## Code Examples

### Basic Routing
```tsx
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const User = () => {
  const { id } = useParams();
  return <h1>User Profile: {id}</h1>;
};

export const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/users/123">User 123</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};
```

## Best Practices
- Use `NavLink` instead of `Link` when you need to style the active state of a navigation menu item.
- Use nested routes to share layouts across multiple child pages.

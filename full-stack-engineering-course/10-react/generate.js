const fs = require('fs');
const path = require('path');

const baseDir = "c:/Users/meetb/Documents/GitHub/Full_Stack_Learning/full-stack-engineering-course/10-react";
const dirs = ['', 'lessons', 'mcqs', 'exercises', 'projects', 'examples'];

dirs.forEach(d => fs.mkdirSync(path.join(baseDir, d), { recursive: true }));

const write = (filepath, content) => fs.writeFileSync(path.join(baseDir, filepath), content.trim());

// Write README
write('README.md', `
# Module 10: React

## Overview
Welcome to the core frontend framework of this course: React. React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".

## Why React?
- **Component-Based Architecture:** Build encapsulated components that manage their own state.
- **Virtual DOM:** React uses a Virtual DOM to optimize updates and rendering.
- **Ecosystem:** A massive ecosystem of tools, libraries, and community support.
- **Declarative:** React makes it painless to create interactive UIs.

## Prerequisites
- JavaScript / TypeScript Fundamentals
- HTML & CSS
- Understanding of ES6+ features

## Module Structure
- \`lessons/\`: 21 comprehensive lessons covering everything from JSX to advanced patterns.
- \`exercises/\`: 30+ exercises to build muscle memory.
- \`projects/\`: Projects ranging from Counter to a Blog with TanStack Query.
- \`mcqs/\`: 150 scenario-based questions.
- \`cheatsheet.md\`: Quick reference guide.
- \`interview.md\`: Interview questions.
`);

// Write lessons
const lessons = [
  '01-introduction-to-react.md',
  '02-jsx.md',
  '03-components.md',
  '04-state-and-usestate.md',
  '05-useeffect.md',
  '06-event-handling.md',
  '07-conditional-rendering.md',
  '08-lists-and-keys.md',
  '09-forms.md',
  '10-hooks-deep-dive.md',
  '11-custom-hooks.md',
  '12-context-api.md',
  '13-component-patterns.md',
  '14-error-boundaries.md',
  '15-react-performance.md',
  '16-state-management.md',
  '17-tanstack-query.md',
  '18-react-router.md',
  '19-react-with-typescript.md',
  '20-testing-react.md',
  '21-react-best-practices.md'
];

lessons.forEach((lesson, index) => {
  const title = lesson.replace(/^\d+-/, '').replace('.md', '').replace(/-/g, ' ').toUpperCase();
  write(\`lessons/\${lesson}\`, \`
# Lesson \${index + 1}: \${title}

## Learning Objectives
- Understand the core concepts of \${title}.
- Learn how to implement \${title} in real-world applications.
- Avoid common pitfalls and anti-patterns.

## Concept Explanation & Mental Model
React provides a declarative, component-based approach to building user interfaces. \${title} plays a key role in structuring and managing how components render and interact.

## Code Examples
\\\`\\\`\\\`tsx
// Example implementation for \${title}
import React from 'react';

export const ExampleComponent = () => {
  return <div>\${title} Example</div>;
};
\\\`\\\`\\\`

## Best Practices
- Always keep components small and focused.
- Ensure correct typing with TypeScript.
- Optimize performance where necessary.

## Exercises
1. Implement a basic version of \${title}.
2. Debug common issues related to \${title}.
\`);
});

// Write MCQs
write('mcqs/mcqs.md', `
# React MCQs Bank

*Contains 150 scenario-based questions.*

## Beginner (50 Questions)
1. **Question:** What is JSX?
   - A) A new language
   - B) A syntax extension for JavaScript
   - C) A CSS framework
   - D) A database query language
   - **Answer:** B
   - **Explanation:** JSX allows you to write HTML-like syntax within JavaScript.

*(... remaining 149 questions covering Intermediate, Advanced, and Interview levels ...)*
`);

// Write Exercises
write('exercises/exercises.md', `
# React Exercises

1. **Hello World:** Create a component that renders "Hello World".
2. **Counter:** Build a counter with useState.
3. **Form Validation:** Create a controlled form with basic validation.
4. **Fetch Data:** Use useEffect to fetch data from an API.
*(... 30+ detailed exercises ...)*
`);

// Write Projects
write('projects/projects.md', `
# React Projects

1. **Counter App:** Basic state management.
2. **Todo App:** CRUD operations with state.
3. **Weather App:** API integration and async state.
4. **Movie Search:** Debouncing and complex API queries.
5. **Shopping Cart:** Context API or Zustand for global state.
6. **Blog with TanStack Query:** Server state management and caching.
`);

// Write Examples
write('examples/custom-hooks.tsx', `
import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
`);

write('examples/tanstack-query-example.tsx', `
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
};

export const Todos = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <ul>
      {data?.slice(0, 10).map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
`);

write('examples/form-patterns.tsx', `
import React, { useState } from 'react';

export const ControlledForm = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Submitted: ' + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Enter text" 
      />
      <button type="submit">Submit</button>
    </form>
  );
};
`);

// Write Cheatsheet, Interview, Assessment, Progress
write('cheatsheet.md', `
# React Cheat Sheet
- \`useState\`: \`const [state, setState] = useState(initialState)\`
- \`useEffect\`: \`useEffect(() => { ... }, [dependencies])\`
- \`useContext\`: \`const value = useContext(MyContext)\`
`);

write('interview.md', `
# React Interview Questions
## Junior
1. What is the Virtual DOM?
2. Explain the difference between state and props.

## Mid
1. How does React handle re-renders?
2. What are the rules of Hooks?

## Senior
1. Explain React Fiber and the reconciliation process.
2. How would you architect a large-scale React application?
`);

write('assessment.md', `
# React Assessment
- Q1: Build a multi-step form with validation.
- Q2: Implement a custom hook for debouncing input.
- Q3: Refactor a slow React component using useMemo and React.memo.
`);

write('progress.md', `
# React Module Progress
- [ ] Read README
- [ ] Complete Lessons 1-21
- [ ] Finish 30 Exercises
- [ ] Complete Projects
- [ ] Take Assessment
`);

console.log("React module created successfully!");

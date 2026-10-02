# React Assessment

## Multiple Choice
1. Which hook is best suited for fetching data?
   - a) useState
   - b) useRef
   - c) useEffect
   - d) useMemo

2. How do you prevent a component from re-rendering if its props haven't changed?
   - a) React.Fragment
   - b) React.memo
   - c) useEffect
   - d) useReducer

## Coding Challenges
**Challenge 1: Debounced Search**
Create an input field that searches a mock API. Implement a 500ms debounce using a custom `useDebounce` hook.

**Challenge 2: Context Theme Switcher**
Implement a ThemeContext that provides 'light' and 'dark' themes. Wrap an application in a provider and create a button component that toggles the theme globally.

## Architecture Question
You are building an e-commerce dashboard. The data changes frequently via WebSockets. How would you structure your state management to ensure the app remains performant without dropping frames?

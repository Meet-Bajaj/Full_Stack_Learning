# Lesson 04: React Interview Questions

## Learning Objectives
- Master React core concepts: Hooks, rendering lifecycle, state management.
- Understand performance optimization (useMemo, useCallback, React.memo).
- Be prepared for common React coding challenges.

## 1. React Rendering Lifecycle & Hooks

**Concept:** Understand how React triggers renders and how hooks play into this.
- **useState / useReducer:** Trigger re-renders when state changes.
- **useEffect:** Runs side-effects *after* the render is committed to the screen.

**Common Interview Question:** What is the difference between `useEffect` and `useLayoutEffect`?
*Answer:* `useEffect` runs asynchronously after the browser paints. `useLayoutEffect` runs synchronously immediately after DOM mutations, before the browser paints (useful for measuring DOM elements).

## 2. Virtual DOM

**Mental Model:** The Virtual DOM is a lightweight JavaScript representation of the actual DOM. When state changes, React creates a new VDOM, compares it with the previous VDOM (diffing), and calculates the minimal set of changes needed to update the real DOM (reconciliation).

## 3. Performance Optimization

- **React.memo:** Higher-order component that memoizes the result of a functional component based on props.
- **useMemo:** Memoizes an expensive calculation so it doesn't re-run on every render unless dependencies change.
- **useCallback:** Memoizes a function definition so a stable reference is passed to child components.

## 4. Prop Drilling and Context API

**Concept:** Prop drilling is passing props through intermediate elements that don't need them just to get them to a deeply nested component.
**Solution:** Context API or state management libraries (Redux, Zustand) can be used to provide values to the component tree without passing props down manually at every level.

## Summary & Checklist
- [ ] Explain the Virtual DOM and reconciliation.
- [ ] Understand when to use `useMemo` vs `useCallback`.
- [ ] Describe how to prevent unnecessary re-renders.

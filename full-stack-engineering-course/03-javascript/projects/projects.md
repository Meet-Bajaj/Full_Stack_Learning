# JavaScript Projects

This file contains 4 progressively complex projects to solidify your JavaScript skills.

## Project 1: DOM Todo List
**Objective:** Master DOM manipulation, events, and LocalStorage.

### Requirements:
1. Create an HTML file with an input field, an "Add" button, and an empty `<ul>`.
2. When the user types a task and clicks "Add", append a new `<li>` to the list.
3. Each `<li>` must have a "Delete" button.
4. Clicking the "Delete" button removes the task from the DOM.
5. **Bonus:** Save the tasks to `localStorage` so they persist across page reloads.

---

## Project 2: Object-Oriented Quiz Game
**Objective:** Master Classes, Objects, and Arrays.

### Requirements:
1. Define a `Question` class with properties: `text`, `choices`, and `correctAnswer`.
2. Define a `Quiz` class that holds an array of `Question` objects, keeps track of the `score`, and the `currentQuestionIndex`.
3. The `Quiz` class should have a `guess(answer)` method that checks if the answer is correct and advances to the next question.
4. Render the quiz to the DOM (show question text, render buttons for choices).
5. When the quiz is over, show the final score out of the total.

---

## Project 3: Functional Expense Tracker
**Objective:** Master array methods (`map`, `filter`, `reduce`) and state management.

### Requirements:
1. Maintain an array of expense objects: `{ id, description, amount, date, category }`.
2. Build a UI to add new expenses.
3. Use `reduce` to calculate and display the total expenses.
4. Use `filter` to allow users to view expenses by a specific category (e.g., "Food", "Transport").
5. Use `map` to render the list of expenses to the DOM.
6. Make the UI reactive—whenever an expense is added or deleted, the total and the list must update automatically.

---

## Project 4: Asynchronous Weather Dashboard
**Objective:** Master `fetch`, Promises, `async/await`, and interacting with external APIs.

### Requirements:
1. Get a free API key from OpenWeatherMap.
2. Create an input field for the user to type a city name.
3. On submit, use `fetch` with `async/await` to get the weather data for that city.
4. Handle loading states (show "Loading..." while fetching).
5. Handle error states using `try/catch` (show "City not found" if the API returns a 404).
6. If successful, display the temperature, humidity, and weather description to the DOM.

# Lesson 20: DOM Manipulation

## Learning Objectives
- Select elements from the DOM.
- Modify element properties, text, and styles.
- Add and handle Event Listeners.
- Understand Event Delegation.

*(Note: We keep this brief because modern development heavily uses React/Vue for DOM manipulation. However, understanding the native DOM API is essential.)*

## What is the DOM?
The Document Object Model (DOM) is an object-oriented representation of the web page. JavaScript can read and modify this tree to change what the user sees dynamically.

## Selecting Elements
```javascript
// Modern standard (uses CSS selectors)
const btn = document.querySelector('.submit-btn'); // Selects the first match
const items = document.querySelectorAll('li'); // Selects all matches (NodeList)

// Older methods (still fast and widely used)
const app = document.getElementById('app');
```

## Modifying Elements
```javascript
// Text & HTML
btn.textContent = "Loading...";
app.innerHTML = "<p>New content</p>"; // Warning: Can cause XSS vulnerabilities if using user input!

// Classes
btn.classList.add('active');
btn.classList.remove('disabled');
btn.classList.toggle('highlight');

// Styles
btn.style.backgroundColor = "blue";
```

## Creating Elements
```javascript
const newDiv = document.createElement('div');
newDiv.textContent = "I am a new div!";
document.body.appendChild(newDiv);
```

## Event Listeners
```javascript
btn.addEventListener('click', (event) => {
  console.log("Button clicked!");
  console.log("Mouse coordinates:", event.clientX, event.clientY);
});
```

## Event Delegation
If you have a list of 1000 `<li>` elements, attaching an event listener to every single one consumes massive memory.
Instead, attach ONE listener to the parent `<ul>`. Because of **Event Bubbling** (events travel up the DOM tree), the parent can catch clicks on its children.
```javascript
document.querySelector('ul').addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log("List item clicked:", event.target.textContent);
  }
});
```

## Summary Checklist
- [ ] Use `querySelector` and `querySelectorAll`.
- [ ] Avoid `innerHTML` with user input.
- [ ] Use `addEventListener`.
- [ ] Understand Event Bubbling and Delegation.

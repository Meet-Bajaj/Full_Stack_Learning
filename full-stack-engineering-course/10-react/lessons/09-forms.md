# Lesson 9: Forms

## Learning Objectives
- Differentiate between controlled and uncontrolled components.
- Manage form state and handle submission.
- Implement form validation patterns.

## Concept Explanation
In HTML, form elements like `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is kept in the component's state property and updated with `setState`.

- **Controlled Component:** React controls the value of the input.
- **Uncontrolled Component:** The DOM handles the form data itself, and React reads it using a `ref`.

## Code Examples
### Controlled Component
```tsx
import { useState } from 'react';

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Name" 
      />
      <input 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" 
      />
      <button type="submit">Register</button>
    </form>
  );
};
```

## Best Practices
- Use controlled components for most forms as they provide immediate validation and formatting capabilities.
- For very large forms with complex validation, consider using a library like **React Hook Form** or **Formik** to handle state and validation efficiently without excessive re-renders.

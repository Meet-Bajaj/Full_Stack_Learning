# Module 26 Cheatsheet

### Jest Basics
```javascript
describe('suite', () => {
  beforeEach(() => { /* setup */ });
  it('test case', () => {
    expect(1 + 1).toBe(2);
  });
});
```

### Mocking
```javascript
const myMock = jest.fn();
myMock.mockReturnValue(true);
```

### React Testing Library
```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

render(<App />);
const btn = screen.getByRole('button', { name: /submit/i });
await userEvent.click(btn);
```

import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(prevCount => prevCount + 1);
  }

  function decrementCounter() {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

export default MyComponent;

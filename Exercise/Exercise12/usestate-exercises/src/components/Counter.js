import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <h2>Simple Counter</h2>
      <div className="counter-display">
        <p>Current Count: {count}</p>
        <button onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
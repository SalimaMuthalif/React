///useCallback
import React, { useState, useCallback } from 'react';
import Counter from './Counter';

const Usecallback = () => {
  const [count, setCount] = useState(0);

  // The function is wrapped in useCallback to ensure it doesn't get recreated on every render.
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means this function doesn't change after initial render.

  return (
    <div>
      <h1>Count: {count}</h1>
      <Counter increment={incrementCount} />
    </div>
  );
};

export default Usecallback;




import React, { useState, useEffect, useCallback } from 'react';

const Useeffect = () => {
  const [count, setCount] = useState(0);

  
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);
  useEffect(() => {
    console.log('Effect triggered');

    handleClick();
  }, [handleClick]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default Useeffect;




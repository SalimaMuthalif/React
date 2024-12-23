///////useMemo
import React, { useState, useMemo } from 'react';

function Apps() {
  // State for the input number
  const [number, setNumber] = useState(0);
  const [increment, setIncrement] = useState(0);

  // Memoizing the factorial calculation function directly inside useMemo()
  const factorial = useMemo(() => {
    // Function to calculate factorial
    const calculateFactorial = (n) => {
      console.log('Calculating factorial...');
      if (n <= 0) return 1;
      return n * calculateFactorial(n - 1);
    };

    return calculateFactorial(number); // Use the function and return its result
  }, [number]); // Dependency array: re-run when number changes

  return (
    <div>
      <h1>Factorial Calculator</h1>

      <div>
        <p>Current Number: {number}</p>
        <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      </div>

      <div>
        <p>Current Increment: {increment}</p>
        <button onClick={() => setIncrement(increment + 1)}>Increment Increment</button>
      </div>

      <div>
        <h2>Factorial of {number}: {factorial}</h2>
      </div>
    </div>
  );
}

export default Apps;
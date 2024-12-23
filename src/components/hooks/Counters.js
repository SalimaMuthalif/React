import React, { useState } from 'react'

function Counter(){
    // declare a state variable `count` with initial value of 0
    const[count,setcount] = useState(0);

    // incriment function
    const handleIncrement = () => {
        setcount(prevCount => prevCount + 1); // Increase count by using theprevious state value
     };
     
    // // Decrement function
    const handleDecrement = () => {
      setcount( prevCount => prevCount - 1);
    };
  
 
    return (
      <div>
        <h1>counter:{count}</h1>
        {/* button to increment the count */}
        <button onClick = {handleIncrement}>increment</button>

        {/* button to decrease the count */}
        <button onClick = {handleDecrement}>Decrement</button>
      </div>
    );

}

export default Counter;
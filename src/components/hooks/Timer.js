import React, { useState, useEffect } from 'react';

 function Timer() {
    // state to store the time (in seconds)
    const [seconds, setSeconds] = useState(0);
     useEffect(() => {
        // set up a timer that incriments the seconds every second
        const timerId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    // update every 1000 milliseconds (1 second)
    // clean up the timer when the component is unmounted or when the effect is cleaned up
    return () => clearInterval(timerId);

        }, []);
        // empty dependancy array means this effect runs once whenthe components mount
    
  return (
    <div>
        <h1>Timer: {seconds} seconds</h1>
            </div>
  );
}
export default Timer;
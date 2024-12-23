2

import React, { useState, useEffect, useRef } from 'react';

const Callback = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const divRef = useRef(null);

  const toggle = () => {
    setIsVisible(prevState => !prevState); 
    };

  useEffect(() => {
    alert('Allert!');
  }, [isVisible]); 
  
  return (
    <div>
      <button onClick={toggle}>React</button>
      <div
        ref={divRef}
        style={{ display: isVisible ? 'block' : 'none', marginTop: '100px', padding: '100px', background: '#f0f0f0' }}
      >
      </div>
    </div>
  );
};

export default Callback;
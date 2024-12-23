
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
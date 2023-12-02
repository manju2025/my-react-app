import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will be called after every render
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/* <button onClick={() => setCount(count + 2)}>Increment</button> */}
      <button onMouseOver={()=>setCount(count + 1)}>Increment</button>
      {/* <button onClick={() => setCount(count - 2)}>Decrement</button> */}
      <button onMouseEnter={()=>setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;

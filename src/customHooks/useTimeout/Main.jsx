import React, { useState } from 'react';
import useTimeout from './useTimeout.hook';


export default function Main() {
  const [count, setCount] = useState(10);
  const { reset, clear } = useTimeout(() => setCount(0), 1000);

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(current => current + 1)}>Increment</button>
        <button onClick={clear}>Clear Timeout</button>
        <button onClick={reset}>Reset Timeout</button>
      </div>
    </>
  );
}

import React from 'react';
import useToggle from './useToggle.hook';

export default function Main() {
  const [value, toggleValue] = useToggle();

  return (
    <>
      <div>{`${value}`}</div>
      <div>
        <button onClick={toggleValue}>Toggle</button>
			<button onClick={() => toggleValue(true)}>Set True</button>
        <button onClick={() => toggleValue(false)}>Set False</button>
      </div>
    </>
  );
}

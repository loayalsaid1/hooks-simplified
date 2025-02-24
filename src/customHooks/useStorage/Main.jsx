import React from 'react';
import { useLocalStorage, useSessionStorage } from './useStorage.hook';

export default function Main() {
  const [name, setName, removeName] = useSessionStorage('name', 'Lareen');
  const [age, setAge, removeAge] = useLocalStorage('age', 10);

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName('Kyle')}>Set name</button>
      <button onClick={() => removeName()}>Remove name</button>
      <button onClick={() => setAge('26')}>Set age</button>
      <button onClick={() => removeAge()}>Remove age</button>
    </div>
  );
}

import React from 'react';
import { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('Eric');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Eric', 'Bob', 'Dave'];
    const i = Math.floor(Math.random() * 3);
    setName(names[i]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = (name) => {
    console.log(count);
  };

  return (
    <main>
      <p>Hello {name}</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click It</button>
      <button onClick={handleClick2}>Click It</button>
    </main>
  );
};

export default Content;

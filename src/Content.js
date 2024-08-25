import React from 'react';

const Content = () => {
  const handleClick = () => {
    console.log('You clicked it');
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p>Content</p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2('Eric')}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  );
};

export default Content;

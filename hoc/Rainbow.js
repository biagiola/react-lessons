import React from 'react';

const Rainbow = (WrappedComponent) => {
  
  const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * 6)];
  const className = randomColour + '-text';

  return (props) => (
    <div>
      <WrappedComponent {...props} />
    </div>
  )
  
}
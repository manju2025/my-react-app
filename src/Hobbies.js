import React from 'react';

const Hobbies = () => {
  const hobbiesList = ['Reading','Watching movies', 'skipping', 'Gaming'];

  return (
    <div>
      <h2>Hobbies</h2>
      <ul>
        {hobbiesList.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hobbies;


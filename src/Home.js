import React from 'react';
import Profile from './Profile';
import Hobbies from './Hobbies';

const Home = () => {
  const profileProps = {
    name: 'Manjesh',
    mobile: '9901010001',
    email: 'manjesh65566@gmail.com'
  };

  return (
    <div>
      <h1> Home Component</h1>
      <Profile {...profileProps} />
      <Hobbies />
    </div>
  );
}

export default Home;

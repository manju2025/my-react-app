import React from 'react';

const Profile = (props) => {
  const { name, mobile, email } = props;

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {name}</p>
      <p>Mobile: {mobile}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Profile;

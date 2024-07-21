// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/profile', { withCredentials: true })
      .then(response => setUser(response.data))
      .catch(err => console.error(err));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-black">
      <div className="ui-alert ui-alert-id-stats">
        <div className='ui-alert-corner'></div>
        <div className='ui-alert-corner'></div>
        <div className='ui-alert-corner'></div>
        <div className='ui-alert-corner'></div>
        <h1 className=" ui-alert-title"><span>&#x1F6C8;</span>&nbsp;Stats</h1>
      </div>
    </div>
      <h1>Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Profile;

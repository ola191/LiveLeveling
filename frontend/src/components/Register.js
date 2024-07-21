import React from 'react';

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <p>Registration is only available through Google Login</p>
      <button onClick={() => window.location.href = 'http://localhost:5000/auth/google'}>Register with Google</button>
    </div>
  );
};

export default Register;

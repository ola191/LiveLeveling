// src/components/Login.js
import React from 'react';

const Login = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="ui-alert ui-alert-id-login">
        <div className='ui-alert-corner'></div>
        <div className='ui-alert-corner'></div>
        <div className='ui-alert-corner'></div>
        <div className='ui-alert-corner'></div>
        <h1 className=" ui-alert-title"><span>&#x1F6C8;</span>&nbsp;Login</h1>
        <button 
          onClick={handleLogin} 
          className="ui-alert-button"
        >
          &#91;Welcome,&nbsp;<span>Guest</span>&#93;
        </button>
      </div>
    </div>
  );
};

export default Login;

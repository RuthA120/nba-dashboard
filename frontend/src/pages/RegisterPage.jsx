import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';

export default function RegisterPage() {
  return (
    <div className="page">
      <div className="box">

      </div>
      <div className="form-container">
        <div className='form-box'>
          <h2 className="header">Create an Account</h2>

          <h3 class ="username-header">Username</h3>
          <input type="text" className="username-input" placeholder="Enter your username" />

          <h3 class ="email-header">Email</h3>
          <input type="text" className="email-input" placeholder="Enter your email" />

          <h3 class ="password-header">Password</h3>
          <input type="text" className="password-input" placeholder="Enter your password" />
        
          <button id="register">Sign Up</button>
          <a href="/login" className="login-link">Login to existing account</a>
        </div>
      </div>
    </div>
  );
}

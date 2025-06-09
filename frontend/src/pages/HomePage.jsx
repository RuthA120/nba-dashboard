import { useState } from 'react';
import '../styles/HomePage.css';
import { useNavigate } from 'react-router-dom';


export default function HomePage() {
  const navigate = useNavigate();

  return (
  <div className="box">
    <h1 className="font small-heading">WELCOME TO</h1>
    <h1 className="font large-heading">NBA DASHBOARD</h1>
    <div className="button-container">
        <button id="register" onClick={() => navigate('/register')}>Sign Up</button>
        <button id="login" onClick={() => navigate('/login')}>Login</button>
      </div>
  </div>
);
}

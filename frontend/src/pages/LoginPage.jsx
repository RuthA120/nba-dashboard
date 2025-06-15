import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import myLoginImage from '../assets/Login-IMG.jpg';
import myLoginAvatar from '../assets/Login-Avatar.png';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5173/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (res.ok) {
      alert('Login successful!');
      localStorage.setItem('token', data.token);
    } else {
      alert(data.message || 'Login failed');
    }
  };

  return (
      <div className="login-page">
        <div className="login-form-container">
          <div className='login-form-box'>
            <img
              src={myLoginAvatar}
              alt="Avatar"
              className="login-avatar"
            />

            <form onSubmit={handleSubmit}>
              <h2 className="login-header">Welcome Back!</h2>
              <hr className="login-line"></hr>
    
              <h3 className ="login-username-header">Username</h3>
              <input type="text" className="username-login-input" placeholder="Enter your username" onChange={handleChange} required/>
    
              <h3 className ="login-password-header">Password</h3>
              <input type="password" className="password-login-input" placeholder="Enter your password" onChange={handleChange} required/>
          
              <button type="submit" className="login-button">Login</button>
            </form>
            
            <div className='login-options'>
              <a href="/login" className="loginpage-link">Forgot Password?</a>
              <a href="/login" className="loginpage-link">Sign up for a new<br></br>account</a>
            </div>
          </div>
        </div>
        <div className="login-box">
          <img 
            src={myLoginImage}
            alt="Login Image" 
            className="side-login-image" 
          />
        </div>
      </div>
    );
}

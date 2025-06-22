import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';
import myRegisterImage from '../assets/Register-IMG.jpg';
import myRegisterAvatar from '../assets/Register-Avatar.png';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5173/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (res.ok) {
      alert('Registration successful!');
      // maybe redirect to login page
    } else {
      alert(data.error || 'Something went wrong');
    }
  };
  
  return (
    <div className="page">
      <div className="box">
        <img 
          src={myRegisterImage}
          alt="Register Image" 
          className="side-image" 
        />
      </div>
      <div className="form-container">
        <div className='form-box'>
          <img
            src={myRegisterAvatar}
            alt="Avatar"
            className="register-avatar"
          />
          <h2 className="header">Create an Account</h2>
          <hr className="register-line"></hr>
          <form onSubmit={handleSubmit}>
            <h3 className ="username-header">Username</h3>
            <input type="text" className="username-input" placeholder="Enter your username" onChange={handleChange} required />

            <h3 className="email-header">Email</h3>
            <input type="email" className="email-input" placeholder="Enter your email" onChange={handleChange} required />

            <h3 className ="password-header">Password</h3>
            <input type="password" className="password-input" placeholder="Enter your password" onChange={handleChange} required />
            <button type="submit" className="register-button">Sign Up</button>
          </form>

          <a href="/login" className="login-link">Login to existing account</a>
        </div>
      </div>
    </div>
  );
}

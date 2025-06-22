import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import myLoginImage from '../assets/Login-IMG.jpg';
import myLoginAvatar from '../assets/Login-Avatar.png';
import { loginUser } from '../api/auth';
import { supabase } from '../lib/supabaseClient'; // your supabase client import

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Attempting login with:', formData);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      console.error('Login error:', error);
      setError(error.message);
      alert('Login failed: ' + error.message);
      return;
    }

    console.log('Login successful:', data);
    setError(null);
    navigate('/dashboard');
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
    
              <h3 className ="login-email-header">Email</h3>
              <input name="email" type="text" value={formData.email} className="email-login-input" placeholder="Enter your email" onChange={handleChange} required/>
    
              <h3 className ="login-password-header">Password</h3>
              <input name="password" type="password" value={formData.password} className="password-login-input" placeholder="Enter your password" onChange={handleChange} required/>
          
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

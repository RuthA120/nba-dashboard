import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';
import myRegisterImage from '../assets/Register-IMG.jpg';
import myRegisterAvatar from '../assets/Register-Avatar.png';
import myBasketballDesign from '../assets/Basketball-Design.png';
import { registerUser } from '../api/auth';

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await registerUser(email, password);

    if (res.success) {
      setModalMessage(res.message);
      setShowConfirmModal(true);
    } else {
      alert('Error: ' + (res.message || 'Something went wrong.'));
    }
  };

  const handleGoToLogin = () => {
    navigate('/login');
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
            <h3 className="email-header">Email</h3>
            <input type="email" className="email-input" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <h3 className ="password-header">Password</h3>
            <input type="password" className="password-input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="register-button">Sign Up</button>
          </form>

          <a href="/login" className="login-link">Login to existing account</a>
        </div>
      </div>

      {showConfirmModal && (
        <div className="modal-overlay">
          
          <div className="modal-content">
            <img src={myBasketballDesign} alt="Basketball Design" className="basketball-design" />
            <p className="confirm-header">Thanks for signing up for NBADashboard!</p>
            <p className="confirm-message">Please check your inbox for a confirmation email to complete your signup.
                Make sure to also check your spam or junk folder.<br></br> If you are stuck please visit the Questions Page.</p>
            <button 
            className="login-direct" onClick={handleGoToLogin}>
              Go to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

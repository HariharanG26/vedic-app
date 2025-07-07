import React, { useState } from 'react';
import '../styles/authmodal.css';

const AuthModal = ({ show, handleClose, authType, setAuthType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authType === 'register' && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log(`${authType} form submitted:`, formData);
    // Here you would typically send the data to your backend
    handleClose();
  };

  if (!show) return null;

  return (
    <div className="auth-modal">
      <div className="auth-modal-content">
        <div className="auth-modal-header">
          <h2>{authType === 'login' ? 'Login' : 'Register'}</h2>
          <button className="close-btn" onClick={handleClose}>&times;</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {authType === 'register' && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          {authType === 'register' && (
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
              minLength="6"
            />
          </div>
          
          {authType === 'register' && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                value={formData.confirmPassword} 
                onChange={handleChange} 
                required 
                minLength="6"
              />
            </div>
          )}
          
          <button type="submit" className="auth-submit-btn">
            {authType === 'login' ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="auth-buttons">
          <button 
            className="auth-btn"
            onClick={() => authType === 'login' ? setAuthType('login') : handleSubmit()}
          >
            {authType === 'login' ? 'Login' : 'Register'}
          </button>
          <button
            className="auth-btn"
            onClick={() => authType === 'login' ? setAuthType('register') : setAuthType('login')}
          >
            {authType === 'login' ? 'Register' : 'Login'}
          </button>
        </div>

        <div className="auth-switch">
          {authType === 'login' ? (
            <p>
              Don't have an account? 
              <button onClick={() => setAuthType('register')}>Register</button>
            </p>
          ) : (
            <p>
              Already have an account? 
              <button onClick={() => setAuthType('login')}>Login</button>
            </p>
          )}
        </div>

        <div className="auth-social">
          <p>Or continue with:</p>
          <div className="social-buttons">
            <button className="social-btn google">
              <i className="fab fa-google"></i> Google
            </button>
            <button className="social-btn facebook">
              <i className="fab fa-facebook-f"></i> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

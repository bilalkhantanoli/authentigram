import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthSignUp.css';

export default function AuthentigramSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Authentigram Signup';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert('Please fill in all fields!');
      return;
    }

    if (localStorage.getItem(email)) {
      alert('User already exists! Please log in.');
    } else {
      localStorage.setItem(email, password);
      alert('Sign Up Successful! Now log in.');
      navigate('/login');
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="image-section">
        {/* Background image set in CSS */}
      </div>
      <div className="login-section">
        <img src="/images/Logo2.png" alt="Authentigram Logo" className="logo1" />
        <h1>Create Account</h1>
        <form id="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="signup-email">Email</label>
          <div className="input-container">
            <input
              type="email"
              id="signup-email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label htmlFor="password">Password</label>
          <div className="input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="eye-icon" id="togglePassword" onClick={togglePassword}>
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </span>
          </div>

          <button type="submit" className="login-btn">Sign Up</button>

          <div className="divider">Or continue with</div>

          <button type="button" className="google-btn">
            <img src="/images/G Logo.png" alt="Google" className="google-icon" />
            Continue with Google
          </button>

          <p className="Login">
            Already have an account? <span onClick={() => navigate('/login')}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/AuthLogin.css';

export default function AuthentigramLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Authentigram Login';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert('Please fill in all fields!');
      return;
    }

    const storedPassword = localStorage.getItem(email);
    if (!storedPassword) {
      alert('Password is incorrect!');
    } else if (storedPassword === password) {
      localStorage.setItem('loggedInUser', email);
      alert('Login Successful! Welcome.');
      navigate('/dashboard');
      window.location.reload();
    } else {
      alert('Incorrect password or Email, try again!');
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
        <h1>Welcome Back!</h1>
        <form id="login-form" onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email</label>
          <div className="input-container">
            <input
              type="email"
              id="login-email"
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

          <div className="forgot">
            <Link to="/forgot" id="forgot-btn">Forgot Password?</Link>
          </div>

          <button type="submit" className="login-btn">Login</button>

          <div className="divider">Or continue with</div>

          <button type="button" className="google-btn">
            <img src="/images/G Logo.png" alt="Google" className="google-icon" />
            Continue with Google
          </button>

          <p className="signup">
            Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

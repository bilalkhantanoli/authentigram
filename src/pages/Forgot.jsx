import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Forgot.css';

export default function Forgot() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Authentigram - Reset Password';
  }, []);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email || !newPassword) {
      alert('Please fill in all fields!');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!passwordPattern.test(newPassword)) {
      alert('Password must be at least 8 characters long and include a number and special character.');
      return;
    }

    if (localStorage.getItem(email)) {
      localStorage.setItem(email, newPassword);
      alert('Password reset successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      alert('Email does not exist. Please sign up.');
    }
  };

  return (
    <div>
      <div className="layer lower"></div>
      <div className="layer upper"></div>

      <div className="reset-container">
        <div className="logo">
          <img src="/images/Logo2.png" alt="Authentigram Logo" />
        </div>
        <h1 className="heading">Reset Password</h1>

        <div className="form-group">
          <label htmlFor="email" className="field-label">Email</label>
          <div className="input-container">
            <input
              type="email"
              id="reset-email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="new-password" className="field-label">Password</label>
          <div className="input-container">
            <input
              type="password"
              id="new-password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </div>

        <button className="btn reset-btn" id="reset-btn" onClick={handleReset}>Reset Password</button>
        <Link to="/login" className="return-link">Return to Login</Link>
      </div>
    </div>
  );
}

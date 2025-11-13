import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/AuthSignUp.css';

export default function AuthentigramSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Authentigram Signup';
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
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
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="auth-signup-page">
      <div className="container">
        <div className="image-section">
        </div>
        <div className="login-section">
          <img className="logo1" src="/images/Logo2.png" alt="Authentigram Logo" />
          <h1>Get Started!</h1>
        <form id="signup-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <div style={{ position: "relative" }}>
            <input
              type="email"
              id="signup-email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <br></br>
          
          <label>Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="eye-icon" id="togglePassword" onClick={togglePassword} style={{ userSelect: "none" }}>
              <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
            </span>
          </div>
          <center>
            <button className="login-btn" type="submit">
              Create account
            </button>
          </center>
        </form>
        <div className="divider"> Or register with</div>
        <div
          id="g_id_onload"
          data-client_id="221005578590-emokmb341i4gudl1th2nm7fepfll4opj.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-callback="handleCredentialResponse"
        ></div>
        <div className="g_id_signin" data-type="standard"></div>
        <p className="Login">
          Have an account? <Link to="/login"><span>Login</span></Link>
        </p>
      </div>
    </div>
    </div>
  );
}

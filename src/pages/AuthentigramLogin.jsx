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
    // Google Identity script
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
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="auth-login-page">
      <div className="container">
        <div className="image-section"></div>
        <div className="login-section">
          <img className="logo1" src="/images/Logo2.png" alt="Authentigram Logo" />
          <h1>Welcome back!</h1>
        <form id="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            id="login-email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br></br>
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
            <button className="login-btn" type="submit">Log in</button>
          </center>
        </form>
        <form id="forgot-password">
          <p className="forgot">
            <Link to="/forgot" id="forgot-btn" style={{ textDecoration: 'none', color: 'inherit' }}>Forgot password?</Link>
          </p>
        </form>
        <div className="divider"> Or continue with </div>
        <div
          id="g_id_onload"
          data-client_id="221005578590-emokmb341i4gudl1th2nm7fepfll4opj.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-callback="handleCredentialResponse"
        ></div>
        <div className="g_id_signin" data-type="standard"></div>
        <p className="signup">
          Don't have an account? <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}><span>Sign up</span></Link>
        </p>
      </div>
    </div>
    </div>
  );
}
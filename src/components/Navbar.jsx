import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(user?.email || null);

  useEffect(() => {
    setLoggedInUser(user?.email || null);
  }, [user]);

  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo-img" src="/images/H Logo.png" alt="Logo" />
      </div>
      <div className="nav-links">
        <Link to="/dashboard">Home</Link>
        <Link to="/analyze">Analyze</Link>
        <Link to="/about">About</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/contact">Contact</Link>
      </div>
      {!loggedInUser ? (
        <div id="auth-buttons" className="auth-buttons">
          <button className="register" onClick={() => navigate('/signup')}>Register</button>
          <button className="login" onClick={() => navigate('/login')}>Login</button>
        </div>
      ) : (
        <div id="user-info" className="user-info">
          <button
            id="profile-btn"
            className="profile-btn"
            onClick={() => setShowDropdown(!showDropdown)}
            aria-haspopup="true"
            aria-expanded={showDropdown}
          >
            <i className="fas fa-user" />
          </button>
          {showDropdown && (
            <div id="profile-dropdown" className="profile-dropdown">
              <p id="user-email">{loggedInUser}</p>
              <button onClick={onLogout} className="logout-btn">Logout</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

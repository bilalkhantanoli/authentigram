import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const email = localStorage.getItem('loggedInUser');
    setLoggedInUser(email);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  useEffect(() => {
    setShowDropdown(false);
  }, [location]);

  const onLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    navigate('/login');
  };

  return (
    <header>
      <img className="Home-Logo" src="/images/H Logo.png" alt="Logoo" />
      <nav>
        <Link to="/dashboard">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div id="auth-buttons" style={{ display: loggedInUser ? 'none' : 'flex' }}>
        <button className="register" onClick={() => navigate('/signup')}>Register</button>
        <button className="login" onClick={() => navigate('/login')}>Login</button>
      </div>
      
      <div id="user-info" style={{ display: loggedInUser ? 'flex' : 'none', position: 'relative' }}>
        <div 
          id="profile-btn" 
          onClick={() => setShowDropdown(!showDropdown)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#ff007f',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <i className="fas fa-user" style={{ color: 'white' }}></i>
        </div>
        
        <div 
          id="profile-dropdown" 
          ref={dropdownRef}
          style={{
            display: showDropdown ? 'block' : 'none',
            position: 'absolute',
            top: '50px',
            right: '0',
            background: '#222',
            padding: '10px',
            borderRadius: '8px',
            color: 'white',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            zIndex: 100
          }}
        >
          <p id="user-email" style={{ margin: '0 0 10px 0' }}>{loggedInUser}</p>
          <button 
            onClick={onLogout} 
            style={{
              padding: '5px 10px',
              background: '#ff007f',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

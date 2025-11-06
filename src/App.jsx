import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Analyze from './pages/Analyze';
import AuthentigramLogin from './pages/AuthentigramLogin';
import AuthentigramSignUp from './pages/AuthentigramSignUp';
import BotPage from './pages/BotPage';
import ContactPage from './pages/ContactPage';
import Dashboard from './pages/Dashboard';
import FAQS from './pages/FAQS';
import Forgot from './pages/Forgot';
import OptionPage from './pages/OptionPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser({ email: loggedInUser });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard user={user} onLogout={handleLogout} />} />
        <Route path="/about" element={<About user={user} onLogout={handleLogout} />} />
        <Route path="/analyze" element={<Analyze user={user} onLogout={handleLogout} />} />
        <Route path="/login" element={<AuthentigramLogin />} />
        <Route path="/signup" element={<AuthentigramSignUp />} />
        <Route path="/bot" element={<BotPage user={user} onLogout={handleLogout} />} />
        <Route path="/contact" element={<ContactPage user={user} onLogout={handleLogout} />} />
        <Route path="/dashboard" element={<Dashboard user={user} onLogout={handleLogout} />} />
        <Route path="/faqs" element={<FAQS user={user} onLogout={handleLogout} />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/options" element={user ? <OptionPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;


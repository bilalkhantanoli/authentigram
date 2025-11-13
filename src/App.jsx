import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    // Also ensure document and html scroll to top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser({ email: loggedInUser });
    }

    // Ensure page loads from top on mount
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);


  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/login" element={<AuthentigramLogin />} />
        <Route path="/signup" element={<AuthentigramSignUp />} />
        <Route path="/bot" element={<BotPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/options" element={
          localStorage.getItem('loggedInUser')
            ? <OptionPage />
            : <Navigate to="/login" />
        } />
      </Routes>
    </Router>
  );
}

export default App;


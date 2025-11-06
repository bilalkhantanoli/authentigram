import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginDialog from '../components/LoginDialog';
import '../styles/Analyze.css';

export default function Analyze({ user, onLogout }) {
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Authentigram - Analyze Fake Profile';
  }, []);

  const handleAnalyze = () => {
    if (user) {
      navigate('/options');
    } else {
      setShowDialog(true);
    }
  };

  return (
    <div>
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="main-container">
        <section className="analyze-section">
          <div className="analyze-container">
            <h1 className="analyze-title">Analyze Fake Profiles</h1>
            <p className="analyze-subtitle">Detect fake Instagram accounts & bots instantly</p>
            <p className="analyze-desc">
              Our AI-powered tool helps you identify suspicious accounts by analyzing behavioral patterns,
              engagement metrics, and profile authenticity. Get accurate results in seconds.
            </p>
            <div className="analyze-input-wrapper">
              <input 
                type="text" 
                className="analyze-input" 
                placeholder="Enter Instagram username..." 
              />
              <button className="analyze-btn" id="analyzeBtn" onClick={handleAnalyze}>
                Analyze
              </button>
            </div>
            <p className="note-text">
              *Note: This tool analyzes public profiles only. Private accounts cannot be analyzed.
            </p>
          </div>
        </section>
      </div>

      <Footer />

      <LoginDialog open={showDialog} onClose={() => setShowDialog(false)} />
    </div>
  );
}

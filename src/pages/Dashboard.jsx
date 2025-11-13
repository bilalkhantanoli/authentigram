import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Dashboard.css';
import Footer from '../components/Footer';

export default function Dashboard() {
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { 
    document.title = 'Authentigram';
  }, []);

  const handleAnalyzeClick = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      navigate('/analyze');
    } else {
      setShowDialog(true);
    }
  };

  return (
    <div className="dashboard-page">
      <Navbar />
      
      <div className="hero">
        <div className="hero-text">
          <h1 className="gradient-heading">
            Detect Fake Profiles <br />
            & Bots on Instagram
          </h1>
          <p>
            With the rise of automated accounts and fake profiles, social media platforms are becoming breeding grounds for misinformation and deception. Our system uses AI and cybersecurity techniques to identify and eliminate bots, ensuring a safer and more authentic Instagram experience.
          </p>
          <button id="analyzeBtn" className="btn" onClick={handleAnalyzeClick}>Analyze Now</button>

          {showDialog && (
            <div id="loginDialog" className="dialog">
              <div className="dialog-content">
                <h2>⚠️ Access Denied</h2>
                <p>Sorry, to access this feature you must be logged in.</p>
                <button id="closeDialog" onClick={() => setShowDialog(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
        <div className="hero-image">
          <img src="/images/Home page logo.png" alt="AI Face" />
        </div>
      </div>

      <section className="impact">
        <h2>Why Fake Accounts Harm Your Experience</h2>
        <p>
          Fake profiles and bots skew engagement metrics, spread misinformation, and compromise user trust. Authentigram helps you identify suspicious activity with precision.
        </p>
        <div className="stats">
          <div className="stat-box">
            <i className="fas fa-robot"></i>
            <p>27% of accounts exhibit bot-like behavior</p>
          </div>
          <div className="stat-box">
            <i className="fas fa-ghost"></i>
            <p>1 in 4 new followers are likely fake</p>
          </div>
          <div className="stat-box">
            <i className="fas fa-shield-alt"></i>
            <p>85% accuracy in our validation tests</p>
          </div>
        </div>
      </section>

      <section className="impact">
        <h2>How Authentigram Works</h2>
        <div className="stats">
          <div className="stat-box">
            <i className="fas fa-search"></i>
            <p>Profile Scanning<br /><small>Analyze username activity patterns and metadata</small></p>
          </div>
          <div className="stat-box">
            <i className="fas fa-brain"></i>
            <p>Behavior Detection<br /><small>Identify irregular posting & following timelines</small></p>
          </div>
          <div className="stat-box">
            <i className="fas fa-exclamation-triangle"></i>
            <p>Risk Assessment<br /><small>Get a 1–10 authenticity score with evidence</small></p>
          </div>
        </div>
      </section>

      <section className="impact">
        <h2>Why We Are Different</h2>
        <div className="stats">
          <div className="stat-box">
            <i className="fas fa-user-secret"></i>
            <p>Zero Data Exposure<br /><small>Completely anonymous searches and inputs</small></p>
          </div>
          <div className="stat-box">
            <i className="fas fa-microchip"></i>
            <p>Advanced Bot Detection<br /><small>Identifies and analyzes coordinated bot activity</small></p>
          </div>
          <div className="stat-box">
            <i className="fas fa-eye"></i>
            <p>No Black Box AI<br /><small>Clear explanations for every detection flag</small></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

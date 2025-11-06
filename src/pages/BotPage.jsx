import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Analyze.css';

export default function BotPage({ user, onLogout }) {
  useEffect(() => { document.title = 'Authentigram - Analyze Bots'; }, []);

  return (
    <div>
      <Navbar user={user} onLogout={onLogout} />
      <div className="main-container">
        <section className="analyze-section">
          <div className="analyze-container">
            <h1 className="analyze-title">Bot Detection</h1>
            <p className="analyze-subtitle">Spot bot-like behavior and automated activity</p>
            <p className="analyze-desc">Use our advanced signals to determine whether an account or engagement pattern is likely automated.</p>
            <div className="analyze-input-wrapper">
              <input className="analyze-input" placeholder="Enter Instagram username..." />
              <button className="analyze-btn">Analyze</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

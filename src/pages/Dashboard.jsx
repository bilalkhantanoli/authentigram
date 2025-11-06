import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Dashboard.css';

export default function Dashboard({ user, onLogout }) {
  useEffect(() => { document.title = 'Authentigram'; }, []);

  return (
    <div>
      <Navbar user={user} onLogout={onLogout} />
      <section className="hero">
        <div className="hero-text">
          <h1 className="gradient-heading">Keep Your Instagram Real</h1>
          <p>Detect fake profiles, bot engagement, and suspicious activity. Get clarity before you connect.</p>
          <button className="btn" onClick={() => window.location.href = '/analyze'}>Analyze a Profile</button>
        </div>
        <div className="hero-image">
          <img src="/images/Home page logo.png" alt="Authentigram" />
        </div>
      </section>

      <section className="impact">
        <h2>Impact</h2>
        <p>Thousands of users trust Authentigram to keep their networks clean and genuine.</p>
        <div className="stats">
          <div className="stat-box">
            <i className="fas fa-user-shield"></i>
            <p>Profiles Analyzed</p>
            <small>Security first</small>
          </div>
          <div className="stat-box">
            <i className="fas fa-robot"></i>
            <p>Bots Detected</p>
            <small>AI-powered</small>
          </div>
          <div className="stat-box">
            <i className="fas fa-thumbs-up"></i>
            <p>Trust Score</p>
            <small>Clear and simple</small>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

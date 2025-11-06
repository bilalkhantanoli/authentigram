import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/OptionPage.css';

export default function OptionPage({ user, onLogout }) {
  useEffect(() => { document.title = 'Authentigram - Analysis Options'; }, []);

  const cards = [
    {
      title: 'Basic Analysis',
      features: ['Profile checks', 'Engagement scan', 'Risk score'],
    },
    {
      title: 'Deep Dive',
      features: ['Behavioral patterns', 'History trends', 'Bot likelihood'],
    },
    {
      title: 'Pro Insights',
      features: ['Anomaly detection', 'Advanced signals', 'Export report'],
    },
  ];

  return (
    <div>
      <Navbar user={user} onLogout={onLogout} />
      <main className="main-container">
        <h2 className="section-heading">Choose Your Analysis</h2>
        <p className="section-subtitle">Select an option to analyze the Instagram profile</p>
        <div className="analysis-options">
          {cards.map((c, i) => (
            <div className="option-card" key={i}>
              <div className="option-title">{c.title}</div>
              <h3>{c.title}</h3>
              <ul>
                {c.features.map((f, idx) => (<li key={idx}>{f}</li>))}
              </ul>
              <button className="option-btn">Select</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

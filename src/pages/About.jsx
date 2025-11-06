import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/About.css';

export default function About({ user, onLogout }) {
  useEffect(() => {
    document.title = 'About Authentigram';
  }, []);

  return (
    <div>
      <Navbar user={user} onLogout={onLogout} />
      
      <section className="about-section">
        <h1>About Authentigram</h1>
        <div className="about-content">
          <div className="text-content">
            <p><strong>Vision:</strong> A digital world where trust is paramount.</p>
            <p>Social platforms evolve, but so do threats like deceptive profiles, automated bots, and orchestrated campaigns. These manipulate reality and jeopardize genuine interactions.</p>
            <p>We're here to change that.</p>

            <h3 style={{ marginTop: '2rem', color: 'white' }}>How We Protect You</h3>
            <p>We empower users with actionable insights. Using advanced AI-driven analysis, including behavioral patterns, sentiment detection, and cybersecurity tools—we monitor Instagram accounts for:</p>

            <ul className="about-list">
              <li><strong>Inconsistencies</strong></li>
              <li><strong>Bot-like activity</strong></li>
              <li><strong>Abnormal trends</strong></li>
            </ul>

            <p>Whether you're a casual user, influencer, or business, we help you identify fake engagement before it harms your experience.</p>

            <h3 style={{ marginTop: '2rem', color: 'white' }}>Why Authentigram Stands Out</h3>
            <p>We don't just flag profiles—we explain why.</p>

            <p><strong>Evidence-driven results:</strong> Every score is backed by behavioral data and AI analysis.</p>
            <p><strong>No jargon, just clarity:</strong> Understand risks instantly with plain-language explanations.</p>
            <p><strong>Actionable insights:</strong> Spot fake followers, suspicious engagement, and bot patterns at a glance.</p>
            <p><strong>User-first design:</strong> Tools built for everyone—no technical expertise needed.</p>

            <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>Trust the process. Focus on what's real.</p>
          </div>
          <div className="glow-image">
            <img src="/images/Auth logo.png" alt="Instagram Logo" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

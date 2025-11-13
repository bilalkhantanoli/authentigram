import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/BotPage.css';

export default function BotPage({ user, onLogout }) {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => { document.title = 'Authentigram - Analyze Bot Behavior'; }, []);

  const handleAnalyze = () => {
    if (username.trim()) setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="bot-page">
      <Navbar user={user} onLogout={onLogout} />
      <div className="main-container">
        <section className="analyze-section">
          <div className="analyze-container">
            <h1 className="analyze-title">Analyze <span className="highlight">Bot Behavior</span></h1>
            <p className="analyze-subtitle">Curious about a profile?</p>
            <p className="analyze-desc">
              Enter a public Instagram username to assess its authenticity. Our system analyzes various
              indicators to help you determine if a profile might be fake.
            </p>
            <div className="analyze-input-wrapper">
              <input
                type="text"
                placeholder="Enter Username"
                className="analyze-input"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <button className="analyze-btn" onClick={handleAnalyze}>Analyze Now</button>
            </div>
            <p className="note-text">
              <em>Note: Analysis is based on publicly available data. We do not store or access private information.</em>
            </p>
          </div>
        </section>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.9)',
            zIndex: 1000,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: '#1c1c1c',
              color: 'white',
              padding: '2rem',
              borderRadius: '15px',
              width: '90%',
              maxWidth: '500px',
              position: 'relative',
              fontFamily: "'DM Sans', sans-serif",
              textAlign: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 15,
                right: 20,
                fontSize: 24,
                cursor: 'pointer',
                color: 'white',
              }}
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2048px-Yes_Check_Circle.svg.png"
                alt="Verified"
                style={{ width: 60, height: 60 }}
              />
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0.5rem 0' }}>
              HUMAN-LIKE BEHAVIOR DETECTED
            </h2>
            <p style={{ color: '#ccc', margin: '5px 0' }}>@{username || 'real.person'}</p>
            <p style={{ margin: '1rem 0 0.5rem', fontSize: '1rem' }}>
              Bot Probability Score: <strong>2/10</strong>
            </p>
            <div style={{
              width: '100%',
              background: '#2c2c2c',
              height: 18,
              borderRadius: 10,
              overflow: 'hidden',
              border: '1px solid #555',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '20%',
                height: '100%',
                background: '#00e676'
              }}></div>
            </div>
            <p style={{
              fontSize: '0.9rem',
              color: '#bbb',
              margin: '1rem 0 1.5rem',
              lineHeight: 1.4
            }}>
              Natural tone, consistent sentiment flow, and authentic engagement patterns detected.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              background: '#555',
              borderRadius: 10,
              overflow: 'hidden',
              fontSize: '0.9rem'
            }}>
              <div style={{ background: '#2a2a2a', padding: '1rem', color: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 5 }}>
                  <img src="https://img.icons8.com/ios-filled/24/ffffff/user.png" style={{ width: 16, height: 16 }} alt="Tone" /> <span>Tone</span>
                </div>
                <div style={{ color: '#ccc' }}>Balanced</div>
              </div>
              <div style={{ background: '#2a2a2a', padding: '1rem', color: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 5 }}>
                  <img src="https://img.icons8.com/ios-filled/24/ffffff/edit.png" style={{ width: 16, height: 16 }} alt="Style" /> <span>Style</span>
                </div>
                <div style={{ color: '#ccc' }}>Conversational</div>
              </div>
              <div style={{ background: '#2a2a2a', padding: '1rem', color: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 5 }}>
                  <img src="https://img.icons8.com/ios-filled/24/ffffff/clock--v1.png" style={{ width: 16, height: 16 }} alt="Pattern" /> <span>Pattern</span>
                </div>
                <div style={{ color: '#ccc' }}>Consistent</div>
              </div>
              <div style={{ background: '#2a2a2a', padding: '1rem', color: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 5 }}>
                  <img src="https://img.icons8.com/ios-filled/24/ffffff/visible.png" style={{ width: 16, height: 16 }} alt="Type" /> <span>Type</span>
                </div>
                <div style={{ color: '#ccc' }}>Natural</div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button style={{
                background: '#ff007f',
                color: 'white',
                border: 'none',
                padding: '10px 25px',
                borderRadius: 8,
                fontSize: '1rem',
                cursor: 'pointer'
              }}>
                Save Analysis
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

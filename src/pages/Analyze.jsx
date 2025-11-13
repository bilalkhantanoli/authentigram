import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Analyze.css';

export default function Analyze() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Authentigram - Analyze Fake Profile';
    // Ensure page loads from top
    window.scrollTo(0, 0);
  }, []);


  // Modal close handler
  const handleCloseModal = () => setShowModal(false);

  // Simulate analysis (replace with real logic as needed)
  const handleAnalyze = () => {
    if (username.trim()) {
      setShowModal(true);
    }
  };

  return (
    <div className="analyze-page">
      <Navbar />
      <div className="main-container">
        <section className="analyze-section">
          <div className="analyze-container">
            <h1 className="analyze-title">
              Analyze <span className="highlight">Fake Profile</span>
            </h1>
            <p className="analyze-subtitle">Curious about a profile?</p>
            <p className="analyze-desc">
              Enter a public Instagram username to assess its authenticity. Our system analyzes various
              indicators to help you determine if a profile might be fake.
            </p>
            <div className="analyze-input-wrapper">
              <input
                type="text"
                className="analyze-input"
                placeholder="Enter Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <button className="analyze-btn" onClick={handleAnalyze}>
                Analyze Now
              </button>
            </div>
            <p className="note-text">
              <em>
                Note: Analysis is based on publicly available data. We do not store or access private information.
              </em>
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
            background: 'rgba(0,0,0,0.8)',
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
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 15,
                right: 20,
                fontSize: 24,
                cursor: 'pointer',
              }}
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </div>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://via.placeholder.com/80"
                alt="Profile Pic"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: 10,
                  border: '2px solid white',
                }}
              />
              <p style={{ margin: '5px 0', fontSize: '1rem', color: '#ccc' }}>
                @{username || 'real.penguin'}
              </p>
            </div>
            <h2
              style={{
                textAlign: 'center',
                fontSize: '1.2rem',
                fontWeight: 700,
                margin: '0.5rem 0',
              }}
            >
              GENUINE PROFILE DETECTED
            </h2>
            <p style={{ textAlign: 'center', margin: '0.5rem 0', fontSize: '1rem' }}>
              Authenticity Score: <strong>9/10</strong>
            </p>
            <div
              style={{
                width: '100%',
                background: '#333',
                height: 20,
                borderRadius: 10,
                overflow: 'hidden',
                margin: '10px 0 20px',
              }}
            >
              <div
                style={{
                  width: '90%',
                  height: '100%',
                  background: 'linear-gradient(to right, #00ff95, #44ff00)',
                }}
              ></div>
            </div>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#bbb',
                lineHeight: 1.4,
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              This profile displays consistent behavior, complete metadata and natural engagement patterns. It is considered authentic.
            </p>
            <div style={{ background: '#2a2a2a', padding: '1rem', borderRadius: 10 }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  color: 'white',
                  fontSize: '0.9rem',
                  border: '1px solid #555',
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ padding: 8, border: '1px solid #555' }}>Profile pic</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>1</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>Username length</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>0.05</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 8, border: '1px solid #555' }}>Fullname words</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>1</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>Fullname length</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>0</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 8, border: '1px solid #555' }}>Name = Username</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>0</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>Description length</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>0</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 8, border: '1px solid #555' }}>External URL</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>0</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>Private</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>1</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 8, border: '1px solid #555' }}>Posts</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>53</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>Follows</td>
                    <td style={{ padding: 8, border: '1px solid #555' }}>492888</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 8, border: '1px solid #555' }}>Followers</td>
                    <td style={{ padding: 8, border: '1px solid #555', textAlign: 'right' }} colSpan={3}>
                      229
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button
                style={{
                  background: '#ff007f',
                  color: 'white',
                  border: 'none',
                  padding: '10px 25px',
                  borderRadius: 8,
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >
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

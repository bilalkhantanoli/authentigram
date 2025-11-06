import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ContactPage.css';

export default function ContactPage({ user, onLogout }) {
  useEffect(() => { document.title = 'Contact Us'; }, []);

  return (
    <div>
      <Navbar user={user} onLogout={onLogout} />
      <main className="main-content">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out for support, feedback, or partnerships.</p>

        <section className="container">
          <div className="contact-info">
            <div className="info-box">
              <div className="icon"><i className="fas fa-envelope"></i></div>
              <div className="info-text"><span>Email</span><span>support@authentigram.app</span></div>
            </div>
            <div className="info-box">
              <div className="icon"><i className="fas fa-phone"></i></div>
              <div className="info-text"><span>Phone</span><span>+1 (555) 123-4567</span></div>
            </div>
            <div className="info-box">
              <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="info-text"><span>Address</span><span>123 Trust Lane, Secure City</span></div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Your email" />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Write your message"></textarea>
            </div>
            <button className="submit-btn" type="submit">Send Message</button>
            <div className="social-icons">
              <div className="social-icon"><i className="fab fa-twitter"></i></div>
              <div className="social-icon"><i className="fab fa-instagram"></i></div>
              <div className="social-icon"><i className="fab fa-linkedin-in"></i></div>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

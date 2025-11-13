import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ContactPage.css';

export default function ContactPage() {
  useEffect(() => { document.title = 'Contact Us'; }, []);

  return (
    <div className="contact-page">
      <Navbar />
      <main className="main-content">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? We’d love to hear from you!</p>
        <p>Feel free to reach out for inquiries related to our project, collaborations, or suggestions.</p>

        <div className="container">
          <div className="contact-info">
            <div className="info-box">
              <div className="icon">📞</div>
              <div className="info-text">
                <span>Phone Number</span>
                <span>1234 5678912</span>
              </div>
            </div>
            <div className="info-box">
              <div className="icon">📧</div>
              <div className="info-text">
                <span>Email Address</span>
                <span>example@gmail.com</span>
              </div>
            </div>
            <div className="info-box">
              <div className="icon">📍</div>
              <div className="info-text">
                <span>Location</span>
                <span>123 Avenue Park</span>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Message</h2>
            <div className="form-grid">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
            </div>
            <button>Send Message</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

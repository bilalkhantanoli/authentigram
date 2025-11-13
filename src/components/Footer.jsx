import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Footer = () => (
  <footer className="custom-footer">
    <div className="footer-left">
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
    <div className="footer-right">
      <h3>Exclusive offers straight to your inbox</h3>
      <form className="subscribe-form" onSubmit={e => e.preventDefault()}>
        <input type="email" placeholder="your-email@example.com" />
        <button type="submit">
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </div>
  </footer>
);

export default Footer;

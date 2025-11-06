import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-container">
      <div className="footer-left">
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="footer-subscribe">
        <p className="subscribe-title">Exclusive offers straight to your inbox</p>
        <form className="subscribe-form" onSubmit={(e)=>e.preventDefault()}>
          <input type="email" placeholder="your-email@example.com" />
          <button type="submit">&rarr;</button>
        </form>
      </div>
    </div>
  </footer>
);

export default Footer;

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/FAQS.css';

export default function FAQS({ user, onLogout }) {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => { document.title = 'FAQs - Authentigram'; }, []);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  const faqs = [
    { q: 'What is Authentigram?', a: 'Authentigram analyzes Instagram profiles for authenticity using behavioral and engagement signals.' },
    { q: 'Do I need an account?', a: 'You can explore the site but must login to run analyses.' },
    { q: 'Does it work with private profiles?', a: 'No. Only public profiles can be analyzed.' },
  ];

  return (
    <div className="faqs-page">
      <Navbar user={user} onLogout={onLogout} />
      <section className="faq-section">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div className={`faq-item ${openIndex === idx ? 'active' : ''}`} key={idx}>
              <div className="faq-question" onClick={() => toggle(idx)}>
                <span>{item.q}</span>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

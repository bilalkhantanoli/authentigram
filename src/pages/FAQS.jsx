import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/FAQS.css';

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => { document.title = 'FAQs - Authentigram'; }, []);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  const faqs = [
    {
      q: 'What does Authentigram analyze?',
      a: 'Authentigram analyzes Instagram profiles for signs of authenticity using AI — like behavior, follower patterns, and more.'
    },
    {
      q: 'Is my search private?',
      a: 'Yes! All your searches are encrypted and never shared with anyone. Your privacy is our priority.'
    },
    {
      q: 'Can this detect bots too?',
      a: 'Absolutely. Our system can detect bot-like behavior with high accuracy using behavioral and network analysis.'
    },
    {
      q: 'What does the authenticity score mean?',
      a: 'It’s a 1–10 scale showing how genuine a profile appears based on various data points. The higher the score, the more real it seems.'
    },
    {
      q: 'What is sentiment analysis in this context?',
      a: 'We assess emotional tone in captions to detect manipulation—bots often use extreme or repetitive emotional language.'
    },
    {
      q: 'Do you access private profiles or DMs?',
      a: 'No. We only analyze public data—nothing beyond what any user can see.'
    },
    {
      q: 'Can brands use this to vet influencers?',
      a: 'Absolutely. It\'s designed to help individuals and businesses verify profile integrity before collaborating.'
    }
  ];

  return (
    <div className="faqs-page">
      <Navbar />
      <section className="faq-section">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-container">
          {faqs.map((item, idx) => (
            <div className={`faq-item${openIndex === idx ? ' active' : ''}`} key={idx}>
              <div className="faq-question" onClick={() => toggle(idx)}>
                <span>{item.q}</span>
                <button className="toggle-btn" tabIndex={-1} aria-label="Toggle answer" type="button">
                  <i className="fas fa-chevron-down"></i>
                </button>
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

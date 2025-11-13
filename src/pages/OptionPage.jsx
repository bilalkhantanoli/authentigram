import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/OptionPage.css";
import { useNavigate } from "react-router-dom";

export default function OptionPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Authentigram - Analysis Options";
  }, []);

  // Card data matching your HTML content
  const cards = [
    {
      title: "Analyze Fake Profiles",
      desc:
        "Check if an Instagram profile is authentic using advanced pattern recognition, activity checks, and profile consistency signals.",
      features: [
        "Spot misleading accounts",
        "Get a 1–10 authenticity score",
        "Understand red flags clearly",
      ],
      btn: {
        text: "Analyze Fake Profile",
        onClick: () => navigate("/analyze"),
      },
    },
    {
      title: "Analyze Bot Behavior",
      desc:
        "Detect accounts that behave like bots by analyzing post sentiment, emotional manipulation patterns, and engagement anomalies.",
      features: [
        "Detect manipulative bots",
        "View key sentiment insights",
        "Spot coordinated behavior",
      ],
      btn: {
        text: "Analyze Bots",
        onClick: () => navigate("/bot"),
      },
    },
  ];

  return (
    <div className="option-page">
      <Navbar />
      <main className="main-container">
        <h2 className="section-heading">Analysis Options</h2>
        <p className="section-subtitle">
          Choose how you’d like to examine an Instagram account.
        </p>
        <div className="analysis-options">
          {cards.map((c, i) => (
            <div className="option-card" key={i}>
              <div className="option-title">{c.title}</div>
              <p>{c.desc}</p>
              <ul>
                {c.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <button className="option-btn" onClick={c.btn.onClick}>
                {c.btn.text}
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

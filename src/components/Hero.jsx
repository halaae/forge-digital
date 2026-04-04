import React from 'react';

export default function Hero() {
  return (
    <section className="hero fade-in">
      <div className="container hero-content">
        <h1 className="reveal">Craft Your Career.<br />Own Your Story.</h1>
        <p className="reveal" style={{ transitionDelay: '0.2s' }}>
          We specialize in high-impact ATS-friendly CVs, tailored cover letters, and personal branding that gets you noticed.
        </p>
        <div className="reveal" style={{ transitionDelay: '0.4s', marginTop: '2rem' }}>
          <a href="#services" className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </section>
  );
}

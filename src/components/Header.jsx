import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <div className="logo-main">Forge</div>
          <div className="logo-sub">DIGITAL</div>
        </div>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#why-ats">Why ATS?</a>
          <a href="#choose-us">Why Us?</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.9rem' }}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

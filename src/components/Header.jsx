import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container" style={{ position: 'relative' }}>
        <a href="/" className="logo-container" aria-label="Forge Digital – Home">
          <div className="logo-main">Forge</div>
          <div className="logo-sub">DIGITAL</div>
        </a>
        
        {/* Desktop Nav */}
        <nav className="nav-links desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#why-ats">Why ATS?</a>
          <a href="#choose-us">Why Us?</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.9rem' }}>Contact</a>
        </nav>

        {/* Mobile Toggle Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation" aria-expanded={isMenuOpen} aria-controls="mobile-nav">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div id="mobile-nav" className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`} aria-hidden={!isMenuOpen}>
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#why-ats" onClick={closeMenu}>Why ATS?</a>
            <a href="#choose-us" onClick={closeMenu}>Why Us?</a>
            <a href="#contact" className="btn btn-primary" onClick={closeMenu} style={{ padding: '0.6rem 2rem', marginTop: '1rem' }}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

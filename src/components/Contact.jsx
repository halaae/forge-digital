import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container reveal">
        <h2>Let's Build Your Future</h2>
        
        <div className="contact-links">
          <a href="tel:8848524175" className="contact-link">
            <div className="contact-icon">
              <Phone size={36} strokeWidth={1.5} />
            </div>
            <span>+91 8848524175</span>
          </a>

          <a href="https://wa.me/918848524175" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="contact-icon">
              <MessageCircle size={36} strokeWidth={1.5} />
            </div>
            <span>+91 8848524175</span>
          </a>
          
          <a href="mailto:mail.forgedigital@gmail.com" className="contact-link">
            <div className="contact-icon">
              <Mail size={36} strokeWidth={1.5} />
            </div>
            <span>mail.forgedigital@gmail.com</span>
          </a>
          
          <a href="https://instagram.com/the_forge.digital" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
            <span>@the_forge.digital</span>
          </a>
        </div>
        
        <div style={{ marginTop: '5rem', color: 'var(--text-inverse-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Forge Digital. All Rights Reserved.
        </div>
      </div>
    </section>
  );
}

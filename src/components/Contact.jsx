import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container reveal">
        <h2 id="contact-heading">Let's Build Your Future</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.15rem', lineHeight: '1.6' }}>
          Ready to elevate your career? Connect with us through Instagram, Email, or WhatsApp to discuss your executive profile, resume transformation, or portfolio.
        </p>
        
        <div className="contact-links">
          <a href="tel:+918848524175" className="contact-link" aria-label="Call Forge Digital at +91 8848524175">
            <div className="contact-icon" aria-hidden="true">
              <Phone size={36} strokeWidth={1.5} />
            </div>
            <span className="contact-number">+91 8848524175</span>
          </a>

          <a href="https://wa.me/918848524175" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Chat with Forge Digital on WhatsApp">
            <div className="contact-icon" aria-hidden="true">
              <MessageCircle size={36} strokeWidth={1.5} />
            </div>
            <span className="contact-number">+91 8848524175</span>
          </a>
          
          <a href="mailto:hello.forgedigital.in@gmail.com" className="contact-link" aria-label="Email Forge Digital at hello.forgedigital.in@gmail.com">
            <div className="contact-icon" aria-hidden="true">
              <Mail size={36} strokeWidth={1.5} />
            </div>
            <span>hello.forgedigital.in@gmail.com</span>
          </a>
          
          <a href="https://instagram.com/the.forge.digital" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Follow Forge Digital on Instagram @the.forge.digital">
            <div className="contact-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram" role="img" aria-hidden="true"><title>Instagram</title><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
            <span>@the.forge.digital</span>
          </a>
        </div>
        
        <div style={{ marginTop: '5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Forge Digital. All Rights Reserved.
        </div>
      </div>
    </section>
  );
}

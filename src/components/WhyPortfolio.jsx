import React from 'react';

export default function WhyPortfolio() {
  return (
    <>
      <section className="bg-light">
        <div className="container split-layout">
          <div className="text-content reveal">
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Why a Portfolio?</h2>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
              In a sea of identical resumes, a digital portfolio makes you stand out. It provides tangible proof of your skills, turning abstract claims into concrete evidence.
            </p>
            <p style={{ marginTop: '1.5rem', fontSize: '1.25rem', lineHeight: 1.8 }}>
              We build stunning, responsive portfolios that tell your professional story with visual impact.
            </p>
          </div>
          <div className="image-content reveal" style={{ transitionDelay: '0.2s' }}>
            <img 
              src="/portfolio.png" 
              alt="Digital Portfolio Example" 
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>

      <section className="bg-gray">
        <div className="container split-layout" style={{ direction: 'rtl' }}>
          <div className="text-content reveal" style={{ direction: 'ltr' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Why LinkedIn?</h2>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
              LinkedIn is the modern rolodex. If your profile isn't optimized, you're invisible to the people who matter most in your industry.
            </p>
            <p style={{ marginTop: '1.5rem', fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 500 }}>
              <strong>87%</strong> of recruiters use LinkedIn to find candidates.
            </p>
          </div>
          <div className="image-content reveal" style={{ direction: 'ltr', transitionDelay: '0.2s' }}>
            <img 
              src="/linkedin.png" 
              alt="LinkedIn Profile Example" 
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>
    </>
  );
}

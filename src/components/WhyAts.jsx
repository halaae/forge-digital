import React from 'react';

export default function WhyAts() {
  return (
    <section id="why-ats" className="resume-stack-section">
      <div className="container split-layout">
        <div className="text-content reveal">
          <h2>Why ATS-Friendly?</h2>
          <p>
            An Applicant Tracking System (ATS) scans CVs for keywords and formatting. 
            If your layout is complex, the system can't read it, and you get automatically rejected.
          </p>
          <p style={{ marginTop: '1.5rem', fontWeight: 500 }}>
            <strong>75%</strong> of resumes are rejected by an ATS before a human ever reads them.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            Hover to see the transformation. We strip away the unreadable elements while maintaining an elegant, premium look that recruiters love.
          </p>
        </div>

        <div className="image-content reveal" style={{ transitionDelay: '0.2s' }}>
          <img 
            src="/mockup3.png" 
            alt="Pristine ATS Friendly Resume" 
            style={{ 
              width: '100%', 
              borderRadius: '8px', 
              boxShadow: '0 25px 50px rgba(0,0,0,0.1)', 
              objectFit: 'cover',
              border: '1px solid rgba(0,0,0,0.05)'
            }} 
          />
        </div>
      </div>
    </section>
  );
}

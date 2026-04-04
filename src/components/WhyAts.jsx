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
            Hover to explore our portfolio. We build strictly compliant, minimalist resumes that glide through automated filters while retaining a pristine, premium aesthetic when they land on a recruiter's desk.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--brand)', display: 'inline-flex', padding: '0.5rem 1rem', borderRadius: '4px', letterSpacing: '0.5px' }}>
            <span style={{ color: 'var(--bg-light)', fontWeight: 600, fontSize: '0.9rem' }}>DELIVERED IN BOTH PDF & EDITABLE WORD FORMATS</span>
          </div>
        </div>

        <div className="reveal">
          <div className="resume-stack-container">
            <div className="resume-card resume-card-plain" style={{ padding: '0', overflow: 'hidden', border: '1px solid #ccc' }}>
               <img 
                 src="/mockup1.png" 
                 alt="Pristine Minimalist ATS Resume" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', backgroundColor: '#fdfbf7' }} 
               />
            </div>

            <div className="resume-card resume-card-blue" style={{ display: 'flex', padding: 0, border: '1px solid #bbb', overflow: 'hidden' }}>
               <img 
                 src="/mockup2.png" 
                 alt="High-End Modern ATS Resume" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', backgroundColor: '#ffffff' }} 
               />
            </div>

            <div className="resume-card resume-card-ats" style={{ padding: 0, overflow: 'hidden', border: '1px solid #ccc' }}>
              <img 
                src="/mockup3.png" 
                alt="Executive Level ATS Friendly Resume" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

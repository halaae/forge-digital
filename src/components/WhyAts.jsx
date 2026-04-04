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

        <div className="reveal">
          <div className="resume-stack-container">
            {/* Plain unoptimized CV (Layer 1) */}
            <div className="resume-card resume-card-plain" style={{ padding: '0', overflow: 'hidden', border: '1px solid #ccc' }}>
               <img 
                 src="/unop_resume_1.svg" 
                 alt="Unorganized plain resume" 
                 style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block', backgroundColor: '#fdfbf7' }} 
               />
            </div>

            {/* Complex blue two-column (Layer 2) */}
            <div className="resume-card resume-card-blue" style={{ display: 'flex', padding: 0, border: '1px solid #bbb', overflow: 'hidden' }}>
               <img 
                 src="/unop_resume_2.svg" 
                 alt="Complex two-column resume format" 
                 style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block', backgroundColor: '#2c3e50' }} 
               />
            </div>

            {/* ATS Optimized (Layer 3 - Front) */}
            <div className="resume-card resume-card-ats" style={{ padding: 0, overflow: 'hidden' }}>
              <img 
                src="/ats_resume.png" 
                alt="ATS Friendly Resume" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

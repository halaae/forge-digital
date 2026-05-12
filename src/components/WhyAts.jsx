import React from 'react';

export default function WhyAts() {
  return (
    <section id="why-ats" className="resume-stack-section" aria-labelledby="why-ats-heading">
      <div className="container split-layout">
        <div className="text-content reveal">
          <h2 id="why-ats-heading" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Why ATS Friendly?</h2>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
            An Applicant Tracking System (ATS) scans CVs for keywords and formatting. 
            If your layout is complex, the system can't read it, and you get automatically rejected.
          </p>
          <p style={{ marginTop: '1.5rem', fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 500 }}>
            <strong>75%</strong> of resumes are rejected by an ATS before a human ever reads them.
          </p>
          <p style={{ marginTop: '1.5rem', fontSize: '1.25rem', lineHeight: 1.8 }}>
            Hover to explore our portfolio. We build strictly compliant, minimalist resumes that glide through automated filters while retaining a pristine, premium aesthetic when they land on a recruiter's desk.
          </p>
          <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 500, letterSpacing: '0.5px' }}>
            Delivered in both PDF and editable Word formats.
          </p>
        </div>

        <div className="reveal">
          <div className="resume-stack-container">
            <div className="resume-card resume-card-plain" style={{ padding: '0', overflow: 'hidden', border: '1px solid #ccc' }}>
               <img
                 src="/mockup1.png"
                 alt="Pristine minimalist ATS-friendly resume example by Forge Digital"
                 width="600"
                 height="848"
                 loading="lazy"
                 decoding="async"
                 style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', backgroundColor: '#fdfbf7' }}
               />
            </div>

            <div className="resume-card resume-card-blue" style={{ display: 'flex', padding: 0, border: '1px solid #bbb', overflow: 'hidden' }}>
               <img
                 src="/mockup2.png"
                 alt="High-end modern ATS-compliant resume sample by Forge Digital"
                 width="600"
                 height="848"
                 loading="lazy"
                 decoding="async"
                 style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', backgroundColor: '#ffffff' }}
               />
            </div>

            <div className="resume-card resume-card-ats" style={{ padding: 0, overflow: 'hidden', border: '1px solid #ccc' }}>
              <img
                src="/mockup3.png"
                alt="Executive-level ATS-friendly resume design by Forge Digital"
                width="600"
                height="848"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

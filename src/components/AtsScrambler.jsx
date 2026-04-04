import React, { useState } from 'react';
import { Cpu, CheckCircle } from 'lucide-react';

export default function AtsScrambler() {
  const [isScanned, setIsScanned] = useState(false);

  return (
    <section className="bg-dark" style={{ padding: '4rem 0' }}>
      <div className="container text-center reveal">
        <h2 style={{ fontSize: '3.5rem', color: 'var(--brand)', marginBottom: '1.5rem' }}>The ATS Scrambler Simulator</h2>
        <p style={{ color: 'var(--text-inverse-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 4rem auto', lineHeight: 1.8 }}>
          Beautiful graphic resumes actively sabotage you. When run through an Applicant Tracking System (ATS), heavy formatting scrambles into unreadable text, automatically rejecting you before a human ever sees it.
        </p>

        <button 
          className="btn btn-primary"
          onClick={() => setIsScanned(!isScanned)}
          style={{ marginBottom: '4rem', padding: '1rem 3rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 auto 4rem auto', borderRadius: '30px' }}
        >
          <Cpu /> {isScanned ? 'Reset Simulator' : 'Scan Portfolios via ATS Bot'}
        </button>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'left' }}>
          
          {/* BAD GRAPHIC RESUME */}
          <div style={{ backgroundColor: 'var(--bg-darker)', borderRadius: '12px', padding: '2.5rem', border: isScanned ? '1px solid #ff4d4d' : '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden', transition: 'all 0.5s ease' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '0.6rem', backgroundColor: isScanned ? '#ff4d4d' : '#444', color: 'white', textAlign: 'center', fontWeight: 'bold', zIndex: 10, transition: 'background-color 0.5s ease' }}>
              Standard Graphic Resume
            </div>
            
            <div style={{ marginTop: '2rem', height: '400px', transition: 'all 0.5s ease', opacity: isScanned ? 0 : 1 }}>
              <img src="/mockup1.png" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(15%)', borderRadius: '4px' }} alt="Bad formatting" />
            </div>

            {/* SCRAMBLED TERMINAL VIEW */}
            <div style={{ position: 'absolute', top: '3rem', left: 0, right: 0, bottom: 0, backgroundColor: '#111', padding: '2rem', opacity: isScanned ? 1 : 0, transition: 'all 0.5s ease', pointerEvents: 'none' }}>
              <pre style={{ color: '#ff4d4d', fontFamily: 'monospace', fontSize: '0.9rem', whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
{`[ERR 404] PARSING FATAL EXCEPTION...
-----------------------------------
T&XT BL0CK N0T F0UND.
COLUMN_WIDTH = NaN
<table src="undefined">
!CRITICAL ERROR! IMAGE BLOCK DETECTED.
DROPPING NODE_001.

CANDIDATE_NAME: NULL
EXPERIENCE: NULL
EDUCATION: NULL

-> STATUS: AUTO-REJECTED`}
              </pre>
            </div>
          </div>

          {/* FORGE ATS RESUME */}
          <div style={{ backgroundColor: 'var(--bg-darker)', borderRadius: '12px', padding: '2.5rem', border: isScanned ? '1px solid #4CAF50' : '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden', transition: 'all 0.5s ease' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '0.6rem', backgroundColor: isScanned ? '#4CAF50' : '#444', color: 'white', textAlign: 'center', fontWeight: 'bold', zIndex: 10, transition: 'background-color 0.5s ease' }}>
              The Forge ATS Template
            </div>
            
            <div style={{ marginTop: '2rem', height: '400px', transition: 'all 0.5s ease', opacity: isScanned ? 0 : 1 }}>
              <img src="/mockup3.png" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} alt="Perfect ATS Resume" />
            </div>

             {/* PARSED JSON GREEN VIEW */}
             <div style={{ position: 'absolute', top: '3rem', left: 0, right: 0, bottom: 0, backgroundColor: '#071A0B', padding: '2rem', opacity: isScanned ? 1 : 0, transition: 'all 0.5s ease', pointerEvents: 'none' }}>
              <pre style={{ color: '#4CAF50', fontFamily: 'monospace', fontSize: '1rem', whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
{`[SYSTEM OK] INGESTION SUCCESSFUL...
-----------------------------------
{"candidate": {
  "name": "ALEX STERLING",
  "email": "alex.sterling@email.com",
  "phone": "555-0192"
},
"experience": [
  {"role": "VP Operations", "dur": "5 YRS"},
  {"role": "Senior Manager", "dur": "3 YRS"}
],
"metrics_found": 14,
"status": "APPROVED FOR HUMAN REVIEW"}`}
              </pre>
              <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', color: '#4CAF50', animation: isScanned ? 'pulse 2s infinite' : 'none' }}>
               <CheckCircle size={48} />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(0.95); } }
      `}</style>
    </section>
  );
}

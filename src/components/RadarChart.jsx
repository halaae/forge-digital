import React, { useState, useEffect } from 'react';

export default function RadarChart() {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // Wait for mount to trigger CSS draw animations organically
    setTimeout(() => {
      setIsRendered(true);
    }, 500);
  }, []);

  // Center: 200, 200
  // Radius Max: 150
  
  // Point mapping (Top, Right, Bottom-Right, Bottom-Left, Left)
  // The Forge Candidate (90-100% full capacity)
  const forgePoints = "200,50 340,150 285,320 115,320 60,150";
  
  // The Standard Candidate (40-50% capacity, weak internal geometry)
  const standardPoints = "200,130 250,170 230,240 170,240 150,170";

  return (
    <section className="bg-dark" style={{ padding: '6rem 0' }}>
      <div className="container split-layout">
        
        <div className="text-content reveal">
          <h2 style={{ fontSize: '3rem', color: 'var(--brand)', marginBottom: '1.5rem' }}>Metrics Optimization Web</h2>
          <p style={{ color: 'var(--text-inverse-secondary)', fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            We do not just format text. We systematically optimize your professional profile across the 5 core vectors required to pass executive screening algorithms.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '20px', height: '20px', backgroundColor: 'rgba(184, 92, 56, 0.4)', border: '2px solid var(--brand)', borderRadius: '4px' }}></div>
              <span style={{ color: 'var(--text-inverse)', fontSize: '1.2rem', fontWeight: 600 }}>The Forge Executive Standard</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '20px', height: '20px', backgroundColor: 'rgba(120, 120, 120, 0.3)', border: '2px solid #555', borderRadius: '4px' }}></div>
              <span style={{ color: '#888', fontSize: '1.2rem' }}>Generic Designer Templates</span>
            </div>
          </div>
        </div>
        
        <div className="image-content reveal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
          <svg width="400" height="400" viewBox="0 0 400 400" style={{ width: '100%', maxWidth: '400px', height: 'auto', overflow: 'visible' }}>
            
            {/* Draw Spiderweb Concentric Background Lines */}
            <polygon points="200,50 340,150 285,320 115,320 60,150" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <polygon points="200,100 293,166 257,280 143,280 107,166" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <polygon points="200,150 246,183 228,240 172,240 154,183" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            
            {/* Draw Axes crosshairs */}
            <line x1="200" y1="200" x2="200" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="200" y1="200" x2="340" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="200" y1="200" x2="285" y2="320" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="200" y1="200" x2="115" y2="320" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="200" y1="200" x2="60" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

            {/* Standard Candidate Polygon */}
            <polygon 
              points={standardPoints} 
              fill="rgba(120, 120, 120, 0.2)" 
              stroke="#555" 
              strokeWidth="2" 
              style={{ transition: 'all 1s ease', opacity: isRendered ? 1 : 0 }}
            />
            
            {/* Forge Elite Polygon */}
            <polygon 
              points={forgePoints} 
              fill="rgba(184, 92, 56, 0.25)" 
              stroke="var(--brand)" 
              strokeWidth="3" 
              style={{ transition: 'all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', transformOrigin: 'center', transform: isRendered ? 'scale(1)' : 'scale(0)', opacity: isRendered ? 1 : 0 }}
            />

            {/* Geometry Labels */}
            <text x="200" y="30" fill="var(--text-inverse)" fontSize="14" textAnchor="middle" fontWeight="bold">ATS Compliance</text>
            <text x="360" y="155" fill="var(--text-inverse)" fontSize="14" textAnchor="middle" fontWeight="bold">Keyword Density</text>
            <text x="300" y="340" fill="var(--text-inverse)" fontSize="14" textAnchor="middle" fontWeight="bold">Call-back Ratio</text>
            <text x="100" y="340" fill="var(--text-inverse)" fontSize="14" textAnchor="middle" fontWeight="bold">Executive Tone</text>
            <text x="40" y="155" fill="var(--text-inverse)" fontSize="14" textAnchor="middle" fontWeight="bold">Visual Hierarchy</text>
            
          </svg>
        </div>

      </div>
    </section>
  );
}

import React, { useState, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function Transformation() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleMove = (e) => {
    if (!containerRef.current || !isSwiping) return;
    
    // Support mouse and mobile touch natively
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    
    // Lock geometry perfectly between 0% and 100%
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  return (
    <section id="transformation" className="bg-light" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>The Forge Difference</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
            Click, hold, and drag the slider left and right to see exactly how a messy, unorganized resume is completely structurally transformed into a prestigious ATS-compliant format.
          </p>
        </div>

        <div 
          className="slider-container reveal"
          ref={containerRef}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseDown={() => setIsSwiping(true)}
          onTouchStart={() => setIsSwiping(true)}
          onMouseUp={() => setIsSwiping(false)}
          onMouseLeave={() => setIsSwiping(false)}
          onTouchEnd={() => setIsSwiping(false)}
          style={{
             position: 'relative',
             width: '100%',
             maxWidth: '1000px',
             margin: '0 auto',
             height: '750px', 
             borderRadius: '16px',
             boxShadow: '0 40px 80px rgba(160, 82, 45, 0.15)',
             cursor: 'ew-resize',
             userSelect: 'none',
             border: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          {/* AFTER Image (Pristine ATS, rendering universally underneath) */}
          <div style={{ position: 'absolute', top: '1rem', right: '2rem', zIndex: 1, backgroundColor: 'var(--brand)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '30px', fontWeight: 'bold' }}>
            Forge Template
          </div>
          <img 
            src="/mockup3.png" 
            alt="Perfect ATS Resume" 
            className="pointer-events-none"
            style={{ width: '100%', height: '100%', objectFit: 'cover', userSelect: 'none' }}
            draggable="false"
          />

          {/* BEFORE Image (Cluttered, physically layered over top using a dynamic geometry inset block) */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
              <div style={{ position: 'absolute', top: '1rem', left: '2rem', zIndex: 1, backgroundColor: '#e25555', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '30px', fontWeight: 'bold' }}>
                Unoptimized Clutter
              </div>
              <img 
                src="/mockup1.png" 
                alt="Messy Resume" 
                className="pointer-events-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover', userSelect: 'none' }}
                draggable="false"
              />
          </div>

          {/* The physical dragging line dividing the models */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${sliderPosition}%`,
              width: '4px',
              backgroundColor: 'var(--brand)',
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)'
            }}
          />

          {/* Central Handle Sphere */}
          <div 
            style={{
               position: 'absolute',
               top: '50%',
               left: `${sliderPosition}%`,
               transform: 'translate(-50%, -50%)',
               width: '60px',
               height: '60px',
               backgroundColor: 'var(--bg-light)',
               border: '4px solid var(--brand)',
               borderRadius: '50%',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               boxShadow: '0 10px 25px rgba(160, 82, 45, 0.4)',
               pointerEvents: 'none',
               transition: 'transform 0.1s ease',
               scale: isSwiping ? '1.1' : '1'
            }}
          >
            <ArrowLeftRight size={28} color="var(--brand)" />
          </div>
        </div>
      </div>
    </section>
  );
}

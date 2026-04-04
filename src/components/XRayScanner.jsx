import React, { useState, useRef } from 'react';
import { Scan } from 'lucide-react';

export default function XRayScanner() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Support mouse and touch
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    setPosition({ 
      x: clientX - rect.left, 
      y: clientY - rect.top 
    });
  };

  return (
    <section className="bg-light" style={{ padding: '5rem 0' }}>
      <div className="container">
        
        <div className="text-center reveal">
          <h2 style={{ fontSize: '3.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>The Formatting Flashlight</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3.5rem auto', lineHeight: 1.8 }}>
            Play with the X-Ray engine below. It simulates how an expert recruiter "sees" through a terrible resume to find the core data natively built into a Forge layout.
          </p>
        </div>

        <div 
          className="reveal"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          style={{ 
            position: 'relative', 
            maxWidth: '600px', 
            aspectRatio: '1 / 1.414', // Exact A4 aspect ratio
            margin: '0 auto', 
            backgroundColor: '#111', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            cursor: 'crosshair',
            boxShadow: '0 40px 80px rgba(0,0,0,0.2)'
          }}
        >
          {/* BACKGROUND IMAGE (Pristine clean forge template) */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <img 
              src="/mockup3.png" 
              alt="Pristine Forge Setup" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              draggable="false"
            />
          </div>

          <div style={{ 
              position: 'absolute', top: '2rem', right: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem',
              backgroundColor: 'var(--brand)', color: 'white', padding: '0.5rem 1rem', borderRadius: '30px', fontWeight: 'bold'
          }}>
             <Scan size={20} /> Deep Scan Active
          </div>
          
          {/* FOREGROUND MASK (The bad messy template blocking it with dynamic css hole) */}
          <div style={{ 
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none',
            WebkitMaskImage: isHovered 
              ? `radial-gradient(circle at ${position.x}px ${position.y}px, transparent 0%, transparent 140px, black 160px)` 
              : 'none',
            maskImage: isHovered 
              ? `radial-gradient(circle at ${position.x}px ${position.y}px, transparent 0%, transparent 140px, black 160px)` 
              : 'none',
             transition: 'mask-image 0.1s linear, -webkit-mask-image 0.1s linear'
          }}>
            <img 
              src="/mockup1.png" 
              alt="Cluttered Template" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.95 }} 
              draggable="false"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

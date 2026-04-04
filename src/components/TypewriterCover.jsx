import React, { useState, useEffect } from 'react';
import { Type } from 'lucide-react';

export default function TypewriterCover() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState(1); // 1: bad typing, 2: struck, 3: good typing, 4: glowing
  
  const badText = "Dear Hiring Manager, I am writing to apply for the open position at your company. I am a very hard worker and a great team player. I believe I am a strong fit...";
  const goodText = "Led digital campaigns resulting in a 35% revenue increase ($1.2M) across Q3. Managed budgets of $5M+ utilizing predictive analytics to aggressively reduce CPA by 22%...";

  useEffect(() => {
    let isMounted = true;
    
    const typeRoutine = async () => {
      while (isMounted) {
        setPhase(1);
        setText("");
        
        // Phase 1: Type the bad generic text slowly
        for (let i = 0; i <= badText.length; i++) {
          if (!isMounted) return;
          setText(badText.slice(0, i));
          await new Promise(r => setTimeout(r, 40));
        }
        
        await new Promise(r => setTimeout(r, 1000));
        if (!isMounted) return;
        
        // Phase 2: Red Strikethrough
        setPhase(2); 
        await new Promise(r => setTimeout(r, 1200));
        if (!isMounted) return;
        
        // Instant clear
        setText(""); 
        setPhase(3); 
        await new Promise(r => setTimeout(r, 400));
        
        // Phase 3: Type the elite metric-driven text quickly
        for (let i = 0; i <= goodText.length; i++) {
          if (!isMounted) return;
          setText(goodText.slice(0, i));
          await new Promise(r => setTimeout(r, 20));
        }
        
        // Phase 4: Final showcase Glow
        setPhase(4); 
        await new Promise(r => setTimeout(r, 4500));
      }
    };
    
    typeRoutine();
    return () => { isMounted = false; };
  }, []);

  return (
    <section className="bg-light" style={{ padding: '6rem 0' }}>
      <div className="container split-layout">
        <div className="text-content reveal">
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Data-Driven Copywriting</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            Hiring managers spend exactly 6 seconds reading a resume. If you lead with generic buzzwords, you lose instantly. 
            We engineer aggressive, metric-driven hooks that physically command a recruiter's attention.
          </p>
        </div>
        
        <div className="image-content reveal" style={{ 
          backgroundColor: 'var(--bg-darker)', 
          padding: '2.5rem', 
          borderRadius: '12px', 
          boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
          minHeight: '300px',
          border: phase === 4 ? `2px solid var(--brand)` : '2px solid transparent',
          transition: 'border 0.5s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', color: phase === 1 || phase === 2 ? '#ff4d4d' : 'var(--brand)', transition: 'color 0.3s ease' }}>
            <Type size={20} />
            <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {phase === 1 || phase === 2 ? 'The Generic Approach' : 'The Forge Exec Approach'}
            </span>
          </div>
          <p style={{ 
            color: phase === 1 || phase === 2 ? '#a0a0a0' : 'var(--text-inverse)', 
            fontSize: '1.35rem', 
            lineHeight: 1.6,
            fontFamily: phase === 1 || phase === 2 ? 'var(--font-body)' : 'var(--font-heading)',
            textDecoration: phase === 2 ? 'line-through' : 'none',
            textDecorationColor: '#ff4d4d',
            textDecorationThickness: '3px',
            transition: 'color 0.2s ease'
          }}>
            {text}<span style={{ animation: 'blink 1s step-end infinite', borderRight: '2px solid', marginLeft: '2px', opacity: 0.8 }}></span>
          </p>
        </div>
      </div>
      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}

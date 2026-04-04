import React from 'react';
import { MessageSquare, PenTool, Rocket } from 'lucide-react';

export default function ForgeProcess() {
  const steps = [
    {
      icon: <MessageSquare size={36} strokeWidth={1.5} />,
      title: "1. Strategy Profile",
      desc: "We analyze your career trajectory, target roles, and define your unique value proposition."
    },
    {
      icon: <PenTool size={36} strokeWidth={1.5} />,
      title: "2. The Forge Phase",
      desc: "Our team architects an ATS-optimized, high-impact document built specifically to beat market algorithms."
    },
    {
      icon: <Rocket size={36} strokeWidth={1.5} />,
      title: "3. Market Readiness",
      desc: "You receive your elegantly polished materials. We refine them together until the layout is flawless."
    }
  ];

  return (
    <section id="process" className="bg-dark" style={{ padding: '8rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div className="text-center reveal">
          <h2 style={{ fontSize: '3.5rem', color: 'var(--brand)', marginBottom: '1rem' }}>The Forge Process</h2>
          <p style={{ color: 'var(--text-inverse-secondary)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            A precise, transparent journey from your initial onboarding to your final flawlessly formatted delivery.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', position: 'relative' }}>
          {steps.map((step, idx) => (
            <div key={idx} className="process-card reveal" style={{ 
              transitionDelay: `${idx * 0.2}s`, 
              backgroundColor: 'var(--bg-darker)', 
              padding: '3.5rem 2rem', 
              borderRadius: '16px', 
              textAlign: 'center', 
              border: '1px solid rgba(255,255,255,0.08)', 
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}>
               <div style={{ 
                 width: '85px', 
                 height: '85px', 
                 borderRadius: '50%', 
                 backgroundColor: 'rgba(160, 82, 45, 0.1)', 
                 border: '1px solid var(--brand)', 
                 display: 'flex', 
                 alignItems: 'center', 
                 justifyContent: 'center', 
                 margin: '0 auto 2rem auto', 
                 color: 'var(--brand)' 
                 }}>
                 {step.icon}
               </div>
               <h3 style={{ color: 'var(--text-inverse)', fontSize: '1.6rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>{step.title}</h3>
               <p style={{ color: 'var(--text-inverse-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

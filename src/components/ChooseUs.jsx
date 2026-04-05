import React from 'react';
import { Zap, Users, ShieldCheck } from 'lucide-react';

export default function ChooseUs() {
  const features = [
    {
      icon: <Zap size={28} />,
      title: 'Proven Interview Generation',
      desc: 'Our expertly tailored resumes are designed to bypass ATS filters and land directly on a hiring manager\'s desk.'
    },
    {
      icon: <Users size={28} />,
      title: 'Industry Expert Writers',
      desc: 'We match you with professionals who understand the specific keywords and expectations of your target sector.'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Bespoke Personal Branding',
      desc: 'No generic templates. We craft a unique narrative that highlights your accomplishments and distinct aesthetic.'
    }
  ];

  return (
    <section id="choose-us" className="bg-light">
      <div className="container">
        <div className="text-center reveal">
          <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '0.5rem' }}>Why Choose Forge Digital?</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>We don't just build resumes; we build careers.</p>
        </div>
        
        <div className="features-container">
          {features.map((feature, i) => (
            <div className="feature-row reveal" style={{ transitionDelay: `${i * 0.15}s` }} key={i}>
              <div className="feature-icon">{feature.icon}</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

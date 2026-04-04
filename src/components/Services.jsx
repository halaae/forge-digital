import React from 'react';
import { FileText, Mail, Briefcase, Network } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <FileText size={40} strokeWidth={1.5} />,
      title: 'ATS-Friendly CV',
      desc: 'Optimized for Applicant Tracking Systems to ensure human eyes see your skills.'
    },
    {
      icon: <Mail size={40} strokeWidth={1.5} />,
      title: 'Cover Letter',
      desc: 'Compelling narratives that communicate your unique value proposition.'
    },
    {
      icon: <Network size={40} strokeWidth={1.5} />,
      title: 'LinkedIn Optimization',
      desc: 'Maximize visibility and attract top recruiters natively.'
    },
    {
      icon: <Briefcase size={40} strokeWidth={1.5} />,
      title: 'Portfolio Building',
      desc: 'Showcase your best work with visually stunning digital portfolios.'
    }
  ];

  return (
    <section id="services" className="bg-gray">
      <div className="container">
        <div className="text-center reveal">
          <h2 style={{ fontSize: '3rem', textAlign: 'center' }}>What We Forge</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Elevate every aspect of your professional presentation.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((svc, i) => (
            <div className="service-card reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={i}>
              <div className="service-icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

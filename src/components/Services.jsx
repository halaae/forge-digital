import React, { useState, useRef } from 'react';
import { FileText, Mail, Briefcase, Network, Zap } from 'lucide-react';

const InteractiveCard = ({ icon, title, desc }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    const rotateY = (mouseX / (width / 2)) * 12; 
    const rotateX = -(mouseY / (height / 2)) * 12;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className="service-card-interactive"
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1})`,
        transition: isHovered ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        boxShadow: isHovered ? `0 20px 40px rgba(160, 82, 45, 0.15)` : '0 10px 30px rgba(0,0,0,0.03)'
      }}
    >
      <div className="card-interior" style={{ transform: isHovered ? 'translateZ(40px)' : 'translateZ(0)', transition: 'transform 0.3s ease-out', transformStyle: 'preserve-3d' }}>
        <div className="service-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

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
    },
    {
      icon: <Zap size={40} strokeWidth={1.5} />,
      title: 'Express Resume',
      desc: <>Facing an abrupt deadline? Flawless, interview-ready transformation perfectly formatted and delivered to your inbox in under <strong>6 hours</strong>.</>
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
            <div className="reveal" style={{ transitionDelay: `${i * 0.1}s`, perspective: '1000px' }} key={i}>
               <InteractiveCard icon={svc.icon} title={svc.title} desc={svc.desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

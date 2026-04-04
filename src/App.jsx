import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Transformation from './components/Transformation';
import WhyAts from './components/WhyAts';
import WhyPortfolio from './components/WhyPortfolio';
import ChooseUs from './components/ChooseUs';
import Contact from './components/Contact';
import './App.css';

const Marquee = () => {
  const testimonials = [
    "✦ Salary increased by 40%",
    "✦ Landed FAANG Interview in 2 Weeks",
    "✦ Beat 500+ applicants natively",
    "✦ Promoted to Executive Level",
    "✦ Portfolio locked 3 freelance contracts",
    "✦ 98% Callback Rate Achieved",
    "✦ Landed FAANG Interview in 2 Weeks",
    "✦ Beat 500+ applicants natively",
    "✦ Salary increased by 40%",
    "✦ Promoted to Executive Level"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {testimonials.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
};

function App() {
  useScrollReveal();

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Transformation />
        <WhyAts />
        <WhyPortfolio />
        <ChooseUs />
      </main>
      <Contact />
      
      <a href="https://wa.me/918848524175" target="_blank" rel="noopener noreferrer" className="sticky-whatsapp reveal" style={{ transitionDelay: '1s' }}>
        <MessageCircle size={32} strokeWidth={1.5} />
      </a>
    </div>
  );
}

export default App;

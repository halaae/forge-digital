import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import AmbientBackground from './components/AmbientBackground';
import Services from './components/Services';
import WhyAts from './components/WhyAts';
import WhyPortfolio from './components/WhyPortfolio';
import ChooseUs from './components/ChooseUs';
import Contact from './components/Contact';
import BlogList from './blog/BlogList';
import BlogPost from './blog/BlogPost';
import LandingPage from './landing/LandingPage';
import SEO from './components/SEO';
import './App.css';

const Marquee = () => {
  const testimonials = [
    "✦ ATS Optimized Resumes",
    "✦ Data Driven Cover Letters",
    "✦ Executive Profile Makeovers",
    "✦ Premium Digital Portfolios",
    "✦ High Impact Keyword Targeting",
    "✦ Modern Minimalist Aesthetics",
    "✦ Express 6 Hour Delivery Available",
    "✦ LinkedIn Algorithm Optimization",
    "✦ ATS Optimized Resumes",
    "✦ Executive Profile Makeovers"
  ];

  return (
    <div className="marquee-container" role="marquee" aria-label="Services highlight ticker">
      <div className="marquee-content" aria-hidden="true">
        {testimonials.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
};

function HomePage() {
  useScrollReveal();

  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Forge Digital",
    "image": "https://theforgedigital.in/ats_resume.png",
    "url": "https://theforgedigital.in/",
    "telephone": "+918848524175",
    "priceRange": "₹299 - ₹2999",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calicut",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.2588,
      "longitude": 75.7804
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://wa.me/918848524175"
    ]
  };

  return (
    <div className="app-container">
      <SEO 
        title="ATS Resume Writing Service in Kerala & India"
        description="Forge Digital provides ATS-friendly resume writing, LinkedIn optimization, and professional career branding services across Kerala and India. Get resumes built to pass ATS systems and attract recruiters."
        canonical="/"
        keywords="ATS resume service India, resume writing Kerala, professional resume service, ATS friendly resumes, LinkedIn optimization India, career branding India"
        schema={homepageSchema}
      />
      <AmbientBackground />
      <Header />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Services />
        <WhyAts />
        <WhyPortfolio />
        <ChooseUs />
      </main>
      <footer>
        <Contact />
      </footer>

      <a
        href="https://wa.me/918848524175"
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-whatsapp"
        aria-label="Chat with Forge Digital on WhatsApp"
      >
        <MessageCircle size={32} strokeWidth={1.5} aria-hidden="true" />
      </a>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/:slug" element={<LandingPage />} />
    </Routes>
  );
}

export default App;

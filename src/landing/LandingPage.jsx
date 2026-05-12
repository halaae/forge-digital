// src/landing/LandingPage.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLandingBySlug } from './pages';
import './Landing.css';

function useLandingMeta(page) {
  useEffect(() => {
    if (!page) return;

    const prev = {
      title: document.title,
      desc: document.querySelector('meta[name="description"]')?.getAttribute('content'),
    };

    document.title = page.metaTitle;

    const setMeta = (name, content, prop = false) => {
      const sel = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(sel);
      if (!el) {
        el = document.createElement('meta');
        prop ? el.setAttribute('property', name) : el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', page.metaDescription);
    setMeta('keywords', page.keywords);
    setMeta('og:title', page.metaTitle, true);
    setMeta('og:description', page.metaDescription, true);
    setMeta('og:url', `https://theforgedigital.in/${page.slug}`, true);
    setMeta('twitter:title', page.metaTitle);
    setMeta('twitter:description', page.metaDescription);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://theforgedigital.in/${page.slug}`);

    // LocalBusiness / Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Forge Digital ${page.district}`,
      "image": "https://theforgedigital.in/ats_resume.png",
      "@id": `https://theforgedigital.in/${page.slug}`,
      "url": `https://theforgedigital.in/${page.slug}`,
      "telephone": "+918848524175",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": page.district,
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": page.geo.lat,
        "longitude": page.geo.lng
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": page.faq.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };

    let scriptService = document.getElementById('landing-service-ld');
    if (!scriptService) {
      scriptService = document.createElement('script');
      scriptService.id = 'landing-service-ld';
      scriptService.type = 'application/ld+json';
      document.head.appendChild(scriptService);
    }
    scriptService.textContent = JSON.stringify(serviceSchema);

    let scriptFaq = document.getElementById('landing-faq-ld');
    if (!scriptFaq) {
      scriptFaq = document.createElement('script');
      scriptFaq.id = 'landing-faq-ld';
      scriptFaq.type = 'application/ld+json';
      document.head.appendChild(scriptFaq);
    }
    scriptFaq.textContent = JSON.stringify(faqSchema);

    return () => {
      document.title = prev.title;
      if (prev.desc) setMeta('description', prev.desc);
      document.getElementById('landing-service-ld')?.remove();
      document.getElementById('landing-faq-ld')?.remove();
    };
  }, [page]);
}

const renderContent = (text) => {
  return text.split('\n\n').map((para, i) => (
    <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
  ));
};

export default function LandingPage() {
  const { slug } = useParams();
  const page = getLandingBySlug(slug);

  useLandingMeta(page);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const waLink = `https://wa.me/918848524175?text=${encodeURIComponent(page.cta.waMessage)}`;

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="landing-header-inner">
          <a href="/" className="landing-home-link">
            <span className="landing-logo-main">Forge</span>
            <span className="landing-logo-sub">DIGITAL</span>
          </a>
          <nav className="landing-header-nav">
             <a href="/#services">Services</a>
             <a href="/#contact" className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem' }}>Contact</a>
          </nav>
        </div>
      </header>

      <section className="landing-hero">
        <h1>{page.heroTitle}</h1>
        <p>{page.heroSubtitle}</p>
        <div className="landing-hero-cta">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {page.cta.text}
          </a>
        </div>
      </section>

      <div className="landing-trust-bar">
        <div className="landing-trust-inner">
          <span className="landing-trust-item"><span className="landing-trust-icon">✓</span> ATS Optimized</span>
          <span className="landing-trust-item"><span className="landing-trust-icon">✓</span> 6 Hour Delivery</span>
          <span className="landing-trust-item"><span className="landing-trust-icon">✓</span> Starting ₹299</span>
        </div>
      </div>

      <main className="landing-body">
        {page.sections.map((section, index) => (
          <section key={index} className="landing-section">
            <h2>{section.heading}</h2>
            <div className="landing-section-body">
              {renderContent(section.body)}
            </div>
          </section>
        ))}
      </main>

      <section className="landing-faq">
        <div className="landing-faq-inner">
          <h2>Frequently Asked Questions</h2>
          {page.faq.map((item, index) => (
            <div key={index} className="landing-faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-cta">
        <h2>Ready to upgrade your career?</h2>
        <p>Join hundreds of professionals from {page.district} who have successfully landed interviews with Forge Digital.</p>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Contact us on WhatsApp
        </a>
      </section>

      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} <a href="/">Forge Digital</a>. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

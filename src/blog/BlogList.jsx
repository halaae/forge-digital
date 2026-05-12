// src/blog/BlogList.jsx
// The /blog index page — lists all posts. Hidden from main nav; fully crawlable.

import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from './posts';
import SEO from '../components/SEO';
import './Blog.css';

export default function BlogList() {
  const blogSchema = { 
    '@context': 'https://schema.org', 
    '@type': 'Blog', 
    'name': 'Forge Digital Blog', 
    'url': 'https://theforgedigital.in/blog', 
    'description': 'ATS resume tips, career branding advice, and job search strategies.', 
    'publisher': { '@type': 'Organization', 'name': 'Forge Digital', 'url': 'https://theforgedigital.in' } 
  };

  return (
    <div className="blog-page">
      <SEO 
        title="ATS Resume Tips & Career Advice Blog"
        description="Expert ATS resume tips, career branding advice, and job search strategies from Forge Digital — Kerala's leading resume writing service."
        canonical="/blog"
        keywords="ATS resume tips, resume writing guide, career branding Kerala, job search strategies India"
        schema={blogSchema}
      />
      {/* Header */}
      <header className="blog-header">
        <div className="blog-header-inner">
          <a href="/" className="blog-home-link" aria-label="Forge Digital – Home">
            <span className="blog-logo-main">Forge</span>
            <span className="blog-logo-sub">DIGITAL</span>
          </a>
          <nav className="blog-header-nav" aria-label="Blog navigation">
            <a href="/#services">Services</a>
            <a href="/#contact" className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem' }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="blog-list-hero" aria-labelledby="blog-list-heading">
        <h1 id="blog-list-heading">Career Insights & ATS Resume Tips</h1>
        <p>Expert advice on ATS resumes, LinkedIn optimisation, career branding, and job search strategy — from Forge Digital's team.</p>
      </section>

      {/* Blog Grid */}
      <main className="blog-list-body" id="main-content">
        <div className="blog-grid" role="list" aria-label="Blog posts">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="blog-card"
              role="listitem"
              aria-label={`Read: ${post.title}`}
            >
              <img
                src={post.image}
                alt={post.imageAlt}
                className="blog-card-img"
                loading="lazy"
                decoding="async"
                width="760"
                height="200"
              />
              <div className="blog-card-body">
                <span className="blog-card-category">{post.category}</span>
                <h2>{post.title}</h2>
                <p className="blog-card-excerpt">{post.intro.slice(0, 160)}…</p>
                <div className="blog-card-meta">
                  <time dateTime={post.date}>{post.dateFormatted}</time>
                  <span className="blog-card-meta-dot" aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                  <span className="blog-card-read" aria-hidden="true">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="blog-footer">
        <p>© {new Date().getFullYear()} <a href="/">Forge Digital</a>. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// src/blog/BlogPost.jsx
// Individual article page at /blog/:slug — fully SEO-optimised with Article schema.

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug, posts } from './posts';
import SEO from '../components/SEO';
import './Blog.css';

// ── Simple markdown-lite renderer for **bold** and bullet points ──
function renderBody(text) {
  if (!text) return null;
  const lines = text.split('\n');
  const elements = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) { elements.push(<br key={key++} />); continue; }

    // Numbered list item: "1. text" or "2. text"
    if (/^\d+\.\s/.test(line)) {
      elements.push(<li key={key++} dangerouslySetInnerHTML={{ __html: inlineBold(line.replace(/^\d+\.\s/, '')) }} />);
      continue;
    }

    // Bullet: "- text"
    if (line.startsWith('- ')) {
      elements.push(<li key={key++} dangerouslySetInnerHTML={{ __html: inlineBold(line.slice(2)) }} />);
      continue;
    }

    elements.push(<p key={key++} dangerouslySetInnerHTML={{ __html: inlineBold(line) }} />);
  }

  return elements;
}

// Replace **text** with <strong>text</strong>
function inlineBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  // 404 — show not found UI
  if (!post) {
    return (
      <div className="blog-page">
        <BlogNav />
        <div className="blog-not-found">
          <h1>Article Not Found</h1>
          <p>This article doesn't exist or may have moved.</p>
          <Link to="/blog" className="btn btn-primary">← Back to Blog</Link>
        </div>
        <BlogFooter />
      </div>
    );
  }

  const canonicalUrl = `/blog/${post.slug}`;
  
  // Article JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'description': post.metaDescription,
    'image': `https://theforgedigital.in${post.image}`,
    'datePublished': post.date + 'T00:00:00+05:30',
    'dateModified': post.date + 'T00:00:00+05:30',
    'author': { '@type': 'Organization', 'name': 'Forge Digital', 'url': 'https://theforgedigital.in' },
    'publisher': {
      '@type': 'Organization',
      'name': 'Forge Digital',
      'url': 'https://theforgedigital.in',
      'logo': { '@type': 'ImageObject', 'url': 'https://theforgedigital.in/logo.png' },
    },
    'mainEntityOfPage': { '@type': 'WebPage', '@id': `https://theforgedigital.in${canonicalUrl}` },
    'keywords': post.tags.join(', '),
    'articleSection': post.category,
    'inLanguage': 'en-IN',
  };

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const waLink = `https://wa.me/918848524175?text=${encodeURIComponent(post.cta.waMessage)}`;

  return (
    <div className="blog-page">
      <SEO 
        title={post.title}
        description={post.metaDescription}
        canonical={canonicalUrl}
        ogType="article"
        ogImage={`https://theforgedigital.in${post.image}`}
        keywords={post.tags.join(', ')}
        schema={articleSchema}
      />
      <BlogNav />

      <main id="main-content">
        <article className="blog-article-wrapper">
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb">
            <Link to="/blog" className="blog-back-link">← All Articles</Link>
          </nav>

          <span className="blog-article-category" aria-label={`Category: ${post.category}`}>{post.category}</span>

          <h1 className="blog-article-title">{post.title}</h1>

          <div className="blog-article-meta">
            <time dateTime={post.date}>{post.dateFormatted}</time>
            <span className="blog-article-meta-dot" aria-hidden="true">·</span>
            <span>{post.readTime}</span>
            <span className="blog-article-meta-dot" aria-hidden="true">·</span>
            <span>Forge Digital</span>
          </div>

          <img
            src={post.image}
            alt={post.imageAlt}
            className="blog-article-hero-img"
            loading="eager"
            decoding="async"
            width="760"
            height="420"
          />

          <p className="blog-article-intro">{post.intro}</p>

          <div>
            {post.sections.map((sec, i) => (
              <section className="blog-section" key={i} aria-labelledby={`section-${i}`}>
                <h2 id={`section-${i}`}>{sec.heading}</h2>
                <div className="blog-section-body">
                  {renderBody(sec.body)}
                </div>
              </section>
            ))}
          </div>

          {/* Tags */}
          <div className="blog-tags" aria-label="Article tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>

          {/* CTA */}
          <div className="blog-article-cta" role="complementary" aria-label="Call to action">
            <h3>Ready to Land More Interviews?</h3>
            <p>Let Forge Digital build your ATS-optimised resume, LinkedIn profile, or portfolio — starting at just ₹299.</p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label={`${post.cta.text} – Chat on WhatsApp`}
            >
              {post.cta.text}
            </a>
          </div>

        </article>
      </main>

      {/* Related Posts */}
      {related.length > 0 && (
        <aside className="blog-related" aria-label="Related articles">
          <div className="blog-related-inner">
            <h3>More from Forge Digital</h3>
            <div className="blog-related-grid">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="blog-related-card" aria-label={`Read: ${r.title}`}>
                  <p className="blog-related-card-category">{r.category}</p>
                  <h4>{r.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      )}

      <BlogFooter />
    </div>
  );
}

function BlogNav() {
  return (
    <header className="blog-header">
      <div className="blog-header-inner">
        <a href="/" className="blog-home-link" aria-label="Forge Digital – Home">
          <span className="blog-logo-main">Forge</span>
          <span className="blog-logo-sub">DIGITAL</span>
        </a>
        <nav className="blog-header-nav" aria-label="Blog navigation">
          <Link to="/blog">All Articles</Link>
          <a href="/#services">Services</a>
          <a href="/#contact" className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem' }}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

function BlogFooter() {
  return (
    <footer className="blog-footer">
      <p>© {new Date().getFullYear()} <a href="/">Forge Digital</a>. All Rights Reserved.</p>
    </footer>
  );
}

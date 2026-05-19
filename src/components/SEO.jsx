// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogType = 'website', 
  ogImage = 'https://theforgedigital.in/logo.png',
  keywords,
  schema,
  noindex = false,
  article = null
}) => {
  const siteName = 'Forge Digital';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const url = canonical ? (canonical.startsWith('http') ? canonical : `https://theforgedigital.in${canonical}`) : 'https://theforgedigital.in/';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
      <meta name="author" content="Forge Digital" />
      <meta name="publisher" content="Forge Digital" />

      {/* hreflang */}
      <link rel="alternate" hreflang="en-IN" href={url} />
      <link rel="alternate" hreflang="en" href={url} />
      <link rel="alternate" hreflang="x-default" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Article-specific OG tags */}
      {article && <meta property="article:published_time" content={article.datePublished} />}
      {article && <meta property="article:modified_time" content={article.dateModified} />}
      {article && <meta property="article:author" content="Forge Digital" />}
      {article && <meta property="article:section" content={article.section} />}
      {article && article.tags && article.tags.map((tag, i) => (
        <meta key={i} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@theforgedigital" />
      <meta name="twitter:creator" content="@theforgedigital" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${fullTitle} – Forge Digital`} />

      {/* Structured Data */}
      {schema && Array.isArray(schema) 
        ? schema.map((s, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(s)}
            </script>
          ))
        : schema && (
            <script type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          )
      }
    </Helmet>
  );
};

export default SEO;

import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';
import { Article } from '../types';
import AdsenseBlock from '../components/AdsenseBlock';
import Sidebar from '../components/Sidebar';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [claps, setClaps] = useState(0);

  // Helper function to update meta tags
  const updateMetaTags = (article: Article) => {
    document.title = `${article.title} | IAMAI - awanbyru`;
    
    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };
    
    const setProperty = (property: string, content: string) => {
      let element = document.querySelector(`meta[property='${property}']`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const setLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.rel = rel;
        document.head.appendChild(element);
      }
      element.href = href;
    };

    const setJsonLd = (schema: object) => {
      const scriptId = 'article-schema';
      let element = document.getElementById(scriptId) as HTMLScriptElement;
      if (!element) {
          element = document.createElement('script');
          element.id = scriptId;
          element.type = 'application/ld+json';
          document.head.appendChild(element);
      }
      element.textContent = JSON.stringify(schema);
    };

    const imageUrl = article.imageUrl; // Use the absolute URL from data
    const canonicalUrl = window.location.href;

    setMeta('description', article.excerpt);
    setLink('canonical', canonicalUrl);
    
    // Open Graph / Facebook
    setProperty('og:site_name', 'IAMAI - awanbyru');
    setProperty('og:title', article.title);
    setProperty('og:description', article.excerpt);
    setProperty('og:image', imageUrl);
    setProperty('og:url', canonicalUrl);
    setProperty('og:type', 'article');
    
    // Twitter
    setProperty('twitter:card', 'summary_large_image');
    setProperty('twitter:title', article.title);
    setProperty('twitter:description', article.excerpt);
    setProperty('twitter:image', imageUrl);

    // JSON-LD Structured Data
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "headline": article.title,
      "description": article.excerpt,
      "image": imageUrl,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "IAMAI - awanbyru",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/logo.png`
        }
      },
      "datePublished": new Date(article.date).toISOString(),
      "dateModified": new Date(article.date).toISOString(),
      "articleBody": article.content.join('\\n\\n')
    };
    setJsonLd(articleSchema);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundArticle = articles.find(a => a.slug === slug);
    if (foundArticle) {
      setArticle(foundArticle);
      setClaps(foundArticle.claps);
      updateMetaTags(foundArticle);
    } else {
      // Redirect to home if article not found, or show a 404 component
      navigate('/');
    }
  }, [slug, navigate]);

  const handleClap = () => {
    setClaps(prevClaps => prevClaps + 1);
  };

  if (!article) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Loading article...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <main className="w-full lg:flex-grow bg-surface rounded-lg shadow-xl overflow-hidden">
        <img className="w-full h-auto max-h-96 object-cover" src={article.imageUrl} alt={article.title} />
        <div className="p-4 sm:p-8 lg:p-12">
          <article>
            <header className="mb-8 border-b pb-8">
              <div className="flex items-center mb-4">
                {article.tags.map(tag => (
                  <span key={tag} className="inline-block bg-secondary/10 text-secondary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">{article.title}</h1>
              <div className="flex items-center text-sm text-gray-600">
                <img className="w-12 h-12 rounded-full mr-4" src={article.authorAvatar} alt={article.author} />
                <div>
                  <p className="font-semibold text-gray-800">{article.author}</p>
                  <p>{article.date}</p>
                </div>
              </div>
            </header>
            
            <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>

          <div className="mt-12 border-t pt-8 space-y-8">
            <AdsenseBlock />
            <div className="text-center p-4 border rounded-lg max-w-sm mx-auto">
              <p className="font-semibold mb-2">Did you enjoy this article?</p>
              <button
                onClick={handleClap}
                className="w-full bg-secondary text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-secondary/90 transition-transform transform hover:scale-105"
              >
                <span>👏</span>
                <span>Clap ({claps})</span>
              </button>
            </div>
            <div className="text-center">
              <Link to="/" className="text-secondary hover:underline font-semibold">
                &larr; Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Sidebar />
    </div>
  );
};

export default ArticlePage;
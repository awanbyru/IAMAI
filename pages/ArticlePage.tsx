import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';
import { Article } from '../types';
import AdsenseBlock from '../components/AdsenseBlock';
import Sidebar from '../components/Sidebar';
import CommentSection from '../components/CommentSection';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [claps, setClaps] = useState(0);

  // Helper function to update meta tags for SEO
  const updateMetaTags = (article: Article) => {
    document.title = `${article.title} | IAMAI - awanbyru`;

    // A generic function to create or update meta/link tags
    const setTag = (tag: 'meta' | 'link', keyName: 'name' | 'property' | 'rel', key: string, valueName: 'content' | 'href', value: string) => {
      let element = document.querySelector(`${tag}[${keyName}='${key}']`) as HTMLMetaElement | HTMLLinkElement;
      if (!element) {
        element = document.createElement(tag);
        element.setAttribute(keyName, key);
        document.head.appendChild(element);
      }
      element.setAttribute(valueName, value);
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
    
    // Ensure URLs are absolute for crawlers
    const canonicalUrl = window.location.href;
    const absoluteImageUrl = new URL(article.imageUrl, window.location.origin).href;

    // Standard SEO Meta Tags
    setTag('meta', 'name', 'description', 'content', article.excerpt);
    setTag('meta', 'name', 'author', 'content', article.author);
    setTag('link', 'rel', 'canonical', 'href', canonicalUrl);
    
    // Open Graph / Facebook
    setTag('meta', 'property', 'og:title', 'content', article.title);
    setTag('meta', 'property', 'og:description', 'content', article.excerpt);
    setTag('meta', 'property', 'og:image', 'content', absoluteImageUrl);
    setTag('meta', 'property', 'og:url', 'content', canonicalUrl);
    setTag('meta', 'property', 'og:site_name', 'content', 'IAMAI - awanbyru');
    setTag('meta', 'property', 'og:type', 'content', 'article');
    setTag('meta', 'property', 'og:locale', 'content', 'en_US');
    
    // Twitter Card
    setTag('meta', 'name', 'twitter:card', 'content', 'summary_large_image');
    setTag('meta', 'name', 'twitter:title', 'content', article.title);
    setTag('meta', 'name', 'twitter:description', 'content', article.excerpt);
    setTag('meta', 'name', 'twitter:image', 'content', absoluteImageUrl);

    // JSON-LD Structured Data for Rich Snippets
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "headline": article.title,
      "description": article.excerpt,
      "image": absoluteImageUrl,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "IAMAI - awanbyru",
        "logo": {
          "@type": "ImageObject",
          "url": new URL('/logo.png', window.location.origin).href
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
      <main className="w-full lg:flex-grow bg-surface dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <img className="w-full h-auto max-h-96 object-cover" src={article.imageUrl} alt={article.title} />
        <div className="p-4 sm:p-8 lg:p-12">
          <article>
            <header className="mb-8 border-b dark:border-gray-700 pb-8">
              <div className="flex items-center mb-4">
                {article.tags.map(tag => (
                  <span key={tag} className="inline-block bg-secondary/10 text-secondary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-4">{article.title}</h1>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <img className="w-12 h-12 rounded-full mr-4" src={article.authorAvatar} alt={article.author} />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">{article.author}</p>
                  <p>{article.date}</p>
                </div>
              </div>
            </header>
            
            <div className="prose prose-lg max-w-none text-gray-800 dark:prose-invert space-y-6 mt-8">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>

          <div className="mt-12 border-t dark:border-gray-700 pt-8 space-y-8">
            <AdsenseBlock />
            <div className="text-center p-4 border dark:border-gray-700 rounded-lg max-w-sm mx-auto">
              <p className="font-semibold mb-2 dark:text-gray-200">Did you enjoy this article?</p>
              <button
                onClick={handleClap}
                className="w-full bg-secondary text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-secondary/90 transition-transform transform hover:scale-105"
              >
                <span>👏</span>
                <span>Clap ({claps})</span>
              </button>
            </div>
            
            <CommentSection articleSlug={article.slug} />

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

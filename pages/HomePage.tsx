import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import { useSearch } from '../context/SearchContext';
import { articles } from '../data/articles';
import MetaTags from '../components/MetaTags';
import LazyImage from '../components/LazyImage';
import { parseIndonesianDate } from '../utils/dateUtils';


const HomePage: React.FC = () => {
  const { searchQuery } = useSearch();

  const displayedArticles = useMemo(() => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) {
      return articles;
    }
    const lowercasedQuery = trimmedQuery.toLowerCase();
    return articles.filter(article =>
      article.title.toLowerCase().includes(lowercasedQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery))
    );
  }, [searchQuery]);

  const showHero = !searchQuery.trim() && displayedArticles.length > 0;
  const heroArticle = showHero ? displayedArticles[0] : null;
  const articlesForGrid = showHero ? displayedArticles.slice(1) : displayedArticles;

  useEffect(() => {
    if (heroArticle) {
      const scriptId = 'hero-article-schema';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      if (!script) {
          script = document.createElement('script');
          script.id = scriptId;
          script.type = 'application/ld+json';
          document.head.appendChild(script);
      }

      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": heroArticle.title,
        "author": {
            "@type": "Person",
            "name": heroArticle.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "IAMAI - awanbyru",
          "logo": {
              "@type": "ImageObject",
              "url": `${window.location.origin}/icon-512.png`
          }
        },
        "image": heroArticle.imageUrl,
        "datePublished": parseIndonesianDate(heroArticle.date).toISOString(),
        "description": heroArticle.excerpt,
        "mainEntityOfPage": `${window.location.origin}/article/${heroArticle.slug}`
      };

      script.textContent = JSON.stringify(articleSchema);

      return () => {
        const scriptElement = document.getElementById(scriptId);
        if (scriptElement) {
            scriptElement.remove();
        }
      }
    }
  }, [heroArticle]);

  return (
    <>
      <MetaTags
        title="Beranda"
        description="Jelajahi dunia AI dan rekayasa prompt. Temukan artikel menarik, koleksi gambar AI premium, dan panduan ahli untuk meningkatkan kreativitas dan produktivitas Anda."
        canonicalUrl={`${window.location.origin}/`}
      />
      <div className="space-y-12">
        {/* Hero Section */}
        {heroArticle && (
          <section className="group">
            <Link to={`/article/${heroArticle.slug}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-surface dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-2xl">
                <div className="relative h-64 lg:h-full">
                  <LazyImage 
                    src={heroArticle.imageUrl} 
                    alt={heroArticle.title} 
                    className="absolute h-full w-full"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 md:p-10 order-first lg:order-last">
                  <span className="inline-block bg-secondary text-white text-xs font-semibold mb-2 px-2.5 py-1 rounded-full">
                    Unggulan
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-text-main dark:text-gray-100 group-hover:text-secondary transition-colors duration-300 mb-4">
                    {heroArticle.title}
                  </h2>
                  <p className="text-text-muted dark:text-gray-400 text-lg line-clamp-3 mb-6">
                    {heroArticle.excerpt}
                  </p>
                  <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full mr-4 bg-gray-200" src={heroArticle.authorAvatar} alt={heroArticle.author} loading="lazy" />
                    <div>
                      <p className="font-semibold text-text-main dark:text-gray-200">{heroArticle.author}</p>
                      <p className="text-sm text-text-muted dark:text-gray-400">{heroArticle.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articlesForGrid.map((article, index) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              ))}
            </div>
             {displayedArticles.length === 0 && (
                <div className="md:col-span-2 text-center py-16 px-6 bg-surface dark:bg-gray-800 rounded-lg shadow-md">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="mt-2 text-xl font-medium text-text-main dark:text-gray-100">Tidak Ada Artikel yang Ditemukan</h3>
                    <p className="mt-1 text-sm text-text-muted dark:text-gray-400">Coba kata kunci pencarian yang berbeda.</p>
                </div>
            )}
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default HomePage;
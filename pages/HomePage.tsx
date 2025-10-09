import React, { useMemo, useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import { useSearch } from '../context/SearchContext';
import { Article } from '../types';
import MetaTags from '../components/MetaTags';
import LazyImage from '../components/LazyImage';

const HomePage: React.FC = () => {
  const { searchQuery } = useSearch();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    import('../data/articles').then(module => {
      setArticles(module.articles);
    });
  }, []);

  const displayedArticles = useMemo(() => {
    if (articles.length === 0) {
      return [];
    }
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) {
      return articles;
    }
    const lowercasedQuery = trimmedQuery.toLowerCase();
    return articles.filter(article =>
      article.title.toLowerCase().includes(lowercasedQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery))
    );
  }, [searchQuery, articles]);

  return (
    <>
      <MetaTags
        title="IAMAI - awanbyru | Blog AI & Prompting"
        description="Jelajahi dunia AI dan rekayasa prompt. Temukan artikel menarik, koleksi gambar AI premium, dan panduan ahli untuk meningkatkan kreativitas dan produktivitas Anda."
        canonicalUrl={`${window.location.origin}/`}
        imageUrl="/icon-512.png"
        imageDimensions={{ width: 512, height: 512 }}
      />
      <div>
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {displayedArticles.map((article, index) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              ))}
            </div>
             {articles.length > 0 && displayedArticles.length === 0 && (
                <div className="md:col-span-2 text-center py-16 px-6 bg-app-surface rounded-lg shadow-md border border-app-default">
                    <svg className="mx-auto h-12 w-12 text-app-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="mt-2 text-xl font-medium text-app-main">Tidak Ada Artikel yang Ditemukan</h3>
                    <p className="mt-1 text-sm text-app-muted">Coba kata kunci pencarian yang berbeda.</p>
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
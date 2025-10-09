

import React, { useMemo } from 'react';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import { useSearch } from '../context/SearchContext';
import { articles } from '../data/articles';
import MetaTags from '../components/MetaTags';
import LazyImage from '../components/LazyImage';

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

  return (
    <>
      <MetaTags
        title="IAMAI - awanbyru | Blog AI & Prompting"
        description="Jelajahi dunia AI dan rekayasa prompt. Temukan artikel menarik, koleksi gambar AI premium, dan panduan ahli untuk meningkatkan kreativitas dan produktivitas Anda."
        canonicalUrl={`${window.location.origin}/`}
        imageUrl="/icon-512.png"
        imageDimensions={{ width: 512, height: 512 }}
      />
      <div className="space-y-12">
        {/* New Hero Section */}
        {!searchQuery.trim() && (
          <section className="relative rounded-xl shadow-lg overflow-hidden text-white text-center py-20 px-6">
              <div className="absolute inset-0">
                  <LazyImage 
                      src="/icon-512.png" 
                      alt="awanbyru Blog AI & Prompting" 
                      className="w-full h-full object-cover"
                      loading="eager"
                      fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
              <div className="relative z-10">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                      IAMAI - awanbyru
                  </h1>
                  <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                      Menjelajahi batas-batas Kecerdasan Buatan, satu prompt pada satu waktu.
                  </p>
              </div>
          </section>
        )}


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
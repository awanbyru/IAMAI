import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import { useSearch } from '../context/SearchContext';
import { articles } from '../data/articles';
import MetaTags from '../components/MetaTags';

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

  return (
    <>
      <MetaTags
        title="Beranda"
        description="Jelajahi dunia AI dan rekayasa prompt. Temukan artikel menarik, koleksi gambar AI premium, dan panduan ahli untuk meningkatkan kreativitas dan produktivitas Anda."
        canonicalUrl={`${window.location.origin}/#/`}
      />
      <div className="space-y-12">
        {/* Hero Section */}
        {heroArticle && (
          <section className="group">
            <Link to={`/article/${heroArticle.slug}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-surface dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-2xl">
                <div className="relative h-64 lg:h-full">
                  <img
                      src={heroArticle.imageUrl}
                      alt={heroArticle.title}
                      className="w-full h-full object-cover bg-gray-200 dark:bg-gray-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r"></div>
                </div>
                <div className="p-8">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Artikel Unggulan</span>
                  <h1 className="text-3xl md:text-4xl font-bold text-text-main dark:text-gray-100 my-3 group-hover:text-secondary transition-colors">
                    {heroArticle.title}
                  </h1>
                  <p className="text-text-muted dark:text-gray-400 mb-4 line-clamp-3">{heroArticle.excerpt}</p>
                  <div className="flex items-center mt-6">
                    <img className="w-10 h-10 rounded-full mr-4 bg-gray-200 dark:bg-gray-700" src={heroArticle.authorAvatar} alt={heroArticle.author} loading="lazy" />
                    <div>
                      <p className="text-text-main dark:text-gray-200 font-semibold">{heroArticle.author}</p>
                      <p className="text-text-muted dark:text-gray-400 text-sm">{heroArticle.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Main Content */}
        <section className="flex flex-col lg:flex-row gap-12">
          <main className="w-full lg:flex-grow">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-text-main dark:text-gray-100 border-b-4 border-secondary pb-2 inline-block">
              {searchQuery.trim() ? `Hasil untuk "${searchQuery.trim()}"` : 'Artikel Terbaru'}
            </h2>
            {articlesForGrid.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articlesForGrid.map((article) => (
                  <ArticleCard article={article} key={article.id} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-6 bg-surface dark:bg-gray-800 rounded-lg shadow-md">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="mt-2 text-2xl font-semibold text-text-main dark:text-gray-100">Artikel Tidak Ditemukan</h3>
                <p className="mt-1 text-base text-text-muted dark:text-gray-400">Maaf, kami tidak dapat menemukan artikel yang cocok dengan pencarian Anda. Coba kata kunci lain.</p>
              </div>
            )}
          </main>
          <Sidebar />
        </section>
      </div>
    </>
  );
};

export default HomePage;

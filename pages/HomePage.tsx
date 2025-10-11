import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import { useSearch } from '../context/SearchContext';
import { Article } from '../types';
import MetaTags from '../components/MetaTags';
import LazyImage from '../components/LazyImage';
import { generatePlaceholderSrc, generateSrcSet } from '../utils/imageUtils';
import Pagination from '../components/Pagination';


const HeroArticle: React.FC<{ article: Article }> = ({ article }) => (
  <section className="mb-12 group">
    <Link to={`/article/${article.slug}`} className="block">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-app-surface rounded-xl border border-app-default shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:border-brand/50">
        <div className="relative overflow-hidden aspect-2-1 md:aspect-auto md:h-full md:rounded-l-xl">
          <LazyImage
            src={article.imageUrl}
            srcset={generateSrcSet(article.imageUrl)}
            sizes="(max-width: 767px) 100vw, 50vw"
            placeholderSrc={generatePlaceholderSrc(article.imageUrl)}
            className="w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
            alt={article.title}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
        </div>
        <div className="p-8">
          <div className="flex items-center mb-4">
            <span className="inline-block bg-brand-subtle text-brand-subtle text-xs font-bold mr-3 px-3 py-1.5 rounded-full uppercase tracking-wider">Terbaru</span>
            {article.tags.slice(0, 1).map(tag => (
              <span key={tag} className="text-app-muted text-xs font-medium">{tag}</span>
            ))}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-app-main mb-3 leading-tight group-hover:text-brand transition-colors duration-300">{article.title}</h2>
          <p className="text-app-muted text-base mb-6 line-clamp-3">{article.excerpt}</p>
          <div className="flex items-center">
            <img className="w-11 h-11 rounded-full mr-4 bg-app-subtle" src={article.authorAvatar} alt={article.author} loading="lazy" />
            <div className="text-sm">
              <p className="text-app-main font-semibold">{article.author}</p>
              <p className="text-app-muted">{article.date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </section>
);


const HomePage: React.FC = () => {
  const { searchQuery } = useSearch();
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesGridRef = useRef<HTMLDivElement>(null);
  
  const ARTICLES_PER_PAGE = 9;

  useEffect(() => {
    import('../data/articles').then(module => {
      setArticles(module.articles);
    });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const filteredArticles = useMemo(() => {
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

  const hasSearchResults = searchQuery.trim().length > 0;
  
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = useMemo(() => {
      const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
      return filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
  }, [currentPage, filteredArticles]);


  const heroArticle = !hasSearchResults && currentPage === 1 && paginatedArticles.length > 0 ? paginatedArticles[0] : null;
  const gridArticles = heroArticle ? paginatedArticles.slice(1) : paginatedArticles;
  const articleCardSizes = "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw";

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (articlesGridRef.current) {
        articlesGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        {heroArticle && <HeroArticle article={heroArticle} />}

        {hasSearchResults && filteredArticles.length > 0 && (
          <h2 className="text-2xl font-bold text-app-main mb-8">Hasil Pencarian ({filteredArticles.length})</h2>
        )}

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" ref={articlesGridRef}>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gridArticles.map((article, index) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  loading={index < 2 ? 'eager' : 'lazy'}
                  sizes={articleCardSizes}
                />
              ))}
            </div>
             {filteredArticles.length === 0 && (
                <div className="md:col-span-2 text-center py-16 px-6 bg-app-surface rounded-lg shadow-md border border-app-default">
                    <svg className="mx-auto h-12 w-12 text-app-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="mt-2 text-xl font-medium text-app-main">Tidak Ada Artikel yang Ditemukan</h3>
                    <p className="mt-1 text-sm text-app-muted">Coba kata kunci pencarian yang berbeda.</p>
                </div>
            )}

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default HomePage;
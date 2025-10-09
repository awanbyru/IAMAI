import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import LazyImage from './LazyImage';
import { generatePlaceholderSrc, generateSrcSet } from '../utils/imageUtils';

interface ArticleCardProps {
  article: Article;
  loading?: 'lazy' | 'eager';
}

const ArticleCard: React.FC<ArticleCardProps> = memo(({ article, loading = 'lazy' }) => {
  return (
    <div className="bg-app-surface rounded-xl border border-app-default shadow-md overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <Link to={`/article/${article.slug}`} className="block">
        <div className="relative overflow-hidden">
          <LazyImage 
            src={article.imageUrl}
            srcset={generateSrcSet(article.imageUrl)}
            sizes="(max-width: 767px) 100vw, 50vw"
            placeholderSrc={generatePlaceholderSrc(article.imageUrl)}
            className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" 
            alt={article.title}
            loading={loading}
            fetchPriority={loading === 'eager' ? 'high' : 'auto'}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3">
            {article.tags.slice(0, 2).map(tag => (
              <span key={tag} className="inline-block bg-brand-subtle text-brand-subtle text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-app-main mb-2 group-hover:text-brand transition-colors duration-300">{article.title}</h2>
          <p className="text-app-muted text-base mb-4 line-clamp-3">{article.excerpt}</p>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4 bg-app-subtle" src={article.authorAvatar} alt={article.author} loading="lazy" />
            <div className="text-sm">
              <p className="text-app-main font-semibold">{article.author}</p>
              <p className="text-app-muted">{article.date}</p>
            </div>
          </div>
        </div>
        {/* FIX: Corrected closing tag from </A> to </Link> to match the opening component. */}
      </Link>
    </div>
  );
});

export default ArticleCard;
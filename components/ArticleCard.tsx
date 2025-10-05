import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import LazyImage from './LazyImage';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = memo(({ article }) => {
  return (
    <div className="bg-surface dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 ease-in-out hover:-translate-y-1.5">
      <Link to={`/article/${article.slug}`} className="block">
        <div className="relative overflow-hidden">
          <LazyImage 
            src={article.imageUrl}
            className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" 
            alt={article.title} 
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3">
            {article.tags.map(tag => (
              <span key={tag} className="inline-block bg-secondary/10 text-secondary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-main dark:text-gray-100 mb-2 group-hover:text-secondary transition-colors duration-300">{article.title}</h2>
          <p className="text-text-muted dark:text-gray-400 text-base mb-4 line-clamp-3">{article.excerpt}</p>
          <div className="flex items-center">
            <LazyImage className="w-10 h-10 rounded-full mr-4" src={article.authorAvatar} alt={article.author} />
            <div className="text-sm">
              <p className="text-text-main dark:text-gray-200 font-semibold">{article.author}</p>
              <p className="text-text-muted dark:text-gray-400">{article.date}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
});

export default ArticleCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-surface rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out group">
      <Link to={`/article/${article.slug}`} className="block">
        <div className="relative">
          <img className="w-full h-56 object-cover" src={article.imageUrl} alt={article.title} />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3">
            {article.tags.map(tag => (
              <span key={tag} className="inline-block bg-secondary/10 text-secondary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-text-main mb-2 group-hover:text-secondary transition-colors duration-300">{article.title}</h2>
          <p className="text-text-muted text-base mb-4 line-clamp-3">{article.excerpt}</p>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={article.authorAvatar} alt={article.author} />
            <div className="text-sm">
              <p className="text-text-main font-semibold">{article.author}</p>
              <p className="text-text-muted">{article.date}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
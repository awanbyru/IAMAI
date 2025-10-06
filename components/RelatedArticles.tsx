import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import LazyImage from './LazyImage';
import { generatePlaceholderSrc } from '../utils/imageUtils';

interface RelatedArticlesProps {
  currentArticleSlug: string;
  tags: string[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentArticleSlug, tags }) => {
  const related = useMemo(() => {
    const scoredArticles = articles
      .filter(article => article.slug !== currentArticleSlug)
      .map(article => {
        const commonTags = article.tags.filter(tag => tags.includes(tag));
        return { ...article, score: commonTags.length };
      })
      .filter(article => article.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);

    return scoredArticles;
  }, [currentArticleSlug, tags]);

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="border-t dark:border-gray-700 pt-8 mt-8">
      <h2 className="text-2xl font-bold text-text-main dark:text-gray-100 mb-6">Anda Mungkin Juga Suka</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {related.map(article => (
          <Link key={article.id} to={`/article/${article.slug}`} className="group block bg-gray-50 dark:bg-gray-900/50 rounded-lg overflow-hidden transition-shadow hover:shadow-lg">
            <LazyImage
              src={article.imageUrl}
              placeholderSrc={generatePlaceholderSrc(article.imageUrl)}
              className="w-full h-40 object-cover"
              alt={article.title}
            />
            <div className="p-4">
              <h3 className="font-bold text-text-main dark:text-gray-200 group-hover:text-secondary transition-colors duration-300 line-clamp-2">{article.title}</h3>
              <p className="text-sm text-text-muted dark:text-gray-400 mt-2">{article.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;

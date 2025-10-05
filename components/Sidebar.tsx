import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import AdsenseBlock from './AdsenseBlock';
import { articles } from '../data/articles';

const Sidebar: React.FC = () => {
  // Sort articles by claps to find the most popular ones
  const popularArticles = [...articles]
    .sort((a, b) => b.claps - a.claps)
    .slice(0, 4);

  return (
    <aside className="w-full lg:w-1/3 xl:w-1/4 space-y-8 flex-shrink-0">
      <div className="bg-surface dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-text-main dark:text-gray-100 mb-4 border-b dark:border-gray-700 pb-2">Most Popular</h3>
        <ul className="space-y-4">
          {popularArticles.map((article, index) => (
            <li key={article.id}>
              <Link to={`/article/${article.slug}`} className="flex items-start space-x-4 group">
                 <div className="text-3xl font-bold text-gray-300 dark:text-gray-600 group-hover:text-secondary transition-colors">
                  0{index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-text-main dark:text-gray-200 group-hover:text-secondary transition-colors leading-tight">
                    {article.title}
                  </h4>
                  <p className="text-sm text-text-muted dark:text-gray-400 mt-1">{article.author}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sticky top-24">
        <AdsenseBlock className="min-h-[280px]" />
      </div>
    </aside>
  );
};

export default Sidebar;
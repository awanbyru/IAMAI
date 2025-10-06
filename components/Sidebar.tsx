import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdsenseBlock from './AdsenseBlock';
import { articles } from '../data/articles';

const Sidebar: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Memoize the popular articles list to prevent recalculation on every render
  const popularArticles = useMemo(() =>
    [...articles]
      .sort((a, b) => b.claps - a.claps)
      .slice(0, 4)
  , []);

  return (
    <aside className="w-full lg:w-1/3 xl:w-1/4 space-y-8 flex-shrink-0">
      <div className="bg-surface dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-text-main dark:text-gray-100 mb-4 border-b dark:border-gray-700 pb-2">Paling Populer</h3>
        <ul className="space-y-2">
          {popularArticles.map((article, index) => {
            const isActive = article.slug === slug;
            return (
              <li key={article.id}>
                <Link
                  to={`/article/${article.slug}`}
                  aria-label={`Baca artikel: ${article.title}`}
                  className="flex items-start space-x-4 group p-2 -m-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-200"
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className={`text-3xl font-bold ${isActive ? 'text-secondary' : 'text-gray-300 dark:text-gray-600 group-hover:text-secondary'} transition-colors`}>
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isActive ? 'text-secondary' : 'text-text-main dark:text-gray-200 group-hover:text-secondary'} transition-colors leading-tight`}>
                      {article.title}
                    </h4>
                    <p className="text-sm text-text-muted dark:text-gray-400 mt-1">{article.author}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sticky top-24">
        <AdsenseBlock className="min-h-[280px]" />
      </div>
    </aside>
  );
};

export default Sidebar;
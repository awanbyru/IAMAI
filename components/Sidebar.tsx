import React, { useMemo, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Article } from '../types';

const Sidebar: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Memuat artikel secara asinkron untuk menghindari penarikan data ke dalam bundel utama.
    import('../data/articles').then(module => {
        setArticles(module.articles);
    });
  }, []);

  // Memoize daftar artikel populer dan membuatnya dinamis berdasarkan tepuk tangan di localStorage
  const popularArticles = useMemo(() => {
    if (articles.length === 0) {
        return [];
    }
    
    const articlesWithUpdatedClaps = articles.map(article => {
        const storedClaps = localStorage.getItem(`claps_${article.slug}`);
        return {
            ...article,
            claps: storedClaps ? parseInt(storedClaps, 10) : article.claps,
        };
    });
    
    return articlesWithUpdatedClaps
      .sort((a, b) => b.claps - a.claps)
      .slice(0, 4);
  }, [slug, articles]); // Bergantung pada status artikel

  return (
    <aside className="w-full lg:w-auto space-y-8">
      <div className="bg-app-surface p-6 rounded-lg shadow-md border border-app-default sticky top-24">
        <h3 className="text-xl font-bold text-app-main mb-4 border-b border-app-default pb-2">Paling Populer</h3>
        {articles.length > 0 ? (
          <ul className="space-y-2">
            {popularArticles.map((article, index) => {
              const isActive = article.slug === slug;
              return (
                <li key={article.id}>
                  <Link
                    to={`/article/${article.slug}`}
                    aria-label={`Baca artikel: ${article.title}`}
                    className="flex items-start space-x-4 group p-2 -m-2 rounded-lg hover:bg-app-subtle transition-colors duration-200"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <div className={`text-3xl font-bold ${isActive ? 'text-brand' : 'text-app-muted/30 group-hover:text-brand'} transition-colors`}>
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className={`font-semibold ${isActive ? 'text-brand' : 'text-app-main group-hover:text-brand'} transition-colors leading-tight`}>
                        {article.title}
                      </h4>
                      <p className="text-sm text-app-muted mt-1">{article.author}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          // Placeholder pemuatan untuk UX yang lebih baik saat data sedang diambil
          <div className="space-y-4 animate-pulse">
              {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-start space-x-4">
                      <div className="bg-app-subtle h-8 w-8 rounded"></div>
                      <div className="flex-1 space-y-2 py-1">
                          <div className="bg-app-subtle h-4 rounded w-3/4"></div>
                          <div className="bg-app-subtle h-3 rounded w-1/2"></div>
                      </div>
                  </div>
              ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
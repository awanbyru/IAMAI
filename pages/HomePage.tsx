import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';

const HomePage: React.FC = () => {
  const heroArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      {heroArticle && (
        <section className="group">
          <Link to={`/article/${heroArticle.slug}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-surface rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-2xl">
              <div className="relative h-64 lg:h-full">
                 <img
                    src={heroArticle.imageUrl}
                    alt={heroArticle.title}
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r"></div>
              </div>
              <div className="p-8">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Featured Article</span>
                <h1 className="text-3xl md:text-4xl font-bold text-text-main my-3 group-hover:text-secondary transition-colors">
                  {heroArticle.title}
                </h1>
                <p className="text-text-muted mb-4 line-clamp-3">{heroArticle.excerpt}</p>
                <div className="flex items-center mt-6">
                  <img className="w-10 h-10 rounded-full mr-4" src={heroArticle.authorAvatar} alt={heroArticle.author} />
                  <div>
                    <p className="text-text-main font-semibold">{heroArticle.author}</p>
                    <p className="text-text-muted text-sm">{heroArticle.date}</p>
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
          <h2 className="text-3xl font-bold mb-8 text-text-main border-b-4 border-secondary pb-2 inline-block">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherArticles.map((article) => (
              <ArticleCard article={article} key={article.id} />
            ))}
          </div>
        </main>
        <Sidebar />
      </section>
    </div>
  );
};

export default HomePage;
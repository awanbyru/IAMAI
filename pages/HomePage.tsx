
import React from 'react';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import AdsenseBlock from '../components/AdsenseBlock';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center bg-gradient-to-r from-accent to-secondary text-white py-20 px-4 rounded-xl shadow-2xl">
        <h1 className="text-5xl font-black mb-4 tracking-tight">Welcome to IAMAI</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-200">
          Your ultimate guide to the world of Artificial Intelligence and advanced prompting.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center text-text-main">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <React.Fragment key={article.id}>
              <ArticleCard article={article} />
              {index === 1 && (
                <div className="md:col-span-2 lg:col-span-1">
                  <AdsenseBlock className="h-full" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section>
         <AdsenseBlock className="min-h-[250px]"/>
      </section>
    </div>
  );
};

export default HomePage;

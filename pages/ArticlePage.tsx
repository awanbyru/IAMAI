
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';
import { Article } from '../types';
import AdsenseBlock from '../components/AdsenseBlock';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [claps, setClaps] = useState(0);

  useEffect(() => {
    const foundArticle = articles.find(a => a.id === id);
    if (foundArticle) {
      setArticle(foundArticle);
      setClaps(foundArticle.claps);
    } else {
      // Redirect to home if article not found, or show a 404 component
      navigate('/');
    }
  }, [id, navigate]);

  const handleClap = () => {
    setClaps(prevClaps => prevClaps + 1);
  };

  if (!article) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Loading article...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-4 sm:p-8 lg:p-12">
      <article>
        <header className="mb-8 border-b pb-8">
          <div className="flex items-center mb-4">
            {article.tags.map(tag => (
              <span key={tag} className="inline-block bg-secondary/10 text-secondary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">{article.title}</h1>
          <div className="flex items-center text-sm text-gray-600">
            <img className="w-12 h-12 rounded-full mr-4" src={article.authorAvatar} alt={article.author} />
            <div>
              <p className="font-semibold text-gray-800">{article.author}</p>
              <p>{article.date}</p>
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <img className="w-full h-auto object-cover rounded-lg mb-8 shadow-md" src={article.imageUrl} alt={article.title} />
            
            <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

             <AdsenseBlock className="my-8" />
          </div>

          <aside className="lg:w-1/4">
            <div className="sticky top-24 space-y-6">
              <div className="text-center p-4 border rounded-lg">
                <p className="font-semibold mb-2">Did you like this article?</p>
                <button
                  onClick={handleClap}
                  className="w-full bg-secondary text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-secondary/90 transition-transform transform hover:scale-105"
                >
                  <span>👏</span>
                  <span>Clap ({claps})</span>
                </button>
              </div>
              <AdsenseBlock className="min-h-[280px]" />
            </div>
          </aside>
        </div>
      </article>
      <div className="mt-12 border-t pt-8">
        <Link to="/" className="text-secondary hover:underline">
          &larr; Back to all articles
        </Link>
      </div>
    </div>
  );
};

export default ArticlePage;

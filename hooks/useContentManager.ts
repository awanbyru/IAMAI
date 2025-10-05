import { useState, useEffect, useCallback } from 'react';
import { Article } from '../types';
import { articles as initialArticles } from '../data/articles';

const ARTICLES_STORAGE_KEY = 'blog_articles';

// Initialize storage with data from files if it's empty
const initializeContent = () => {
  try {
    const storedArticles = localStorage.getItem(ARTICLES_STORAGE_KEY);
    if (!storedArticles) {
      localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(initialArticles));
    }
  } catch (error) {
    console.error('Failed to initialize content in localStorage:', error);
  }
};

initializeContent();

export const useContentManager = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    try {
      const storedArticles = localStorage.getItem(ARTICLES_STORAGE_KEY);
      setArticles(storedArticles ? JSON.parse(storedArticles) : []);
    } catch (error) {
      console.error('Failed to parse articles from localStorage:', error);
      setArticles(initialArticles); // Fallback to initial data
    }
  }, []);

  const getArticleBySlug = useCallback((slug: string): Article | undefined => {
    try {
      const storedArticles = localStorage.getItem(ARTICLES_STORAGE_KEY);
      const allArticles: Article[] = storedArticles ? JSON.parse(storedArticles) : [];
      return allArticles.find(a => a.slug === slug);
    } catch (error) {
      console.error('Failed to get article by slug:', error);
      return initialArticles.find(a => a.slug === slug); // Fallback
    }
  }, []);

  const updateArticle = useCallback((updatedArticle: Article): boolean => {
    try {
      const storedArticles = localStorage.getItem(ARTICLES_STORAGE_KEY);
      let allArticles: Article[] = storedArticles ? JSON.parse(storedArticles) : [];
      const articleIndex = allArticles.findIndex(a => a.id === updatedArticle.id);
      
      if (articleIndex === -1) {
        console.error('Article not found for update');
        return false;
      }

      allArticles[articleIndex] = updatedArticle;
      localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(allArticles));
      
      // Trigger state update for all components using the hook
      const newArticles = [...allArticles];
      setArticles(newArticles);
      
      return true;
    } catch (error) {
      console.error('Failed to update article:', error);
      return false;
    }
  }, []);

  return { articles, getArticleBySlug, updateArticle };
};

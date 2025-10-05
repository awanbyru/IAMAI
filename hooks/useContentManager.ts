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
    return articles.find(a => a.slug === slug);
  }, [articles]);

  const updateArticle = useCallback((updatedArticle: Article): boolean => {
    try {
      const articleIndex = articles.findIndex(a => a.id === updatedArticle.id);
      
      if (articleIndex === -1) {
        console.error('Article not found for update');
        return false;
      }
      
      const newArticles = [...articles];
      newArticles[articleIndex] = updatedArticle;
      
      localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(newArticles));
      setArticles(newArticles);
      
      return true;
    } catch (error) {
      console.error('Failed to update article:', error);
      return false;
    }
  }, [articles]);

  return { articles, getArticleBySlug, updateArticle };
};
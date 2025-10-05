import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { Article } from '../types';
import Sidebar from '../components/Sidebar';
import MetaTags from '../components/MetaTags';
import CommentSection from '../components/CommentSection';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null | undefined>(undefined);
  const [claps, setClaps] = useState(0);
  const [clapped, setClapped] = useState(false);

  useEffect(() => {
    const foundArticle = articles.find(a => a.slug === slug);
    setArticle(foundArticle);
    if (foundArticle) {
      const storedClaps = localStorage.getItem(`claps_${slug}`);
      const initialClaps = storedClaps ? parseInt(storedClaps, 10) : foundArticle.claps;
      setClaps(initialClaps);
      
      const hasClapped = localStorage.getItem(`clapped_${slug}`) === 'true';
      setClapped(hasClapped);
    }
  }, [slug]);
  
  useEffect(() => {
    if (article) {
        const scriptId = 'article-schema';
        let script = document.getElementById(scriptId) as HTMLScriptElement;
        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }

        const parseDate = (dateStr: string) => {
            const months: { [key: string]: number } = {
                'Januari': 0, 'Februari': 1, 'Maret': 2, 'April': 3, 'Mei': 4, 'Juni': 5,
                'Juli': 6, 'Agustus': 7, 'September': 8, 'Oktober': 9, 'November': 10, 'Desember': 11
            };
            const parts = dateStr.split(' ');
            if (parts.length < 3) return new Date();
            const day = parseInt(parts[0], 10);
            const monthName = parts[1];
            const year = parseInt(parts[2], 10);
            const month = months[monthName];
            if (isNaN(day) || isNaN(year) || month === undefined) return new Date();
            return new Date(year, month, day);
        }

        const articleSchema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${window.location.origin}/article/${article.slug}`
            },
            "headline": article.title,
            "description": article.excerpt,
            "image": article.imageUrl,
            "author": {
                "@type": "Person",
                "name": article.author
            },
            "publisher": {
                "@type": "Organization",
                "name": "IAMAI - awanbyru",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${window.location.origin}/icon-512.png`
                }
            },
            "datePublished": parseDate(article.date).toISOString(),
            "dateModified": parseDate(article.date).toISOString()
        };
        script.textContent = JSON.stringify(articleSchema);
        
        return () => {
            const scriptElement = document.getElementById(scriptId);
            if (scriptElement) {
                scriptElement.remove();
            }
        }
    }
  }, [article]);

  const handleClap = useCallback(() => {
    if (!clapped && slug) {
      const newClaps = claps + 1;
      setClaps(newClaps);
      setClapped(true);
      localStorage.setItem(`claps_${slug}`, newClaps.toString());
      localStorage.setItem(`clapped_${slug}`, 'true');
    }
  }, [clapped, slug, claps]);
  
  const renderContent = (content: string[]) => {
    return content.map((paragraph, index) => {
        const formattedParagraph = paragraph
            .replace(/`([^`]+)`/g, '<code class="bg-gray-200 dark:bg-gray-700 rounded px-1 py-0.5 text-sm font-mono text-secondary">$1</code>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        return <p key={index} dangerouslySetInnerHTML={{ __html: formattedParagraph }} />;
    });
  };

  if (article === undefined) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-secondary"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center py-16 px-6 bg-surface dark:bg-gray-800 rounded-lg shadow-md">
        <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h3 className="mt-4 text-3xl font-semibold text-text-main dark:text-gray-100">Artikel Tidak Ditemukan</h3>
        <p className="mt-2 text-base text-text-muted dark:text-gray-400">Maaf, kami tidak dapat menemukan artikel yang Anda cari.</p>
        <Link to="/" className="mt-6 inline-block bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-secondary/80 transition-colors">
            Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <>
      <MetaTags
        title={article.title}
        description={article.excerpt}
        canonicalUrl={`${window.location.origin}/article/${article.slug}`}
        imageUrl={article.imageUrl}
      />
      <div className="flex flex-col lg:flex-row gap-12">
        <article className="w-full lg:flex-grow bg-surface dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <header>
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-64 md:h-96 object-cover bg-gray-200 dark:bg-gray-700"
            />
            <div className="p-6 md:p-10">
              <div className="flex items-center space-x-2 mb-4">
                {article.tags.map(tag => (
                  <span key={tag} className="bg-orange-200 text-orange-800 dark:bg-orange-700 dark:text-orange-200 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-text-main dark:text-gray-100 mb-4 leading-tight">{article.title}</h1>
              <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-text-muted dark:text-gray-400">
                <div className="flex items-center">
                  <img className="w-12 h-12 rounded-full mr-4 bg-gray-200 dark:bg-gray-700" src={article.authorAvatar} alt={article.author} loading="lazy" />
                  <div>
                    <p className="font-semibold text-text-main dark:text-gray-200">{article.author}</p>
                    <p>{article.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                   <button onClick={handleClap} className={`flex items-center space-x-2 p-2 rounded-full transition-colors duration-200 ${clapped ? 'text-secondary bg-secondary/10' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700'}`} aria-label="Tepuk tangan untuk artikel ini" disabled={clapped}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={clapped ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9A2 2 0 0020 4h-4" /></svg>
                      <span className="font-semibold">{claps}</span>
                   </button>
                </div>
              </div>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none px-6 md:px-10 py-8 border-t dark:border-gray-700">
             {renderContent(article.content)}
          </div>
          
          <div className="p-6 md:px-10 pb-10">
            <CommentSection articleSlug={article.slug} />
          </div>

        </article>
        <Sidebar />
      </div>
    </>
  );
};

export default ArticlePage;

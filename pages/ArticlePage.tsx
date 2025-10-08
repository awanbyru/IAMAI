import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { Article } from '../types';
import Sidebar from '../components/Sidebar';
import MetaTags from '../components/MetaTags';
import CommentSection from '../components/CommentSection';
import Breadcrumbs from '../components/Breadcrumbs';
import LazyImage from '../components/LazyImage';
import { parseIndonesianDate } from '../utils/dateUtils';
import ShareButtons from '../components/ShareButtons';
import { generatePlaceholderSrc } from '../utils/imageUtils';
import RelatedArticles from '../components/RelatedArticles';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null | undefined>(undefined);
  const [claps, setClaps] = useState(0);
  const [clapped, setClapped] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundArticle = articles.find(a => a.slug === slug);
    if (foundArticle) {
      setArticle(foundArticle);
      const storedClaps = localStorage.getItem(`claps_${slug}`);
      const initialClaps = storedClaps ? parseInt(storedClaps, 10) : foundArticle.claps;
      setClaps(initialClaps);
      
      const hasClapped = localStorage.getItem(`clapped_${slug}`) === 'true';
      setClapped(hasClapped);
    } else {
      setArticle(null); // Explicitly set to null if not found
    }
  }, [slug]);
  
  const extractStepsFromContent = (content: string[]) => {
    return content
        .filter(p => /^\d+\.\s/.test(p) || /^\d+\.\s\*\*/.test(p))
        .map(p => {
            return {
                "@type": "HowToStep",
                "text": p.replace(/^\d+\.\s(\*\*.*?\*\*:\s)?/, '').replace(/`([^`]+)`/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1')
            };
        });
  };

  useEffect(() => {
    if (article) {
        // Main Article Schema (BlogPosting)
        const scriptId = 'article-schema';
        let script = document.getElementById(scriptId) as HTMLScriptElement;
        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
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
                "name": article.author,
                "sameAs": "https://www.linkedin.com/in/awanbyru" // Tautan Otoritas
            },
            "publisher": {
                "@type": "Organization",
                "name": "IAMAI - awanbyru",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${window.location.origin}/icon-512.png`
                }
            },
            "datePublished": parseIndonesianDate(article.date).toISOString(),
            "dateModified": parseIndonesianDate(article.date).toISOString()
        };
        script.textContent = JSON.stringify(articleSchema);

        // HowTo Schema (if applicable)
        const howtoScriptId = 'howto-schema';
        let howtoScript = document.getElementById(howtoScriptId) as HTMLScriptElement;
        if (article.type === 'howto') {
            if (!howtoScript) {
                howtoScript = document.createElement('script');
                howtoScript.id = howtoScriptId;
                howtoScript.type = 'application/ld+json';
                document.head.appendChild(howtoScript);
            }
            const steps = extractStepsFromContent(article.content);
            if (steps.length > 0) {
              const howtoSchema = {
                  "@context": "https://schema.org",
                  "@type": "HowTo",
                  "name": article.title,
                  "description": article.excerpt,
                  "step": steps,
              };
              howtoScript.textContent = JSON.stringify(howtoSchema);
            }
        } else if (howtoScript) {
            howtoScript.remove();
        }

        // Breadcrumb schema
        const breadcrumbScriptId = 'breadcrumb-schema';
        let breadcrumbScript = document.getElementById(breadcrumbScriptId) as HTMLScriptElement;
        if (!breadcrumbScript) {
            breadcrumbScript = document.createElement('script');
            breadcrumbScript.id = breadcrumbScriptId;
            breadcrumbScript.type = 'application/ld+json';
            document.head.appendChild(breadcrumbScript);
        }
        const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Beranda",
                    "item": `${window.location.origin}/`
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": article.title,
                    "item": `${window.location.origin}/article/${article.slug}`
                }
            ]
        };
        breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);

        // FAQ Schema (if applicable)
        const faqScriptId = 'faq-schema';
        let faqScript = document.getElementById(faqScriptId) as HTMLScriptElement;
        if (article.faq && article.faq.length > 0) {
            if (!faqScript) {
                faqScript = document.createElement('script');
                faqScript.id = faqScriptId;
                faqScript.type = 'application/ld+json';
                document.head.appendChild(faqScript);
            }
            const faqSchema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": article.faq.map(item => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              };
              faqScript.textContent = JSON.stringify(faqSchema);
        } else if (faqScript) {
            faqScript.remove();
        }
        
        return () => {
            const scriptElement = document.getElementById(scriptId);
            if (scriptElement) scriptElement.remove();
            const breadcrumbElement = document.getElementById(breadcrumbScriptId);
            if (breadcrumbElement) breadcrumbElement.remove();
            const howtoElement = document.getElementById(howtoScriptId);
            if (howtoElement) howtoElement.remove();
            const faqElement = document.getElementById(faqScriptId);
            if (faqElement) faqElement.remove();
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
  
  const renderContent = (content: string[]): React.ReactNode => {
    const elements: React.ReactNode[] = [];
    let listBuffer: { type: 'ol' | 'ul'; items: string[] } | null = null;

    const formatText = (text: string) =>
      text
        .replace(/`([^`]+)`/g, '<code class="bg-gray-200 dark:bg-gray-700 rounded px-1 py-0.5 text-sm font-mono text-secondary">$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    const flushList = () => {
      if (listBuffer) {
        const ListTag = listBuffer.type;
        elements.push(
          <ListTag key={`${listBuffer.type}-${elements.length}`}>
            {listBuffer.items.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ListTag>
        );
        listBuffer = null;
      }
    };

    content.forEach((paragraph, index) => {
      const olMatch = paragraph.match(/^\s*\d+\.\s+(.*)/s);
      if (olMatch) {
        if (listBuffer?.type !== 'ol') flushList();
        if (!listBuffer) listBuffer = { type: 'ol', items: [] };
        listBuffer.items.push(formatText(olMatch[1]));
        return;
      }

      const ulMatch = paragraph.match(/^\s*-\s+(.*)/s);
      if (ulMatch) {
        if (listBuffer?.type !== 'ul') flushList();
        if (!listBuffer) listBuffer = { type: 'ul', items: [] };
        listBuffer.items.push(formatText(ulMatch[1]));
        return;
      }

      flushList();

      if (paragraph.startsWith('JSON_PROMPT:')) {
        const jsonString = paragraph.substring('JSON_PROMPT:'.length);
        elements.push(
          <div key={`json-prompt-${index}`} className="my-6 relative bg-gray-100 dark:bg-gray-900/50 p-4 rounded-md border dark:border-gray-700 max-h-96 overflow-auto">
            <pre className="text-text-main dark:text-gray-300 text-sm font-mono whitespace-pre-wrap">
              <code>{jsonString}</code>
            </pre>
          </div>
        );
        return;
      }

      if (paragraph.startsWith('IMG:')) {
        const [src, alt] = paragraph.substring(4).split('|');
        elements.push(
          <figure key={`fig-${index}`} className="my-6">
            <LazyImage
              src={src}
              alt={alt || 'Gambar artikel'}
              className="rounded-lg shadow-md"
              placeholderSrc={generatePlaceholderSrc(src)}
            />
            {alt && <figcaption>{alt}</figcaption>}
          </figure>
        );
        return;
      }

      const headingMatch = paragraph.match(/^\*\*(.*?)\*\*(.*)/s);
      if (headingMatch) {
        const [, headingText, restOfParagraph] = headingMatch;
        elements.push(<h2 key={`h2-${index}`}>{headingText.trim()}</h2>);
        if (restOfParagraph.trim()) {
          elements.push(<p key={`p-after-h2-${index}`} dangerouslySetInnerHTML={{ __html: formatText(restOfParagraph.trim()) }} />);
        }
        return;
      }

      elements.push(<p key={`p-${index}`} dangerouslySetInnerHTML={{ __html: formatText(paragraph) }} />);
    });

    flushList();
    return elements;
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

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: article.title },
  ];

  const articleDataForMeta = {
    publishedTime: parseIndonesianDate(article.date).toISOString(),
    authorName: article.author,
    tags: article.tags,
  };

  return (
    <>
      <MetaTags
        title={article.title}
        description={article.excerpt}
        canonicalUrl={`${window.location.origin}/article/${article.slug}`}
        imageUrl={article.imageUrl}
        ogType="article"
        articleData={articleDataForMeta}
        imageDimensions={{ width: 800, height: 400 }}
      />
      <div className="flex flex-col lg:flex-row gap-12">
        <main className="w-full lg:flex-grow">
          <Breadcrumbs items={breadcrumbItems} />
          <article className="bg-surface dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <header>
              <LazyImage 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-64 md:h-96 object-cover"
                loading="eager"
                fetchPriority="high"
                placeholderSrc={generatePlaceholderSrc(article.imageUrl)}
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

            <div className="px-6 md:px-10 py-8 border-t dark:border-gray-700">
               {/* Ringkasan AI */}
                <aside className="mb-8 p-4 bg-gray-100 dark:bg-gray-900/50 rounded-lg border-l-4 border-secondary">
                  <h3 className="font-bold text-lg text-text-main dark:text-gray-100 mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                    Ringkasan AI
                  </h3>
                  <p className="text-text-muted dark:text-gray-300 italic">
                    {article.summary}
                  </p>
                </aside>

               <div className="prose prose-lg dark:prose-invert max-w-none">
                 {renderContent(article.content)}
               </div>
            </div>
            
            <div className="p-6 md:px-10 pb-10">
               <RelatedArticles currentArticleSlug={article.slug} tags={article.tags} />

               <div className="mt-8">
                <ShareButtons
                  url={`${window.location.origin}/article/${article.slug}`}
                  title={article.title}
                  shareText="Bagikan Artikel Ini:"
                />
              </div>
              <div className="mt-8">
                 <CommentSection articleSlug={article.slug} />
              </div>
            </div>

          </article>
        </main>
        <Sidebar />
      </div>
    </>
  );
};

export default ArticlePage;
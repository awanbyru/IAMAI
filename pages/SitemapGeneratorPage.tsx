import React, { useState, useEffect, useRef } from 'react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import { parseIndonesianDate, formatDateForSitemap } from '../utils/dateUtils';
import { Article } from '../types';

const SitemapGeneratorPage: React.FC = () => {
    const [sitemapContent, setSitemapContent] = useState('Generating sitemap...');
    const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');
    const copyTimeoutRef = useRef<number | null>(null);

    useEffect(() => {
      import('../data/articles').then(module => {
        const articles: Article[] = module.articles;
        const generateSitemap = () => {
            const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.awanbyru.com';
            const today = new Date().toISOString().split('T')[0];
            
            const articlePages = [...articles]
              .sort((a, b) => parseIndonesianDate(b.date).getTime() - parseIndonesianDate(a.date).getTime())
              .map(article => ({
                loc: `/article/${article.slug}`,
                lastmod: formatDateForSitemap(parseIndonesianDate(article.date)),
                changefreq: 'monthly',
                priority: '0.9',
              }));

            const latestPostDate = articlePages.length > 0 ? articlePages[0].lastmod : today;
          
            const staticPages = [
              { loc: '/', lastmod: latestPostDate, changefreq: 'weekly', priority: '1.0' },
              { loc: '/gallery', lastmod: today, changefreq: 'weekly', priority: '0.8' },
              { loc: '/prompts', lastmod: today, changefreq: 'weekly', priority: '0.8' },
              { loc: '/enhancer', lastmod: today, changefreq: 'weekly', priority: '0.8' },
              { loc: '/about', lastmod: '2024-05-21', changefreq: 'yearly', priority: '0.6' },
              { loc: '/contact', lastmod: '2023-10-26', changefreq: 'yearly', priority: '0.5' },
              { loc: '/privacy-policy', lastmod: '2023-10-26', changefreq: 'yearly', priority: '0.3' },
            ];
      
            const allPages = [...staticPages, ...articlePages];
      
            const urlset = allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');
      
            return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}
</urlset>
`;
        };
        setSitemapContent(generateSitemap().trim());
      });
      
      return () => {
          if (copyTimeoutRef.current) {
              clearTimeout(copyTimeoutRef.current);
          }
      };
    }, []);

    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(sitemapContent).then(() => {
                setCopyStatus('copied');
                if (copyTimeoutRef.current) {
                    clearTimeout(copyTimeoutRef.current);
                }
                copyTimeoutRef.current = window.setTimeout(() => setCopyStatus('idle'), 2000);
            });
        }
    };

    const copyIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
    );

    const checkIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    );

    const breadcrumbItems = [
        { label: 'Beranda', href: '/' },
        { label: 'Sitemap Generator' },
    ];

    return (
        <>
            <MetaTags title="Sitemap Generator" description="Halaman internal untuk membuat sitemap XML." noIndex />
            <Breadcrumbs items={breadcrumbItems} />
            <div className="max-w-4xl mx-auto bg-app-surface p-8 rounded-lg shadow-lg border border-app-default">
                <h1 className="text-3xl font-bold mb-4 text-app-main">Sitemap Generator</h1>
                <p className="text-app-muted mb-6">Berikut adalah konten sitemap.xml yang dihasilkan secara dinamis. Gunakan ini untuk memperbarui file `public/sitemap.xml`.</p>
                <div className="relative bg-app-subtle p-4 rounded-md border border-app-default">
                    <pre className="text-sm font-mono whitespace-pre-wrap overflow-auto max-h-[60vh] text-app-main">
                        <code>{sitemapContent}</code>
                    </pre>
                    <button
                        onClick={handleCopy}
                        className="absolute top-2 right-2 p-2 rounded-full bg-app-surface text-app-muted hover:bg-brand-subtle hover:text-brand transition-colors"
                        aria-label={copyStatus === 'idle' ? 'Salin sitemap' : 'Sitemap disalin'}
                    >
                       {copyStatus === 'idle' ? copyIcon : checkIcon}
                    </button>
                </div>
            </div>
        </>
    );
};

export default SitemapGeneratorPage;
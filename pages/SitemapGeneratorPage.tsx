import React, { useState, useMemo } from 'react';
import { articles } from '../data/articles';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import { parseIndonesianDate, formatDateForSitemap } from '../utils/dateUtils';

const SitemapGeneratorPage: React.FC = () => {
    const generateSitemap = () => {
        const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.awanbyru.com';
        const today = new Date().toISOString().split('T')[0];
      
        const staticPages = [
          { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
          { loc: '/gallery', lastmod: today, changefreq: 'weekly', priority: '0.8' },
          { loc: '/about', lastmod: '2024-05-21', changefreq: 'yearly', priority: '0.6' },
          { loc: '/contact', lastmod: '2023-10-26', changefreq: 'yearly', priority: '0.5' },
          { loc: '/privacy-policy', lastmod: '2023-10-26', changefreq: 'yearly', priority: '0.3' },
        ];
      
        const articlePages = [...articles]
          .sort((a, b) => parseIndonesianDate(b.date).getTime() - parseIndonesianDate(a.date).getTime())
          .map(article => ({
              loc: `/article/${article.slug}`,
              lastmod: formatDateForSitemap(parseIndonesianDate(article.date)),
              changefreq: 'monthly',
              priority: '0.9',
          }));
      
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
      
    const sitemapContent = useMemo(() => generateSitemap(), []);
    const [copyButtonText, setCopyButtonText] = useState('Salin ke Papan Klip');

    const handleCopy = () => {
        navigator.clipboard.writeText(sitemapContent.trim()).then(() => {
            setCopyButtonText('Disalin!');
            setTimeout(() => setCopyButtonText('Salin ke Papan Klip'), 2000);
        });
    };

    const breadcrumbItems = [
      { label: 'Beranda', href: '/' },
      { label: 'Sitemap Generator' },
    ];

    return (
        <>
            <MetaTags
                title="Sitemap Generator"
                description="Alat untuk menghasilkan sitemap.xml secara dinamis untuk situs ini."
                noIndex={true}
            />
            <Breadcrumbs items={breadcrumbItems} />
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4 text-primary dark:text-gray-100">Sitemap Generator</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Berikut adalah konten sitemap.xml yang dibuat secara otomatis berdasarkan artikel saat ini. Salin konten ini dan tempelkan ke dalam file <code className="bg-gray-200 dark:bg-gray-700 rounded px-1 py-0.5 text-sm font-mono">sitemap.xml</code> Anda untuk memperbaruinya.
                </p>
                <div className="relative">
                    <textarea
                        readOnly
                        value={sitemapContent.trim()}
                        className="w-full h-96 p-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-secondary"
                        aria-label="Sitemap content"
                    />
                    <button
                        onClick={handleCopy}
                        className="absolute top-4 right-4 bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                        {copyButtonText}
                    </button>
                </div>
            </div>
        </>
    );
};

export default SitemapGeneratorPage;
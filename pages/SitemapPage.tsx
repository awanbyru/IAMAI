import React, { useMemo } from 'react';
import { articles } from '../data/articles';
import { parseIndonesianDate, formatDateForSitemap } from '../utils/dateUtils';

// NOTE FOR DEVELOPERS:
// This component generates a sitemap as a text/html page.
// This is NOT the correct way to serve a sitemap.xml for SEO crawlers,
// as they expect an application/xml or text/xml Content-Type header.
// The site correctly uses a static `sitemap.xml` file in the project root.
// This component is kept for reference or potential future use in a different context,
// but should NOT be routed to `/sitemap.xml`.

const SitemapPage: React.FC = () => {
    const sitemapContent = useMemo(() => {
        const baseUrl = 'https://www.awanbyru.com';
        const today = new Date().toISOString().split('T')[0];
        
        const staticPages = [
          { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
          { loc: '/gallery', lastmod: today, changefreq: 'weekly', priority: '0.8' },
          { loc: '/prompts', lastmod: today, changefreq: 'weekly', priority: '0.8' },
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
    }, []);

    // This is not an ideal way to serve a sitemap due to the Content-Type header.
    return <pre style={{ margin: 0, fontFamily: 'monospace' }}>{sitemapContent.trim()}</pre>;
};

export default SitemapPage;

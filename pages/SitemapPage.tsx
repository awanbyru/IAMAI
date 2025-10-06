import React, { useMemo } from 'react';
import { articles } from '../data/articles';

const SitemapPage: React.FC = () => {
    const sitemapContent = useMemo(() => {
        const baseUrl = 'https://www.awanbyru.com';
        const today = new Date().toISOString().split('T')[0];
        
        const parseDate = (dateStr: string): Date => {
            const months: { [key: string]: string } = {
                'Januari': '01', 'Februari': '02', 'Maret': '03', 'April': '04', 'Mei': '05', 'Juni': '06',
                'Juli': '07', 'Agustus': '08', 'September': '09', 'Oktober': '10', 'November': '11', 'Desember': '12'
            };
            const parts = dateStr.split(' ');
            if (parts.length < 3) return new Date();
            const day = parts[0].padStart(2, '0');
            const month = months[parts[1]];
            const year = parts[2];
            if (!day || !month || !year) return new Date();
            return new Date(`${year}-${month}-${day}`);
        };

        const formatDateForSitemap = (date: Date) => {
            return date.toISOString().split('T')[0];
        }

        const staticPages = [
          { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
          { loc: '/gallery', lastmod: today, changefreq: 'weekly', priority: '0.8' },
          { loc: '/about', lastmod: '2024-05-21', changefreq: 'yearly', priority: '0.6' },
          { loc: '/contact', lastmod: '2023-10-26', changefreq: 'yearly', priority: '0.5' },
          { loc: '/privacy-policy', lastmod: '2023-10-26', changefreq: 'yearly', priority: '0.3' },
        ];
      
        const articlePages = [...articles]
          .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
          .map(article => ({
              loc: `/article/${article.slug}`,
              lastmod: formatDateForSitemap(parseDate(article.date)),
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

    // Render as plain text. The browser will wrap it in HTML, but crawlers will see the text content.
    // It's not perfect (Content-Type is text/html), but it's the best we can do in this setup.
    return <pre style={{ margin: 0, fontFamily: 'monospace' }}>{sitemapContent.trim()}</pre>;
};

export default SitemapPage;
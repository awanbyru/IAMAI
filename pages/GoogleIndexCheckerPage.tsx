import React, { useState, useEffect } from 'react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import { Article } from '../types';

const GoogleIndexCheckerPage: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        import('../data/articles').then(module => {
            // Urutkan artikel dari yang terbaru ke yang terlama
            const sortedArticles = [...module.articles].sort((a, b) => {
                // Asumsi format tanggal 'DD Bulan YYYY', perlu di-parse untuk perbandingan yang akurat
                // Fungsi pembantu untuk mem-parsing tanggal akan lebih baik, tetapi untuk saat ini kita akan melakukan perbandingan sederhana
                // Ini mungkin tidak akurat jika format tanggal bervariasi
                return new Date(b.date.split(' ').reverse().join(' ')).getTime() - new Date(a.date.split(' ').reverse().join(' ')).getTime();
            });
            setArticles(module.articles);
        });
    }, []);

    const handleCheckIndex = (slug: string) => {
        const articleUrl = `www.awanbyru.com/article/${slug}`;
        const googleSearchUrl = `https://www.google.com/search?q=site:${articleUrl}`;
        window.open(googleSearchUrl, '_blank', 'noopener,noreferrer');
    };

    const breadcrumbItems = [
        { label: 'Beranda', href: '/' },
        { label: 'Pengecek Indeks Google' },
    ];

    return (
        <>
            <MetaTags
                title="Pengecek Indeks Google"
                description="Alat internal untuk memeriksa status pengindeksan artikel di Google."
                noIndex
            />
            <Breadcrumbs items={breadcrumbItems} />
            <div className="max-w-4xl mx-auto bg-app-surface p-8 rounded-lg shadow-lg border border-app-default">
                <h1 className="text-3xl font-bold mb-4 text-app-main">Pengecek Indeks Google</h1>
                <p className="text-app-muted mb-6">
                    Gunakan alat ini untuk memverifikasi dengan cepat apakah setiap artikel telah diindeks oleh Google. Mengklik tombol akan membuka tab baru dengan kueri pencarian `site:` yang relevan.
                </p>

                <div className="space-y-4">
                    {articles.length > 0 ? (
                        articles.map((article) => (
                            <div
                                key={article.id}
                                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-app-subtle rounded-md border border-app-default"
                            >
                                <div className="flex-1 mb-2 sm:mb-0 sm:mr-4">
                                    <p className="text-app-main font-medium">{article.title}</p>
                                    <p className="text-xs text-app-muted">{article.date}</p>
                                </div>
                                <button
                                    onClick={() => handleCheckIndex(article.slug)}
                                    className="flex-shrink-0 inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-colors"
                                >
                                    Cek di Google
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-app-muted text-center py-4">Memuat artikel...</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default GoogleIndexCheckerPage;

import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { SearchProvider } from './context/SearchContext';
import { ThemeProvider } from './context/ThemeContext';

import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AboutPage from './pages/AboutPage';
import SitemapGeneratorPage from './pages/SitemapGeneratorPage';

const App: React.FC = () => {

  useEffect(() => {
    const scriptId = 'website-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": window.location.origin,
        "name": "IAMAI - awanbyru",
        "description": "Sebuah blog web modern yang berfokus pada AI dan prompting, menampilkan artikel menarik, koleksi gambar AI premium, dan panduan prompt ahli. Dirancang untuk komunitas penggemar AI.",
        "publisher": {
            "@type": "Organization",
            "name": "IAMAI - awanbyru",
            "logo": {
                "@type": "ImageObject",
                "url": `${window.location.origin}/logo.png`
            }
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${window.location.origin}/?s={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };
    script.textContent = JSON.stringify(schema);
  }, []);


  return (
    <ThemeProvider>
      <HashRouter>
        <SearchProvider>
          <div className="flex flex-col min-h-screen bg-background dark:bg-gray-900 text-text-main dark:text-gray-200 font-sans">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/article/:slug" element={<ArticlePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/sitemap-generator" element={<SitemapGeneratorPage />} />
              </Routes>
            </main>
            <Footer />
            <CookieBanner />
          </div>
        </SearchProvider>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;

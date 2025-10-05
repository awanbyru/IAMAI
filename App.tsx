import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { SearchProvider } from './context/SearchContext';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load page components for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AIStudioPage = lazy(() => import('./pages/AIStudioPage'));

// A fallback component to show while pages are loading
const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-secondary"></div>
  </div>
);

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
      <BrowserRouter>
        <SearchProvider>
          <div className="flex flex-col min-h-screen bg-background dark:bg-gray-900 text-text-main dark:text-gray-200 font-sans">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/article/:slug" element={<ArticlePage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/aistudio" element={<AIStudioPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <CookieBanner />
          </div>
        </SearchProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

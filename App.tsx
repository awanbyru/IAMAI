import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { SearchProvider } from './context/SearchContext';
import { ThemeProvider } from './context/ThemeContext';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load page components
const HomePage = lazy(() => import('./pages/HomePage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SitemapGeneratorPage = lazy(() => import('./pages/SitemapGeneratorPage'));
const PromptLibraryPage = lazy(() => import('./pages/PromptLibraryPage'));
const ChatbotPage = lazy(() => import('./pages/ChatbotPage'));

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-gray-900 text-text-main dark:text-gray-200 font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};


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
                "url": `${window.location.origin}/icon-512.png`
            }
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${window.location.origin}/?s={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        },
        "about": {
            "@type": "AboutPage",
            "url": `${window.location.origin}/about`
        },
        "contactPoint": {
            "@type": "ContactPage",
            "url": `${window.location.origin}/contact`
        }
    };
    script.textContent = JSON.stringify(schema);
  }, []);


  return (
    <ThemeProvider>
      <BrowserRouter>
        <SearchProvider>
          <Routes>
            {/* Routes with layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/article/:slug" element={<ArticlePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/prompts" element={<PromptLibraryPage />} />
              <Route path="/chatbot" element={<ChatbotPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/sitemap-generator" element={<SitemapGeneratorPage />} />
            </Route>
          </Routes>
        </SearchProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

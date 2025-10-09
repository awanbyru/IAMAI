import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-app-surface/90 backdrop-blur-sm border-t border-app-default text-app-main p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left text-app-muted">
          Kami menggunakan cookie untuk meningkatkan pengalaman menjelajah Anda dan untuk analitik. Dengan terus menggunakan situs ini, Anda menyetujui penggunaan cookie kami.
        </p>
        <button
          onClick={handleAccept}
          className="bg-brand hover:bg-brand-hover text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex-shrink-0"
        >
          Terima
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
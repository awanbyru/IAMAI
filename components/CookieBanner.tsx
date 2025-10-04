
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
    <div className="fixed bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm text-white p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          We use cookies to enhance your browsing experience and for analytics. By continuing to use this site, you agree to our use of cookies.
        </p>
        <button
          onClick={handleAccept}
          className="bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex-shrink-0"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import ThemeControls from './ThemeControls';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    }
    setIsSearchOpen(false);
  };
  
  const handleMobileSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (location.pathname !== '/') {
      // We navigate to home only if the user searches from another page, 
      // but we do it gently by just setting the state, the view will react.
      // For a better UX, we removed the forceful navigation on every keystroke.
      // The user will see search results upon navigating to the homepage.
    }
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsSearchOpen(false);
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isSearchOpen]);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-brand text-white'
        : 'text-app-muted hover:text-app-main hover:bg-app-subtle'
    }`;
    
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-brand text-white'
        : 'text-app-main hover:bg-app-subtle'
    }`;

  return (
    <>
      <header className="bg-app-surface/80 backdrop-blur-sm border-b border-app-default sticky top-0 z-40">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left side: Title */}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-xl font-bold text-brand">
                  IAMAI - awanbyru
                </h1>
              </Link>
            </div>

            {/* Right side: Nav + Controls */}
            <div className="flex items-center">
              {/* Main Nav Links (Desktop) */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <NavLink to="/" className={navLinkClasses}>
                    Beranda
                  </NavLink>
                  <NavLink to="/gallery" className={navLinkClasses}>
                    Galeri
                  </NavLink>
                  <NavLink to="/prompts" className={navLinkClasses}>
                    Prompt
                  </NavLink>
                  <NavLink to="/enhancer" className={navLinkClasses}>
                    Peningkat
                  </NavLink>
                  <NavLink to="/about" className={navLinkClasses}>
                    Tentang
                  </NavLink>
                  <NavLink to="/contact" className={navLinkClasses}>
                    Kontak
                  </NavLink>
                </div>
              </div>

              {/* Desktop Controls */}
              <div className="hidden md:flex items-center space-x-1 ml-6">
                  <button
                      onClick={() => setIsSearchOpen(true)}
                      className="p-2 rounded-full text-app-muted hover:text-app-main hover:bg-app-subtle transition-colors"
                      aria-label="Buka pencarian"
                  >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                  </button>
                  <ThemeControls />
              </div>
              
              {/* Mobile Menu Button Container */}
              <div className="-mr-2 flex md:hidden items-center space-x-2 ml-2">
                <ThemeControls />
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  type="button"
                  className="bg-app-subtle inline-flex items-center justify-center p-2 rounded-md text-app-muted hover:text-brand hover:bg-brand-subtle focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand"
                  aria-controls="mobile-menu"
                  aria-expanded={isMenuOpen}
                >
                  <span className="sr-only">Buka menu utama</span>
                  {isMenuOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <form onSubmit={(e) => { e.preventDefault(); navigate('/'); setIsMenuOpen(false); }}>
                <div className="relative px-2 py-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </span>
                  <input
                    type="search"
                    placeholder="Cari artikel..."
                    value={searchQuery}
                    onChange={handleMobileSearchChange}
                    className="w-full py-2 pl-10 pr-4 text-app-main bg-app-subtle border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    aria-label="Cari artikel"
                  />
                </div>
              </form>
              <NavLink to="/" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
                Beranda
              </NavLink>
              <NavLink to="/gallery" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
                Galeri
              </NavLink>
              <NavLink to="/prompts" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
                Prompt
              </NavLink>
              <NavLink to="/enhancer" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
                Peningkat
              </NavLink>
              <NavLink to="/about" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
                Tentang
              </NavLink>
              <NavLink to="/contact" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
                Kontak
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsSearchOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="mt-20 max-w-xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </span>
                  <input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Cari artikel..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-3 pl-12 pr-4 text-app-main bg-app-surface border border-app-default rounded-full focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300 text-lg"
                    aria-label="Cari artikel"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
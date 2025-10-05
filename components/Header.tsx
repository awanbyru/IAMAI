
import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import ThemeControls from './ThemeControls';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-secondary text-white'
        : 'text-text-main dark:text-gray-300 hover:text-secondary dark:hover:text-secondary'
    }`;
    
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-secondary text-white'
        : 'text-text-main dark:text-gray-300 hover:bg-secondary/10 hover:text-secondary'
    }`;

  return (
    <header className="bg-surface/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">
                IAMAI - awanbyru
              </h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
              <NavLink to="/contact" className={navLinkClasses}>
                Contact
              </NavLink>
              <div className="relative ml-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full py-2 pl-10 pr-4 text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 sm:w-32 md:w-40"
                  aria-label="Search articles"
                />
              </div>
              <ThemeControls />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center space-x-2">
            <ThemeControls />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
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
      </nav>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <div className="relative px-2 py-2">
               <span className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              <input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full py-2 pl-10 pr-4 text-text-main dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                aria-label="Search articles"
              />
            </div>
            <NavLink to="/" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/contact" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-text-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} IAMAI - awanbyru. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
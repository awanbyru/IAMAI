import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-y-2 text-sm text-app-muted">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link to={item.href} className="hover:text-brand transition-colors duration-200">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-app-main" title={item.label}>
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <svg className="h-5 w-5 text-gray-400 dark:text-gray-500 mx-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const buttonClasses = "px-4 py-2 mx-1 rounded-lg transition-colors duration-200 border border-app-default text-sm font-medium";
  const activeClasses = "bg-brand text-white border-brand";
  const inactiveClasses = "bg-app-surface text-app-main hover:bg-app-subtle";
  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <nav className="flex justify-center items-center mt-12" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${buttonClasses} ${inactiveClasses} ${currentPage === 1 ? disabledClasses : ''}`}
        aria-label="Halaman sebelumnya"
      >
        ‹
      </button>

      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`${buttonClasses} ${currentPage === number ? activeClasses : inactiveClasses}`}
          aria-current={currentPage === number ? 'page' : undefined}
          aria-label={`Ke halaman ${number}`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${buttonClasses} ${inactiveClasses} ${currentPage === totalPages ? disabledClasses : ''}`}
        aria-label="Halaman berikutnya"
      >
        ›
      </button>
    </nav>
  );
};

export default Pagination;

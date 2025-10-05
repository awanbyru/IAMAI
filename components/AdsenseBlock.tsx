
import React from 'react';

interface AdsenseBlockProps {
  className?: string;
}

const AdsenseBlock: React.FC<AdsenseBlockProps> = ({ className = '' }) => {
  return (
    <div
      className={`bg-gray-200/50 dark:bg-gray-700/50 border border-dashed border-gray-400 dark:border-gray-600 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 min-h-[100px] w-full ${className}`}
    >
      <div className="text-center">
        <p className="font-semibold">Advertisement</p>
        <p className="text-sm">Ad unit placeholder</p>
      </div>
    </div>
  );
};

export default AdsenseBlock;
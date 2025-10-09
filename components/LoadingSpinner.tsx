import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-brand"></div>
  </div>
);

export default LoadingSpinner;
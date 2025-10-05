import React, { useState, useEffect, useRef } from 'react';

const LazyImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // This effect handles images that might already be cached by the browser
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      className={`${className} transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-gray-200 dark:bg-gray-700`}
      {...props}
    />
  );
};

export default LazyImage;

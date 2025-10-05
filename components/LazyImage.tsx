import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Check if the image is already loaded from browser cache when component mounts
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);
  
  // Reset loaded state when src changes. This handles cases where the same
  // component instance is re-rendered with a new image source.
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <div className={`${className} bg-gray-200 dark:bg-gray-700`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
};

export default LazyImage;

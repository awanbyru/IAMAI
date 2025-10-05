import React, { useState, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> { }

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Reset state when src changes. This handles cases where the same
    // component instance is re-rendered with a new image source.
    useEffect(() => {
        setIsLoaded(false);
        setHasError(false);
    }, [src]);

    const handleLoad = () => {
        setIsLoaded(true);
    };
    
    const handleError = () => {
        setHasError(true);
    };

    return (
        <div className={`${className} relative bg-gray-200 dark:bg-gray-700 overflow-hidden`}>
            {/* The image is always in the DOM to receive load/error events */}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={handleLoad}
                onError={handleError}
                className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isLoaded && !hasError ? 'opacity-100' : 'opacity-0'}`}
                {...props}
            />
            {/* Show a placeholder/skeleton while loading */}
            {!isLoaded && !hasError && (
                 <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
            )}
            
            {/* Error state indicator */}
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                    <svg
                        className="w-12 h-12 text-gray-400 dark:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default LazyImage;
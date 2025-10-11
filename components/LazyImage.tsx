import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    placeholderSrc?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, loading = 'lazy', placeholderSrc, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Atur ulang status muat/kesalahan saat src berubah
        setIsLoaded(false);
        setHasError(false);
    }, [src]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Perbarui status kita saat callback observer dipanggil
                if (entry.isIntersecting) {
                    setIsInView(true);
                    // Hentikan pengamatan setelah masuk ke dalam tampilan
                    if (containerRef.current) {
                        observer.unobserve(containerRef.current);
                    }
                }
            },
            {
                // Mulai memuat saat gambar berjarak 200px dari viewport
                rootMargin: '200px 0px',
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []); // Array kosong memastikan efek hanya berjalan saat mount dan unmount

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setHasError(true);
    
    // Sumber sebenarnya untuk tag gambar. Ini hanya diatur saat komponen berada dalam tampilan untuk memicu unduhan.
    const imageSrc = isInView ? src : undefined;

    return (
        <div ref={containerRef} className={`${className} relative bg-gray-200 dark:bg-gray-700 overflow-hidden`}>
            {/* Lapisan Placeholder */}
            {!hasError && !isLoaded && (
                placeholderSrc ? (
                    <img 
                        src={placeholderSrc}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 w-full h-full bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
                )
            )}

            {/* Lapisan Gambar Utama */}
            <img
                src={imageSrc}
                alt={alt}
                onLoad={handleLoad}
                onError={handleError}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isLoaded && !hasError ? 'opacity-100' : 'opacity-0'}`}
                loading={loading}
                decoding="async"
                {...props}
            />
            
            {/* Lapisan Kesalahan */}
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

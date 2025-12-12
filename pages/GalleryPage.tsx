import React, { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { GalleryImage } from '../types';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import LazyImage from '../components/LazyImage';
import { generateSrcSet } from '../utils/imageUtils';

const ImageModal = lazy(() => import('../components/ImageModal'));

const GalleryPage: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    import('../data/galleryImages').then(module => {
      setGalleryImages(module.galleryImages);
    });
  }, []);

  const categories = useMemo(() => {
    if (galleryImages.length === 0) return [];
    return ['Semua', ...new Set(galleryImages.map(img => img.category))];
  }, [galleryImages]);

  const filteredImages = useMemo(() => {
    if (activeFilter === 'Semua') {
      return galleryImages;
    }
    return galleryImages.filter(image => image.category === activeFilter);
  }, [activeFilter, galleryImages]);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Galeri' },
  ];

  return (
    <>
      <MetaTags
        title="Galeri Gambar AI"
        description="Koleksi gambar premium yang dikurasi yang dihasilkan oleh AI. Jelajahi seni, fotografi, 3D, dan lainnya. Klik untuk melihat prompt yang digunakan."
        canonicalUrl={`${window.location.origin}/gallery`}
        imageUrl={galleryImages[0]?.imageUrl}
        imageDimensions={{ width: 600, height: 600 }}
        keywords="Galeri AI, Gambar AI, Seni Digital, Midjourney, Stable Diffusion, Prompt Art, Fotografi AI"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-app-main mb-2">
            Galeri Gambar AI
          </h1>
          <p className="text-base sm:text-lg text-app-muted max-w-2xl mx-auto">
            Koleksi gambar premium hasil buatan AI yang telah dikurasi. Klik pada gambar mana pun untuk melihat detail dan prompt yang digunakan.
          </p>
        </section>

        {/* Filter controls */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                activeFilter === category
                  ? 'bg-brand text-white'
                  : 'bg-app-surface text-app-main hover:bg-app-subtle border border-app-default'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg transition-transform duration-300 hover:-translate-y-1.5"
              onClick={() => handleImageClick(image)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick(image)}
              tabIndex={0}
              role="button"
              aria-label={`Lihat detail untuk ${image.title}`}
            >
              <LazyImage
                src={image.imageUrl}
                srcset={generateSrcSet(image.imageUrl, [300, 450, 600])}
                sizes="(max-width: 639px) 90vw, (max-width: 767px) 45vw, (max-width: 1023px) 30vw, 22vw"
                alt={image.title} 
                className="w-full aspect-square transform group-hover:scale-105 transition-transform duration-300"
                loading={index < 8 ? 'eager' : 'lazy'}
                fetchPriority={index < 8 ? 'high' : 'auto'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                <p className="text-brand text-sm font-semibold">{image.category}</p>
              </div>
            </div>
          ))}
        </section>

        <Suspense fallback={null}>
          <ImageModal image={selectedImage} onClose={handleCloseModal} />
        </Suspense>
      </div>
    </>
  );
};

export default GalleryPage;
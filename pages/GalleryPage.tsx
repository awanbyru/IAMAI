import React, { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { galleryImages } from '../data/galleryImages';
import { GalleryImage } from '../types';
import MetaTags from '../components/MetaTags';

const ImageModal = lazy(() => import('../components/ImageModal'));

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = useMemo(() => ['Semua', ...new Set(galleryImages.map(img => img.category))], []);

  const filteredImages = useMemo(() => {
    if (activeFilter === 'Semua') {
      return galleryImages;
    }
    return galleryImages.filter(image => image.category === activeFilter);
  }, [activeFilter]);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <MetaTags
        title="Galeri Gambar AI"
        description="Koleksi gambar premium yang dikurasi yang dihasilkan oleh AI. Jelajahi seni, fotografi, 3D, dan lainnya. Klik untuk melihat prompt yang digunakan."
        canonicalUrl={`${window.location.origin}/#/gallery`}
        imageUrl={galleryImages[0]?.imageUrl}
      />
      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary mb-2">
            Galeri Gambar AI
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
                  ? 'bg-secondary text-white'
                  : 'bg-surface dark:bg-gray-800 text-text-main dark:text-gray-300 hover:bg-secondary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg transition-transform duration-300 hover:-translate-y-1.5 bg-gray-200 dark:bg-gray-800"
              onClick={() => handleImageClick(image)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick(image)}
              tabIndex={0}
              role="button"
              aria-label={`Lihat detail untuk ${image.title}`}
            >
              <img
                src={image.imageUrl}
                alt={image.title} 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 bg-gray-200 dark:bg-gray-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                <p className="text-secondary text-sm font-semibold">{image.category}</p>
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

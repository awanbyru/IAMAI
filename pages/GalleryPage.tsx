import React, { useState, useMemo, useEffect } from 'react';
import { galleryImages } from '../data/galleryImages';
import { GalleryImage } from '../types';
import LazyImage from '../components/LazyImage';
import MetaTags from '../components/MetaTags';

const ImageModal: React.FC<{ image: GalleryImage | null; onClose: () => void }> = ({ image, onClose }) => {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:w-2/3 flex-shrink-0 bg-gray-100 dark:bg-gray-900 flex items-center justify-center md:rounded-l-lg">
           <img src={image.imageUrl} alt={image.title} className="w-full h-auto object-contain md:rounded-l-lg" />
        </div>
        <div className="p-6 flex flex-col">
          <div className="flex-grow">
            <h2 id="image-modal-title" className="text-2xl font-bold text-text-main dark:text-gray-100 mb-4">{image.title}</h2>
            <p className="text-sm text-text-muted dark:text-gray-400 mb-2 font-semibold uppercase tracking-wider">Prompt:</p>
            <div className="bg-gray-100 dark:bg-gray-900/50 p-4 rounded-md max-h-60 overflow-y-auto">
              <p className="text-text-main dark:text-gray-300 text-sm font-mono leading-relaxed">{image.prompt}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-6 ml-auto bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-secondary/80 transition-colors"
            aria-label="Tutup penampil gambar"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

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
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary mb-2">
            Galeri Gambar AI
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
              className="group relative rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-200 dark:bg-gray-800"
              onClick={() => handleImageClick(image)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick(image)}
              tabIndex={0}
              role="button"
              aria-label={`Lihat detail untuk ${image.title}`}
            >
              <LazyImage
                src={image.imageUrl}
                alt={image.title} 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                <p className="text-secondary text-sm font-semibold">{image.category}</p>
              </div>
            </div>
          ))}
        </section>

        <ImageModal image={selectedImage} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default GalleryPage;

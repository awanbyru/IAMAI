import React, { useEffect } from 'react';
import { GalleryImage } from '../types';

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

export default ImageModal;

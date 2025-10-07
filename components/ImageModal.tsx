import React, { useState, useEffect } from 'react';
import { GalleryImage } from '../types';
import ShareButtons from './ShareButtons';

const ImageModal: React.FC<{ image: GalleryImage | null; onClose: () => void }> = ({ image, onClose }) => {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const [show, setShow] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  useEffect(() => {
    if (image) {
      setActiveImage(image);
      setCopyStatus('idle'); // Reset copy status when a new image is selected
      // Use a short timeout to ensure the component renders before the animation starts
      const timer = setTimeout(() => setShow(true), 10);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [image]);

  useEffect(() => {
    // When show becomes false (on close), wait for animation to finish then clear the active image
    if (!show && activeImage) {
      const timer = setTimeout(() => setActiveImage(null), 300); // Must match animation duration
      return () => clearTimeout(timer);
    }
  }, [show, activeImage]);

  useEffect(() => {
    // Manage side-effects like keyboard listeners and body scroll lock
    if (activeImage) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose(); // Trigger the close process
        }
      };

      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeImage, onClose]);

  if (!activeImage) {
    return null;
  }

  const handleCopy = () => {
    if (navigator.clipboard && activeImage) {
      navigator.clipboard.writeText(activeImage.prompt).then(() => {
        setCopyStatus('copied');
        setTimeout(() => setCopyStatus('idle'), 2000);
      });
    }
  };

  const copyIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );

  const checkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out bg-black/80 backdrop-blur-sm ${show ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
    >
      <div
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto flex flex-col md:flex-row transition-all duration-300 ease-in-out ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:w-2/3 flex-shrink-0 bg-gray-100 dark:bg-gray-900 flex items-center justify-center md:rounded-l-lg">
           <img src={activeImage.imageUrl} alt={activeImage.title} className="w-full h-auto object-contain md:rounded-l-lg" />
        </div>
        <div className="p-6 flex flex-col">
          <div className="flex-grow">
            <h2 id="image-modal-title" className="text-2xl font-bold text-text-main dark:text-gray-100 mb-4">{activeImage.title}</h2>
            <p className="text-sm text-text-muted dark:text-gray-400 mb-2 font-semibold uppercase tracking-wider">Prompt:</p>
            <div className="relative bg-gray-100 dark:bg-gray-900/50 p-4 rounded-md max-h-60 overflow-y-auto">
              <pre className="text-text-main dark:text-gray-300 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                <code>{activeImage.prompt}</code>
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-secondary/20 hover:text-secondary transition-colors"
                aria-label={copyStatus === 'idle' ? 'Salin prompt' : 'Prompt disalin'}
              >
                {copyStatus === 'idle' ? copyIcon : checkIcon}
              </button>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t dark:border-gray-700 space-y-4">
            <ShareButtons
              url={window.location.href}
              title={`Lihat gambar AI "${activeImage.title}" dari Galeri IAMAI`}
              shareText="Bagikan Gambar Ini:"
            />
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-secondary/80 transition-colors"
                aria-label="Tutup penampil gambar"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
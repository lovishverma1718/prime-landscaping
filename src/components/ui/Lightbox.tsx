import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  images: { src: string; alt: string; title: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-primaryDark/95 backdrop-blur-md p-4 md:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 focus:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 focus:outline-none"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Content Container */}
        <div className="relative max-w-5xl max-h-[80vh] flex items-center justify-center">
          <motion.img
            key={currentImage.src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-[75vh] object-contain rounded-card-md shadow-premium-xl border border-white/10"
          />
        </div>

        {/* Caption */}
        <motion.div
          key={`caption-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-6 text-center text-white max-w-xl px-4"
        >
          <h3 className="text-xl font-light font-serif italic text-brand-primaryLight">{currentImage.title}</h3>
          <p className="text-sm text-white/60 mt-1">{currentImage.alt}</p>
          <div className="text-xs text-white/40 mt-3">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Lightbox;

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalCount?: number;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md transition-opacity animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous Image"
          className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next Image"
          className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Content Container */}
      <div 
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900/60 flex items-center justify-center max-h-[72vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-auto h-auto max-h-[72vh] max-w-full object-contain rounded-xl"
          />
        </div>

        {/* Caption & Metadata */}
        <div className="mt-4 text-center text-white max-w-2xl px-4">
          <div className="flex items-center justify-center gap-3 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-gold-500 text-white">
              {item.category}
            </span>
            {currentIndex !== undefined && totalCount !== undefined && (
              <span className="text-xs text-slate-400 font-medium">
                {currentIndex + 1} of {totalCount}
              </span>
            )}
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
            {item.title}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/kidzeeData';
import { ResilientImage } from './ResilientImage';
import { CurvedWaveDivider } from './BrandMark';

const GALLERY_FILTERS = [
  'All Moments',
  'Classroom Activities',
  'Creative Learning',
  'Kids Playing',
  'Art & Craft',
  'Group Activities',
] as const;

type GalleryFilter = (typeof GALLERY_FILTERS)[number];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All Moments');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleItems: GalleryItem[] =
    activeFilter === 'All Moments'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visibleItems.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visibleItems.length) % visibleItems.length
        );
      }
    };
    if (lightboxIndex !== null) {
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, visibleItems.length]);

  const activeItem =
    lightboxIndex !== null ? visibleItems[lightboxIndex] : undefined;

  return (
    <section id="gallery" className="bg-white pt-14 sm:pt-18">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[#5B2D8E] mb-2">
              Campus Life &amp; Gallery
            </p>
            <h2 className="font-display font-bold text-[#231942] text-3xl sm:text-4xl leading-tight tracking-tight text-balance">
              Joyful everyday moments inside our classrooms.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter gallery photos"
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#FFFBF2] border border-black/6"
          >
            {GALLERY_FILTERS.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeFilter === cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setLightboxIndex(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#5B2D8E] text-white shadow-xs'
                    : 'text-[#524A6E] hover:text-[#231942]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.45,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setLightboxIndex(idx)}
              className="group text-left rounded-[1.5rem] overflow-hidden bg-white border border-black/6 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B2D8E]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FFFBF2]">
                <ResilientImage
                  src={item.image}
                  alt={item.alt}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-end p-4">
                  <span className="w-9 h-9 rounded-full bg-white/95 text-[#231942] flex items-center justify-center shadow-sm">
                    <Expand className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs font-semibold text-[#5B2D8E] mb-1">
                  {item.category}
                </p>
                <h3 className="font-display font-bold text-base text-[#231942] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[#524A6E] leading-snug">
                  {item.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Viewer */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-[1.75rem] bg-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close image preview"
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/95 text-[#231942] shadow-md flex items-center justify-center hover:bg-[#F7F3FB] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] bg-black">
              <ResilientImage
                src={activeItem.image}
                alt={activeItem.alt}
                fallbackTitle={activeItem.title}
                className="w-full h-full object-cover"
              />

              {visibleItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + visibleItems.length) %
                          visibleItems.length
                      )
                    }
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#231942] shadow-md flex items-center justify-center hover:bg-white cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((lightboxIndex + 1) % visibleItems.length)
                    }
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#231942] shadow-md flex items-center justify-center hover:bg-white cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
              <div>
                <p className="text-xs font-semibold text-[#5B2D8E]">
                  {activeItem.category}
                </p>
                <h3 className="font-display font-bold text-lg text-[#231942]">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[#524A6E]">{activeItem.caption}</p>
              </div>
              <span className="text-xs font-semibold text-[#524A6E] tabular-nums shrink-0">
                {lightboxIndex + 1} / {visibleItems.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <CurvedWaveDivider fill="#FFFBF2" />
    </section>
  );
}

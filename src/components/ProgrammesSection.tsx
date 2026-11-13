import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, X, Check } from 'lucide-react';
import { PROGRAMMES, ProgrammeItem } from '../data/kidzeeData';
import { ResilientImage } from './ResilientImage';
import { CurvedWaveDivider } from './BrandMark';

interface ProgrammesSectionProps {
  onSelectProgrammeForEnquiry: (programmeTitle: string) => void;
  activeModalProgrammeId: string | null;
  onOpenProgrammeModal: (id: string | null) => void;
}

type FilterKey = 'all' | 'early-years' | 'care-training';

export function ProgrammesSection({
  onSelectProgrammeForEnquiry,
  activeModalProgrammeId,
  onOpenProgrammeModal,
}: ProgrammesSectionProps) {
  const [filter, setFilter] = useState<FilterKey>('all');

  const filteredProgrammes =
    filter === 'all'
      ? PROGRAMMES
      : PROGRAMMES.filter((p) => p.category === filter);

  const selectedProgramme: ProgrammeItem | undefined = PROGRAMMES.find(
    (p) => p.id === activeModalProgrammeId
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenProgrammeModal(null);
    };
    if (selectedProgramme) {
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProgramme, onOpenProgrammeModal]);

  return (
    <section id="programmes" className="bg-white pt-14 sm:pt-18">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        {/* Header & Interactive Segmented Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#5B2D8E] mb-2">
              Our Programmes
            </p>
            <h2 className="font-display font-bold text-[#231942] text-3xl sm:text-4xl leading-tight tracking-tight text-balance">
              Thoughtfully structured stages for every early milestone.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter programmes"
            className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#F7F3FB] border border-black/5 self-start md:self-auto"
          >
            {(
              [
                { key: 'all', label: 'All Programmes' },
                { key: 'early-years', label: 'Early Years' },
                { key: 'care-training', label: 'Care & Training' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={filter === tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer ${
                  filter === tab.key
                    ? 'bg-white text-[#5B2D8E] shadow-xs'
                    : 'text-[#524A6E] hover:text-[#231942]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProgrammes.map((programme, idx) => (
            <motion.article
              key={programme.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.45,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col rounded-[1.75rem] bg-white border border-black/8 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              {/* 4:3 Photo Header */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FFFBF2]">
                <ResilientImage
                  src={programme.image}
                  alt={programme.imageAlt}
                  fallbackTitle={programme.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Body */}
              <div className="flex-1 flex flex-col p-6">
                <p
                  className="text-xs font-semibold mb-1.5"
                  style={{ color: programme.accentHex }}
                >
                  {programme.meta}
                </p>

                <h3 className="font-display font-bold text-xl text-[#231942] mb-2.5">
                  {programme.title}
                </h3>

                <p className="text-sm text-[#524A6E] leading-relaxed mb-5 flex-1">
                  {programme.shortDescription}
                </p>

                <div className="pt-4 border-t border-black/6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenProgrammeModal(programme.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-[#5B2D8E] hover:text-[#431F6C] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B2D8E] rounded"
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Programme Detail Modal */}
      {selectedProgramme && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="programme-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-[2px]"
          onClick={() => onOpenProgrammeModal(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-[2rem] bg-white shadow-2xl overflow-hidden border border-black/10 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => onOpenProgrammeModal(null)}
              aria-label="Close programme details"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/95 text-[#231942] shadow-md flex items-center justify-center hover:bg-[#F7F3FB] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden bg-[#FFFBF2] shrink-0">
              <ResilientImage
                src={selectedProgramme.image}
                alt={selectedProgramme.imageAlt}
                fallbackTitle={selectedProgramme.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto">
              <p
                className="text-xs font-semibold mb-1.5"
                style={{ color: selectedProgramme.accentHex }}
              >
                {selectedProgramme.meta}
              </p>

              <h3
                id="programme-modal-title"
                className="font-display font-bold text-2xl sm:text-3xl text-[#231942] mb-3"
              >
                {selectedProgramme.title}
              </h3>

              <p className="text-sm sm:text-base text-[#524A6E] leading-relaxed mb-6">
                {selectedProgramme.fullDescription}
              </p>

              <div className="space-y-2.5 mb-7">
                <p className="font-display font-semibold text-sm text-[#231942]">
                  What your child experiences
                </p>
                {selectedProgramme.highlights.map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: selectedProgramme.surfaceTint }}
                    >
                      <Check
                        className="w-3.5 h-3.5"
                        style={{ color: selectedProgramme.accentHex }}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-sm text-[#524A6E] leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-black/8">
                <button
                  type="button"
                  onClick={() => {
                    onOpenProgrammeModal(null);
                    onSelectProgrammeForEnquiry(selectedProgramme.title);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5B2D8E] text-white font-display font-semibold text-sm hover:bg-[#431F6C] transition-colors cursor-pointer"
                >
                  <span>Enquire for {selectedProgramme.title}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenProgrammeModal(null)}
                  className="px-5 py-3 rounded-xl bg-[#F7F3FB] text-[#231942] font-semibold text-sm hover:bg-[#EDE4F6] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CurvedWaveDivider fill="#F7F3FB" />
    </section>
  );
}

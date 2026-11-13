import { motion } from 'motion/react';
import { Star, ExternalLink, ShieldCheck, MessageSquareHeart, Clock } from 'lucide-react';
import { SCHOOL_INFO } from '../data/kidzeeData';
import { CurvedWaveDivider } from './BrandMark';

const TRUST_HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: 'Safe & Hygienic Campus',
    detail: 'Child-safe classrooms and attentive supervision near Society Chowk, Dharampur.',
  },
  {
    icon: MessageSquareHeart,
    title: 'Warm Parent Communication',
    detail: 'Open teacher conversations and regular updates on your child’s comfort and growth.',
  },
  {
    icon: Clock,
    title: 'Consistent Daily Rhythm',
    detail: 'Balanced hours of guided play, storytelling, art, and joyful social routines.',
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#FFFBF2] pt-14 sm:pt-18">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2.25rem] bg-white border border-black/8 shadow-sm p-7 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left: Verified Google Rating Summary */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <p className="text-sm font-semibold text-[#5B2D8E] mb-2">
              Parent Community Rating
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#231942] leading-tight tracking-tight text-balance mb-5">
              Trusted by families across Rangia.
            </h2>

            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-display font-extrabold text-5xl sm:text-6xl text-[#231942] tabular-nums tracking-tight">
                {SCHOOL_INFO.googleRating}
              </span>
              <span className="text-lg font-semibold text-[#524A6E] tabular-nums">
                / 5
              </span>
            </div>

            <div
              className="flex items-center gap-1.5 mb-2"
              aria-label={`Rated ${SCHOOL_INFO.googleRating} out of 5 stars on Google`}
            >
              {[1, 2, 3, 4].map((starIdx) => (
                <Star
                  key={starIdx}
                  className="w-5 h-5 text-[#F9B233] fill-[#F9B233]"
                  aria-hidden="true"
                />
              ))}
              <div className="relative w-5 h-5">
                <Star
                  className="w-5 h-5 text-[#F9B233]/30 fill-[#F9B233]/25"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 overflow-hidden w-[70%]">
                  <Star
                    className="w-5 h-5 text-[#F9B233] fill-[#F9B233]"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            <p className="text-sm font-medium text-[#524A6E] mb-6 tabular-nums">
              Based on {SCHOOL_INFO.totalReviews} Google reviews for Kidzee Rangia
            </p>

            <a
              href={SCHOOL_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#5B2D8E] text-white font-display font-semibold text-sm whitespace-nowrap shrink-0 hover:bg-[#431F6C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B233]"
            >
              <span>Read Reviews on Google Maps</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Right: Authentic Campus Standards Valued by Parents */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {TRUST_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFBF2] border border-black/5"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-black/6 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#5B2D8E]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#231942] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#524A6E] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <CurvedWaveDivider fill="#FFFFFF" />
    </section>
  );
}

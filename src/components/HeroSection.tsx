import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { HERO_MEDIA, SCHOOL_INFO } from '../data/kidzeeData';
import { ResilientImage } from './ResilientImage';
import { CurvedWaveDivider } from './BrandMark';

interface HeroSectionProps {
  onEnquireClick: () => void;
}

export function HeroSection({ onEnquireClick }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-8 sm:pt-12 lg:pt-14"
    >
      {/* Subtle organic background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#F9B233]/12 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 -left-24 w-80 h-80 rounded-full bg-[#5B2D8E]/7 blur-2xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Brand Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-sm font-semibold text-[#5B2D8E] tracking-tight mb-4">
              {SCHOOL_INFO.shortTag}
            </p>

            <h1 className="font-display font-extrabold text-[#231942] leading-[1.08] tracking-tight text-balance text-[clamp(2.25rem,4.3vw,3.75rem)] mb-5">
              Little Steps Today, A Brighter Tomorrow.
            </h1>

            <p className="text-base sm:text-lg text-[#524A6E] leading-relaxed max-w-xl mb-8">
              At Kidzee Rangia, we nurture curious young minds through joyful
              play-based learning, creative discovery, and caring personal
              attention in a safe, child-friendly campus.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#5B2D8E] text-white font-display font-semibold text-base whitespace-nowrap shrink-0 shadow-md shadow-[#5B2D8E]/20 hover:bg-[#431F6C] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B233]"
              >
                <span>Explore Our School</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onEnquireClick}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-[#FFFBF2] text-[#231942] border-2 border-[#F9B233] font-display font-semibold text-base whitespace-nowrap shrink-0 hover:bg-[#F9B233]/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B2D8E]"
              >
                Enquire Now
              </button>
            </div>
          </motion.div>

          {/* Right Column: Preschool Photography & Playful SVG Accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center"
          >
            {/* Playful Kidzee-inspired floating vector illustrations */}
            <svg
              aria-hidden="true"
              viewBox="0 0 80 80"
              className="hidden sm:block absolute -top-5 -left-5 w-16 h-16 z-20 animate-float-slow pointer-events-none"
            >
              <circle cx="40" cy="40" r="24" fill="#F9B233" />
              <path
                d="M40 6V13M40 67V74M6 40H13M67 40H74M16 16L21 21M59 59L64 64M64 16L59 21M21 59L16 64"
                stroke="#F9B233"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>

            <svg
              aria-hidden="true"
              viewBox="0 0 64 64"
              className="hidden sm:block absolute -bottom-4 -right-3 w-14 h-14 z-20 animate-float-reverse pointer-events-none"
            >
              <path
                d="M32 6L38.8 21.8L56 23.5L43 34.9L46.8 51.8L32 43L17.2 51.8L21 34.9L8 23.5L25.2 21.8L32 6Z"
                fill="#1B8FD2"
              />
            </svg>

            {/* Curved Organic Frame */}
            <div className="relative w-full aspect-[4/3] lg:h-full rounded-[2rem] sm:rounded-[2.75rem] overflow-hidden shadow-xl shadow-[#5B2D8E]/10 ring-8 ring-[#FFFBF2] bg-[#FFFBF2]">
              <ResilientImage
                src={HERO_MEDIA.image}
                alt={HERO_MEDIA.alt}
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover"
                fallbackTitle="Kidzee Rangia Classroom"
              />
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Summary Strip below Hero Split */}
        <div className="mt-12 pt-8 border-t border-black/8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-xs font-semibold text-[#5B2D8E] mb-1">
              Early Years Curriculum
            </p>
            <p className="font-display font-bold text-base text-[#231942]">
              Playgroup to Kindergarten
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#E23E57] mb-1">
              Learning Philosophy
            </p>
            <p className="font-display font-bold text-base text-[#231942]">
              Péntemind Play Pedagogy
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#1B8FD2] mb-1">
              Parent Trust in Rangia
            </p>
            <p className="font-display font-bold text-base text-[#231942] inline-flex items-center gap-1.5 tabular-nums">
              <Star
                className="w-4 h-4 text-[#F9B233] fill-[#F9B233] shrink-0"
                aria-hidden="true"
              />
              <span>
                {SCHOOL_INFO.googleRating}/5 Google ({SCHOOL_INFO.totalReviews} reviews)
              </span>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#5B2D8E] mb-1">
              Campus Location
            </p>
            <p className="font-display font-bold text-base text-[#231942]">
              Near Society Chowk, Dharampur
            </p>
          </div>
        </div>
      </div>

      <CurvedWaveDivider fill="#FFFBF2" />
    </section>
  );
}

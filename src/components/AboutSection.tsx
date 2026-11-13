import { motion } from 'motion/react';
import { Heart, Sprout, Puzzle, GraduationCap } from 'lucide-react';
import { ABOUT_MEDIA } from '../data/kidzeeData';
import { ResilientImage } from './ResilientImage';
import { CurvedWaveDivider } from './BrandMark';

const ABOUT_PILLARS = [
  {
    title: 'Caring Learning Environment',
    description:
      'Safe, cheerful classrooms in Dharampur where every child feels welcomed, heard, and emotionally secure.',
    icon: Heart,
    accent: '#E23E57',
    bgTint: '#FFF2F4',
  },
  {
    title: 'Early Childhood Development',
    description:
      'Structured milestones supporting language, curiosity, motor coordination, and social confidence.',
    icon: Sprout,
    accent: '#1B8FD2',
    bgTint: '#EFF8FE',
  },
  {
    title: 'Play-Based Education',
    description:
      'Hands-on Montessori toys, storytelling, music, and sensory exploration instead of rote pressure.',
    icon: Puzzle,
    accent: '#F9B233',
    bgTint: '#FFF9E8',
  },
  {
    title: 'Experienced Teaching Approach',
    description:
      'Trained early-years educators guiding small groups with warmth, patience, and regular parent updates.',
    icon: GraduationCap,
    accent: '#5B2D8E',
    bgTint: '#F5EFFB',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-[#FFFBF2] pt-12 sm:pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left: Split Photography */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-[2rem] overflow-hidden shadow-lg shadow-[#5B2D8E]/8 border border-black/5 bg-white">
              <ResilientImage
                src={ABOUT_MEDIA.image}
                alt={ABOUT_MEDIA.alt}
                className="w-full h-full object-cover"
                fallbackTitle="Caring Educators at Kidzee Rangia"
              />
            </div>
          </motion.div>

          {/* Right: Warm Story & 4 Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-sm font-semibold text-[#5B2D8E] mb-2">
              About Kidzee Rangia
            </p>
            <h2 className="font-display font-bold text-[#231942] text-3xl sm:text-4xl leading-tight tracking-tight text-balance mb-4">
              A warm second home for Rangia’s youngest learners.
            </h2>
            <p className="text-base text-[#524A6E] leading-relaxed mb-8">
              Located near Society Chowk in Dharampur, Kidzee Rangia brings
              trusted national early childhood standards to families across
              Rangia. Guided by Kidzee’s child-first philosophy, our classrooms
              turn natural curiosity into lifelong confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {ABOUT_PILLARS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white p-5 border border-black/6 shadow-xs transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3.5"
                      style={{ backgroundColor: item.bgTint }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: item.accent }}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#231942] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#524A6E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <CurvedWaveDivider fill="#FFFFFF" />
    </section>
  );
}

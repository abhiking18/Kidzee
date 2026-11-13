import { motion } from 'motion/react';
import { ShieldCheck, Shapes, Palette, HeartHandshake, Sparkles } from 'lucide-react';
import { CurvedWaveDivider } from './BrandMark';

const REASONS = [
  {
    number: '01',
    title: 'Child-Friendly Environment',
    description:
      'Low child-sized furniture, non-toxic classroom tools, bright sunlit rooms, and thoughtful campus safety throughout the day.',
    icon: ShieldCheck,
    color: '#5B2D8E',
    surface: '#FFFFFF',
    span: 'lg:col-span-2',
  },
  {
    number: '02',
    title: 'Learning Through Play',
    description:
      'Activity corners, tactile puzzles, and joyful group games turn foundational literacy and numeracy into natural curiosity.',
    icon: Shapes,
    color: '#F9B233',
    surface: '#FFFBF2',
    span: 'lg:col-span-1',
  },
  {
    number: '03',
    title: 'Creativity and Exploration',
    description:
      'Daily art, origami, music, and story circles encourage children to imagine freely and express their own ideas.',
    icon: Palette,
    color: '#E23E57',
    surface: '#FFFFFF',
    span: 'lg:col-span-1',
  },
  {
    number: '04',
    title: 'Personal Attention',
    description:
      'Caring educators observe each child’s pace, comfort, and strengths so shy learners feel supported and active learners stay engaged.',
    icon: HeartHandshake,
    color: '#1B8FD2',
    surface: '#FFFFFF',
    span: 'lg:col-span-1',
  },
  {
    number: '05',
    title: 'Holistic Development',
    description:
      'Balanced focus on social kindness, emotional readiness, physical coordination, and confident everyday communication.',
    icon: Sparkles,
    color: '#5B2D8E',
    surface: '#FFFBF2',
    span: 'lg:col-span-1',
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="bg-[#F7F3FB] pt-14 sm:pt-18">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-[#5B2D8E] mb-2">
            Why Choose Kidzee Rangia
          </p>
          <h2 className="font-display font-bold text-[#231942] text-3xl sm:text-4xl leading-tight tracking-tight text-balance">
            Built around how young children genuinely learn and thrive.
          </h2>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ backgroundColor: reason.surface }}
                className={`${reason.span} rounded-[1.75rem] p-7 border border-black/6 shadow-xs flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5`}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${reason.color}15` }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: reason.color }}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="font-display font-bold text-sm text-[#524A6E]/55 tabular-nums">
                    {reason.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-[#231942] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524A6E] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <CurvedWaveDivider fill="#FFFFFF" />
    </section>
  );
}

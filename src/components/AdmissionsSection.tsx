import { useState, useEffect, RefObject } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';
import { SCHOOL_INFO, PROGRAMMES } from '../data/kidzeeData';

interface AdmissionsSectionProps {
  selectedProgramme: string;
  onProgrammeChange: (value: string) => void;
  nameInputRef: RefObject<HTMLInputElement | null>;
}

interface SubmittedEnquiry {
  parentName: string;
  phone: string;
  childAge: string;
  programme: string;
  submittedAt: string;
}

const AGE_OPTIONS = [
  '1.5 – 2 Years',
  '2 – 3 Years',
  '3 – 4 Years',
  '4 – 5 Years',
  '5 – 6 Years',
  'Adult (Teacher Training)',
];

const STORAGE_KEY = 'kidzee_rangia_enquiries';

export function AdmissionsSection({
  selectedProgramme,
  onProgrammeChange,
  nameInputRef,
}: AdmissionsSectionProps) {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [childAge, setChildAge] = useState('2 – 3 Years');
  const [errors, setErrors] = useState<{
    parentName?: string;
    phone?: string;
    childAge?: string;
    programme?: string;
  }>({});
  const [submitted, setSubmitted] = useState<SubmittedEnquiry | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const list = JSON.parse(raw) as SubmittedEnquiry[];
        if (Array.isArray(list) && list.length > 0) {
          setSubmitted(list[0]);
        }
      }
    } catch {
      // Ignore storage read failure
    }
  }, []);

  const validate = () => {
    const nextErrors: typeof errors = {};
    if (!parentName.trim() || parentName.trim().length < 2) {
      nextErrors.parentName = 'Please enter the parent or applicant name.';
    }
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 13) {
      nextErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!childAge) {
      nextErrors.childAge = 'Please select an age group.';
    }
    if (!selectedProgramme) {
      nextErrors.programme = 'Please choose a programme.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const record: SubmittedEnquiry = {
      parentName: parentName.trim(),
      phone: phone.trim(),
      childAge,
      programme: selectedProgramme,
      submittedAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    };

    try {
      const existingRaw = localStorage.getItem(STORAGE_KEY);
      const existing = existingRaw
        ? (JSON.parse(existingRaw) as SubmittedEnquiry[])
        : [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...existing.slice(0, 4)]));
    } catch {
      // Ignore storage write failure
    }

    setSubmitted(record);
    setParentName('');
    setPhone('');
    setErrors({});
  };

  const focusForm = () => {
    setSubmitted(null);
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 50);
  };

  return (
    <section id="admissions" className="bg-white pt-12 sm:pt-16 pb-20 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left: Campus Contact & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between rounded-[2rem] bg-[#5B2D8E] text-white p-7 sm:p-9 shadow-lg shadow-[#5B2D8E]/15"
          >
            <div>
              <p className="text-sm font-semibold text-[#F9B233] mb-2">
                Contact &amp; Admissions
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-balance mb-4">
                Visit Kidzee Rangia in person.
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-8">
                Meet our teachers, tour our activity classrooms, and find the
                right early learning stage for your child.
              </p>

              <div className="space-y-5 text-sm sm:text-base">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="w-5 h-5 text-[#F9B233] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-display font-semibold text-white">
                      {SCHOOL_INFO.name}
                    </p>
                    <p className="text-white/85 leading-relaxed">
                      {SCHOOL_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone
                    className="w-5 h-5 text-[#F9B233] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-display font-semibold text-white">
                      Admissions Desk
                    </p>
                    <a
                      href={SCHOOL_INFO.phoneHref}
                      className="text-white/90 hover:text-[#F9B233] transition-colors tabular-nums"
                    >
                      {SCHOOL_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock
                    className="w-5 h-5 text-[#F9B233] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-display font-semibold text-white">
                      Visiting Hours
                    </p>
                    <p className="text-white/85">{SCHOOL_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Required Action Buttons */}
            <div className="mt-9 pt-6 border-t border-white/15 flex flex-wrap gap-3">
              <a
                href={SCHOOL_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F9B233] text-[#231942] font-display font-bold text-sm whitespace-nowrap shrink-0 hover:bg-[#fcc052] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call Now</span>
              </a>

              <a
                href={SCHOOL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/12 text-white border border-white/20 font-display font-semibold text-sm whitespace-nowrap shrink-0 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B233]"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Get Directions</span>
              </a>

              <button
                type="button"
                onClick={focusForm}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#5B2D8E] font-display font-semibold text-sm whitespace-nowrap shrink-0 hover:bg-[#FFFBF2] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B233]"
              >
                <span>Enquire for Admission</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          {/* Right: Admission Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-[2rem] bg-[#FFFBF2] border border-black/8 p-7 sm:p-9 flex flex-col justify-center"
          >
            {submitted ? (
              <div className="py-6">
                <div className="w-12 h-12 rounded-2xl bg-[#5B2D8E]/10 flex items-center justify-center mb-4">
                  <CheckCircle2
                    className="w-7 h-7 text-[#5B2D8E]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#231942] mb-2">
                  Enquiry recorded for {submitted.parentName}
                </h3>
                <p className="text-sm sm:text-base text-[#524A6E] leading-relaxed mb-6">
                  Thank you for your interest in{' '}
                  <span className="font-semibold text-[#231942]">
                    {submitted.programme}
                  </span>{' '}
                  ({submitted.childAge}). Our admissions desk at Kidzee Rangia
                  can also assist you right away on phone.
                </p>

                <div className="rounded-2xl bg-white border border-black/6 p-5 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs font-semibold text-[#524A6E]">
                      Parent / Applicant
                    </p>
                    <p className="font-semibold text-[#231942]">
                      {submitted.parentName}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#524A6E]">
                      Phone Number
                    </p>
                    <p className="font-semibold text-[#231942] tabular-nums">
                      {submitted.phone}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#524A6E]">
                      Age Group
                    </p>
                    <p className="font-semibold text-[#231942]">
                      {submitted.childAge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#524A6E]">
                      Programme
                    </p>
                    <p className="font-semibold text-[#5B2D8E]">
                      {submitted.programme}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={SCHOOL_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#5B2D8E] text-white font-display font-semibold text-sm hover:bg-[#431F6C] transition-colors"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Call {SCHOOL_INFO.phoneDisplay}</span>
                  </a>
                  <button
                    type="button"
                    onClick={focusForm}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-black/10 text-[#231942] font-semibold text-sm hover:bg-[#F7F3FB] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-sm font-semibold text-[#5B2D8E] mb-1.5">
                  Admissions Open
                </p>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#231942] mb-2">
                  Admission Enquiry Form
                </h3>
                <p className="text-sm text-[#524A6E] mb-6">
                  Share your details below to receive fee structure, timings, and
                  campus visit availability.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="parentName"
                        className="block text-sm font-semibold text-[#231942] mb-1.5"
                      >
                        Parent Name
                      </label>
                      <input
                        ref={nameInputRef}
                        id="parentName"
                        type="text"
                        value={parentName}
                        onChange={(e) => {
                          setParentName(e.target.value);
                          if (errors.parentName)
                            setErrors((prev) => ({ ...prev, parentName: undefined }));
                        }}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/12 text-sm text-[#231942] placeholder:text-[#524A6E]/50 focus:outline-none focus:ring-2 focus:ring-[#5B2D8E]"
                        required
                      />
                      {errors.parentName && (
                        <p className="mt-1 text-xs font-medium text-[#E23E57]">
                          {errors.parentName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-[#231942] mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone)
                            setErrors((prev) => ({ ...prev, phone: undefined }));
                        }}
                        placeholder="+91 98596 46926"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/12 text-sm text-[#231942] placeholder:text-[#524A6E]/50 focus:outline-none focus:ring-2 focus:ring-[#5B2D8E] tabular-nums"
                        required
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs font-medium text-[#E23E57]">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="childAge"
                        className="block text-sm font-semibold text-[#231942] mb-1.5"
                      >
                        Child’s Age
                      </label>
                      <select
                        id="childAge"
                        value={childAge}
                        onChange={(e) => setChildAge(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/12 text-sm text-[#231942] focus:outline-none focus:ring-2 focus:ring-[#5B2D8E]"
                      >
                        {AGE_OPTIONS.map((age) => (
                          <option key={age} value={age}>
                            {age}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="programme"
                        className="block text-sm font-semibold text-[#231942] mb-1.5"
                      >
                        Programme Interested In
                      </label>
                      <select
                        id="programme"
                        value={selectedProgramme}
                        onChange={(e) => onProgrammeChange(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/12 text-sm text-[#231942] focus:outline-none focus:ring-2 focus:ring-[#5B2D8E]"
                      >
                        {PROGRAMMES.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#5B2D8E] text-white font-display font-semibold text-base shadow-sm hover:bg-[#431F6C] active:scale-[0.99] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B233]"
                    >
                      <span>Submit Enquiry</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

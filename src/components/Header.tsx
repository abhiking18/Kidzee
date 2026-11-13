import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { SCHOOL_INFO } from '../data/kidzeeData';

interface HeaderProps {
  onEnquireClick: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Admissions', href: '#admissions' },
];

export function Header({ onEnquireClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-shadow duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5'
          : 'bg-white border-b border-black/5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-2 text-[#231942] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B2D8E] rounded-lg"
        >
          <BrandMark className="h-10 w-auto" variant="light" />
          <span className="font-display font-bold text-xl tracking-tight text-[#5B2D8E]">
            Rangia
          </span>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#524A6E]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#5B2D8E] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-[#F9B233] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B2D8E] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onEnquireClick}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#5B2D8E] text-white font-display font-semibold text-sm whitespace-nowrap shrink-0 shadow-sm hover:bg-[#431F6C] active:scale-[0.98] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B233]"
          >
            Enquire Now
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#231942] hover:bg-[#F7F3FB] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B2D8E]"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-black/30 backdrop-blur-[2px]">
          <div className="bg-white border-b border-black/10 shadow-xl px-5 py-6 space-y-5">
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleMobileNav(link.href)}
                  className="w-full text-left px-3 py-3 rounded-xl font-display font-semibold text-base text-[#231942] hover:bg-[#F7F3FB] hover:text-[#5B2D8E] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="pt-4 border-t border-black/8 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onEnquireClick();
                }}
                className="w-full py-3 px-5 rounded-xl bg-[#5B2D8E] text-white font-display font-semibold text-sm hover:bg-[#431F6C] transition-colors cursor-pointer"
              >
                Enquire for Admission
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={SCHOOL_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FFFBF2] border border-[#F9B233]/40 text-[#231942] font-semibold text-sm"
                >
                  <Phone className="w-4 h-4 text-[#5B2D8E]" aria-hidden="true" />
                  <span>Call Now</span>
                </a>
                <a
                  href={SCHOOL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F2F9FE] border border-[#1B8FD2]/30 text-[#231942] font-semibold text-sm"
                >
                  <MapPin className="w-4 h-4 text-[#1B8FD2]" aria-hidden="true" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

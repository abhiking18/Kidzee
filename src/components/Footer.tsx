import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { PROGRAMMES, SCHOOL_INFO } from '../data/kidzeeData';

interface FooterProps {
  onSelectProgrammeModal: (id: string) => void;
}

export function Footer({ onSelectProgrammeModal }: FooterProps) {
  return (
    <footer className="bg-[#231942] text-white pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <BrandMark className="h-9 w-auto" variant="dark" />
              <span className="font-display font-bold text-xl text-white">
                Rangia
              </span>
            </a>
            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              Nurturing early childhood curiosity, play-based discovery, and
              attentive care in Dharampur, Rangia.
            </p>
            <p className="text-xs font-medium text-[#F9B233] tabular-nums">
              Google Rating: {SCHOOL_INFO.googleRating}/5 ({SCHOOL_INFO.totalReviews} reviews)
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-sm text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <a href="#about" className="hover:text-[#F9B233] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-[#F9B233] transition-colors">
                  Programmes
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-[#F9B233] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F9B233] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-[#F9B233] transition-colors">
                  Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-sm text-white mb-4">
              Programmes
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              {PROGRAMMES.map((prog) => (
                <li key={prog.id}>
                  <button
                    type="button"
                    onClick={() => onSelectProgrammeModal(prog.id)}
                    className="text-left hover:text-[#F9B233] transition-colors cursor-pointer"
                  >
                    {prog.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-3 space-y-3 text-sm text-white/80">
            <h3 className="font-display font-bold text-sm text-white mb-4">
              Contact &amp; Location
            </h3>
            <div className="flex items-start gap-2.5">
              <MapPin
                className="w-4 h-4 text-[#F9B233] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{SCHOOL_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone
                className="w-4 h-4 text-[#F9B233] shrink-0"
                aria-hidden="true"
              />
              <a
                href={SCHOOL_INFO.phoneHref}
                className="hover:text-[#F9B233] transition-colors tabular-nums"
              >
                {SCHOOL_INFO.phoneDisplay}
              </a>
            </div>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={SCHOOL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F9B233] hover:underline"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href="https://www.kidzee.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/75 hover:text-white hover:underline"
              >
                <span>Kidzee Official</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Kidzee Rangia. All rights reserved.</p>
          <p>Near Society Chowk, Dharampur, Rangia, Assam 781354</p>
        </div>
      </div>
    </footer>
  );
}

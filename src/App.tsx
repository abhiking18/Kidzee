import { useState, useRef } from 'react';
import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgrammesSection } from './components/ProgrammesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { Footer } from './components/Footer';
import { PROGRAMMES } from './data/kidzeeData';

export default function App() {
  const [selectedProgramme, setSelectedProgramme] = useState<string>(
    PROGRAMMES[0].title
  );
  const [activeModalProgrammeId, setActiveModalProgrammeId] = useState<
    string | null
  >(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToAdmissionsAndFocus = () => {
    const el = document.getElementById('admissions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 450);
    }
  };

  const handleSelectProgrammeForEnquiry = (programmeTitle: string) => {
    setSelectedProgramme(programmeTitle);
    scrollToAdmissionsAndFocus();
  };

  const handleOpenProgrammeFromFooter = (id: string) => {
    const section = document.getElementById('programmes');
    section?.scrollIntoView({ behavior: 'smooth' });
    setActiveModalProgrammeId(id);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-[#231942]">
        <Header onEnquireClick={scrollToAdmissionsAndFocus} />

        <main className="flex-1">
          <HeroSection onEnquireClick={scrollToAdmissionsAndFocus} />
          <AboutSection />
          <ProgrammesSection
            onSelectProgrammeForEnquiry={handleSelectProgrammeForEnquiry}
            activeModalProgrammeId={activeModalProgrammeId}
            onOpenProgrammeModal={setActiveModalProgrammeId}
          />
          <WhyChooseUsSection />
          <GallerySection />
          <ReviewsSection />
          <AdmissionsSection
            selectedProgramme={selectedProgramme}
            onProgrammeChange={setSelectedProgramme}
            nameInputRef={nameInputRef}
          />
        </main>

        <Footer onSelectProgrammeModal={handleOpenProgrammeFromFooter} />
      </div>
    </MotionConfig>
  );
}

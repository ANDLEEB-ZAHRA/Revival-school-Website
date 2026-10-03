import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProgramsGrid } from '../components/sections/ProgramsGrid';
import { ActivitiesGrid } from '../components/sections/ActivitiesGrid';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { SEO } from '../components/ui/SEO';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Revival School Gujrat | Inspiring Learning, Building Futures"
        description="A nurturing and inspiring school environment where every student is encouraged to learn, explore and grow under the Revival Education System."
      />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsGrid />
        <ActivitiesGrid />
        <TestimonialsSection />
        <CampusCTABanner buttonText="Contact Us" buttonLink="/contact" />
      </main>
    </>
  );
};

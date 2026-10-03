import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { SEO } from '../components/ui/SEO';
import { Button } from '../components/ui/Button';
import { ACADEMIC_PROGRAMS } from '../data/programs';
import { CheckCircle2, ArrowRight, BookOpen, Clock, Users, Award } from 'lucide-react';

export const Programs: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>('early-years');

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const found = ACADEMIC_PROGRAMS.find((p) => p.id === id);
      if (found) {
        setActiveTab(found.id);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEO
        title="Academic Programs & Curriculum"
        description="Explore the comprehensive academic programs at Revival School Gujrat from Early Years Montessori to Primary, Middle, and Matriculation Secondary."
      />

      <main className="bg-[#f8fafd]">
        <PageHero
          badge="CURRICULUM & STAGES"
          title="Comprehensive Academic Pathways"
          subtitle="Explore each stage of your child's educational journey at Revival School Gujrat, meticulously designed for cognitive growth, character building, and academic success."
          breadcrumb="Programs"
        />

        {/* Tab Navigation Pill Bar */}
        <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-y border-slate-200 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {ACADEMIC_PROGRAMS.map((program) => (
                <button
                  key={program.id}
                  onClick={() => {
                    setActiveTab(program.id);
                    const el = document.getElementById(program.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap ${
                    activeTab === program.id
                      ? 'bg-brand-blue-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {program.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Program Sections */}
        <div className="py-12 md:py-20 space-y-16 md:space-y-24">
          {ACADEMIC_PROGRAMS.map((program, index) => {
            const isEven = index % 2 === 0;

            return (
              <section
                key={program.id}
                id={program.id}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
              >
                <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-card">
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Left/Right Image Container */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] group">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold-500 text-white shadow">
                            {program.badgeText}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                          <span className="text-xs font-semibold bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                            Age: {program.ageRange}
                          </span>
                          <span className="text-xs font-semibold bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                            {program.grades}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Program Information */}
                    <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-600 block mb-1">
                          {program.grades}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy-900 leading-tight">
                          {program.title}
                        </h2>
                        <p className="text-sm font-semibold text-brand-blue-600 mt-1">
                          {program.subtitle}
                        </p>
                      </div>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {program.description}
                      </p>

                      {/* Curriculum Highlights */}
                      <div className="space-y-3">
                        <h4 className="font-serif font-bold text-base text-brand-navy-900 border-b border-slate-100 pb-2">
                          Core Subjects & Curriculum
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                          {program.curriculum.map((c, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 size={16} className="text-brand-blue-600 shrink-0 mt-0.5" />
                              <span>{c}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Outcomes */}
                      <div className="bg-brand-blue-50/60 rounded-2xl p-4 border border-brand-blue-100/80">
                        <h4 className="font-bold text-xs uppercase tracking-wider text-brand-blue-900 mb-2">
                          Key Learning Outcomes:
                        </h4>
                        <ul className="text-xs text-slate-700 space-y-1.5">
                          {program.keyOutcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-brand-gold-600 font-bold">•</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 flex items-center gap-4">
                        <Button
                          to="/admissions"
                          variant="primary"
                          size="md"
                          icon={<ArrowRight size={16} />}
                        >
                          Apply for {program.title}
                        </Button>
                      </div>

                    </div>

                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <CampusCTABanner buttonText="Enroll Today" buttonLink="/admissions" />
      </main>
    </>
  );
};

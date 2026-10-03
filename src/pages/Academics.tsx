import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { ProgramsGrid } from '../components/sections/ProgramsGrid';
import { SEO } from '../components/ui/SEO';
import { GraduationCap, CheckCircle2, Lightbulb, FileCheck } from 'lucide-react';
import { IMAGES } from '../data/images';
import { Button } from '../components/ui/Button';

export const Academics: React.FC = () => {
  return (
    <>
      <SEO
        title="Academics & Pedagogy"
        description="Discover our structured curriculum, innovative teaching methodologies, assessment frameworks, and academic excellence at Revival School Gujrat."
      />

      <main className="bg-[#f8fafd]">
        <PageHero
          badge="ACADEMIC EXCELLENCE"
          title="Inspiring Curiosity, Achieving Excellence"
          subtitle="A comprehensive learning ecosystem blending core conceptual fundamentals, scientific discovery, Islamic ethics, and rigorous board preparation."
          breadcrumb="Academics"
          backgroundImage={IMAGES.middleLab}
        />

        {/* Academic Framework Pillars */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="OUR PEDAGOGY"
              title="A Modern & Balanced Learning Approach"
              subtitle="We move beyond passive memorization to cultivate active inquiry, problem solving, and analytical mastery."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-card transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-600 text-white flex items-center justify-center mb-6 shadow-md">
                  <Lightbulb size={24} />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-navy-900 mb-3">
                  Conceptual Clarity
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Students understand the "Why" and "How" behind concepts through practical experiments, demonstrations, and multimedia learning tools.
                </p>
                <div className="text-xs font-semibold text-brand-blue-600 flex items-center gap-1">
                  <CheckCircle2 size={14} /> Interactive Science & Math
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-card transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold-500 text-white flex items-center justify-center mb-6 shadow-md">
                  <FileCheck size={24} />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-navy-900 mb-3">
                  Continuous Assessment
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Regular diagnostic quizzes, term exams, and structured feedback loops identify learning gaps early, ensuring steady continuous progress.
                </p>
                <div className="text-xs font-semibold text-brand-gold-600 flex items-center gap-1">
                  <CheckCircle2 size={14} /> Weekly Progress Tracking
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-card transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-navy-900 text-white flex items-center justify-center mb-6 shadow-md">
                  <GraduationCap size={24} />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-navy-900 mb-3">
                  Board Examination Rigor
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Specialized mock tests, paper-presentation workshops, and past-paper analysis prepare secondary students to secure top BISE positions.
                </p>
                <div className="text-xs font-semibold text-brand-blue-700 flex items-center gap-1">
                  <CheckCircle2 size={14} /> 98% Matriculation A+ Record
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Programs Grid Component */}
        <ProgramsGrid />

        {/* Assessment & Curriculum Details */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-600">
                    EVALUATION & BENCHMARKING
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy-900 leading-tight">
                    Structured Evaluation for Constant Growth
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We believe assessment should empower and guide students rather than cause undue anxiety. Our evaluation system combines formative classroom assessments with comprehensive summative term examinations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-brand-blue-50/70 border border-brand-blue-100">
                    <h4 className="font-bold text-brand-blue-900 text-sm mb-1">Monthly Tests</h4>
                    <p className="text-xs text-slate-600">Continuous check on chapter retention and conceptual understanding.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-brand-gold-50/70 border border-brand-gold-200">
                    <h4 className="font-bold text-brand-gold-900 text-sm mb-1">Term Examinations</h4>
                    <p className="text-xs text-slate-600">Comprehensive Mid-Term & Final examinations measuring cumulative mastery.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Parent-Teacher Reviews</h4>
                    <p className="text-xs text-slate-600">Detailed individual consultative sessions with actionable feedback.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Matric Pre-Boards</h4>
                    <p className="text-xs text-slate-600">Full syllabus simulation exams matching BISE board criteria exactly.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Button to="/programs" variant="primary" size="md">
                    Explore Detailed Programs
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative aspect-[4/3] group">
                  <img
                    src={IMAGES.resultsGrandHall}
                    alt="Annual Results Gathering"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-gold-500 text-white mb-2 inline-block">
                      Academic Recognition
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                      Annual Convocation & Honor Roll
                    </h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Honoring student dedication and exceptional matriculation milestones.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <CampusCTABanner buttonText="Apply for Admission" buttonLink="/admissions" />
      </main>
    </>
  );
};

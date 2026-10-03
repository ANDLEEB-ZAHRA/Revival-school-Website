import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { SEO } from '../components/ui/SEO';
import { ACTIVITIES_DATA, EXTRA_ACTIVITIES_LIST } from '../data/activities';
import { IMAGES } from '../data/images';
import { CheckCircle2, Trophy, Award, Palette, Mic, BookOpen, FlaskConical, Leaf, Laptop } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Activities: React.FC = () => {
  const iconMap: Record<string, any> = {
    FlaskConical,
    Mic,
    BookOpen,
    Palette,
    Leaf,
    Laptop,
  };

  return (
    <>
      <SEO
        title="Student Activities & Co-Curriculars"
        description="Explore co-curricular life at Revival School Gujrat: Sports, Debates, Arts, Science clubs, field assemblies, and leadership opportunities."
      />

      <main className="bg-[#f8fafd]">
        <PageHero
          badge="BEYOND THE CLASSROOM"
          title="Activities, Sports & Creativity"
          subtitle="Empowering students to discover talents, build resilience, practice sportsmanship, and develop wholesome confidence."
          breadcrumb="Activities"
          backgroundImage={IMAGES.sportsPerformance}
        />

        {/* 4 Core Pillars Grid matching reference activities */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="DEVELOPMENT PILLARS"
              title="Co-Curricular Learning Highlights"
              subtitle="Every student participates in regular physical, artistic, and leadership activities alongside their academic studies."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {ACTIVITIES_DATA.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="bg-[#f8fafd] rounded-3xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group scroll-mt-36"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue-700 text-white shadow">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-2xl text-brand-navy-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-200">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 size={14} className="text-brand-gold-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Student Clubs & Societies */}
        <section className="py-16 md:py-24 bg-[#edf4fc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="CLUBS & SOCIETIES"
              title="Enrichment Clubs for Every Passion"
              subtitle="Weekly extracurricular societies where students collaborate, innovate, and master specialized skills."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXTRA_ACTIVITIES_LIST.map((club, index) => {
                const IconComp = iconMap[club.icon] || Trophy;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center mb-4">
                      <IconComp size={24} />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-brand-navy-900 mb-2">
                      {club.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {club.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button to="/gallery" variant="primary" size="md">
                View Photos in Gallery
              </Button>
            </div>
          </div>
        </section>

        <CampusCTABanner buttonText="Join Revival School" buttonLink="/admissions" />
      </main>
    </>
  );
};

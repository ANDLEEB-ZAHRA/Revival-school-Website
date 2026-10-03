import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ACADEMIC_PROGRAMS } from '../../data/programs';

export const ProgramsGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f8fafd] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with watermark */}
        <SectionHeader
          badge="ACADEMICS"
          title="Academic Programs"
          subtitle="A well-structured curriculum designed to build strong foundations and prepare students for future success"
          showWatermark={true}
        />

        {/* 5-Column Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {ACADEMIC_PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Card Image Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 p-2.5 pb-0">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-white to-brand-blue-50/30">
                <div>
                  <h3 className="font-serif font-bold text-lg text-brand-navy-900 mb-2 group-hover:text-brand-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {program.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={program.id === 'activities-program' ? '/activities' : `/programs#${program.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue-600 hover:text-brand-blue-800 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

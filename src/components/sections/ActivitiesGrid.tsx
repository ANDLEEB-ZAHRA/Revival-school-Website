import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { ACTIVITIES_DATA } from '../../data/activities';

export const ActivitiesGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="ACTIVITIES"
          title="Learning Beyond Books"
          subtitle="At Revival School Gujrat, education extends far beyond textbooks and classrooms. We emphasize holistic development through sports, creative expression, leadership opportunities, and community engagement to help every student discover their talents, build self-discipline, and develop personal growth beyond the classroom."
          showWatermark={true}
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ACTIVITIES_DATA.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Photo Area */}
              <div className="p-3 pb-0">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Blue Content Container */}
              <div className="m-3 mt-3 p-5 rounded-xl bg-gradient-to-br from-brand-blue-700 to-brand-blue-900 text-white flex-1 flex flex-col justify-between shadow-md">
                <div>
                  <h3 className="font-serif font-bold text-lg text-white mb-2">
                    {act.title}
                  </h3>
                  <p className="text-blue-100 text-xs leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-blue-400/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold-300">
                    {act.category}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Centered "View Gallery" Button matching reference */}
        <div className="text-center">
          <Button
            to="/gallery"
            variant="primary"
            size="md"
            className="px-8 shadow-md"
            icon={<ArrowRight size={16} />}
          >
            View Gallery
          </Button>
        </div>

      </div>
    </section>
  );
};

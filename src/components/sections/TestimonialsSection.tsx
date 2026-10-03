import React from 'react';
import { Star, Quote, Users } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { IMAGES } from '../../data/images';

export const TestimonialsSection: React.FC = () => {
  const displayedTestimonials = TESTIMONIALS_DATA.slice(0, 3);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#f3f7fd] via-[#eef5fc] to-[#f8fafd]">
      
      {/* Background Students Reading Watermark Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.08] pointer-events-none mix-blend-multiply select-none"
        style={{ backgroundImage: `url(${IMAGES.earlyYearsReading})` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="TESTIMONIALS"
          title="What Parents Say"
          subtitle="Hear from parents about their experience with Revival School Gujrat and how our dedicated faculty and inspiring learning environment have benefited their children."
          showWatermark={true}
        />

        {/* 4 Cards Row (3 Testimonials + 1 Photo Badge Card) matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          
          {displayedTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-brand-gold-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed italic mb-5">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.parentName}
                  className="w-10 h-10 rounded-full object-cover border border-brand-gold-300 shrink-0"
                />
                <div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-brand-navy-900 leading-tight">
                    {item.parentName}
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    {item.studentInfo}
                  </p>
                </div>
              </div>

            </div>
          ))}

          {/* 4th Card: "1000+ Happy Students" Photo Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-200/80 min-h-[260px] flex flex-col justify-between group">
            <img
              src={IMAGES.assemblyPanorama}
              alt="Revival School Assembly"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

            {/* Top Badge */}
            <div className="relative z-10 p-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-blue-600/90 backdrop-blur-md text-white font-bold text-xs shadow-lg border border-white/20">
                <Users size={14} className="text-brand-gold-300" />
                <span>1000+ Happy Students</span>
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-4 text-white">
              <p className="text-xs font-serif italic text-blue-100">
                "Shaping leaders, thinkers, and ethical citizens of tomorrow."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

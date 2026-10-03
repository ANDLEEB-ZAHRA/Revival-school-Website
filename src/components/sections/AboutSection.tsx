import React from 'react';
import { CheckCircle2, ShieldCheck, UserCheck, Microscope } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { IMAGES } from '../../data/images';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      
      {/* Soft Background Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="ABOUT REVIVAL"
          title="A Legacy of Quality Education"
        />

        {/* 2-Column Grid matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Main Building Image */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group">
              <img
                src={IMAGES.campusBuilding}
                alt="Revival School Gujrat Main Campus"
                className="w-full h-full min-h-[340px] md:min-h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-brand-navy-900 text-sm sm:text-base">
                      Revival School Gujrat
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Main Campus • Grand Trunk Road
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-gold-100 text-brand-gold-800 border border-brand-gold-300">
                    Est. 2012
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Navy Blue Info Card */}
          <div className="lg:col-span-6 flex">
            <div className="w-full bg-gradient-to-br from-brand-blue-700 via-brand-blue-800 to-brand-navy-900 rounded-3xl p-7 sm:p-9 text-white shadow-2xl border border-white/15 flex flex-col justify-between">
              
              <div className="space-y-4">
                <p className="text-white text-sm sm:text-base leading-relaxed font-normal">
                  Revival School Gujrat is a private secondary school operating under the <strong className="text-brand-gold-300 font-semibold">Revival Education System</strong>, dedicated to providing quality education in a supportive, modern, and values-based environment.
                </p>

                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                  Our mission is to nurture young minds through a balanced approach that combines academic excellence, character development, discipline, creativity, and lifelong learning.
                </p>

                {/* 3 Circular Badges Row matching reference */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 pb-2">
                  
                  {/* Badge 1 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3.5 border border-white/10 flex items-start sm:flex-col gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-gold-500 text-white flex items-center justify-center shrink-0">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Safe Environment</div>
                      <div className="text-[10px] text-blue-200 mt-0.5">Approved security</div>
                    </div>
                  </div>

                  {/* Badge 2 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3.5 border border-white/10 flex items-start sm:flex-col gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-gold-500 text-white flex items-center justify-center shrink-0">
                      <UserCheck size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Qualified Faculty</div>
                      <div className="text-[10px] text-blue-200 mt-0.5">Experienced educators</div>
                    </div>
                  </div>

                  {/* Badge 3 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3.5 border border-white/10 flex items-start sm:flex-col gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-gold-500 text-white flex items-center justify-center shrink-0">
                      <Microscope size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Modern Labs</div>
                      <div className="text-[10px] text-blue-200 mt-0.5">Equipped science & IT</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom quote / footer note */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-brand-gold-200 font-medium">
                <CheckCircle2 size={16} className="text-brand-gold-400 shrink-0" />
                <span>Empowering the next generation to excel academically and ethically since our inception.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

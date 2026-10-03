import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface CampusCTABannerProps {
  buttonText?: string;
  buttonLink?: string;
}

export const CampusCTABanner: React.FC<CampusCTABannerProps> = ({
  buttonText = 'Apply Now',
  buttonLink = '/admissions',
}) => {
  return (
    <section className="py-12 bg-[#f8fafd] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container matching reference design */}
        <div className="bg-gradient-to-r from-brand-blue-600 via-brand-blue-700 to-brand-blue-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Decorative Pattern */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Title & CTA */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-300">
                ADMISSIONS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Join the Revival Family
              </h2>
              <div className="pt-2">
                <Button
                  to={buttonLink}
                  variant="gold"
                  size="md"
                  className="px-7 py-3 font-bold text-slate-900 bg-brand-gold-400 hover:bg-brand-gold-500 shadow-lg"
                  icon={<ArrowRight size={16} />}
                >
                  {buttonText}
                </Button>
              </div>
            </div>

            {/* Right Column: Campuses Pills */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end space-y-3">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                Our Campuses
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  to="/about#campuses"
                  variant="white"
                  size="sm"
                  className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-brand-navy-900 hover:bg-slate-100 shadow-md"
                >
                  Boys Campus
                </Button>
                <Button
                  to="/about#campuses"
                  variant="white"
                  size="sm"
                  className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-brand-navy-900 hover:bg-slate-100 shadow-md"
                >
                  Girls Campus
                </Button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

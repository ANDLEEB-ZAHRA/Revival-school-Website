import React from 'react';
import { ArrowRight, Sparkles, Award, BookOpen, Trophy } from 'lucide-react';
import { Button } from '../ui/Button';
import { IMAGES } from '../../data/images';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#eaf2fb] via-[#f3f7fd] to-[#f8fafd]">
      
      {/* Background Subtle Assembly / Building Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.14] pointer-events-none mix-blend-luminosity select-none"
        style={{ backgroundImage: `url(${IMAGES.assemblyPanorama})` }}
      />

      {/* Decorative Glow Circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-blue-300/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-10 -right-20 w-96 h-96 bg-brand-gold-300/25 rounded-full blur-3xl pointer-events-none" />

      {/* Top Floating Arabic Calligraphy Capsule */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center">
          
          {/* Rabbi Zidni Ilma Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-brand-gold-300/70 shadow-sm backdrop-blur-md mb-4 animate-fadeIn">
            <span className="text-sm font-arabic font-bold text-brand-gold-700 tracking-wider">
              رَّبِّ زِدْنِي عِلْمًا
            </span>
          </div>

          {/* Revival Education System Eyebrow Badge */}
          <div className="inline-flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand-gold-600 mb-4 select-none">
            <span className="w-8 md:w-12 h-[1.5px] bg-brand-gold-500 rounded-full"></span>
            <span>REVIVAL EDUCATION SYSTEM</span>
            <span className="w-8 md:w-12 h-[1.5px] bg-brand-gold-500 rounded-full"></span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif font-bold text-brand-navy-900 tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6">
            Inspiring Learning, <span className="text-brand-blue-600">Building Futures.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            A nurturing and inspiring school environment where every student is encouraged to learn, explore and grow. We focus on building confidence, strong character, creativity, discipline, and essential skills that prepare students to face the future with knowledge, courage, and purpose.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Button
              to="/about"
              variant="primary"
              size="lg"
              className="px-8 py-3.5 shadow-lg hover:shadow-brand-blue-500/25"
              icon={<ArrowRight size={18} />}
            >
              Explore Our School
            </Button>
            <Button
              to="/admissions"
              variant="outline"
              size="lg"
              className="px-8 py-3.5 border-brand-blue-600 text-brand-blue-700 hover:bg-brand-blue-50"
              icon={<ArrowRight size={18} />}
            >
              Admission Open
            </Button>
          </div>

          {/* Right Floating Crest Watermark (as seen in reference) */}
          <div className="absolute right-4 sm:right-12 top-24 w-28 sm:w-36 opacity-35 pointer-events-none hidden md:block">
            <img src={IMAGES.watermarkSeal} alt="" className="w-full h-auto" />
          </div>

        </div>

        {/* 3 Floating Blue Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-4">
          
          {/* Card 1: Qualified Faculty */}
          <div className="bg-gradient-to-r from-brand-blue-700 to-brand-blue-600 rounded-2xl p-6 text-white shadow-lg border border-brand-blue-400/30 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2 rounded-xl bg-white/15 backdrop-blur-md">
                <Award className="w-5 h-5 text-brand-gold-300" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">
                Qualified Faculty
              </h3>
            </div>
            <p className="text-xs sm:text-[13px] text-blue-100 leading-relaxed">
              Experienced educators dedicated to modern pedagogical practices, mentoring every child, and fostering human values and excellence.
            </p>
          </div>

          {/* Card 2: Modern Learning */}
          <div className="bg-gradient-to-r from-brand-blue-700 to-brand-blue-600 rounded-2xl p-6 text-white shadow-lg border border-brand-blue-400/30 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2 rounded-xl bg-white/15 backdrop-blur-md">
                <BookOpen className="w-5 h-5 text-brand-gold-300" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">
                Modern Learning
              </h3>
            </div>
            <p className="text-xs sm:text-[13px] text-blue-100 leading-relaxed">
              Engaging methodology supporting active inquiry, digital education integration, and a balanced curriculum for holistic growth.
            </p>
          </div>

          {/* Card 3: Student Activities */}
          <div className="bg-gradient-to-r from-brand-blue-700 to-brand-blue-600 rounded-2xl p-6 text-white shadow-lg border border-brand-blue-400/30 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2 rounded-xl bg-white/15 backdrop-blur-md">
                <Trophy className="w-5 h-5 text-brand-gold-300" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">
                Student Activities
              </h3>
            </div>
            <p className="text-xs sm:text-[13px] text-blue-100 leading-relaxed">
              Sports, debate, public speaking, arts, creative workshops, along with character-building programs beyond textbooks.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

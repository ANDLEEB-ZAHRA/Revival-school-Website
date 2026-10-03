import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { SEO } from '../components/ui/SEO';
import { IMAGES } from '../data/images';
import { Clock, Shield, Sparkles, Trophy, Users, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const StudentLife: React.FC = () => {
  return (
    <>
      <SEO
        title="Student Life & Campus Experience"
        description="Experience the vibrant daily life, house system, morning assemblies, and student leadership at Revival School Gujrat."
      />

      <main className="bg-[#f8fafd]">
        <PageHero
          badge="CAMPUS VIBRANCY"
          title="Life at Revival School"
          subtitle="A disciplined yet joyful school atmosphere where students build lifelong friendships, character, and leadership skills."
          breadcrumb="Student Life"
          backgroundImage={IMAGES.assemblyPanorama}
        />

        {/* Daily Schedule & Routine */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="DAILY TIMETABLE"
              title="A Purposeful Daily Routine"
              subtitle="Structured to balance rigorous academics, spiritual grounding, physical play, and library reflection."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-gold-600 mb-1">
                  07:45 AM – 08:15 AM
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-navy-900 mb-2">
                  Morning Assembly & Dua
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Holy Quran recitation with translation, national anthem, thought of the day, and motivational address.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-blue-600 mb-1">
                  08:15 AM – 10:45 AM
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-navy-900 mb-2">
                  Core Academic Blocks
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Interactive English, Mathematics, Urdu, and Science sessions with high focus and energetic teaching.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-gold-600 mb-1">
                  10:45 AM – 11:15 AM
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-navy-900 mb-2">
                  Recess & Healthy Snack
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Supervised outdoor recess on green grounds, social interaction, and dining in clean cafeteria areas.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-blue-600 mb-1">
                  11:15 AM – 01:45 PM
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-navy-900 mb-2">
                  Labs, Arts & Co-Curriculars
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Computer and Science practicals, sports coaching, library reading, and character-building circles.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4 School Houses System */}
        <section className="py-16 md:py-24 bg-[#edf4fc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="HOUSE SYSTEM"
              title="Four Houses, One Family"
              subtitle="Instilling healthy competition, team loyalty, and leadership through our four school houses."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white rounded-3xl p-6 border-t-4 border-emerald-500 shadow-card">
                <span className="text-xs font-bold uppercase text-emerald-600 tracking-wider">Tariq House</span>
                <h3 className="font-serif font-bold text-xl text-brand-navy-900 my-2">Green Eagles</h3>
                <p className="text-slate-600 text-xs leading-relaxed">Motto: <em>Bravery & Perseverance</em>. Leading in athletic track sports and annual declamation.</p>
              </div>

              <div className="bg-white rounded-3xl p-6 border-t-4 border-blue-500 shadow-card">
                <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Iqbal House</span>
                <h3 className="font-serif font-bold text-xl text-brand-navy-900 my-2">Blue Falcons</h3>
                <p className="text-slate-600 text-xs leading-relaxed">Motto: <em>Vision & Intellect</em>. Championing science quizzes, essay writing, and innovation fairs.</p>
              </div>

              <div className="bg-white rounded-3xl p-6 border-t-4 border-amber-500 shadow-card">
                <span className="text-xs font-bold uppercase text-amber-600 tracking-wider">Jinnah House</span>
                <h3 className="font-serif font-bold text-xl text-brand-navy-900 my-2">Gold Lions</h3>
                <p className="text-slate-600 text-xs leading-relaxed">Motto: <em>Unity, Faith, Discipline</em>. Setting benchmarks in campus discipline and march-past.</p>
              </div>

              <div className="bg-white rounded-3xl p-6 border-t-4 border-rose-500 shadow-card">
                <span className="text-xs font-bold uppercase text-rose-600 tracking-wider">Sir Syed House</span>
                <h3 className="font-serif font-bold text-xl text-brand-navy-900 my-2">Red Hawks</h3>
                <p className="text-slate-600 text-xs leading-relaxed">Motto: <em>Wisdom & Service</em>. Renowned for drama productions, arts, and community clean-up drives.</p>
              </div>

            </div>
          </div>
        </section>

        <CampusCTABanner buttonText="Enroll Today" buttonLink="/admissions" />
      </main>
    </>
  );
};

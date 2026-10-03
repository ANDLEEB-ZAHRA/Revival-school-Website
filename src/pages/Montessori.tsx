import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { SEO } from '../components/ui/SEO';
import { Button } from '../components/ui/Button';
import { IMAGES } from '../data/images';
import { Sparkles, Heart, Smile, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export const Montessori: React.FC = () => {
  return (
    <>
      <SEO
        title="Montessori & Early Years Wing"
        description="Our Montessori and Early Years program creates a joyful, sensorial foundation for toddlers and young children at Revival School Gujrat."
      />

      <main className="bg-[#f8fafd]">
        <PageHero
          badge="FOUNDATION STAGE"
          title="Montessori & Early Years"
          subtitle="Where early curiosity blossoms into lifelong love for learning through hands-on sensory exploration, joy, and individual care."
          breadcrumb="Montessori"
          backgroundImage={IMAGES.montessoriChairs}
        />

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-600 block mb-1">
                    PLAYFUL DISCOVERY
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy-900 leading-tight">
                    Nurturing the First Steps of Education
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  In our Montessori Wing, every classroom is a thoughtfully prepared environment where children are encouraged to touch, explore, ask questions, and build fine motor precision at their natural pace.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Sensorial Montessori apparatus for shapes, dimensions, and color discrimination.',
                    'Jolly Phonics literacy framework empowering fluent early reading and pronunciation.',
                    'Practical Life Exercises (EPL) instilling independence, tidiness, and coordination.',
                    'Spiritual storytelling, Islamic manners, and daily dua recitations.',
                    'Low student-to-teacher ratio with loving, specialized female educators.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 size={18} className="text-brand-gold-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button to="/admissions" variant="primary" size="md" icon={<ArrowRight size={16} />}>
                    Register for Early Years (Age 3-5)
                  </Button>
                </div>
              </div>

              {/* Right Images Showcase */}
              <div className="lg:col-span-6 space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] group">
                  <img
                    src={IMAGES.montessoriChairs}
                    alt="Montessori Classroom"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden shadow border border-slate-200 aspect-[4/3]">
                    <img src={IMAGES.earlyYearsReading} alt="Kids Reading" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow border border-slate-200 aspect-[4/3]">
                    <img src={IMAGES.creativeHands} alt="Creative Hands" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4 Pillars of Early Childhood */}
        <section className="py-16 md:py-24 bg-[#f3f7fd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="DEVELOPMENTAL PILLARS"
              title="Holistic Early Childhood Growth"
              subtitle="Cultivating the cognitive, physical, emotional, and spiritual aspects of every young learner."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-card transition-all">
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-4">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-navy-900 mb-2">Sensory & Math</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Tactile counting beads, sorting towers, and geometrical solids creating intuitive arithmetic readiness.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-card transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-blue-600 flex items-center justify-center mb-4">
                  <Smile size={20} />
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-navy-900 mb-2">Language & Phonics</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Interactive multi-sensory letter sounds, rhyming songs, and expressive storytelling corners.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-card transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                  <Heart size={20} />
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-navy-900 mb-2">Adab & Character</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Fostering sharing, kindness, greeting etiquette (Salam), self-confidence, and emotional empathy.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-card transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <Clock size={20} />
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-navy-900 mb-2">Motor Coordination</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Fine motor scissors, clay modeling, outdoor balance games, and joyful musical physical movement.
                </p>
              </div>

            </div>
          </div>
        </section>

        <CampusCTABanner buttonText="Apply for Montessori" buttonLink="/admissions" />
      </main>
    </>
  );
};

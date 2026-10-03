import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { SEO } from '../components/ui/SEO';
import { IMAGES } from '../data/images';
import { Target, Compass, Heart, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us - Legacy & Vision"
        description="Learn about Revival School Gujrat, our educational philosophy, mission, leadership, and dedicated campuses."
      />

      <main className="bg-[#f8fafd]">
        <PageHero
          badge="ABOUT REVIVAL"
          title="A Legacy of Quality Education"
          subtitle="Operating under the Revival Education System, we nurture young minds through academic excellence, ethical grounding, and holistic personal growth."
          breadcrumb="About Us"
          backgroundImage={IMAGES.campusBuilding}
        />

        {/* School Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Image Showcase */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
                  <img
                    src={IMAGES.campusBuilding}
                    alt="Revival School Campus"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/60">
                    <h4 className="font-serif font-bold text-brand-navy-900 text-sm">
                      Revival School Gujrat Main Campus
                    </h4>
                    <p className="text-xs text-slate-500">
                      Spacious, purpose-built campus on Grand Trunk Road
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden shadow border border-slate-200 aspect-[4/3]">
                    <img src={IMAGES.welcomeHallway} alt="School Hallway" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow border border-slate-200 aspect-[4/3]">
                    <img src={IMAGES.resultsGrandHall} alt="Auditorium" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Right Story Text */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-600">
                    OUR HERITAGE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy-900 leading-tight">
                    Nurturing Tomorrow's Leaders Since Inception
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Revival School Gujrat was established with a singular vision: to create an educational sanctuary where academic rigor harmonizes with traditional Islamic ethics and modern 21st-century critical thinking.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Under the stewardship of the Revival Education System, we have grown into one of Gujrat’s most trusted educational institutions, renowned for stellar matriculation results, passionate educators, and vibrant co-curricular life.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Purpose-built campus with dedicated science, computer, and arts facilities.',
                    'Highly qualified and caring faculty committed to individualized student growth.',
                    'Balanced curriculum merging BISE board rigor with character-building programs.',
                    'Safe, secure, CCTV-monitored environment prioritizing student well-being.',
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 size={18} className="text-brand-blue-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission, Vision & Core Values */}
        <section className="py-16 md:py-24 bg-[#edf4fc] relative overflow-hidden" id="mission">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <SectionHeader
              badge="PURPOSE & PRINCIPLES"
              title="Mission, Vision & Core Values"
              subtitle="The pillars that define our pedagogical philosophy and everyday commitment to every learner."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Mission Card */}
              <div className="group bg-white hover:bg-gradient-to-br hover:from-brand-blue-700 hover:to-brand-navy-900 rounded-3xl p-8 border border-slate-200/80 hover:border-white/20 shadow-card hover:shadow-xl flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 group-hover:bg-white/15 group-hover:backdrop-blur-md text-brand-blue-600 group-hover:text-brand-gold-300 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Target size={26} />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-navy-900 group-hover:text-white mb-3 transition-colors duration-300">
                    Our Mission
                  </h3>
                  <p className="text-slate-600 group-hover:text-blue-100 text-xs sm:text-sm leading-relaxed transition-colors duration-300">
                    To deliver transformative education that equips students with intellectual competence, strong moral character, curiosity, and the resilience needed to excel in higher education and life.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-white/10 text-xs font-semibold text-brand-blue-600 group-hover:text-brand-gold-300 transition-colors duration-300">
                  Intellect • Morality • Action
                </div>
              </div>

              {/* Vision Card */}
              <div className="group bg-white hover:bg-gradient-to-br hover:from-brand-blue-700 hover:to-brand-navy-900 rounded-3xl p-8 border border-slate-200/80 hover:border-white/20 shadow-card hover:shadow-xl flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 group-hover:bg-white/15 group-hover:backdrop-blur-md text-brand-blue-600 group-hover:text-brand-gold-300 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Compass size={26} />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-navy-900 group-hover:text-white mb-3 transition-colors duration-300">
                    Our Vision
                  </h3>
                  <p className="text-slate-600 group-hover:text-blue-100 text-xs sm:text-sm leading-relaxed transition-colors duration-300">
                    To be the leading beacon of educational excellence in the region, celebrated for graduating knowledgeable, ethical, and visionary leaders who positively shape their families and society.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-white/10 text-xs font-semibold text-brand-blue-600 group-hover:text-brand-gold-300 transition-colors duration-300">
                  Leadership • Excellence • Heritage
                </div>
              </div>

              {/* Core Values Card */}
              <div className="group bg-white hover:bg-gradient-to-br hover:from-brand-blue-700 hover:to-brand-navy-900 rounded-3xl p-8 border border-slate-200/80 hover:border-white/20 shadow-card hover:shadow-xl flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold-50 group-hover:bg-white/15 group-hover:backdrop-blur-md text-brand-gold-600 group-hover:text-brand-gold-300 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Heart size={26} />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-navy-900 group-hover:text-white mb-3 transition-colors duration-300">
                    Core Values
                  </h3>
                  <ul className="text-slate-600 group-hover:text-blue-100 text-xs sm:text-sm space-y-2 transition-colors duration-300">
                    <li>
                      <strong className="text-slate-900 group-hover:text-white transition-colors duration-300">
                        Integrity & Adab:
                      </strong>{' '}
                      Moral uprightness and deep respect for teachers and peers.
                    </li>
                    <li>
                      <strong className="text-slate-900 group-hover:text-white transition-colors duration-300">
                        Excellence:
                      </strong>{' '}
                      Relentless pursuit of quality in every academic and co-curricular task.
                    </li>
                    <li>
                      <strong className="text-slate-900 group-hover:text-white transition-colors duration-300">
                        Empathy:
                      </strong>{' '}
                      Compassion, social responsibility, and teamwork.
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-white/10 text-xs font-semibold text-brand-gold-600 group-hover:text-brand-gold-300 transition-colors duration-300">
                  Adab • Excellence • Kindness
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Campuses & Infrastructure */}
        <section className="py-16 md:py-24 bg-white" id="campuses">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="FACILITIES & CAMPUSES"
              title="Modern Campus Infrastructure"
              subtitle="Purpose-built learning environments crafted to inspire, protect, and empower every student."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Boys Campus */}
              <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img src={IMAGES.assemblyPanorama} alt="Boys Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue-700 text-white shadow">
                      Boys Campus
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="font-serif font-bold text-2xl text-brand-navy-900">
                    Senior Boys Wing & Secondary Block
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Focused learning environment dedicated to Middle and Secondary matriculation studies with advanced Physics, Chemistry, and Computer laboratories.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                    <li>• Specialized science practical labs with modern apparatus</li>
                    <li>• Dedicated football, cricket, and sports athletic ground</li>
                    <li>• High-speed digital IT library and research hub</li>
                  </ul>
                </div>
              </div>

              {/* Girls Campus */}
              <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img src={IMAGES.secondaryAssembly} alt="Girls Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold-600 text-white shadow">
                      Girls & Junior Campus
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="font-serif font-bold text-2xl text-brand-navy-900">
                    Montessori, Primary & Girls Wing
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Secure, vibrant, and beautifully designed wing for Early Childhood Montessori, Primary grades, and Senior Girls secondary schooling.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                    <li>• Sensory play areas and Montessori apparatus suites</li>
                    <li>• Secure indoor courtyard and activity arena</li>
                    <li>• Dedicated science & art studios with female faculty leadership</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        <CampusCTABanner buttonText="Enroll Today" buttonLink="/admissions" />
      </main>
    </>
  );
};
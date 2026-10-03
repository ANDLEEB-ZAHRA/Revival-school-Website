import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { SEO } from '../components/ui/SEO';
import { FACULTY_DATA } from '../data/faculty';
import { IMAGES } from '../data/images';
import { Award, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Teachers: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Faculty & Academic Leadership"
        description="Meet the experienced educators, administrators, and mentors guiding students at Revival School Gujrat."
      />

      <main className="bg-[#f8fafd]">
        <PageHero
          badge="ACADEMIC LEADERSHIP"
          title="Meet Our Dedicated Faculty"
          subtitle="Experienced mentors and qualified subject specialists committed to igniting intellectual curiosity and modeling moral excellence."
          breadcrumb="Faculty"
          backgroundImage={IMAGES.teachersMeeting}
        />

        {/* Principal Message Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-brand-blue-700 via-brand-blue-800 to-brand-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                <div className="lg:col-span-4">
                  <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl aspect-[4/3] sm:aspect-square">
                    <img
                      src={IMAGES.principalDesk}
                      alt="Principal Revival School"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-300">
                    MESSAGE FROM THE PRINCIPAL
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    "Every child holds boundless potential waiting to be ignited."
                  </h2>
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                    At Revival School Gujrat, our teachers are more than classroom instructors; they are empathetic mentors, intellectual guides, and moral role models. We take immense pride in fostering an environment where curiosity is nurtured, discipline is practiced with love, and every learner feels valued.
                  </p>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-white text-base">Mrs. Tahira Yasmeen</h4>
                      <p className="text-xs text-brand-gold-300">Principal & Head of Academics</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Faculty Directory Grid */}
        <section className="py-16 md:py-24 bg-[#edf4fc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="FACULTY DIRECTORY"
              title="Section Leads & Department Heads"
              subtitle="Specialized educators bringing deep domain expertise and modern pedagogy to every classroom."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FACULTY_DATA.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[4/3.2] overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-navy-900 text-white shadow">
                        {member.department}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-brand-navy-900 group-hover:text-brand-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-brand-blue-600 mb-3">
                        {member.role}
                      </p>

                      <div className="space-y-1.5 text-xs text-slate-600 mb-4 border-t border-slate-100 pt-3">
                        <div className="flex items-start gap-1.5">
                          <GraduationCap size={13} className="text-brand-gold-600 shrink-0 mt-0.5" />
                          <span className="text-[11px]">{member.qualification}</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <Briefcase size={13} className="text-brand-gold-600 shrink-0 mt-0.5" />
                          <span className="text-[11px]">{member.experience}</span>
                        </div>
                      </div>

                      <p className="text-slate-500 text-xs leading-relaxed italic">
                        "{member.bio}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Join Our Faculty Callout */}
            <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-md text-center max-w-2xl mx-auto space-y-3">
              <Award size={32} className="text-brand-gold-500 mx-auto" />
              <h3 className="font-serif font-bold text-xl text-brand-navy-900">
                Are You a Passionate Educator?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                We are always seeking inspiring, qualified teachers to join the Revival Education System. Send your CV to careers@revivalschool.edu.pk.
              </p>
              <div className="pt-2">
                <Button to="/contact" variant="outline" size="sm">
                  Contact HR Department
                </Button>
              </div>
            </div>

          </div>
        </section>

        <CampusCTABanner buttonText="Enroll Today" buttonLink="/admissions" />
      </main>
    </>
  );
};

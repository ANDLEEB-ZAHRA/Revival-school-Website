import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { SEO } from '../components/ui/SEO';
import { MessageSquare, Calendar, ShieldCheck, Users, FileText, Bell, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Parents: React.FC = () => {
  return (
    <>
      <SEO
        title="Parents Hub & Community"
        description="Information, guidelines, communication channels, and resources for Revival School Gujrat parents."
      />

      <main className="bg-[#f8fafd]">
        <PageHero
          badge="PARENT COMMUNITY"
          title="Partners in Your Child's Growth"
          subtitle="We believe that a child's success is a collaborative triangle between the student, the school, and supportive parents."
          breadcrumb="Parents"
        />

        {/* Parent Communication Channels */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="COMMUNICATION & ENGAGEMENT"
              title="Staying Connected With School"
              subtitle="Multiple transparent channels ensuring parents are fully informed of their child's daily progress and well-being."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-card transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center mb-5">
                  <Bell size={24} />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-navy-900 mb-2">
                  Daily SMS & Diary Updates
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Real-time notifications regarding attendance, daily homework diaries, test schedules, and important school circulars.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-card transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold-50 text-brand-gold-600 flex items-center justify-center mb-5">
                  <Calendar size={24} />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-navy-900 mb-2">
                  Termly PTM Conferences
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Structured one-on-one consultative meetings with class teachers and subject specialists to review academic metrics.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-card transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-navy-900 text-white flex items-center justify-center mb-5">
                  <Users size={24} />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-navy-900 mb-2">
                  Parent-Teacher Association
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  An active advisory forum providing constructive parent suggestions for campus improvements and community events.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Parent Testimonials Section Component */}
        <TestimonialsSection />

        {/* Code of Conduct & Guidelines */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-blue-50/70 rounded-3xl p-8 sm:p-12 border border-brand-blue-100 max-w-4xl mx-auto space-y-6">
              <h3 className="font-serif font-bold text-2xl text-brand-navy-900 text-center">
                Parent Code of Partnership
              </h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-brand-blue-600 shrink-0 mt-0.5" />
                  <span>Ensure punctual student arrival by 7:45 AM in complete, neat school uniform.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-brand-blue-600 shrink-0 mt-0.5" />
                  <span>Inspect and sign the student school diary every evening for homework tasks.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-brand-blue-600 shrink-0 mt-0.5" />
                  <span>Notify the administration promptly in case of illness or planned absence.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-brand-blue-600 shrink-0 mt-0.5" />
                  <span>Maintain respectful communication with school staff and schedule visits through front office.</span>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button to="/contact" variant="primary" size="md">
                  Book Parent Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CampusCTABanner buttonText="Enroll Your Child" buttonLink="/admissions" />
      </main>
    </>
  );
};

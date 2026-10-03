import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SEO } from '../components/ui/SEO';

export const Terms: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms of enrollment, campus discipline guidelines, and fee policies at Revival School Gujrat."
      />

      <main className="bg-[#f8fafd]">
        <PageHero
          badge="LEGAL & POLICIES"
          title="Terms & Conditions"
          subtitle="Enrollment guidelines, institutional policies, and code of conduct at Revival School Gujrat."
          breadcrumb="Terms"
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-xs sm:text-sm leading-relaxed space-y-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy-900">1. Enrollment & Admission Offer</h2>
            <p className="text-slate-600">
              Admission offers are finalized following successful assessment tests, verification of authentic NADRA/academic records, and payment of the designated admission dues. The school reserves the right to cancel enrollment if submitted documentation is found to be inaccurate or forged.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy-900">2. Attendance & Punctuality</h2>
            <p className="text-slate-600">
              Students are required to maintain a minimum of 85% attendance across each academic term to remain eligible for board registration and promotional term examinations. Unscheduled leaves must be backed by a written medical certificate or parent letter.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy-900">3. Student Code of Discipline</h2>
            <p className="text-slate-600">
              Revival School places paramount value on moral integrity (Adab), mutual respect, zero-tolerance towards bullying, and adherence to neat uniform standards. Persistent disciplinary breaches may result in parental warning or suspension.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy-900">4. Fee Schedule & Payment Terms</h2>
            <p className="text-slate-600">
              Monthly tuition fees are payable by the 10th of each calendar month via authorized bank challan vouchers. Late fees apply after the due date as per standard institutional schedule.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

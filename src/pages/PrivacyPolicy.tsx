import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SEO } from '../components/ui/SEO';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy and data protection standards at Revival School Gujrat."
      />

      <main className="bg-[#f8fafd]">
        <PageHero
          badge="LEGAL & POLICIES"
          title="Privacy Policy"
          subtitle="How Revival School Gujrat safeguards student and family personal information."
          breadcrumb="Privacy Policy"
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-xs sm:text-sm leading-relaxed space-y-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy-900">1. Information Collection</h2>
            <p className="text-slate-600">
              Revival School Gujrat collects personal information during admission registration, including student names, birth dates, academic history, parental contact numbers, email addresses, and identification documents (NADRA B-Form and CNICs) solely for educational record-keeping, institutional communication, and regulatory BISE examination registration.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy-900">2. Confidentiality & Security</h2>
            <p className="text-slate-600">
              All student and parent records are treated with the highest standard of confidentiality. We do not sell, rent, or lease student or parental contact information to third-party commercial advertisers or external marketing entities under any circumstance.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy-900">3. Campus Surveillance & Safety</h2>
            <p className="text-slate-600">
              For student safety and perimeter protection, our school campus is monitored by continuous closed-circuit television (CCTV). Footage is retained securely on local institutional servers and is accessed solely by authorized security and administrative personnel.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy-900">4. Contacting the Administration</h2>
            <p className="text-slate-600">
              For any questions regarding personal data records or information updates, please email privacy@revivalschool.edu.pk or visit our main administrative office.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

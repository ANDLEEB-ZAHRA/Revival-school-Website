import React, { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { SEO } from '../components/ui/SEO';
import { FAQS_DATA } from '../data/faqs';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<string | null>('f1');

  const filteredFaqs = selectedCategory === 'all'
    ? FAQS_DATA
    : FAQS_DATA.filter((f) => f.category === selectedCategory);

  return (
    <>
      <SEO
        title="Frequently Asked Questions (FAQ)"
        description="Find answers to all frequently asked questions about admissions, academics, facilities, campus life, and transport at Revival School Gujrat."
      />

      <main className="bg-[#f8fafd]">
        <PageHero
          badge="HELP & CLARIFICATIONS"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our admissions, fee structures, academic programs, and school operations."
          breadcrumb="FAQ"
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {[
                { id: 'all', label: 'All Questions' },
                { id: 'admissions', label: 'Admissions & Fees' },
                { id: 'academics', label: 'Academics & Board' },
                { id: 'facilities', label: 'Campuses & Security' },
                { id: 'general', label: 'Transport & General' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-brand-blue-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-[#f8fafd] rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-100/60 transition-colors"
                    >
                      <span className="font-serif font-bold text-base sm:text-lg text-brand-navy-900">
                        {faq.question}
                      </span>
                      <span className="text-brand-blue-600 shrink-0">
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/70 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Still Have Questions Box */}
            <div className="mt-14 p-8 rounded-3xl bg-brand-blue-50 border border-brand-blue-100 text-center space-y-3">
              <MessageSquare size={32} className="text-brand-blue-600 mx-auto" />
              <h3 className="font-serif font-bold text-xl text-brand-navy-900">
                Still have unanswered questions?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Our admissions officers are available to assist you via phone or in person Monday through Saturday.
              </p>
              <div className="pt-2">
                <Button to="/contact" variant="primary" size="md">
                  Contact Admissions Desk
                </Button>
              </div>
            </div>

          </div>
        </section>

        <CampusCTABanner buttonText="Apply for Admission" buttonLink="/admissions" />
      </main>
    </>
  );
};

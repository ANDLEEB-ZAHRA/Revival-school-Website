import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { SEO } from '../components/ui/SEO';
import { SCHOOL_EVENTS } from '../data/events';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/images';
import { Button } from '../components/ui/Button';

export const Events: React.FC = () => {
  return (
    <>
      <SEO
        title="School Events & Annual Calendar"
        description="Stay updated with upcoming academic, cultural, sports, and community events at Revival School Gujrat."
      />

      <main className="bg-[#f8fafd]">
        <PageHero
          badge="CALENDAR & HIGHLIGHTS"
          title="Events & Celebrations"
          subtitle="From academic convocations and annual sports galas to national day celebrations and parent-teacher summits."
          breadcrumb="Events"
          backgroundImage={IMAGES.resultsGrandHall}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="ANNUAL CELEBRATIONS"
              title="Featured School Events"
              subtitle="Memorable milestones that bring our student body, faculty, and parent community together."
            />

            <div className="space-y-8">
              {SCHOOL_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="bg-[#f8fafd] rounded-3xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group"
                >
                  {/* Event Thumbnail */}
                  <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-100 min-h-[220px]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold-500 text-white shadow">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-blue-700 mb-2">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-brand-gold-600" />
                          <span>{event.date}</span>
                        </div>
                        {event.time && (
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <Clock size={14} />
                            <span>{event.time}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="font-serif font-bold text-2xl text-brand-navy-900 group-hover:text-brand-blue-600 transition-colors mb-3">
                        {event.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <MapPin size={14} className="text-brand-gold-600 shrink-0" />
                        <span>{event.location}</span>
                      </div>

                      <Button to="/contact" variant="ghost" size="sm" icon={<ArrowRight size={14} />}>
                        Enquire Event
                      </Button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <CampusCTABanner buttonText="Enroll for 2026 Session" buttonLink="/admissions" />
      </main>
    </>
  );
};

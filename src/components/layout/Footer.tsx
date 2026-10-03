import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CAMPUS_INFO } from '../../data/navigation';
import { IMAGES } from '../../data/images';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy-900 text-white pt-16 pb-12 border-t border-brand-blue-900/50 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-96 h-96 opacity-5 pointer-events-none">
        <img src={IMAGES.watermarkSeal} alt="" className="w-full h-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">

          {/* Brand & Crest Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={IMAGES.logo}
                alt="Revival School Gujrat"
                className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white tracking-tight">
                  REVIVAL
                </h3>
                <p className="text-xs font-bold text-brand-gold-400 tracking-[0.2em] uppercase">
                  SCHOOL GUJRAT
                </p>
                <p className="text-[11px] text-slate-400 mt-1 font-medium tracking-wide">
                  Learn • Grow • Succeed
                </p>
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              Dedicated to nurturing young minds with academic rigor, Islamic values, discipline, and modern pedagogical excellence under the Revival Education System.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-brand-gold-300">
                Admissions Open for Session 2026-2027
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-white tracking-wide border-b border-brand-gold-500/40 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-brand-gold-500 text-xs">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-brand-gold-500 text-xs">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-brand-gold-500 text-xs">›</span> Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-brand-gold-500 text-xs">›</span> Admissions
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-brand-gold-500 text-xs">›</span> Activities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-brand-gold-500 text-xs">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-brand-gold-500 text-xs">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Campuses Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-base text-white tracking-wide border-b border-brand-gold-500/40 pb-2 inline-block">
              Our Campuses
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/about#campuses" className="hover:text-brand-gold-400 transition-colors block">
                  <div className="font-semibold text-white">Boys Campus</div>
                  <div className="text-[11px] text-slate-400">Senior Grades & Science Labs</div>
                </Link>
              </li>
              <li>
                <Link to="/about#campuses" className="hover:text-brand-gold-400 transition-colors block">
                  <div className="font-semibold text-white">Girls Campus</div>
                  <div className="text-[11px] text-slate-400">Montessori to Grade 10</div>
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/montessori" className="text-xs text-brand-gold-400 hover:underline">
                  Montessori Early Years Wing →
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-white tracking-wide border-b border-brand-gold-500/40 pb-2 inline-block">
              Location
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-brand-gold-400 shrink-0 mt-0.5" />
                <span>{CAMPUS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-brand-gold-400 shrink-0" />
                <a href={`tel:${CAMPUS_INFO.phone}`} className="hover:text-brand-gold-400 transition-colors">
                  {CAMPUS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-brand-gold-400 shrink-0" />
                <a href={`mailto:${CAMPUS_INFO.email}`} className="hover:text-brand-gold-400 transition-colors">
                  {CAMPUS_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-xs font-serif italic text-brand-gold-300">
                Education | Character | A Brighter Future
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Revival School Gujrat. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/faq" className="hover:text-slate-200 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

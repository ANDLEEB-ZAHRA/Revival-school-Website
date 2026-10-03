import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from './Badge';
import { ChevronRight, Home } from 'lucide-react';
import { IMAGES } from '../../data/images';

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumb?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  subtitle,
  breadcrumb,
  backgroundImage,
  children,
}) => {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#edf4fc] via-[#f4f8fd] to-[#f8fafd] overflow-hidden border-b border-slate-200/60">
      {/* Background Watermark Crest */}
      <div className="absolute top-1/2 right-4 md:right-16 -translate-y-1/2 w-64 md:w-96 opacity-10 pointer-events-none select-none">
        <img src={IMAGES.watermarkSeal} alt="" className="w-full h-auto" />
      </div>

      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none mix-blend-multiply"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Decorative Blur Circles */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-brand-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-gold-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-1.5 text-xs text-slate-500 mb-6 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
          <Link to="/" className="hover:text-brand-blue-600 flex items-center gap-1 transition-colors">
            <Home size={13} />
            <span>Home</span>
          </Link>
          <ChevronRight size={12} className="text-slate-400" />
          <span className="font-semibold text-brand-blue-900">{breadcrumb || title}</span>
        </nav>

        {/* Badge */}
        <div className="mb-4">
          <Badge>{badge}</Badge>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-navy-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-5">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
};

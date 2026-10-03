import React from 'react';
import { Badge } from './Badge';
import { IMAGES } from '../../data/images';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  showWatermark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  showWatermark = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`relative mb-10 md:mb-14 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {showWatermark && (
        <div className="absolute -top-10 -right-12 md:-right-24 w-28 md:w-36 opacity-30 pointer-events-none hidden sm:block">
          <img src={IMAGES.watermarkSeal} alt="Revival Crest" className="w-full h-auto object-contain" />
        </div>
      )}
      
      <div className="mb-3">
        <Badge>{badge}</Badge>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-serif font-bold text-brand-navy-900 tracking-tight leading-[1.2] mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className={`text-slate-600 text-sm sm:text-base leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

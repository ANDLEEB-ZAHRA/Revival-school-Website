import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'navy' | 'gold' | 'glass';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'white',
  hoverEffect = false,
}) => {
  const variantStyles = {
    white: 'bg-white text-slate-800 border border-slate-100 shadow-card',
    navy: 'bg-gradient-to-br from-brand-blue-700 to-brand-navy-900 text-white shadow-xl border border-white/10',
    gold: 'bg-brand-gold-50 text-slate-900 border border-brand-gold-200 shadow-sm',
    glass: 'bg-white/80 backdrop-blur-md border border-white/60 shadow-lg text-slate-800',
  };

  return (
    <div
      className={`rounded-2xl md:rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
        variantStyles[variant]
      } ${hoverEffect ? 'hover:shadow-card-hover hover:-translate-y-1' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

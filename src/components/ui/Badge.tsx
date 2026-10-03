import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'gold' | 'blue' | 'white';
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  className = '', 
  variant = 'gold' 
}) => {
  if (variant === 'gold') {
    return (
      <div className={`inline-flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.18em] uppercase text-brand-gold-600 select-none ${className}`}>
        <span className="w-6 sm:w-8 h-[1.5px] bg-brand-gold-500 rounded-full"></span>
        <span>{children}</span>
        <span className="w-6 sm:w-8 h-[1.5px] bg-brand-gold-500 rounded-full"></span>
      </div>
    );
  }

  if (variant === 'blue') {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md border border-white/30 ${className}`}>
      {children}
    </div>
  );
};

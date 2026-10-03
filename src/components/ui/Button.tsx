import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'gold' | 'outline' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-full',
    md: 'px-6 py-2.5 text-sm font-semibold rounded-full',
    lg: 'px-8 py-3.5 text-base font-bold rounded-full',
  };

  const variantClasses = {
    primary: 'bg-brand-blue-600 hover:bg-brand-blue-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:bg-brand-blue-800 focus:ring-4 focus:ring-brand-blue-300 transition-all duration-200',
    gold: 'bg-brand-gold-500 hover:bg-brand-gold-600 text-white shadow-md hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 active:bg-brand-gold-700 focus:ring-4 focus:ring-brand-gold-300 transition-all duration-200',
    outline: 'bg-white hover:bg-brand-blue-50 text-brand-blue-700 border-2 border-brand-blue-600 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200',
    white: 'bg-white hover:bg-slate-50 text-brand-blue-900 font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200',
    ghost: 'bg-transparent hover:bg-brand-blue-50 text-brand-blue-700 font-semibold transition-colors duration-200',
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 transition-all duration-200 select-none text-center ${
    sizeClasses[size]
  } ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  );
};

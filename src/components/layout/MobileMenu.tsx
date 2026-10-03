import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, Phone, MapPin, ArrowRight } from 'lucide-react';
import { NavItem } from '../../types';
import { CAMPUS_INFO } from '../../data/navigation';
import { IMAGES } from '../../data/images';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  links,
}) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const location = useLocation();

  if (!isOpen) return null;

  const toggleExpand = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl z-50 flex flex-col overflow-y-auto animate-slideLeft">

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <img src={IMAGES.logo} alt="Revival Logo" className="h-9 w-auto" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-brand-navy-900 text-sm">REVIVAL</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">School Gujrat</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 p-4 space-y-1">
          {links.map((link) => {
            const isActive = location.pathname === link.href;
            const hasChildren = link.children && link.children.length > 0;
            const isExpanded = expandedItem === link.name;

            return (
              <div key={link.name} className="rounded-xl overflow-hidden">
                <div className="flex items-center justify-between">
                  <Link
                    to={link.href}
                    onClick={() => {
                      if (!hasChildren) onClose();
                    }}
                    className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${isActive
                        ? 'bg-brand-blue-50 text-brand-blue-700 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-brand-blue-600'
                      }`}
                  >
                    {link.name}
                  </Link>
                  {hasChildren && (
                    <button
                      onClick={() => toggleExpand(link.name)}
                      className="p-2.5 text-slate-400 hover:text-brand-blue-600"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-180 text-brand-blue-600' : ''}`}
                      />
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {hasChildren && isExpanded && (
                  <div className="ml-3 pl-3 border-l-2 border-brand-blue-100 py-1 space-y-1 bg-slate-50/60 rounded-r-lg my-1">
                    {link.children?.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        onClick={onClose}
                        className="block py-2 px-2.5 rounded-md text-xs font-medium text-slate-600 hover:text-brand-blue-700 hover:bg-brand-blue-50"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer & Apply CTA */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/80 space-y-3">
          <Button
            to="/admissions"
            variant="primary"
            fullWidth
            onClick={onClose}
            icon={<ArrowRight size={16} />}
          >
            Apply for Admission
          </Button>

          <div className="pt-2 space-y-2 text-xs text-slate-600">
            <a href={`tel:${CAMPUS_INFO.phone}`} className="flex items-center gap-2 hover:text-brand-blue-600">
              <Phone size={14} className="text-brand-gold-600" />
              <span>{CAMPUS_INFO.phone}</span>
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-brand-gold-600 shrink-0 mt-0.5" />
              <span>{CAMPUS_INFO.address}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

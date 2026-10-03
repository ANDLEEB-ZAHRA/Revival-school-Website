import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, GraduationCap, MapPin } from 'lucide-react';
import { NAVIGATION_LINKS, CAMPUS_INFO } from '../../data/navigation';
import { IMAGES } from '../../data/images';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <img
                src={IMAGES.logo}
                alt="Revival School Gujrat"
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-serif font-extrabold text-brand-navy-900 text-lg sm:text-xl tracking-tight leading-none">
                  REVIVAL
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-[0.18em] uppercase leading-tight mt-0.5">
                  School Gujrat
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAVIGATION_LINKS.map((item) => {
                const isActive = location.pathname === item.href || 
                  (item.href !== '/' && location.pathname.startsWith(item.href));
                const hasChildren = item.children && item.children.length > 0;

                return (
                  <div
                    key={item.name}
                    className="relative group py-2"
                    onMouseEnter={() => hasChildren && setActiveDropdown(item.name)}
                    onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? 'text-brand-blue-600 bg-brand-blue-50/80 font-bold'
                          : 'text-slate-700 hover:text-brand-blue-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      {hasChildren && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 text-slate-400 group-hover:text-brand-blue-600 group-hover:rotate-180`}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {hasChildren && (
                      <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block p-2.5 rounded-xl hover:bg-brand-blue-50/70 transition-colors group/item"
                            >
                              <div className="text-xs font-bold text-slate-800 group-hover/item:text-brand-blue-700">
                                {child.name}
                              </div>
                              {child.description && (
                                <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                                  {child.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                to="/admissions"
                variant="primary"
                size="sm"
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider"
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                to="/admissions"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex px-3.5 py-1.5 text-[11px] font-bold"
              >
                Apply
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="p-2 rounded-xl text-slate-700 hover:text-brand-blue-600 hover:bg-slate-100 focus:outline-none transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={NAVIGATION_LINKS}
      />
    </>
  );
};

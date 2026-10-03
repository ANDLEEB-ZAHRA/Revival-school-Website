import React from 'react';
import { Home } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/ui/SEO';
import { IMAGES } from '../data/images';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="Page Not Found (404)" description="The requested page could not be found." />
      <main className="min-h-[75vh] flex items-center justify-center py-24 px-4 bg-[#f8fafd]">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
          <img src={IMAGES.logo} alt="Revival Crest" className="w-20 h-auto mx-auto opacity-80" />

          <div className="space-y-2">
            <span className="text-4xl sm:text-5xl font-serif font-bold text-brand-blue-600 block">404</span>
            <h1 className="text-2xl font-serif font-bold text-brand-navy-900">Page Not Found</h1>
            <p className="text-xs sm:text-sm text-slate-600">
              The page you are looking for might have been moved or is temporarily unavailable.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/" variant="primary" size="sm" icon={<Home size={16} />}>
              Back to Home
            </Button>
            <Button to="/contact" variant="outline" size="sm">
              Contact Support
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

import React, { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { LightboxModal } from '../components/ui/LightboxModal';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { SEO } from '../components/ui/SEO';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import { GalleryItem } from '../types';
import { Eye, Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setSelectedIndex(index);
  };

  const handlePrev = () => {
    const newIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % filteredItems.length;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <>
      <SEO
        title="Moments That Matter - Gallery"
        description="Explore memorable moments, achievements, activities, and campus life at Revival School Gujrat."
      />

      <main className="bg-[#f8fafd]">
        {/* Page Hero matching reference */}
        <PageHero
          badge="OUR GALLERY"
          title="Moments That Matter"
          subtitle="Explore the memorable moments, achievements, activities, and everyday experiences that make Revival School Gujrat a place where students learn, grow, and shine."
          breadcrumb="Gallery"
        >
          {/* Filter Pills matching reference */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shadow-sm ${
                    isActive
                      ? 'bg-brand-gold-500 text-white shadow-glow scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-brand-blue-700 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </PageHero>

        {/* Gallery Grid Section */}
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item, index)}
                  className="group cursor-pointer flex flex-col items-center"
                >
                  {/* Photo Frame Container with rounded border matching reference */}
                  <div className="relative aspect-[4/3.2] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-card border-2 border-slate-800/10 group-hover:border-brand-blue-500 transition-all duration-300 group-hover:shadow-card-hover group-hover:-translate-y-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-brand-navy-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="p-3 rounded-full bg-white/90 text-brand-navy-900 shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Eye size={20} />
                      </span>
                    </div>

                    {/* Small category tag */}
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-gold-500 text-white shadow">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Caption underneath matching reference */}
                  <h3 className="mt-3.5 font-serif font-bold text-base sm:text-lg text-brand-navy-900 group-hover:text-brand-blue-600 transition-colors text-center">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
                <ImageIcon className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <h3 className="font-serif font-bold text-lg text-slate-700">No images in this category</h3>
                <p className="text-slate-500 text-sm mt-1">Please select another category above.</p>
              </div>
            )}

          </div>
        </section>

        {/* Fullscreen Lightbox Modal */}
        <LightboxModal
          item={selectedImage}
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          currentIndex={selectedIndex}
          totalCount={filteredItems.length}
        />

        {/* CTA Banner */}
        <CampusCTABanner buttonText="Apply Now" buttonLink="/admissions" />
      </main>
    </>
  );
};

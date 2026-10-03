import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Revival School Gujrat | Inspiring Learning, Building Futures',
  description = 'Revival School Gujrat is a premier private secondary school providing excellence in academics, character development, ethics, and leadership.',
  keywords,
  image,
}) => {
  useEffect(() => {
    // Update Title
    document.title = title.includes('Revival School') ? title : `${title} | Revival School Gujrat`;

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Scroll to top on route render
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, keywords, image]);

  return null;
};

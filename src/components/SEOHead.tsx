import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Andrea Cozart-Lundin | Full Stack Developer & Creative Technologist Portfolio",
  description = "Experienced Full Stack Developer & Creative Technologist from Battle Creek, Michigan. Specializing in React, TypeScript, Next.js, Astro, hardware hacking, and drone building. Creating innovative web applications, SaaS platforms, and AI-powered solutions.",
  canonical = "https://andreacozart.me/",
  image = "https://andreacozart.me/Cozy1.png",
  type = "profile"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update canonical URL
    let canonical_link = document.querySelector('link[rel="canonical"]');
    if (!canonical_link) {
      canonical_link = document.createElement('link');
      canonical_link.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical_link);
    }
    canonical_link.setAttribute('href', canonical);

    // Update Open Graph tags
    const updateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMetaProperty('og:title', title);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:url', canonical);
    updateMetaProperty('og:image', image);
    updateMetaProperty('og:type', type);

    // Update Twitter Card tags
    const updateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateTwitterMeta('twitter:title', title);
    updateTwitterMeta('twitter:description', description);
    updateTwitterMeta('twitter:image', image);
    updateTwitterMeta('twitter:url', canonical);

  }, [title, description, canonical, image, type]);

  return null;
};

export default SEOHead;
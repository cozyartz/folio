import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Andrea \"Cozy\" Cozart-Lundin | Co-Founder AutiMind Inc. | CTO Cozyartz Media Group",
  description = "Andrea \"Cozy\" Cozart-Lundin - Tech entrepreneur and Co-Founder of AutiMind Inc. CTO at Cozyartz Media Group. 9+ years full-stack developer specializing in Next.js, React, AI/LLMs, blockchain, and modern cloud infrastructure. Built AstroLMS and ZServed platforms. Based in Battle Creek, Michigan, serving neurodiverse and LGBTQ+ communities.",
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
    updateTwitterMeta('twitter:card', 'summary_large_image');

    // Add structured data (JSON-LD)
    const existingScript = document.querySelector('#structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Andrea Cozart-Lundin",
      "alternateName": "Cozy",
      "description": "Tech entrepreneur, Co-Founder of AutiMind Inc., and CTO at Cozyartz Media Group",
      "url": canonical,
      "image": image,
      "sameAs": [
        "https://github.com/cozyartz",
        "https://linkedin.com/in/andrea-cozart-lundin",
        "https://link.andreacozart.me"
      ],
      "jobTitle": ["Co-Founder", "CTO", "Full Stack Developer"],
      "worksFor": [
        {
          "@type": "Organization",
          "name": "AutiMind, Inc."
        },
        {
          "@type": "Organization", 
          "name": "Cozyartz Media Group"
        }
      ],
      "knowsAbout": [
        "Next.js", "React", "TypeScript", "Node.js", "Python", "AI/LLMs", 
        "Blockchain", "Cloud Infrastructure", "Cloudflare", "Firebase",
        "Full Stack Development", "SaaS Development", "Web3"
      ],
      "addressLocality": "Battle Creek",
      "addressRegion": "Michigan",
      "addressCountry": "US"
    };

    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add additional meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMeta('author', 'Andrea Cozart-Lundin');
    updateMeta('keywords', 'Andrea Cozart-Lundin, Cozy, Full Stack Developer, CTO, AutiMind, Cozyartz Media Group, Next.js, React, TypeScript, AI, LLMs, Blockchain, Battle Creek Michigan, LGBTQ+ Tech, Neurodiverse');
    updateMeta('robots', 'index, follow');
    updateMeta('googlebot', 'index, follow');
    updateMeta('theme-color', '#1e293b');
    updateMeta('msapplication-TileColor', '#1e293b');

  }, [title, description, canonical, image, type]);

  return null;
};

export default SEOHead;
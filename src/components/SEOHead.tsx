import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Andrea Cozart-Lundin | Founder of State of Stick, Co. Inc.",
  description = "Andrea Cozart-Lundin is the founder of State of Stick, Co. Inc., a Michigan company connecting physical products and digital experiences. Explore ZapLatch, ALTstatic, creative technology, manufacturing, and software.",
  canonical = "https://andreacozart.me/",
  image = "https://andreacozart.me/connected-products.webp",
  type = "profile",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update canonical URL
    let canonical_link = document.querySelector('link[rel="canonical"]');
    if (!canonical_link) {
      canonical_link = document.createElement("link");
      canonical_link.setAttribute("rel", "canonical");
      document.head.appendChild(canonical_link);
    }
    canonical_link.setAttribute("href", canonical);

    // Update Open Graph tags
    const updateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMetaProperty("og:title", title);
    updateMetaProperty("og:description", description);
    updateMetaProperty("og:url", canonical);
    updateMetaProperty("og:image", image);
    updateMetaProperty("og:type", type);

    // Update Twitter Card tags
    const updateTwitterMeta = (name: string, content: string) => {
      let meta =
        document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateTwitterMeta("twitter:title", title);
    updateTwitterMeta("twitter:description", description);
    updateTwitterMeta("twitter:image", image);
    updateTwitterMeta("twitter:url", canonical);
    updateTwitterMeta("twitter:card", "summary_large_image");

    // Add structured data (JSON-LD)
    const existingScript = document.querySelector("#structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Andrea Cozart-Lundin",
      alternateName: "cozyartz",
      description:
        "Founder of State of Stick, Co. Inc., artist, creative technologist, FAA Part 107 drone pilot, and full-stack product builder.",
      url: canonical,

      sameAs: [
        "https://github.com/cozyartz",
        "https://linkedin.com/in/andrea-cozart-lundin",
        "https://link.andreacozart.me",
        "https://stateofstick.co",
        "https://techbinbytes.com",
        "https://techflunkylabs.com",
      ],
      jobTitle: [
        "Artist",
        "Creative Technologist",
        "Full-Stack Developer",
        "Founder",
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "TechFlunky Labs, LLC",
          url: "https://techflunkylabs.com",
        },
        {
          "@type": "Organization",
          name: "State of Stick, Co. Inc.",
          url: "https://stateofstick.co",
        },
        {
          "@type": "Organization",
          name: "TechBinBytes",
          url: "https://techbinbytes.com",
        },
        {
          "@type": "Organization",
          name: "Cozyartz Media Group",
        },
      ],
      knowsAbout: [
        "Laser Fabrication",
        "Acrylic Fabrication",
        "Interactive Art",
        "Public Art",
        "NFC Technology",
        "QR Experiences",
        "Drone Piloting",
        "Aerial Mapping",
        "Creative Technology",
        "Live Commerce",
        "E-Commerce",
        "Email Marketing Automation",
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "AI/LLMs",
        "Cloudflare",
        "Full Stack Development",
        "SaaS Development",
      ],
      addressLocality: "Battle Creek",
      addressRegion: "Michigan",
      addressCountry: "US",
    };

    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add additional meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMeta("author", "Andrea Cozart-Lundin");
    updateMeta(
      "keywords",
      "Andrea Cozart-Lundin, State of Stick Co, connected products, creative technologist, ArtPrize, laser fabrication, NFC products, QR experiences, public art, FAA Part 107, full stack developer, React, TypeScript, Cloudflare, Battle Creek Michigan",
    );
    updateMeta("robots", "index, follow");
    updateMeta("googlebot", "index, follow");
    updateMeta("theme-color", "#050707");
    updateMeta("msapplication-TileColor", "#050707");
  }, [title, description, canonical, image, type]);

  return null;
};

export default SEOHead;

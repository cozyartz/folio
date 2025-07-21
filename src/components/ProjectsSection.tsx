import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  // Generate schema markup for projects
  const generateProjectSchema = () => {
    const portfolioSchema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Andrea Cozart-Lundin Portfolio Projects",
      "creator": {
        "@type": "Person",
        "name": "Andrea Cozart-Lundin",
        "url": "https://andreacozart.me"
      },
      "hasPart": projects.map(project => ({
        "@type": "SoftwareApplication",
        "name": project.title,
        "description": project.description,
        "url": project.liveUrl || project.githubUrl,
        "applicationCategory": "WebApplication",
        "programmingLanguage": project.language,
        "creator": {
          "@type": "Person",
          "name": "Andrea Cozart-Lundin"
        },
        "codeRepository": project.githubUrl,
        "keywords": project.technologies.join(", ")
      }))
    };
    
    return JSON.stringify(portfolioSchema);
  };
  const saasProjects = [
    {
      title: "AstroLMS",
      description: "Revolutionary AI-powered Learning Management System transforming education through adaptive learning algorithms, real-time collaboration, and comprehensive analytics. Built for modern institutions with blockchain-inspired architecture and targeting the $350B LMS market.",
      technologies: ["AI/ML", "React", "Node.js", "Blockchain", "Cloud Native", "Multi-Language"],
      url: "https://astrolms.com",
      marketSize: "$350B",
      stage: "Beta Q4 2025",
      category: "EdTech SaaS",
      highlight: "AI-Powered LMS",
      stats: {
        market: "$350B Total LMS Market",
        growth: "42% of US VC funding in AI",
        target: "$32B AI Education by 2032"
      }
    },
    {
      title: "Zserved",
      description: "AI-powered legal document delivery platform revolutionizing process serving with real-time GPS tracking, blockchain-verified proof of service, and sub-50ms global response times. Built on Cloudflare's edge infrastructure with 10x cost advantage.",
      technologies: ["AI/ML", "Cloudflare Workers", "Edge Computing", "Blockchain", "GPS Tracking", "Legal Tech"],
      url: "https://zserved.com",
      marketSize: "$2.1B",
      stage: "Seed Stage",
      category: "LegalTech SaaS",
      highlight: "Edge-Native AI Platform",
      stats: {
        market: "$2.1B Process Serving Market",
        automation: "44% Legal Process Automation",
        advantage: "10x Cost Advantage"
      }
    }
  ];

  const projects = [
    {
      title: "Modern Portfolio Website",
      description: "Personal portfolio showcasing full-stack development expertise with React, TypeScript, and Vite. Features responsive design, smooth animations, GitHub integration, and optimized performance with modern web technologies.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide React"],
      githubUrl: "https://github.com/cozyartz/folio",
      liveUrl: "https://andreacozart.me",
      stars: 0,
      forks: 0,
      language: "TypeScript",
      lastUpdated: "2024"
    },
    {
      title: "AstroLMS Learning Platform",
      description: "AI-powered Learning Management System landing page built with Astro. Features investor information, course management capabilities, and responsive design optimized for educational technology platforms.",
      technologies: ["Astro", "React", "Tailwind CSS", "Cloudflare Pages"],
      githubUrl: "https://github.com/AutiMind/AstroLMS-landing",
      liveUrl: "https://astrolms-landing.pages.dev",
      stars: 0,
      forks: 0,
      language: "Astro",
      lastUpdated: "2024"
    },
    {
      title: "EtchNFT Marketplace",
      description: "Innovative e-commerce platform bridging digital and physical art by enabling NFT etching onto physical materials. Features user authentication, payment processing, and custom manufacturing integration.",
      technologies: ["TypeScript", "React", "Node.js", "E-commerce", "NFT Integration"],
      githubUrl: "https://github.com/cozyartz/etchNFT",
      liveUrl: "https://etchnft.com",
      stars: 0,
      forks: 0,
      language: "TypeScript",
      lastUpdated: "2024"
    },
    {
      title: "Cozyartz Media Group",
      description: "Professional corporate website for creative technology services. Features service portfolios, client testimonials, contact forms, and modern responsive design with performance optimization.",
      technologies: ["TypeScript", "React", "Tailwind CSS", "Responsive Design"],
      githubUrl: "https://github.com/cozyartz/cmgsite",
      liveUrl: "https://cozyartzmedia.com",
      stars: 0,
      forks: 0,
      language: "TypeScript",
      lastUpdated: "2024"
    },
    {
      title: "HippiStuff Boutique",
      description: "Boho-themed e-commerce website featuring unique aesthetic design, product catalogs, and user-friendly shopping experience. Demonstrates creative web development with focus on visual storytelling.",
      technologies: ["TypeScript", "React", "CSS Animations", "E-commerce"],
      githubUrl: "https://github.com/cozyartz/hippistuff",
      stars: 0,
      forks: 0,
      language: "TypeScript",
      lastUpdated: "2024"
    },
    {
      title: "AstroPraxis Framework",
      description: "High-performance website built with Astro framework showcasing static site generation capabilities. Features optimized loading, SEO best practices, and modern web development patterns.",
      technologies: ["Astro", "JavaScript", "Static Site Generation", "SEO"],
      githubUrl: "https://github.com/cozyartz/AstroPraxis",
      liveUrl: "https://astropraxis.cc",
      stars: 0,
      forks: 0,
      language: "Astro",
      lastUpdated: "2024"
    }
  ];

  return (
    <>
      {/* Schema markup for projects */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateProjectSchema() }}
      />
      
      <section id="projects" className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Background Effects */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-purple-500/20 via-transparent to-blue-500/20 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent block">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work, featuring full-stack applications, open-source contributions, 
            and innovative solutions built with cutting-edge technologies.
          </p>
        </div>

        {/* SaaS Ventures Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-6">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-300 font-semibold text-lg">SaaS Ventures</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Building the Future of
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"> SaaS</span>
            </h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Transforming industries through AI-powered platforms and edge-native solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {saasProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating orbs */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-emerald-400/10 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000" />
                
                <div className="relative p-8">
                  {/* Header with category badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-400/30">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30">
                          {project.stage}
                        </span>
                      </div>
                      <h4 className="text-3xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-emerald-400 font-semibold text-lg mb-4">
                        {project.highlight}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-400">{project.marketSize}</div>
                      <div className="text-sm text-slate-400">Market Size</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-lg leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium border border-slate-600/50 group-hover:bg-slate-600/50 group-hover:border-slate-500/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([, value], statIndex) => (
                      <div key={statIndex} className="text-center p-3 bg-slate-800/30 rounded-xl border border-slate-700/30">
                        <div className="text-lg font-bold text-white">{value.split(' ')[0]}</div>
                        <div className="text-sm text-slate-400">{value.split(' ').slice(1).join(' ')}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex justify-center">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 rounded-full text-white font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
                    >
                      Explore Platform
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          <div className="px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
            <span className="text-slate-400 text-sm font-medium">Open Source & Portfolio Projects</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/cozyartz"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
          >
            View All Projects on GitHub
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProjectsSection;
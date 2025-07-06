import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Modern Portfolio Website",
      description: "This current portfolio website showcasing Full Stack Developer & Creative Technologist work. Built with React, TypeScript, Vite, and Tailwind CSS with advanced animations and GitHub integration.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide React"],
      githubUrl: "https://github.com/cozyartz/folio",
      liveUrl: "https://portfolio.andreacozart.me",
      stars: 0,
      forks: 0,
      language: "TypeScript",
      lastUpdated: "Recently"
    },
    {
      title: "AstroLMS Landing Page",
      description: "A modern, AI-focused landing page for a Learning Management System. Features investor information, AI-powered learning capabilities showcase, and responsive design with smooth animations.",
      technologies: ["Astro", "React", "Tailwind CSS", "Cloudflare Pages"],
      githubUrl: "https://github.com/AutiMind/AstroLMS-landing",
      liveUrl: "https://astrolms-landing.pages.dev",
      stars: 0,
      forks: 0,
      language: "Astro",
      lastUpdated: "Recently"
    },
    {
      title: "EtchNFT Platform",
      description: "E-commerce platform for etching NFTs onto physical materials. A unique bridge between digital and physical art, allowing users to transform their digital assets into tangible collectibles.",
      technologies: ["TypeScript", "React", "E-commerce", "NFT Integration"],
      githubUrl: "https://github.com/cozyartz/etchNFT",
      stars: 0,
      forks: 0,
      language: "TypeScript",
      lastUpdated: "Recently"
    },
    {
      title: "Cozyartz Media Group Website",
      description: "Corporate website for Cozyartz Media Group, showcasing creative technology services and digital solutions. Features modern design and comprehensive service portfolio.",
      technologies: ["TypeScript", "React", "Corporate Website"],
      githubUrl: "https://github.com/cozyartz/cmgsite",
      stars: 0,
      forks: 0,
      language: "TypeScript",
      lastUpdated: "Recently"
    },
    {
      title: "HippiStuff Boho Website",
      description: "A boho-themed website featuring creative design and unique aesthetic. Showcases artistic sensibilities and creative web development skills with a focus on user experience.",
      technologies: ["TypeScript", "React", "Creative Design"],
      githubUrl: "https://github.com/cozyartz/hippistuff",
      stars: 0,
      forks: 0,
      language: "TypeScript",
      lastUpdated: "Recently"
    },
    {
      title: "AstroPraxis Website",
      description: "Modern website built with Astro framework, demonstrating expertise in cutting-edge web technologies and static site generation with optimal performance.",
      technologies: ["Astro", "Modern Web", "Static Site Generation"],
      githubUrl: "https://github.com/cozyartz/AstroPraxis",
      stars: 0,
      forks: 0,
      language: "Astro",
      lastUpdated: "Recently"
    }
  ];

  return (
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
  );
};

export default ProjectsSection;
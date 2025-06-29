import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Modern E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com/andreacozart/ecommerce-platform",
      liveUrl: "https://shop.andreacozart.me",
      stars: 234,
      forks: 67,
      language: "TypeScript",
      lastUpdated: "2 days ago"
    },
    {
      title: "AI-Powered Task Manager",
      description: "An intelligent task management application that uses machine learning to prioritize tasks and predict completion times. Built with React and Python backend.",
      technologies: ["React", "Python", "FastAPI", "TensorFlow", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/andreacozart/ai-task-manager",
      liveUrl: "https://tasks.andreacozart.me",
      stars: 189,
      forks: 43,
      language: "Python",
      lastUpdated: "1 week ago"
    },
    {
      title: "Real-time Collaboration Tool",
      description: "A collaborative workspace platform enabling real-time document editing, video calls, and project management. Features WebRTC integration and live synchronization.",
      technologies: ["Next.js", "WebRTC", "Socket.io", "Redis", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/andreacozart/collab-workspace",
      liveUrl: "https://collab.andreacozart.me",
      stars: 156,
      forks: 34,
      language: "JavaScript",
      lastUpdated: "3 days ago"
    },
    {
      title: "Design System Library",
      description: "A comprehensive React component library with 100+ components, built-in accessibility features, and comprehensive documentation. Used across multiple production applications.",
      technologies: ["React", "TypeScript", "Storybook", "Styled Components", "Jest", "Rollup"],
      githubUrl: "https://github.com/andreacozart/design-system",
      liveUrl: "https://design.andreacozart.me",
      stars: 312,
      forks: 89,
      language: "TypeScript",
      lastUpdated: "5 days ago"
    },
    {
      title: "Developer Portfolio Template",
      description: "A modern, responsive portfolio template for developers. Features dark mode, smooth animations, and optimized performance. Easily customizable and well-documented.",
      technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/andreacozart/portfolio-template",
      liveUrl: "https://template.andreacozart.me",
      stars: 445,
      forks: 123,
      language: "TypeScript",
      lastUpdated: "1 day ago"
    },
    {
      title: "Blockchain Voting System",
      description: "A secure, transparent voting system built on Ethereum blockchain. Features smart contracts for vote validation and a user-friendly interface for voters and administrators.",
      technologies: ["Solidity", "React", "Web3.js", "Hardhat", "IPFS", "Material-UI"],
      githubUrl: "https://github.com/andreacozart/blockchain-voting",
      stars: 278,
      forks: 56,
      language: "Solidity",
      lastUpdated: "1 week ago"
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
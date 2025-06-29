import React from 'react';
import { Github, ExternalLink, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/20 via-transparent to-emerald-500/20 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-4xl font-bold text-white">AC</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Andrea
          <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent block">
            Cozart-Lundin
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-slate-300 mb-8 font-light leading-relaxed">
          Full Stack Developer & Creative Technologist
        </p>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting beautiful, functional web experiences with modern technologies. 
          Passionate about clean code, innovative solutions, and bringing ideas to life.
        </p>

        {/* GitHub Contribution Graph */}
        <div className="mb-12 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">GitHub Activity</h3>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=cozyartz&theme=dark&hide_border=true&background=00000000&stroke=ffffff20&ring=3b82f6&fire=10b981&currStreakLabel=ffffff&sideLabels=ffffff&currStreakNum=3b82f6&sideNums=10b981"
              alt="GitHub Contribution Graph"
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="https://github.com/cozyartz"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            View GitHub
          </a>
          
          <a
            href="https://andreacozart.me"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 rounded-full text-white font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
          >
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Visit Portfolio
          </a>

          <a
            href="https://link.andreacozart.me"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
          >
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Links
          </a>
        </div>

        <button
          onClick={scrollToProjects}
          className="group animate-bounce hover:animate-none"
        >
          <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
            <span className="text-sm font-medium">Explore Projects</span>
            <ArrowDown className="w-6 h-6 group-hover:transform group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
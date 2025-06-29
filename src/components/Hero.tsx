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

        {/* GitHub Activity */}
        <div className="mb-12 flex justify-center">
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-lg font-semibold text-white mb-4 text-center group-hover:text-blue-300 transition-colors duration-300">
              GitHub Activity
            </h3>
            <div className="relative overflow-hidden rounded-lg">
              {/* Loading skeleton */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 animate-pulse rounded-lg opacity-100 transition-opacity duration-1000 group-hover:opacity-0" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg" />
              
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=cozyartz&theme=dark&hide_border=true&background=00000000&stroke=ffffff20&ring=3b82f6&fire=10b981&currStreakLabel=ffffff&sideLabels=ffffff&currStreakNum=3b82f6&sideNums=10b981"
                alt="GitHub Activity Stats"
                className="rounded-lg max-w-full h-auto relative z-10 transition-all duration-500 group-hover:brightness-110"
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                }
                }
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-lg font-semibold text-white mb-4 text-center group-hover:text-blue-300 transition-colors duration-300">
              GitHub Activity
            </h3>
            <div className="relative overflow-hidden rounded-lg">
              {/* Loading skeleton with pulse animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 animate-pulse rounded-lg opacity-100 transition-opacity duration-1000 group-hover:opacity-0" />
              
              {/* Shimmer effect that sweeps across */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg" />
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-2 left-4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
                <div className="absolute top-6 right-8 w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-4 left-12 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-8 right-4 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              </div>
              
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=cozyartz&theme=dark&hide_border=true&background=00000000&stroke=ffffff20&ring=3b82f6&fire=10b981&currStreakLabel=ffffff&sideLabels=ffffff&currStreakNum=3b82f6&sideNums=10b981"
                alt="GitHub Activity Stats"
                className="rounded-lg max-w-full h-auto relative z-10 transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  const skeleton = target.parentElement?.querySelector('.animate-pulse');
                  if (skeleton) {
                    skeleton.classList.add('opacity-0');
                  }
                }}
              />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </div>
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
            href="https://portfolio.andreacozart.me"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 rounded-full text-white font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
          >
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Visit Portfolio
          </a>

          <a
            href="https://links.andreacozart.me"
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
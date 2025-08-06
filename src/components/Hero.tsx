import React, { useState, useEffect } from 'react';
import { GitBranch, ExternalLink, ArrowDown, Code, Wrench, Cpu, Palette, Bot } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer & Creative Technologist',
    'Co-Founder of AutiMind, Inc.',
    'CTO at Cozyartz Media Group', 
    'AI & Blockchain Innovator',
    'Hardware Hacker & Drone Builder'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToEducation = () => {
    document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Particles Background - temporarily disabled */}
      {/* <ParticlesBackground /> */}
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/20 via-transparent to-emerald-500/20 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl ring-4 ring-white/20 hover:ring-white/40 transition-all duration-300 hover:transform hover:scale-110 overflow-hidden">
          <img 
            src="/Cozy1.png" 
            alt="Andrea Cozart-Lundin, Full Stack Developer and Creative Technologist from Battle Creek, Michigan"
            className="w-full h-full object-cover rounded-full"
            loading="eager"
            width="128"
            height="128"
          />
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Andrea
          <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent block">
            Cozart-Lundin
          </span>
        </h1>

        <div className="text-2xl md:text-3xl text-slate-300 mb-8 font-light leading-relaxed">
          <div className="h-20 md:h-16 flex items-center justify-center">
            <span className="transition-opacity duration-500">
              {roles[currentRole]}
            </span>
          </div>
        </div>

        <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          I'm Andrea "Cozy" Cozart-Lundin—developer, builder, and tech entrepreneur dedicated to designing scalable, inclusive digital solutions. 
          As Co-Founder of AutiMind, Inc., I lead platform and product development at the intersection of AI, blockchain, and modern full-stack engineering. 
          At Cozyartz Media Group, I serve as CTO and multimedia developer, helping brands stand out with custom web experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto text-left">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <h4 className="text-emerald-400 font-semibold mb-3">Tech Expertise</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Next.js, React, Node.js, Python, Cloudflare, Firebase, SQL, and modern cloud/edge infrastructure. 
              Integrating advanced AI and LLMs (OpenAI, Anthropic) into real-world applications.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <h4 className="text-blue-400 font-semibold mb-3">Leadership & Innovation</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Built AstroLMS (AI-powered learning platform) and ZServed (AI legal tech). 
              Hands-on CTO driving architecture, user experience, and go-to-market for startups and client products.
            </p>
          </div>
        </div>



        {/* Tools & Technologies */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <Code className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:text-blue-300 transition-colors" />
              <p className="text-xs text-white/80 text-center">React</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <Code className="w-6 h-6 text-emerald-400 mx-auto mb-2 group-hover:text-emerald-300 transition-colors" />
              <p className="text-xs text-white/80 text-center">TypeScript</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <Palette className="w-6 h-6 text-purple-400 mx-auto mb-2 group-hover:text-purple-300 transition-colors" />
              <p className="text-xs text-white/80 text-center">Figma</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <Bot className="w-6 h-6 text-yellow-400 mx-auto mb-2 group-hover:text-yellow-300 transition-colors" />
              <p className="text-xs text-white/80 text-center">GitHub Copilot</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <Wrench className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:text-blue-300 transition-colors" />
              <p className="text-xs text-white/80 text-center">Hardware</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <Cpu className="w-6 h-6 text-emerald-400 mx-auto mb-2 group-hover:text-emerald-300 transition-colors" />
              <p className="text-xs text-white/80 text-center">Systems</p>
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
            <GitBranch className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            View GitHub
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
          onClick={scrollToEducation}
          className="group animate-bounce hover:animate-none"
        >
          <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
            <span className="text-sm font-medium">Learn More</span>
            <ArrowDown className="w-6 h-6 group-hover:transform group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
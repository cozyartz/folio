import React from 'react';
import { Code, Database, Globe, Smartphone, Cpu, Zap, Bone as Drone } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["REST APIs", "WebSockets", "PWAs", "WebRTC", "OAuth", "JWT"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Native APIs"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Cpu,
      title: "DevOps & Tools",
      skills: ["Docker", "AWS", "CI/CD", "Git", "Webpack", "Vite"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Emerging Tech",
      skills: ["AI/ML", "Blockchain", "Web3", "TensorFlow", "Solidity", "IPFS"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Drone,
      title: "Drone Operations",
      skills: ["Drone Piloting", "Aerial Photography/Videography", "Photogrammetry/Mapping", "Part 107 Certified"],
      color: "from-sky-500 to-indigo-500"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Skills &
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent block">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning the full development lifecycle, from ideation to deployment. 
            Always learning and adapting to the latest technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 bg-white/10 text-slate-300 rounded-lg text-sm font-medium border border-white/20 group-hover:bg-white/20 group-hover:text-white transition-all duration-300 ${skill === "Part 107 Certified" ? "flex items-center gap-1" : ""}`}
                    >
                      {skill === "Part 107 Certified" ? (
                        <>
                          {skill}
                          <a 
                            href="https://cloudflare-ipfs.com/ipfs/QmYqzpX7hWAU4J9e8WXcLv5GC9KbVVHfMEsEQeJrwfpKUE" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 ml-1"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                          </a>
                        </>
                      ) : (
                        skill
                      )}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Technology evolves rapidly, and so do I. Currently exploring AI integration in web applications, 
              advanced React patterns, and cloud-native architectures. Passionate about staying at the forefront 
              of innovation and bringing cutting-edge solutions to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
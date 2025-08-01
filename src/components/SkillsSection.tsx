import React from 'react';
import { Code, Database, Globe, Smartphone, Cpu, Zap, Plane, CircuitBoard, Wrench, Terminal, Server, Bot } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion", "Figma"],
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
      icon: Terminal,
      title: "Linux & Systems",
      skills: ["Ubuntu", "CentOS", "Debian", "Bash Scripting", "System Administration", "Network Configuration", "Security Hardening", "Performance Tuning"],
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Cpu,
      title: "DevOps & Containers",
      skills: ["Docker", "Docker Compose", "Kubernetes", "AWS", "CI/CD", "Git", "GitHub Copilot", "Ansible", "Terraform"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Server,
      title: "IT Infrastructure",
      skills: ["Server Management", "Network Administration", "Cloud Architecture", "Monitoring", "Backup Solutions", "Virtualization", "Load Balancing", "DNS Management"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Bot,
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "OpenAI APIs", "Computer Vision", "NLP", "Model Training", "AI Integration", "Prompt Engineering"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Zap,
      title: "Emerging Tech",
      skills: ["Blockchain", "Web3", "Solidity", "IPFS", "Edge Computing", "IoT Analytics", "Quantum Computing", "AR/VR"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: CircuitBoard,
      title: "Hardware & IoT",
      skills: ["Arduino", "Raspberry Pi", "ESP32/ESP8266", "Adafruit Ecosystem", "Sensor Integration", "3D Printing", "PCB Design", "Microcontroller Programming"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Wrench,
      title: "Prototyping & Making",
      skills: ["Rapid Prototyping", "Circuit Design", "Soldering", "CAD Design", "Electronics Testing", "Hardware Debugging", "Component Selection", "System Integration"],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Plane,
      title: "Drone Engineering",
      skills: ["Custom Drone Builds", "Flight Controller Programming", "Aerial Photography/Videography", "Photogrammetry/Mapping", "Part 107 Certified", "FPV Systems", "Telemetry Systems"],
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
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning & Innovating</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Technology evolves rapidly, and so do I. Currently exploring AI integration in web applications, 
              advanced React patterns, and cloud-native architectures. My neurodivergent perspective allows me 
              to see patterns and connections that others might miss, leading to innovative solutions that bridge 
              the gap between digital and physical worlds.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Whether it's integrating IoT sensors with web dashboards, building custom drones with real-time 
              telemetry, or prototyping with the latest Adafruit boards, I approach every challenge with curiosity 
              and a unique way of thinking that turns complex problems into elegant solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
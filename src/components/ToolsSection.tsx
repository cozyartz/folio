import React from 'react';
import { Code, Cloud, Palette, Bot, Search, Zap, Layers, Wand2, Sparkles } from 'lucide-react';

const ToolsSection: React.FC = () => {
  const tools = [
    {
      name: 'VS Code',
      icon: Code,
      category: 'Development',
      description: 'Primary code editor for all development work',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Cloudflare',
      icon: Cloud,
      category: 'Infrastructure',
      description: 'CDN, DNS, and serverless deployment platform',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Adobe Creative Suite',
      icon: Palette,
      category: 'Design',
      description: 'Professional design and video editing tools',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Anthropic',
      icon: Bot,
      category: 'AI Platform',
      description: 'AI safety focused platform powering Claude AI assistant',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Claude',
      icon: Sparkles,
      category: 'AI Assistant',
      description: 'Advanced AI for coding and creative assistance',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      name: 'GPT',
      icon: Sparkles,
      category: 'AI Assistant',
      description: 'AI-powered development and problem solving',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Perplexity',
      icon: Search,
      category: 'AI Research',
      description: 'AI-powered search and research assistant',
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Cloudflare AI',
      icon: Zap,
      category: 'AI Platform',
      description: 'Edge AI and machine learning services',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Stable Diffusion',
      icon: Layers,
      category: 'AI Art',
      description: 'Open-source AI image generation',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Midjourney',
      icon: Wand2,
      category: 'AI Art',
      description: 'Professional AI image creation platform',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Leonardo AI',
      icon: Palette,
      category: 'AI Art',
      description: 'Advanced AI art generation and editing',
      color: 'from-violet-500 to-purple-500'
    }
  ];


  return (
    <section id="tools" className="py-20 px-6 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-purple-900/20 to-slate-800" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tools & 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Technologies
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            The powerful toolkit that drives creativity and innovation in every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={tool.name}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                      {tool.category}
                    </p>
                  </div>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {tool.description}
                </p>
                
                <div className={`mt-4 h-1 bg-gradient-to-r ${tool.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Workflow Philosophy</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Combining traditional development tools with cutting-edge AI assistants to create 
              efficient workflows that blend human creativity with artificial intelligence capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
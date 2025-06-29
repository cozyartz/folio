import React from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  forks: number;
  language: string;
  lastUpdated: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  stars,
  forks,
  language,
  lastUpdated
}) => {
  return (
    <div className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex gap-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 group/btn"
            >
              <Github className="w-5 h-5 text-white group-hover/btn:text-blue-300 transition-colors duration-300" />
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 group/btn"
              >
                <ExternalLink className="w-5 h-5 text-white group-hover/btn:text-emerald-300 transition-colors duration-300" />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-300 text-lg leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium border border-blue-400/30 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-slate-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>{stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4 text-slate-400" />
              <span>{forks}</span>
            </div>
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              {language}
            </span>
          </div>
          <span className="text-slate-500">Updated {lastUpdated}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
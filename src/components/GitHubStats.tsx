import React from 'react';

interface GitHubStatsProps {
  username?: string;
  theme?: 'dark' | 'light';
  className?: string;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ 
  username = 'cozyartz', 
  theme = 'dark',
  className = ''
}) => {
  const statsUrl = `https://stats.andreacozart.me?username=${username}&theme=${theme}`;
  
  return (
    <div className={`flex justify-center ${className}`}>
      <img 
        src={statsUrl}
        alt={`${username}'s GitHub Stats`}
        className="rounded-lg shadow-lg max-w-full h-auto"
        loading="lazy"
        onError={(e) => {
          // Fallback if the worker isn't deployed yet
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          
          // Show a placeholder
          const placeholder = document.createElement('div');
          placeholder.className = 'bg-slate-800 border border-slate-700 rounded-lg p-8 text-center text-slate-400';
          placeholder.innerHTML = `
            <div class="text-lg font-semibold mb-2">${username}'s GitHub Stats</div>
            <div class="text-sm">Stats temporarily unavailable</div>
          `;
          target.parentNode?.appendChild(placeholder);
        }}
      />
    </div>
  );
};

export default GitHubStats;
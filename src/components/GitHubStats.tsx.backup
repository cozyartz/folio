import React, { useState } from 'react';

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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const statsUrl = `https://stats.andreacozart.me?username=${username}&theme=${theme}`;
  
  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };
  
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('GitHub stats failed to load:', e);
    setIsLoading(false);
    setHasError(true);
  };
  
  if (hasError) {
    return (
      <div className={`flex justify-center ${className}`}>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center text-slate-400 w-full max-w-lg">
          <div className="text-lg font-semibold mb-2">{username}'s GitHub Stats</div>
          <div className="text-sm mb-3">Stats temporarily unavailable</div>
          <button 
            onClick={() => {
              setHasError(false);
              setIsLoading(true);
            }}
            className="text-blue-400 hover:text-blue-300 text-sm underline"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`flex justify-center ${className}`}>
      {isLoading && (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center text-slate-400 w-full max-w-lg animate-pulse">
          <div className="text-lg font-semibold mb-2">Loading {username}'s GitHub Stats...</div>
          <div className="text-sm">Please wait</div>
        </div>
      )}
      <img 
        src={statsUrl}
        alt={`${username}'s GitHub Stats`}
        className={`rounded-lg shadow-lg max-w-full h-auto transition-opacity duration-300 ${
          isLoading ? 'opacity-0 absolute' : 'opacity-100'
        }`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default GitHubStats;
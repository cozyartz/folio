import React, { useState, useEffect, useCallback } from 'react';

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionsData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface GitHubContributionsProps {
  username?: string;
  theme?: 'dark' | 'light';
  className?: string;
}

const GitHubContributions: React.FC<GitHubContributionsProps> = ({ 
  username = 'cozyartz', 
  theme = 'dark',
  className = ''
}) => {
  const [contributionsData, setContributionsData] = useState<ContributionsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchContributions = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    
    try {
      const response = await fetch(`https://stats.andreacozart.me/contributions?username=${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch contributions');
      }
      const data = await response.json();
      setContributionsData(data);
    } catch (error) {
      console.error('Failed to fetch GitHub contributions:', error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchContributions();
  }, [fetchContributions]);

  const getContributionColor = (level: number): string => {
    if (theme === 'dark') {
      switch (level) {
        case 0: return 'rgb(22, 27, 34)'; // Dark gray
        case 1: return 'rgb(14, 68, 41)'; // Light green
        case 2: return 'rgb(0, 109, 50)'; // Medium green
        case 3: return 'rgb(38, 166, 65)'; // Bright green
        case 4: return 'rgb(57, 211, 83)'; // Brightest green
        default: return 'rgb(22, 27, 34)';
      }
    } else {
      switch (level) {
        case 0: return 'rgb(235, 237, 240)'; // Light gray
        case 1: return 'rgb(155, 233, 168)'; // Light green
        case 2: return 'rgb(64, 196, 99)'; // Medium green
        case 3: return 'rgb(48, 161, 78)'; // Bright green
        case 4: return 'rgb(33, 110, 57)'; // Brightest green
        default: return 'rgb(235, 237, 240)';
      }
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className={`${className}`}>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <div className="animate-pulse">
            <div className="h-6 bg-slate-700 rounded mb-4 w-64"></div>
            <div className="grid grid-cols-53 gap-1">
              {Array.from({ length: 371 }, (_, i) => (
                <div key={i} className="w-3 h-3 bg-slate-700 rounded-sm"></div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="h-4 bg-slate-700 rounded w-24"></div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-400">Less</span>
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i} className="w-3 h-3 bg-slate-700 rounded-sm"></div>
                ))}
                <span className="text-sm text-slate-400">More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (hasError || !contributionsData || contributionsData.totalContributions === 0) {
    return (
      <div className={`${className}`}>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
          <div className="text-slate-400 mb-4">
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-lg font-semibold mb-2 text-white">Contributions Loading...</p>
            <p className="text-sm mb-3">GitHub contribution data will appear within 4 hours</p>
          </div>
          <button 
            onClick={fetchContributions}
            className="text-blue-400 hover:text-blue-300 text-sm underline"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">
            {contributionsData.totalContributions.toLocaleString()} contributions in the last year
          </h3>
        </div>
        
        {/* Contribution Grid */}
        <div className="overflow-x-auto">
          <div className="inline-flex flex-col gap-1" style={{ minWidth: '722px' }}>
            {/* Month labels */}
            <div className="flex text-xs text-slate-400 mb-2 ml-8">
              <div className="w-3 text-center">Jan</div>
              <div className="w-16 text-center">Feb</div>
              <div className="w-16 text-center">Mar</div>
              <div className="w-16 text-center">Apr</div>
              <div className="w-16 text-center">May</div>
              <div className="w-16 text-center">Jun</div>
              <div className="w-16 text-center">Jul</div>
              <div className="w-16 text-center">Aug</div>
              <div className="w-16 text-center">Sep</div>
              <div className="w-16 text-center">Oct</div>
              <div className="w-16 text-center">Nov</div>
              <div className="w-12 text-center">Dec</div>
            </div>
            
            {/* Days grid */}
            <div className="flex gap-1">
              {/* Day labels */}
              <div className="flex flex-col gap-1 text-xs text-slate-400 w-7">
                <div className="h-3"></div>
                <div className="h-3 flex items-center">Mon</div>
                <div className="h-3"></div>
                <div className="h-3 flex items-center">Wed</div>
                <div className="h-3"></div>
                <div className="h-3 flex items-center">Fri</div>
                <div className="h-3"></div>
              </div>
              
              {/* Contribution squares */}
              <div className="flex gap-1">
                {contributionsData.weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.contributionDays.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className="w-3 h-3 rounded-sm cursor-pointer hover:ring-2 hover:ring-slate-400 transition-all"
                        style={{ backgroundColor: getContributionColor(day.level) }}
                        title={`${day.count} contributions on ${formatDate(day.date)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-slate-400">
            GitHub contribution activity
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Less</span>
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: getContributionColor(i) }}
              />
            ))}
            <span className="text-xs text-slate-400">More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubContributions;
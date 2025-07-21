/**
 * Cloudflare Worker for GitHub Stats
 * Generates SVG cards with GitHub user statistics
 */

interface Env {
  // Add environment variables here if needed
  ENVIRONMENT?: string;
  GITHUB_STATS_KV?: KVNamespace;
}

interface GitHubUser {
  login: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  language: string;
}

interface GitHubStats {
  totalStars: number;
  totalForks: number;
  totalRepos: number;
  followers: number;
  following: number;
  joinedYear: number;
  topLanguages: { [key: string]: number };
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const username = url.searchParams.get('username') || 'cozyartz';
    const theme = url.searchParams.get('theme') || 'dark';
    
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'GET') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    // Manual cache refresh endpoint (admin only)
    if (url.pathname === '/refresh-cache') {
      try {
        console.log('Manual cache refresh for', username);
        const stats = await fetchGitHubStats(username);
        const cacheData = {
          data: stats,
          timestamp: Date.now()
        };
        const cacheKey = `github-stats:${username}`;
        
        if (env.GITHUB_STATS_KV) {
          await env.GITHUB_STATS_KV.put(cacheKey, JSON.stringify(cacheData));
          return new Response(`Cache refreshed successfully for ${username}`, { headers: corsHeaders });
        } else {
          return new Response('KV not available', { status: 500, headers: corsHeaders });
        }
      } catch (error) {
        console.error('Refresh error:', error);
        return new Response(`Error: ${error}`, { status: 500, headers: corsHeaders });
      }
    }

    try {
      // ONLY use cached data - never fallback to API calls during visitor requests
      const cacheKey = `github-stats:${username}`;
      let cachedStats = null;
      
      if (env.GITHUB_STATS_KV) {
        try {
          const cached = await env.GITHUB_STATS_KV.get(cacheKey, 'json');
          cachedStats = cached;
        } catch (kvError) {
          console.warn('KV error:', kvError);
        }
      }
      
      if (cachedStats && cachedStats.data) {
        // Use cached data regardless of age - scheduled updates keep it fresh
        const stats = cachedStats.data;
        console.log('Serving cached data for', username);
        
        const svg = generateStatsCard(stats, username, theme);
        
        return new Response(svg, {
          headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=14400', // Cache for 4 hours
            ...corsHeaders,
          },
        });
      } else {
        // No cached data available - return placeholder
        console.log('No cached data available for', username);
        const placeholderSvg = generatePlaceholderCard(theme, username);
        return new Response(placeholderSvg, {
          headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=300', // Cache placeholder for 5 minutes
            ...corsHeaders,
          },
        });
      }
    } catch (error) {
      console.error('Error serving GitHub stats:', error);
      
      const errorSvg = generateErrorCard(theme, 'Service temporarily unavailable');
      return new Response(errorSvg, {
        status: 200,
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'public, max-age=300',
          ...corsHeaders,
        },
      });
    }
  },

  // Scheduled event to update GitHub stats
  async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext) {
    console.log('Running scheduled GitHub stats update');
    
    const usernames = ['cozyartz']; // Add more usernames if needed
    
    for (const username of usernames) {
      try {
        console.log(`Updating stats for ${username}`);
        const stats = await fetchGitHubStats(username);
        
        const cacheData = {
          data: stats,
          timestamp: Date.now()
        };
        
        const cacheKey = `github-stats:${username}`;
        await env.GITHUB_STATS_KV?.put(cacheKey, JSON.stringify(cacheData));
        
        console.log(`Successfully updated stats for ${username}`);
        
        // Wait 1 second between users to be respectful of rate limits
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`Failed to update stats for ${username}:`, error);
      }
    }
  },
};

async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  const headers = {
    'User-Agent': 'GitHub-Stats-Worker',
    'Accept': 'application/vnd.github.v3+json',
  };

  try {
    // Fetch user data with better error handling
    const userResponse = await fetch(`https://api.github.com/users/${username}`, { headers });
    
    if (userResponse.status === 404) {
      throw new Error(`User '${username}' not found`);
    }
    
    if (userResponse.status === 403) {
      throw new Error('GitHub API rate limit exceeded');
    }
    
    if (!userResponse.ok) {
      throw new Error(`GitHub API error: ${userResponse.status} ${userResponse.statusText}`);
    }
    
    const userData: GitHubUser = await userResponse.json();

    // Fetch repositories with same error handling
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers });
    
    if (!reposResponse.ok) {
      console.warn('Failed to fetch repos, using user data only');
      // Return stats with just user data if repos fail
      return {
        totalStars: 0,
        totalForks: 0,
        totalRepos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        joinedYear: new Date(userData.created_at).getFullYear(),
        topLanguages: {},
      };
    }
    
    const repos: GitHubRepo[] = await reposResponse.json();

    // Calculate stats
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
    
    // Count languages
    const topLanguages: { [key: string]: number } = {};
    repos.forEach(repo => {
      if (repo.language) {
        topLanguages[repo.language] = (topLanguages[repo.language] || 0) + 1;
      }
    });

    return {
      totalStars,
      totalForks,
      totalRepos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      joinedYear: new Date(userData.created_at).getFullYear(),
      topLanguages,
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    throw error;
  }
}

function generatePlaceholderCard(theme: string, username: string): string {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)';
  const textColor = isDark ? '#ffffff' : '#1e293b';
  const subtitleColor = isDark ? '#94a3b8' : '#64748b';
  const accentColor = '#3b82f6';

  return `
<svg width="495" height="195" viewBox="0 0 495 195" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="495" height="195" rx="10" fill="${bgColor}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  
  <circle cx="247.5" cy="70" r="15" fill="${accentColor}" opacity="0.2">
    <animateTransform attributeName="transform" type="rotate" values="0 247.5 70;360 247.5 70" dur="2s" repeatCount="indefinite"/>
  </circle>
  
  <text x="247.5" y="105" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="16" font-weight="600" fill="${textColor}" text-anchor="middle">
    Loading ${username}'s Stats...
  </text>
  
  <text x="247.5" y="125" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="12" fill="${subtitleColor}" text-anchor="middle">
    Stats will appear within 4 hours
  </text>
</svg>`.trim();
}

function generateStatsCard(stats: GitHubStats, username: string, theme: string): string {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)';
  const textColor = isDark ? '#ffffff' : '#1e293b';
  const subtitleColor = isDark ? '#94a3b8' : '#64748b';
  const accentColor = '#3b82f6';
  const secondaryAccent = '#10b981';
  
  // Get top 3 languages
  const topLangs = Object.entries(stats.topLanguages)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);

  return `
<svg width="495" height="195" viewBox="0 0 495 195" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${accentColor};stop-opacity:0.1" />
      <stop offset="50%" style="stop-color:${secondaryAccent};stop-opacity:0.05" />
      <stop offset="100%" style="stop-color:${accentColor};stop-opacity:0.1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="495" height="195" rx="10" fill="${bgColor}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <rect width="495" height="195" rx="10" fill="url(#bg-gradient)"/>
  
  <!-- Header -->
  <text x="25" y="35" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="18" font-weight="600" fill="${textColor}">
    ${username}'s GitHub Stats
  </text>
  
  <!-- Stats Grid -->
  <!-- Total Stars -->
  <g transform="translate(25, 60)">
    <circle cx="8" cy="8" r="3" fill="${accentColor}" filter="url(#glow)"/>
    <text x="20" y="12" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="14" font-weight="600" fill="${textColor}">
      ${formatNumber(stats.totalStars)}
    </text>
    <text x="20" y="28" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="12" fill="${subtitleColor}">
      Total Stars
    </text>
  </g>
  
  <!-- Total Forks -->
  <g transform="translate(140, 60)">
    <circle cx="8" cy="8" r="3" fill="${secondaryAccent}" filter="url(#glow)"/>
    <text x="20" y="12" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="14" font-weight="600" fill="${textColor}">
      ${formatNumber(stats.totalForks)}
    </text>
    <text x="20" y="28" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="12" fill="${subtitleColor}">
      Total Forks
    </text>
  </g>
  
  <!-- Total Repos -->
  <g transform="translate(255, 60)">
    <circle cx="8" cy="8" r="3" fill="#a855f7" filter="url(#glow)"/>
    <text x="20" y="12" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="14" font-weight="600" fill="${textColor}">
      ${stats.totalRepos}
    </text>
    <text x="20" y="28" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="12" fill="${subtitleColor}">
      Repositories
    </text>
  </g>
  
  <!-- Followers -->
  <g transform="translate(370, 60)">
    <circle cx="8" cy="8" r="3" fill="#f59e0b" filter="url(#glow)"/>
    <text x="20" y="12" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="14" font-weight="600" fill="${textColor}">
      ${formatNumber(stats.followers)}
    </text>
    <text x="20" y="28" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="12" fill="${subtitleColor}">
      Followers
    </text>
  </g>
  
  <!-- Top Languages -->
  <g transform="translate(25, 110)">
    <text x="0" y="15" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="14" font-weight="600" fill="${textColor}">
      Top Languages
    </text>
    ${topLangs.map((lang, index) => `
      <g transform="translate(${index * 120}, 25)">
        <rect x="0" y="0" width="8" height="8" rx="2" fill="${getLanguageColor(lang[0])}" filter="url(#glow)"/>
        <text x="15" y="8" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="12" fill="${textColor}">
          ${lang[0]}
        </text>
        <text x="15" y="20" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="10" fill="${subtitleColor}">
          ${lang[1]} repos
        </text>
      </g>
    `).join('')}
  </g>
  
  <!-- Join Year -->
  <text x="400" y="180" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="10" fill="${subtitleColor}">
    Since ${stats.joinedYear}
  </text>
</svg>`.trim();
}

function generateErrorCard(theme: string, error?: string): string {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)';
  const textColor = isDark ? '#ffffff' : '#1e293b';
  const subtitleColor = isDark ? '#94a3b8' : '#64748b';
  const errorColor = '#ef4444';

  const errorMessage = error && error.includes('rate limit') 
    ? 'GitHub API rate limit reached'
    : error && error.includes('not found')
    ? 'User not found'
    : 'Stats temporarily unavailable';

  return `
<svg width="495" height="195" viewBox="0 0 495 195" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="495" height="195" rx="10" fill="${bgColor}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  
  <circle cx="247.5" cy="70" r="20" fill="${errorColor}" opacity="0.1"/>
  <text x="247.5" y="77" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="24" font-weight="600" fill="${errorColor}" text-anchor="middle">!</text>
  
  <text x="247.5" y="110" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="16" font-weight="600" fill="${textColor}" text-anchor="middle">
    ${errorMessage}
  </text>
  
  <text x="247.5" y="135" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="12" fill="${subtitleColor}" text-anchor="middle">
    Please try again later
  </text>
</svg>`.trim();
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

function getLanguageColor(language: string): string {
  const colors: { [key: string]: string } = {
    'TypeScript': '#3178c6',
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'Java': '#b07219',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'C++': '#f34b7d',
    'C': '#555555',
    'PHP': '#4F5D95',
    'Ruby': '#701516',
    'Swift': '#fa7343',
    'Kotlin': '#A97BFF',
    'Dart': '#00B4AB',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Shell': '#89e051',
    'Vue': '#41b883',
    'React': '#61dafb',
  };
  
  return colors[language] || '#6b7280';
}
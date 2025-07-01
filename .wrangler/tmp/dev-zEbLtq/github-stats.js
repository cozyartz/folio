var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-fImsDG/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/bundle-fImsDG/strip-cf-connecting-ip-header.js
function stripCfConnectingIPHeader(input, init) {
  const request = new Request(input, init);
  request.headers.delete("CF-Connecting-IP");
  return request;
}
__name(stripCfConnectingIPHeader, "stripCfConnectingIPHeader");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    return Reflect.apply(target, thisArg, [
      stripCfConnectingIPHeader.apply(null, argArray)
    ]);
  }
});

// src/worker/github-stats.ts
var github_stats_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const username = url.searchParams.get("username") || "cozyartz";
    const theme = url.searchParams.get("theme") || "dark";
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
    if (request.method !== "GET") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }
    try {
      const cache = caches.default;
      const cacheKey = new Request(`https://github-stats/${username}/${theme}`, request);
      let response = await cache.match(cacheKey);
      if (!response) {
        const stats = await fetchGitHubStats(username);
        const svg = generateStatsCard(stats, username, theme);
        response = new Response(svg, {
          headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "public, max-age=3600",
            // Cache for 1 hour
            ...corsHeaders
          }
        });
        ctx.waitUntil(cache.put(cacheKey, response.clone()));
      }
      return response;
    } catch (error) {
      console.error("Error generating GitHub stats:", error);
      const errorSvg = generateErrorCard(theme);
      return new Response(errorSvg, {
        status: 200,
        // Return 200 to prevent broken images
        headers: {
          "Content-Type": "image/svg+xml",
          "Cache-Control": "public, max-age=300",
          // Cache errors for 5 minutes
          ...corsHeaders
        }
      });
    }
  }
};
async function fetchGitHubStats(username) {
  const headers = {
    "User-Agent": "GitHub-Stats-Worker",
    "Accept": "application/vnd.github.v3+json"
  };
  const userResponse = await fetch(`https://api.github.com/users/${username}`, { headers });
  if (!userResponse.ok) {
    throw new Error(`Failed to fetch user data: ${userResponse.status}`);
  }
  const userData = await userResponse.json();
  const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers });
  if (!reposResponse.ok) {
    throw new Error(`Failed to fetch repositories: ${reposResponse.status}`);
  }
  const repos = await reposResponse.json();
  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
  const topLanguages = {};
  repos.forEach((repo) => {
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
    topLanguages
  };
}
__name(fetchGitHubStats, "fetchGitHubStats");
function generateStatsCard(stats, username, theme) {
  const isDark = theme === "dark";
  const bgColor = isDark ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.95)";
  const textColor = isDark ? "#ffffff" : "#1e293b";
  const subtitleColor = isDark ? "#94a3b8" : "#64748b";
  const accentColor = "#3b82f6";
  const secondaryAccent = "#10b981";
  const topLangs = Object.entries(stats.topLanguages).sort(([, a], [, b]) => b - a).slice(0, 3);
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
    `).join("")}
  </g>
  
  <!-- Join Year -->
  <text x="400" y="180" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="10" fill="${subtitleColor}">
    Since ${stats.joinedYear}
  </text>
</svg>`.trim();
}
__name(generateStatsCard, "generateStatsCard");
function generateErrorCard(theme) {
  const isDark = theme === "dark";
  const bgColor = isDark ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.95)";
  const textColor = isDark ? "#ffffff" : "#1e293b";
  const subtitleColor = isDark ? "#94a3b8" : "#64748b";
  return `
<svg width="495" height="195" viewBox="0 0 495 195" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="495" height="195" rx="10" fill="${bgColor}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  
  <text x="247.5" y="90" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="16" font-weight="600" fill="${textColor}" text-anchor="middle">
    GitHub Stats Unavailable
  </text>
  
  <text x="247.5" y="115" font-family="'Segoe UI', Ubuntu, Sans-Serif" font-size="12" fill="${subtitleColor}" text-anchor="middle">
    Please try again later
  </text>
</svg>`.trim();
}
__name(generateErrorCard, "generateErrorCard");
function formatNumber(num) {
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + "M";
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "k";
  }
  return num.toString();
}
__name(formatNumber, "formatNumber");
function getLanguageColor(language) {
  const colors = {
    "TypeScript": "#3178c6",
    "JavaScript": "#f1e05a",
    "Python": "#3572A5",
    "Java": "#b07219",
    "Go": "#00ADD8",
    "Rust": "#dea584",
    "C++": "#f34b7d",
    "C": "#555555",
    "PHP": "#4F5D95",
    "Ruby": "#701516",
    "Swift": "#fa7343",
    "Kotlin": "#A97BFF",
    "Dart": "#00B4AB",
    "HTML": "#e34c26",
    "CSS": "#563d7c",
    "Shell": "#89e051",
    "Vue": "#41b883",
    "React": "#61dafb"
  };
  return colors[language] || "#6b7280";
}
__name(getLanguageColor, "getLanguageColor");

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-fImsDG/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = github_stats_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-fImsDG/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=github-stats.js.map

// Web Vitals monitoring for Core Web Vitals tracking
// This helps monitor FCP, LCP, FID, CLS, and TTFB

interface Metric {
  name: string;
  value: number;
  id: string;
  delta: number;
}

// Function to send metrics to analytics
const sendToAnalytics = (metric: Metric) => {
  // Send to Google Analytics 4 if available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // You can also send to other analytics services here
  console.log('Web Vital:', metric.name, metric.value, metric.id);
};

// Function to get web vitals
export const getWebVitals = async () => {
  try {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
    
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  } catch (error) {
    console.log('Web Vitals not available:', error);
  }
};

// Performance observer for custom metrics
export const observePerformance = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      // Monitor long tasks
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.log('Long task detected:', entry.duration, 'ms');
          }
        });
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });

      // Monitor layout shifts
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            console.log('Layout shift:', entry.value);
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Monitor paint timing
      const paintObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log(`${entry.name}:`, entry.startTime, 'ms');
        });
      });
      paintObserver.observe({ entryTypes: ['paint'] });

    } catch (error) {
      console.log('Performance Observer not fully supported:', error);
    }
  }
};

// Resource loading performance
export const monitorResourceLoading = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      
      console.log('Navigation timing:', {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        load: navigation.loadEventEnd - navigation.loadEventStart,
        ttfb: navigation.responseStart - navigation.requestStart,
      });

      // Log slow resources
      resources.forEach((resource) => {
        if (resource.duration > 1000) {
          console.log('Slow resource:', resource.name, resource.duration, 'ms');
        }
      });
    });
  }
};
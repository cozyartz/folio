import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { getWebVitals, observePerformance, monitorResourceLoading } from './utils/webVitals';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Monitor web vitals
  getWebVitals();
  
  // Observe performance metrics
  observePerformance();
  
  // Monitor resource loading
  monitorResourceLoading();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

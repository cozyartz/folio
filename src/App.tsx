import { useEffect } from 'react';
import Lenis from 'lenis';
import SEOHead from './components/SEOHead';
import PortfolioExperience from './components/PortfolioExperience';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <SEOHead />
      <PortfolioExperience />
    </>
  );
}

export default App;

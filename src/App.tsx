import React, { lazy, Suspense, useEffect } from 'react';
import Lenis from 'lenis';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import SEOHead from './components/SEOHead';

// Lazy load components that are below the fold
const EducationSection = lazy(() => import('./components/EducationSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ToolsSection = lazy(() => import('./components/ToolsSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

// Loading component
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
  </div>
);

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

    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(30, 41, 59, 0.9)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
          },
        }}
      />
      <Header />
      <main>
        <section id="hero" aria-label="Hero Section">
          <Hero />
        </section>
        <Suspense fallback={<SectionLoader />}>
          <section id="education" aria-label="About and Education">
            <EducationSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section id="projects" aria-label="Projects Showcase">
            <ProjectsSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section id="skills" aria-label="Skills and Technologies">
            <SkillsSection />
            <ToolsSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section id="contact" aria-label="Contact Information">
            <ContactSection />
          </section>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
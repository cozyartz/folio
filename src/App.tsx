import React, { lazy, Suspense } from 'react';
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
  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead />
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
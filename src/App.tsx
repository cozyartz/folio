import React from 'react';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

export default App;
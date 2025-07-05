import React from 'react';
import Hero from './components/Hero';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ToolsSection from './components/ToolsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ToolsSection />
      <ContactSection />
    </div>
  );
}

export default App;
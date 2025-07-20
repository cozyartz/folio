import React from 'react';
import Hero from './components/Hero';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ToolsSection from './components/ToolsSection';
import GitHubStats from './components/GitHubStats';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ToolsSection />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            GitHub Activity
          </h2>
          <GitHubStats username="cozyartz" theme="dark" />
        </div>
      </section>
      <ContactSection />
    </div>
  );
}

export default App;
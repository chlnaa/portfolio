import { AboutSection } from './components/AboutSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { Navigation } from './components/Navigation';
import { ProjectSection } from './components/ProjectSection';
import { SkillsSection } from './components/SkillsSection';

function App() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ArchitectureSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;

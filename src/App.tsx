import { AboutSection } from './components/AboutSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { Navigation } from './components/Navigation';
import { ProjectSection } from './components/ProjectSection';
import { SkillsSection } from './components/SkillsSection';
import { TroubleshootingSection } from './components/TroubleshootingSections';

function App() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <TroubleshootingSection />
        <ArchitectureSection />
        <ExperienceSection />
      </main>
    </div>
  );
}

export default App;

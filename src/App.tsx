import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import Footer from './components/footer/Footer';
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
        <ExperienceSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

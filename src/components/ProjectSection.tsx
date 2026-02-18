import { PROJECTS_DATA } from '@/constants/projects';
import type { ProjectsData } from '@/types/portfolio';
import { ProjectHero } from './project/ProjectHero';
import { ProjectAccordion } from './project/ProjectAccordion';
import { motion } from 'framer-motion';
import { SectionHeader } from './header/SectionHeader';
import { fadeInUp } from '@/lib/animations';

export function ProjectSection() {
  const project: ProjectsData = PROJECTS_DATA;

  return (
    <section id='project' className='relative px-6 py-24 md:py-32'>
      <div className='absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-cyan-500/20 to-transparent' />

      <div className='mx-auto max-w-7xl'>
        <SectionHeader eyebrow='Project' title=' Featured Work' />

        <motion.div {...fadeInUp} className='mb-16'>
          <div className='mx-auto max-w-7xl space-y-16'>
            <ProjectHero project={project} />
            <ProjectAccordion project={project} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

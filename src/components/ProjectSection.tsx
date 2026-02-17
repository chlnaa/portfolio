import { PROJECTS_DATA } from '@/constants/projects';
import type { ProjectsData } from '@/types/portfolio';
import { ProjectHero } from './project/ProjectHero';
import { ProjectAccordion } from './project/ProjectAccordion';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};

export function ProjectSection() {
  const project: ProjectsData = PROJECTS_DATA;

  return (
    <section id='project' className='relative px-6 py-24 md:py-32'>
      <div className='absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-cyan-500/20 to-transparent' />

      <div className='mx-auto max-w-7xl'>
        <motion.div {...fadeInUp} className='mb-16'>
          <span className='mb-3 block font-mono text-sm text-cyan-400'>
            03 &mdash; Project
          </span>
          <h2 className='text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
            Featured Work
          </h2>
        </motion.div>
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

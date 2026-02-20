import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { KeyFeatures } from './KeyFeatures';
import { Challenges } from './Challenges';
import { Lessons } from './Lessons';
import type { ProjectsData } from '@/types/portfolio';
import { Architecture } from './Architecture';
import type { Language } from '@/context/LanguageProvider';

interface ProjectAccordionProps {
  project: ProjectsData;
  language: Language;
}

export function ProjectAccordion({ project, language }: ProjectAccordionProps) {
  return (
    <Accordion type='single' collapsible className='w-full select-none'>
      <AccordionItem value='architecture' className='border-cyan-500/20'>
        <AccordionTrigger className='font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80 [&>svg]:text-cyan-400/80 hover:no-underline hover:text-cyan-400 hover:[&_svg]:text-cyan-400'>
          Architecture & Performance
        </AccordionTrigger>
        <AccordionContent>
          <Architecture
            performance={project.performance}
            architecture={project.architecture}
            language={language}
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='features' className='border-cyan-500/20'>
        <AccordionTrigger className='font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80 [&>svg]:text-cyan-400/80 hover:no-underline hover:text-cyan-400 hover:[&_svg]:text-cyan-400'>
          Key Technical Features
        </AccordionTrigger>
        <AccordionContent>
          <KeyFeatures features={project.keyFeatures} language={language} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='challenges' className='border-cyan-500/20'>
        <AccordionTrigger className='font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80 [&>svg]:text-cyan-400/80 hover:no-underline hover:text-cyan-400 hover:[&_svg]:text-cyan-400'>
          Challenges & Solutions
        </AccordionTrigger>
        <AccordionContent>
          <Challenges challenges={project.challenges} language={language} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='lessons'>
        <AccordionTrigger className='font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80 [&>svg]:text-cyan-400/80  hover:no-underline hover:text-cyan-400 hover:[&_svg]:text-cyan-400'>
          What I Learned
        </AccordionTrigger>
        <AccordionContent>
          <Lessons learned={project.learned[language]} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

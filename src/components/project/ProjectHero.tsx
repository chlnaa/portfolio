import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { ProjectsData } from '@/types/portfolio';
import type { Language } from '@/context/LanguageProvider';

interface ProjectHeroProps {
  project: ProjectsData;
  language: Language;
}

export function ProjectHero({ project, language }: ProjectHeroProps) {
  return (
    <Card className='border-[#ffffff08] bg-[#0f1115] glow-border shadow-lg shadow-cyan-500/20 select-none'>
      <CardContent className='p-7 space-y-5'>
        <div className='flex flex-wrap items-center gap-4'>
          <h3 className='text-4xl font-bold'>{project.title}</h3>
          <Badge className='w-fit rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] text-muted-foreground border border-white/5'>
            {project.period}
          </Badge>
        </div>

        <p className='font-mono text-cyan-400/80 text-sm uppercase'>
          {project.role}
        </p>

        <div>
          <p className='text-lg whitespace-pre-line '>
            {project.introduction[language]}
          </p>
          <p className='text-sm text-muted-foreground whitespace-pre-line '>
            {project.overview[language]}
          </p>
        </div>

        <div className='flex flex-wrap gap-2 pt-3'>
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant='outline'
              className='text-sm border-cyan-500/20 bg-cyan-500/5 text-cyan-400'
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

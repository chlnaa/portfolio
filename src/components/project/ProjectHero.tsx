import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { ProjectsData } from '@/types/portfolio';
import type { Language } from '@/context/LanguageProvider';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ProjectHeroProps {
  project: ProjectsData;
  language: Language;
}

export function ProjectHero({ project, language }: ProjectHeroProps) {
  const [index, setIndex] = useState(0);
  const IMAGES = ['/images/todo.png', '/images/timer.png', '/images/chart.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card className='border-[#ffffff08] bg-[#0f1115] glow-border shadow-lg shadow-cyan-500/20 select-none'>
      <CardContent className='p-0'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-1 p-7 space-y-5'>
            <div className='flex flex-wrap items-center gap-4'>
              <h3 className='text-2xl font-bold md:text-4xl'>
                {project.title}
              </h3>
              <Badge className='w-fit rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-muted-foreground border border-white/5'>
                {project.period}
              </Badge>
            </div>

            <p className='font-mono text-cyan-400/80 text-xs md:text-sm uppercase'>
              {project.role}
            </p>

            <div>
              <p className='text-sm md:text-lg whitespace-pre-line '>
                {project.introduction[language]}
              </p>
              <p className='text-xs md:text-sm text-muted-foreground pt-2 whitespace-pre-line '>
                {project.overview[language]}
              </p>
            </div>

            <div className='flex flex-wrap gap-2 pt-3'>
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant='outline'
                  className='text-xs md:text-sm border-cyan-500/20 bg-cyan-500/5 text-cyan-400'
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className='relative w-full md:w-[45%] flex flex-col items-center justify-center p-6'>
            <div className='relative w-full aspect-4/3 max-h-[300px] flex items-center justify-center'>
              <AnimatePresence mode='popLayout'>
                <motion.img
                  key={index}
                  src={IMAGES[index]}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className='absolute h-full object-contain rounded-xl overflow-hidden'
                  alt={`Project Screenshot ${index + 1}`}
                />
              </AnimatePresence>
            </div>

            <div className='flex gap-2 mt-6'>
              {IMAGES.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-cyan-500' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

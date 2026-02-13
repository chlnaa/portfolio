import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PROJECTS_DATA } from '@/constants/projects';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};

export function ProjectSection() {
  const project = PROJECTS_DATA;

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

        <div className='space-y-24'>
          <motion.div {...fadeInUp}>
            <Card className='mb-12 border-[#ffffff08] bg-[#0f1115] overflow-hidden shadow-2xl'>
              <CardContent className='p-6 md:p-10'>
                <div className='flex flex-col gap-8 md:flex-row md:items-start md:justify-between'>
                  <div className='flex-1'>
                    <div className='mb-4 flex flex-wrap items-center gap-4'>
                      <h3 className='text-4xl font-extrabold tracking-tight text-foreground'>
                        {project.title}
                      </h3>
                      <Badge className='border-0 bg-linear-to-r from-cyan-400 to-blue-600 font-mono text-[11px] text-[#0a0a0a] px-3 py-0.5'>
                        {project.period}
                      </Badge>
                    </div>

                    <p className='text-sm font-mono text-cyan-400/90 mb-6 uppercase tracking-wider'>
                      {project.role}
                    </p>

                    <p className='text-lg leading-relaxed text-foreground/90 font-medium mb-4'>
                      {project.introduction}
                    </p>

                    <p className='max-w-3xl text-sm leading-relaxed text-muted-foreground'>
                      {project.overview}
                    </p>
                  </div>

                  <div className='flex flex-wrap gap-2 md:max-w-[280px] md:justify-end'>
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant='outline'
                        className='border-[#ffffff10] bg-[#ffffff05] font-mono text-[10px] text-zinc-400 px-2 py-1'
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className='mb-8 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80'>
              Key Technical Features
            </h3>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              {project.keyFeatures.map((feature) => (
                <Card
                  key={feature.title}
                  className='group border-[#ffffff08] bg-[#0f1115] transition-all hover:border-cyan-500/30'
                >
                  <CardContent className='p-6'>
                    <h4 className='mb-3 text-sm font-bold text-foreground group-hover:text-cyan-400 transition-colors'>
                      {feature.title}
                    </h4>
                    <p className='text-[13px] leading-relaxed text-muted-foreground'>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

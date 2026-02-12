import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Layers, Settings } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};

const skillCategories = [
  {
    title: 'Frontend Engineering',
    icon: Code2,
    description: 'Core technologies for building scalable applications',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Zustand',
      'TanStack Query',
      'Redux Toolkit',
    ],
  },
  {
    title: 'UI & Interaction',
    icon: Layers,
    description: 'Crafting polished, responsive user interfaces',
    skills: [
      'Tailwind CSS',
      'Framer Motion',
      'CSS Modules',
      'Responsive Design',
      'Figma',
      'shadcn/ui',
    ],
  },
  {
    title: 'Tooling & Quality',
    icon: Settings,
    description: 'Ensuring code quality and developer experience',
    skills: ['Git Flow', 'Vite', 'ESLint', 'Prettier', 'Storybook', 'CI/CD'],
  },
];

export function SkillsSection() {
  return (
    <section id='skills' className='relative px-6 py-24 md:py-32'>
      <div className='absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-cyan-500/20 to-transparent' />

      <div className='mx-auto max-w-7xl'>
        <motion.div {...fadeInUp} className='mb-16'>
          <span className='mb-3 block font-mono text-sm text-cyan-400'>
            02 &mdash; Skills
          </span>
          <h2 className='text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
            Technical Expertise
          </h2>
        </motion.div>

        <div className='grid gap-6 md:grid-cols-3'>
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className='group h-full border-[#ffffff08] bg-[#0f1115] transition-all hover:border-cyan-500/20 glow-border hover:glow-cyan'>
                <CardContent className='p-6'>
                  <div className='mb-4 flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-blue-600/10'>
                      <category.icon className='h-5 w-5 text-cyan-400' />
                    </div>
                    <h3 className='font-semibold text-foreground'>
                      {category.title}
                    </h3>
                  </div>
                  <p className='mb-5 text-sm leading-relaxed text-muted-foreground'>
                    {category.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className='rounded-md border border-[#ffffff08] bg-[#ffffff05] px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-cyan-500/15 group-hover:text-foreground'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

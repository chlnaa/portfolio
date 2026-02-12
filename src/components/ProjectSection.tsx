import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { GitBranch, Database, Monitor } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};

const architectureDecisions = [
  {
    icon: GitBranch,
    title: 'Store-driven Unidirectional Flow',
    description:
      'Zustand stores act as the single source of truth. All UI state derives from the store, ensuring predictable rendering and easy debugging.',
  },
  {
    icon: Database,
    title: 'Service Layer Abstraction',
    description:
      'API calls and data transformations live in a dedicated service layer, decoupling business logic from UI components.',
  },
  {
    icon: Monitor,
    title: 'State-based Rendering',
    description:
      'Components render based on state shape, not imperative commands. Each state maps to a specific UI representation.',
  },
];

const keyFeatures = [
  'Drag & Drop Task Ordering',
  'Real-time Focus Timer with Pomodoro',
  'Tag-based Filtering & Search',
  'Priority Queue Management',
  'Persistent State with Zustand Middleware',
  'Responsive Dashboard Layout',
];

const troubleshootingCases = [
  {
    problem:
      'Task state was lost after page refresh due to in-memory only store.',
    solution:
      'Implemented Zustand persist middleware with localStorage, adding migration strategies for schema changes.',
    result:
      'Zero state loss with seamless schema migrations, even across app updates.',
  },
  {
    problem:
      'Complex filter combinations caused excessive re-renders across the task list.',
    solution:
      'Introduced computed selectors with shallow equality checks and memoized filter logic.',
    result:
      'Reduced re-renders by ~70%, achieving smooth 60fps interactions on all filter operations.',
  },
  {
    problem:
      'Drag-and-drop reordering conflicted with the timer state, causing visual glitches.',
    solution:
      'Isolated timer and ordering into separate store slices with independent subscription paths.',
    result:
      'Clean separation of concerns, with zero interference between drag interactions and timer updates.',
  },
];

export function ProjectSection() {
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

        {/* Project Header */}
        <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className='mb-8 border-[#ffffff08] bg-[#0f1115] glow-cyan'>
            <CardContent className='p-6 md:p-8'>
              <div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between'>
                <div>
                  <div className='mb-2 flex items-center gap-3'>
                    <h3 className='text-2xl font-bold text-foreground'>
                      FocusDo
                    </h3>
                    <Badge className='border-0 bg-linear-to-r from-cyan-400 to-blue-600 font-mono text-xs text-[#0a0a0a]'>
                      Focus Task
                    </Badge>
                  </div>
                  <p className='max-w-lg text-base leading-relaxed text-muted-foreground'>
                    A productivity application built with a focus on Core
                    Architecture Decisions. Designed to showcase store-driven
                    patterns, service abstraction, and state-based rendering.
                  </p>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {[
                    'React',
                    'TypeScript',
                    'Zustand',
                    'Tailwind CSS',
                    'Vite',
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant='outline'
                      className='border-[#ffffff10] bg-[#ffffff05] font-mono text-xs text-muted-foreground'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Architecture Decisions */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-8'
        >
          <h3 className='mb-6 font-mono text-xs uppercase tracking-widest text-cyan-400'>
            Core Architecture Decisions
          </h3>
          <div className='grid gap-4 md:grid-cols-3'>
            {architectureDecisions.map((decision, i) => (
              <motion.div
                key={decision.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <Card className='group h-full border-[#ffffff08] bg-[#0f1115] transition-all hover:border-cyan-500/20 glow-border hover:glow-cyan'>
                  <CardContent className='p-5'>
                    <div className='mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/5'>
                      <decision.icon className='h-4 w-4 text-cyan-400' />
                    </div>
                    <h4 className='mb-2 text-sm font-semibold text-foreground'>
                      {decision.title}
                    </h4>
                    <p className='text-sm leading-relaxed text-muted-foreground'>
                      {decision.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features & Troubleshooting Tabs */}
        <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.3 }}>
          <Tabs defaultValue='features' className='w-full'>
            <TabsList className='mb-6 border border-[#ffffff08] bg-[#0f1115]'>
              <TabsTrigger
                value='features'
                className='font-mono text-xs data-[state=active]:bg-linear-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-cyan-400'
              >
                Key Features
              </TabsTrigger>
              <TabsTrigger
                value='troubleshooting'
                className='font-mono text-xs data-[state=active]:bg-linear-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-cyan-400'
              >
                Trouble Shooting
              </TabsTrigger>
            </TabsList>

            <TabsContent value='features'>
              <Card className='border-[#ffffff08] bg-[#0f1115]'>
                <CardContent className='p-6'>
                  <div className='grid gap-3 sm:grid-cols-2'>
                    {keyFeatures.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className='flex items-center gap-3 rounded-lg border border-[#ffffff08] bg-[#ffffff03] px-4 py-3 transition-colors hover:border-cyan-500/15'
                      >
                        <div className='h-1.5 w-1.5 rounded-full bg-cyan-400' />
                        <span className='text-sm text-foreground'>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value='troubleshooting'>
              <div className='space-y-4'>
                {troubleshootingCases.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Card className='border-[#ffffff08] bg-[#0f1115]'>
                      <CardContent className='p-5'>
                        <div className='space-y-3'>
                          <div>
                            <span className='mb-1 inline-block font-mono text-xs uppercase tracking-wider text-red-400'>
                              Problem
                            </span>
                            <p className='text-sm leading-relaxed text-muted-foreground'>
                              {item.problem}
                            </p>
                          </div>
                          <Separator className='bg-[#ffffff08]' />
                          <div>
                            <span className='mb-1 inline-block font-mono text-xs uppercase tracking-wider text-cyan-400'>
                              Solution
                            </span>
                            <p className='text-sm leading-relaxed text-muted-foreground'>
                              {item.solution}
                            </p>
                          </div>
                          <Separator className='bg-[#ffffff08]' />
                          <div>
                            <span className='mb-1 inline-block font-mono text-xs uppercase tracking-wider text-emerald-400'>
                              Result
                            </span>
                            <p className='text-sm leading-relaxed text-foreground'>
                              {item.result}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

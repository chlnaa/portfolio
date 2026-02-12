import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};

const layers = [
  {
    label: 'Page',
    role: 'Orchestrator',
    description:
      'Route-level composition. Assembles hooks and components, manages layout structure.',
    borderColor: 'border-cyan-500/30',
    bgColor: 'bg-cyan-500/5',
    iconBg:
      'bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border-cyan-500/30',
  },
  {
    label: 'Hook',
    role: 'Logic Container',
    description:
      'Encapsulates business logic, state management, and side effects. Clean separation of concerns.',
    borderColor: 'border-emerald-500/30',
    bgColor: 'bg-emerald-500/5',
    iconBg:
      'bg-gradient-to-br from-emerald-400/20 to-teal-600/20 border-emerald-500/30',
  },
  {
    label: 'Component',
    role: 'Renderer',
    description:
      'Pure presentation layer. Receives props, renders UI. Zero business logic.',
    borderColor: 'border-amber-500/30',
    bgColor: 'bg-amber-500/5',
    iconBg:
      'bg-gradient-to-br from-amber-400/20 to-orange-600/20 border-amber-500/30',
  },
];

export function ArchitectureSection() {
  return (
    <section id='architecture' className='relative px-6 py-24 md:py-32'>
      <div className='absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-cyan-500/20 to-transparent' />

      <div className='mx-auto max-w-7xl'>
        <motion.div {...fadeInUp} className='mb-16'>
          <span className='mb-3 block font-mono text-sm text-cyan-400'>
            04 &mdash; Architecture
          </span>
          <h2 className='text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
            Architecture & Flow
          </h2>
        </motion.div>

        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Design Strategy Visual */}
          <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className='mb-2 font-mono text-xs uppercase tracking-widest text-cyan-400'>
              Design Strategy
            </h3>
            <p className='mb-8 text-sm leading-relaxed text-muted-foreground'>
              A unidirectional architecture that separates orchestration, logic,
              and presentation into distinct layers.
            </p>

            <div className='space-y-4'>
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
                >
                  <Card
                    className={`border ${layer.borderColor} ${layer.bgColor}`}
                  >
                    <CardContent className='flex items-start gap-4 p-5'>
                      <div className='flex flex-col items-center gap-1'>
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg border font-mono text-xs font-bold text-foreground ${layer.iconBg}`}
                        >
                          {layer.label[0]}
                        </div>
                        {i < layers.length - 1 && (
                          <ArrowRight className='h-4 w-4 rotate-90 text-muted-foreground' />
                        )}
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-baseline gap-2'>
                          <span className='font-semibold text-foreground'>
                            {layer.label}
                          </span>
                          <span className='font-mono text-xs text-muted-foreground'>
                            {layer.role}
                          </span>
                        </div>
                        <p className='mt-1 text-sm leading-relaxed text-muted-foreground'>
                          {layer.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Data Contracts */}
          <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className='mb-2 font-mono text-xs uppercase tracking-widest text-cyan-400'>
              Data Contracts
            </h3>
            <p className='mb-8 text-sm leading-relaxed text-muted-foreground'>
              Object destructuring as a pattern for explicit, type-safe
              interfaces between layers.
            </p>

            <Card className='border-[#ffffff08] bg-[#0f1115] glow-cyan'>
              <CardContent className='p-0'>
                <div className='flex items-center gap-2 border-b border-[#ffffff08] px-4 py-3'>
                  <div className='h-3 w-3 rounded-full bg-red-500/60' />
                  <div className='h-3 w-3 rounded-full bg-yellow-500/60' />
                  <div className='h-3 w-3 rounded-full bg-green-500/60' />
                  <span className='ml-2 font-mono text-xs text-muted-foreground'>
                    useTaskManager.ts
                  </span>
                </div>
                <pre className='overflow-x-auto p-5 font-mono text-sm leading-relaxed'>
                  <code>
                    <span className='text-muted-foreground'>
                      {'// Hook returns a strict data contract'}
                    </span>
                    {'\n'}
                    <span className='text-cyan-400'>{'export function'}</span>
                    <span className='text-foreground'>
                      {' useTaskManager() {'}
                    </span>
                    {'\n'}
                    <span className='text-foreground'>{'  '}</span>
                    <span className='text-cyan-400'>{'const'}</span>
                    <span className='text-foreground'>{' tasks = '}</span>
                    <span className='text-emerald-400'>{'useTaskStore'}</span>
                    <span className='text-foreground'>{'(s => s.tasks)'}</span>
                    {'\n\n'}
                    <span className='text-foreground'>{'  '}</span>
                    <span className='text-cyan-400'>{'return'}</span>
                    <span className='text-foreground'>{' {'}</span>
                    {'\n'}
                    <span className='text-muted-foreground'>
                      {'    // Explicit shape = predictable UI'}
                    </span>
                    {'\n'}
                    <span className='text-foreground'>{'    tasks,'}</span>
                    {'\n'}
                    <span className='text-foreground'>{'    isLoading,'}</span>
                    {'\n'}
                    <span className='text-foreground'>{'    addTask,'}</span>
                    {'\n'}
                    <span className='text-foreground'>{'    toggleTask,'}</span>
                    {'\n'}
                    <span className='text-foreground'>{'    deleteTask,'}</span>
                    {'\n'}
                    <span className='text-foreground'>{'  }'}</span>
                    {'\n'}
                    <span className='text-foreground'>{'}'}</span>
                  </code>
                </pre>
              </CardContent>
            </Card>

            <div className='mt-6 grid grid-cols-2 gap-4'>
              {[
                {
                  title: 'Type Safety',
                  desc: 'Every prop interface defined with TypeScript',
                },
                {
                  title: 'Unidirectional',
                  desc: 'Data flows in one direction: Store to UI',
                },
                {
                  title: 'Testable',
                  desc: 'Each layer can be tested in isolation',
                },
                {
                  title: 'Scalable',
                  desc: 'New features slot into existing patterns',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  className='rounded-xl border border-[#ffffff08] bg-[#0f1115] p-4 transition-all hover:border-cyan-500/15 glow-border'
                >
                  <h4 className='mb-1 font-mono text-xs font-bold text-cyan-400'>
                    {item.title}
                  </h4>
                  <p className='text-xs leading-relaxed text-muted-foreground'>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

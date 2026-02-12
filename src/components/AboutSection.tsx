import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};

export function AboutSection() {
  return (
    <section id='about' className='relative px-6 py-24 md:py-32'>
      {/* Background glow */}
      <div className='absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-cyan-500/20 to-transparent' />

      <div className='mx-auto max-w-7xl'>
        <motion.div {...fadeInUp} className='mb-16'>
          <span className='mb-3 block font-mono text-sm text-cyan-400'>
            01 &mdash; About
          </span>
          <h2 className='text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
            Who I Am
          </h2>
        </motion.div>

        <div className='grid gap-12 md:grid-cols-5'>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='md:col-span-3'
          >
            <div className='space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg'>
              <p>
                My journey into frontend development started from an unexpected
                place:
                <span className='font-semibold text-foreground'>
                  {' '}
                  Game Localization
                </span>
                . Working across languages and cultures taught me the precision
                and attention to detail that I now bring to building user
                interfaces.
              </p>
              <p>
                I was captivated by how{' '}
                <span className='text-cyan-400'>
                  static text transforms into dynamic, interactive content
                </span>{' '}
                on screen. That curiosity evolved into a deep passion for
                structuring data flow, managing complex application states, and
                crafting seamless user experiences.
              </p>
              <p>
                Today, I apply an analytical approach to business logic, with
                expertise in{' '}
                <span className='rounded border border-cyan-500/20 bg-cyan-500/5 px-1.5 py-0.5 font-mono text-sm text-cyan-400'>
                  Zustand
                </span>{' '}
                for state management and{' '}
                <span className='rounded border border-cyan-500/20 bg-cyan-500/5 px-1.5 py-0.5 font-mono text-sm text-cyan-400'>
                  TanStack Query
                </span>{' '}
                for server-state synchronization, building applications that are
                both powerful and maintainable.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='md:col-span-2'
          >
            <Card className='border-[#ffffff08] bg-[#0f1115] glow-border'>
              <CardContent className='p-6'>
                <h3 className='mb-4 font-mono text-xs uppercase tracking-widest text-cyan-400'>
                  Quick Facts
                </h3>
                <div className='space-y-4'>
                  {[
                    { label: 'Background', value: 'Game Localization' },
                    { label: 'Focus', value: 'State Architecture' },
                    { label: 'Approach', value: 'Analytical & Systematic' },
                    { label: 'Based In', value: 'Japan' },
                  ].map((fact) => (
                    <div
                      key={fact.label}
                      className='flex items-start justify-between gap-4'
                    >
                      <span className='text-sm text-muted-foreground'>
                        {fact.label}
                      </span>
                      <span className='text-right font-mono text-sm text-foreground'>
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

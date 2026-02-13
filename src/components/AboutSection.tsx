import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ABOUT_DATA } from '@/constants/about';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};

export function AboutSection() {
  return (
    <section id='about' className='relative px-6 py-24 md:py-32'>
      <div className='absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-cyan-500/20 to-transparent' />

      <div className='mx-auto max-w-7xl'>
        <motion.div {...fadeInUp} className='mb-16'>
          <span className='mb-3 block font-mono text-sm text-cyan-400'>
            01 &mdash; About
          </span>
          <h2 className='text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
            {ABOUT_DATA.title}
          </h2>
        </motion.div>

        <div className='grid gap-12 md:grid-cols-5'>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='md:col-span-3'
          >
            <div className='space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg'>
              {ABOUT_DATA.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
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
                  {ABOUT_DATA.quickFacts.map((fact) => (
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

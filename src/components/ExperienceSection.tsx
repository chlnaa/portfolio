import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Languages, MessageCircle, Code2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};

const experiences = [
  {
    icon: Languages,
    title: 'Localization Expertise',
    description:
      'Years of professional game localization experience, bridging English and Japanese with deep cultural understanding. This background sharpened my eye for detail and user-centric thinking.',
  },
  {
    icon: Globe,
    title: 'Japan-based Development',
    description:
      'Working within the Japanese tech ecosystem provides a unique perspective on quality standards, process-oriented development, and the meticulous craftsmanship valued in the industry.',
  },
  {
    icon: MessageCircle,
    title: 'Cross-cultural Communication',
    description:
      'Fluent collaboration across language barriers. Experienced in aligning distributed teams, translating technical concepts for diverse stakeholders, and maintaining clarity in global projects.',
  },
];

export function ExperienceSection() {
  return (
    <section id='experience' className='relative px-6 py-24 md:py-32'>
      <div className='absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-cyan-500/20 to-transparent' />

      <div className='mx-auto max-w-7xl'>
        <motion.div {...fadeInUp} className='mb-16'>
          <span className='mb-3 block font-mono text-sm text-cyan-400'>
            05 &mdash; Experience
          </span>
          <h2 className='text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
            Global Experience
          </h2>
        </motion.div>

        <div className='grid gap-6 md:grid-cols-3'>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className='group h-full border-[#ffffff08] bg-[#0f1115] transition-all hover:border-cyan-500/20 glow-border hover:glow-cyan'>
                <CardContent className='p-6'>
                  <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-blue-600/10 transition-all group-hover:from-cyan-500/20 group-hover:to-blue-600/20'>
                    <exp.icon className='h-5 w-5 text-cyan-400' />
                  </div>
                  <h3 className='mb-2 font-semibold text-foreground'>
                    {exp.title}
                  </h3>
                  <p className='text-sm leading-relaxed text-muted-foreground'>
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='mt-24'
        >
          <div className='h-px w-full bg-linear-to-r from-transparent via-cyan-500/20 to-transparent' />
          <div className='flex flex-col items-center justify-between gap-4 pt-8 md:flex-row'>
            <div className='flex items-center gap-2.5'>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-linear-to-br from-cyan-500/20 to-blue-600/20'>
                <Code2 className='h-3.5 w-3.5 text-cyan-400' />
              </div>
              <div>
                <span className='text-sm font-bold text-foreground'>
                  Portfolio
                </span>
                <p className='text-xs text-muted-foreground'>
                  Designing Predictable State and Scalable UI Systems.
                </p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <a
                href='#'
                className='text-sm text-muted-foreground transition-colors hover:text-cyan-400'
              >
                GitHub
              </a>
              <a
                href='#'
                className='text-sm text-muted-foreground transition-colors hover:text-cyan-400'
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

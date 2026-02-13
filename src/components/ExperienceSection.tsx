import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '@/constants/experience';
import { CONTACT_DATA } from '@/constants/contact';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};

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
            Professional Experience
          </h2>
        </motion.div>

        <div className='grid gap-6 md:grid-cols-2'>
          {EXPERIENCE_DATA.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className='group h-full border-[#ffffff08] bg-[#0f1115] transition-all hover:border-cyan-500/20 glow-border hover:glow-cyan'>
                <CardContent className='p-8'>
                  <div className='flex flex-col gap-2 mb-6 sm:flex-row sm:items-center sm:justify-between'>
                    <div>
                      <h3 className='text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors'>
                        {exp.role}
                      </h3>
                      <p className='text-sm font-mono text-cyan-400/80 uppercase tracking-wider mt-1'>
                        {exp.company}
                      </p>
                    </div>
                    <span className='w-fit rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] text-muted-foreground border border-white/5'>
                      {exp.period}
                    </span>
                  </div>

                  <p className='text-sm leading-relaxed text-zinc-400 mb-6'>
                    {exp.description}
                  </p>

                  <ul className='space-y-3 mb-8'>
                    {exp.achievements.map((item, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-3 text-[13px] text-zinc-500'
                      >
                        <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500/40' />
                        <span className='leading-normal'>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.techStack && (
                    <div className='flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5'>
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className='rounded border border-white/5 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-zinc-500'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

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
                  Built for Scale & Predictability.
                </p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              {CONTACT_DATA.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-zinc-400 transition-colors hover:text-cyan-400 font-medium'
                >
                  {contact.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

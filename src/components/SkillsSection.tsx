import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { SKILLS_DATA } from '@/constants/skills';
import { SectionHeader } from './header/SectionHeader';

export function SkillsSection() {
  return (
    <section id='skills' className='relative px-6 py-24 md:py-32'>
      <div className='absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-cyan-500/20 to-transparent' />

      <div className='mx-auto max-w-7xl'>
        <SectionHeader eyebrow='Skills' title=' Technical Expertise' />

        <div className='grid gap-8 lg:grid-cols-2'>
          {SKILLS_DATA.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className='mb-6'>
                <h3 className='font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80 mb-2'>
                  {category.category}
                </h3>
                <div className='h-px w-full bg-linear-to-r from-cyan-500/20 to-transparent' />
              </div>

              <div className='grid gap-4'>
                {category.items.map((skill) => (
                  <Card
                    key={skill.name}
                    className='border-[#ffffff08] bg-[#0f1115] transition-all hover:border-cyan-500/10'
                  >
                    <CardContent className='p-6'>
                      <div className='flex flex-col gap-4 md:flex-row md:items-start'>
                        <div className='md:w-1/3'>
                          <h4 className='text-lg font-bold text-foreground'>
                            {skill.name}
                          </h4>
                        </div>

                        <div className='flex-1'>
                          <ul className='space-y-2'>
                            {skill.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className='flex items-center gap-3 text-sm text-muted-foreground'
                              >
                                <span className='h-1 w-1 shrink-0 rounded-full bg-cyan-500/40' />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

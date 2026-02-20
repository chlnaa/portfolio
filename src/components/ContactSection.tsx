import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './header/SectionHeader';
import { fadeInUp } from '@/lib/animations';
import { CONTACT_CONTENT } from '@/constants/contactContent';
import { CONTACT_LINKS } from '@/constants/contactLink';
import { useLanguage } from '@/context/LanguageProvider';

export function ContactSection() {
  const { language } = useLanguage();
  const content = CONTACT_CONTENT;
  const links = CONTACT_LINKS;

  return (
    <section id='contact' className='relative px-6 py-24 md:py-32'>
      <div className='absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-cyan-500/20 to-transparent' />

      <div className='mx-auto max-w-7xl'>
        <SectionHeader eyebrow='Contact' title='Get In Touch' />

        <motion.div {...fadeInUp} className='mb-8'>
          <div className='leading-relaxed text-muted-foreground'>
            {content.description.map((line, idx) => (
              <p key={idx}>{line[language]}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='flex flex-col items-center text-center'
        >
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='flex flex-col gap-3'>
              {links.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.label}
                    className='border-[#ffffff10] bg-[#0f1115] transition shadow-lg shadow-cyan-500/20  hover:border-cyan-500/30 hover:bg-cyan-500/10'
                  >
                    <CardContent className='px-5 py-1'>
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith('mailto') ? undefined : '_blank'
                        }
                        rel={
                          item.href.startsWith('mailto')
                            ? undefined
                            : 'noopener noreferrer'
                        }
                        className='group flex items-center justify-between'
                      >
                        <div className='flex items-center gap-4'>
                          <div className='flex h-10 w-10 items-center justify-center rounded-md bg-[#ffffff05]'>
                            {Icon && (
                              <Icon className='h-5 w-5 text-foreground' />
                            )}
                          </div>

                          <div>
                            <p className='text-left text-sm font-medium text-foreground'>
                              {item.label}
                            </p>
                            <p className='text-sm text-muted-foreground'>
                              {item.value}
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight className='h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400' />
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='flex flex-col items-baseline rounded-lg border border-[#ffffff10] bg-[#0f1115] p-8 shadow-lg shadow-cyan-500/20 '
            >
              <h3 className='font-mono text-sm font-medium text-cyan-400'>
                {content.openToWork.badge[language]}
              </h3>

              <p className='mt-4 text-lg font-semibold text-foreground'>
                {content.openToWork.headline[language]}
              </p>

              <p className='mt-4 leading-relaxed text-left text-muted-foreground'>
                {content.openToWork.description.map((line, idx) => (
                  <p key={idx}>{line[language]}</p>
                ))}
              </p>

              <div className='mt-6 flex items-center gap-2'>
                <span className='relative flex h-2.5 w-2.5'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-75' />
                  <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500' />
                </span>
                <span className='text-sm text-muted-foreground'>
                  {content.openToWork.availability}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

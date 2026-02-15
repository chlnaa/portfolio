import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, ArrowUpRight } from 'lucide-react';
import { CONTACT_DATA } from '@/constants/contact';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};

export function ContactSection() {
  return (
    <section id='contact' className='relative px-6 py-24 md:py-32'>
      <div className='absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-cyan-500/20 to-transparent' />

      <div className='mx-auto max-w-7xl'>
        <motion.div {...fadeInUp} className='mb-16'>
          <span className='mb-3 block font-mono text-sm text-cyan-400'>
            06 &mdash; Contact
          </span>
          <h2 className='text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
            Get In Touch
          </h2>

          <div className='mt-3 leading-relaxed text-muted-foreground'>
            I am a frontend developer dedicated to building clean, maintainable
            user interfaces.
            <br />
            Backed by prior professional experience, I value clear communication
            and responsible collaboration.
            <br />
            I am currently looking for frontend opportunities and would be glad
            to connect.
            <br />I typically respond within 24 hours.
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='flex flex-col items-center text-center'
        >
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='flex flex-col gap-3'>
              {CONTACT_DATA.map((item) => {
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
                Open to Work
              </h3>

              <p className='mt-4 text-lg font-semibold text-foreground'>
                Currently looking for frontend developer positions.
              </p>

              <p className='mt-4 leading-relaxed text-left text-muted-foreground'>
                I am interested in full-time roles where I can contribute to
                meaningful products, collaborate with a team, and continue
                growing as an engineer. <br /> Remote and on-site opportunities
                are welcome.
              </p>

              <div className='mt-6 flex items-center gap-2'>
                <span className='relative flex h-2.5 w-2.5'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-75' />
                  <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500' />
                </span>
                <span className='text-sm text-muted-foreground'>
                  Available for hire
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
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
                Choi&apos;s Portfolio
              </span>
              <p className='text-xs text-muted-foreground'>
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

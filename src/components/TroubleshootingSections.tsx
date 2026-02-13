import { motion } from 'framer-motion';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TROUBLESHOOTING_DATA } from '@/constants/troubleshooting';

export function TroubleshootingSection() {
  return (
    <section id='troubleshooting' className='px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='mb-16'
        >
          <span className='mb-3 block font-mono text-sm text-cyan-400'>
            04 — Solutions
          </span>
          <h2 className='text-3xl font-bold md:text-4xl'>Troubleshooting</h2>
        </motion.div>

        <div className='space-y-6'>
          {TROUBLESHOOTING_DATA.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className='border-[#ffffff08] bg-[#0f1115] overflow-hidden group hover:border-cyan-500/20 transition-all'>
                <CardContent className='p-0'>
                  <div className='flex flex-col md:flex-row'>
                    {/* Problem Side */}
                    <div className='p-6 md:w-1/3 bg-red-500/5'>
                      <span className='text-[10px] font-mono uppercase tracking-widest text-red-400'>
                        Problem
                      </span>
                      <h4 className='mt-2 font-semibold text-foreground'>
                        {item.title}
                      </h4>
                      <p className='mt-2 text-sm text-muted-foreground'>
                        {item.problem}
                      </p>
                    </div>

                    {/* Solution Side */}
                    <div className='p-6 md:w-2/3'>
                      <div className='mb-4'>
                        <span className='text-[10px] font-mono uppercase tracking-widest text-cyan-400'>
                          Solution
                        </span>
                        <p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
                          {item.solution}
                        </p>
                      </div>
                      <Separator className='bg-white/5 mb-4' />
                      <div>
                        <span className='text-[10px] font-mono uppercase tracking-widest text-emerald-400'>
                          Result
                        </span>
                        <ul className='mt-2 space-y-1'>
                          {item.result.map((res, idx) => (
                            <li
                              key={idx}
                              className='text-sm text-foreground flex items-center gap-2'
                            >
                              <span className='h-1 w-1 rounded-full bg-emerald-400' />{' '}
                              {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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

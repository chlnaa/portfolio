import type { ExperienceItem } from '@/types/portfolio';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Card, CardContent } from '../ui/card';

interface CondensedProps {
  exp: ExperienceItem;
}

export default function CondensedExperienceCard({ exp }: CondensedProps) {
  return (
    <Card className='border-[#ffffff10] bg-[#0f1115] transition hover:border-cyan-500/30 hover:bg-[#131720] hover:[&_svg]:text-cyan-500/70 select-none'>
      <CardContent className='p-8'>
        <Accordion type='single' collapsible>
          <AccordionItem value={String(exp.id)} className='border-none'>
            <AccordionTrigger className='p-0 hover:no-underline'>
              <div className='flex w-full items-center justify-between text-left'>
                <div>
                  <h3 className='text-lg font-semibold tracking-tight'>
                    {exp.role}
                  </h3>
                  <p className='text-xs font-mono text-muted-foreground mt-1'>
                    {exp.company}
                  </p>
                </div>

                <span className='w-fit rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] text-muted-foreground border border-white/5'>
                  {exp.period}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent className='pt-6 space-y-6'>
              <p className='text-sm text-zinc-400 leading-relaxed'>
                {exp.description}
              </p>

              <ul className='space-y-3'>
                {exp.achievements.map((item, idx) => (
                  <li
                    key={idx}
                    className='flex gap-3 text-sm text-zinc-500 leading-relaxed'
                  >
                    <span className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500/60 shrink-0' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

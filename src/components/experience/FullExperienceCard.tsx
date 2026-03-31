import type { ExperienceItem } from '@/types/portfolio';
import { Card, CardContent } from '../ui/card';
import type { Language } from '@/context/LanguageProvider';

interface FullExperienceProps {
  exp: ExperienceItem;
  language: Language;
}

export default function FullExperienceCard({
  exp,
  language,
}: FullExperienceProps) {
  return (
    <Card className='relative border-[#ffffff08] bg-[#0f1115] select-none'>
      {exp.isPrimary && (
        <div className='absolute left-0 top-0 h-full w-[2px] bg-cyan-500/40' />
      )}
      <CardContent className='p-10'>
        <div className='flex flex-col md:flex-row gap-3 items-start justify-between mb-6'>
          <div>
            <h3 className='text-lg pb-2 md:pb-0 md:text-xl font-semibold tracking-tight'>
              {exp.role[language]}
            </h3>
            <p className='text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-wider mt-1'>
              {exp.company[language]}
            </p>
          </div>
          <span className='w-fit rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-muted-foreground border border-white/5'>
            {exp.period}
          </span>
        </div>

        <p className='text-sm text-zinc-400 leading-relaxed mb-8 max-w-3xl whitespace-pre-line '>
          {exp.description[language]}
        </p>

        <ul className='space-y-3'>
          {exp.achievements.map((item, idx) => (
            <li
              key={idx}
              className='flex gap-3 text-sm text-zinc-500 leading-relaxed'
            >
              <span className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500/60 shrink-0' />
              <span>{item[language]}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

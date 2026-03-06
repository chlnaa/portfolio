import type { ProjectChallenge } from '@/types/portfolio';
import { Card, CardContent } from '../ui/card';
import type { Language } from '@/context/LanguageProvider';

interface ChallengesProps {
  challenges: ProjectChallenge[];
  language: Language;
}

export function Challenges({ challenges, language }: ChallengesProps) {
  return (
    <div className='grid gap-6 md:grid-cols-2 py-5 whitespace-pre-line'>
      {challenges.map((c, i) => (
        <Card key={i}>
          <CardContent className='p-6 space-y-4'>
            <div>
              <span className='text-xs uppercase text-red-400'>Problem</span>
              <p className='text-sm pt-1 text-muted-foreground/80'>
                {c.problem[language]}
              </p>
            </div>

            <div>
              <span className='text-xs uppercase text-cyan-400'>Solution</span>
              <p className='text-sm pt-1 text-slate-50 whitespace-pre-line leading-relaxed'>
                {c.solution[language]}
              </p>
            </div>

            <div>
              <span className='text-xs uppercase text-emerald-400'>Result</span>
              <p className='text-sm font-medium pt-1 text-emerald-50/90'>
                {c.result[language]}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

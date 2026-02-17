import type { ProjectChallenge } from '@/types/portfolio';
import { Card, CardContent } from '../ui/card';

interface ChallengesProps {
  challenges: ProjectChallenge[];
}

export function Challenges({ challenges }: ChallengesProps) {
  return (
    <div className='grid gap-6 md:grid-cols-2 py-5'>
      {challenges.map((c, i) => (
        <Card key={i}>
          <CardContent className='p-6 space-y-4'>
            <div>
              <span className='text-xs uppercase text-red-400'>Problem</span>
              <p className='text-sm pt-1'>{c.problem}</p>
            </div>

            <div>
              <span className='text-xs uppercase text-cyan-400'>Solution</span>
              <p className='text-sm pt-1'>{c.solution}</p>
            </div>

            <div>
              <span className='text-xs uppercase text-emerald-400'>Result</span>
              <p className='text-sm font-medium pt-1'>{c.result}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

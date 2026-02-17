import type { ProjectsData } from '@/types/portfolio';
import { Card, CardContent } from '../ui/card';

interface KeyFeaturesProps {
  features: ProjectsData['keyFeatures'];
}

export function KeyFeatures({ features }: KeyFeaturesProps) {
  return (
    <ul className='grid gap-5 md:grid-cols-2 py-5'>
      {features.map((feature) => (
        <li key={feature.title} className='list-none'>
          <Card className='flex flex-col w-full h-full'>
            <CardContent className='flex flex-col flex-1 gap-1'>
              <h4 className='font-bold text-white text-sm'>{feature.title}</h4>
              <p className='flex-1 text-sm text-muted-foreground'>
                {feature.description}
              </p>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}

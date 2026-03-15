import type { ArchitectureData } from '@/types/portfolio';
import type { Language } from '@/context/LanguageProvider';
import { Card, CardContent } from '../ui/card';
import diagram from '/images/architecture-diagram.png';

interface ArchitectureProps {
  architecture: ArchitectureData;
  language: Language;
}

export function Architecture({ architecture, language }: ArchitectureProps) {
  const { intro, sections } = architecture;

  return (
    <div className='space-y-8 py-5'>
      {intro?.[language] && (
        <p className='text-sm text-muted-foreground leading-relaxed'>
          {intro[language]}
        </p>
      )}

      <img
        src={diagram}
        alt='System architecture diagram'
        className='rounded-lg border border-cyan-500/20'
      />

      <ul className='grid md:grid-cols-2 gap-6 py-5'>
        {sections.map((section, index) => (
          <li className='list-none' key={index}>
            <Card className='flex flex-col w-full h-full'>
              <CardContent className='flex flex-col flex-1 gap-1'>
                <h4 className='text-sm font-semibold text-white'>
                  {section.title[language]}
                </h4>

                {section.description?.[language] && (
                  <p className='mt-2 text-sm text-muted-foreground leading-relaxed whitespace-pre-line'>
                    {section.description[language]}
                  </p>
                )}
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

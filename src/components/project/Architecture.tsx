import type { ArchitectureData, ProjectsData } from '@/types/portfolio';
import { PerformanceCard } from './PerformanceCard';
import type { Language } from '@/context/LanguageProvider';

interface ArchitectureProps {
  performance: ProjectsData['performance'];
  architecture: ArchitectureData;
  language: Language;
}

export function Architecture({
  performance,
  architecture,
  language,
}: ArchitectureProps) {
  const { lighthouse, metrics } = performance;
  const { sections, footer } = architecture;

  return (
    <div className='space-y-10 py-6'>
      {sections.map((section, index) => (
        <div key={index}>
          <h4 className='text-sm font-semibold text-white'>
            {section.title[language]}
          </h4>

          {section.description?.[language] && (
            <p className='mt-2 text-sm leading-relaxed text-muted-foreground whitespace-pre-line'>
              {section.description[language]}
            </p>
          )}

          {index === 2 && (
            <>
              <div className='mt-4 grid md:grid-cols-3 gap-4'>
                <PerformanceCard
                  label='Performance'
                  value={lighthouse.performance.toString()}
                />
                <PerformanceCard
                  label='Accessibility'
                  value={lighthouse.accessibility.toString()}
                />
                <PerformanceCard
                  label='Best Practices'
                  value={lighthouse.bestPractices.toString()}
                />
              </div>

              <div className='mt-6 grid md:grid-cols-3 gap-4'>
                <PerformanceCard label='FCP' value={metrics.fcp} />
                <PerformanceCard label='LCP' value={metrics.lcp} />
                <PerformanceCard label='TBT' value={metrics.tbt} />
                <PerformanceCard label='CLS' value={metrics.cls} />
                <PerformanceCard
                  label='Speed Index'
                  value={metrics.speedIndex}
                />
              </div>
            </>
          )}
        </div>
      ))}

      <p className='text-xs text-muted-foreground'>{footer[language]}</p>
    </div>
  );
}

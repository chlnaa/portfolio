import type { ProjectsData } from '@/types/portfolio';
import { PerformanceCard } from './PerformanceCard';
import type { Language } from '@/context/LanguageProvider';

interface PerformanceProps {
  performance: ProjectsData['performance'];
  language: Language;
}

export function Performance({ performance, language }: PerformanceProps) {
  const { lighthouse, metrics, footer } = performance;

  return (
    <div className='space-y-8'>
      <div>
        <h4 className='text-sm font-semibold text-white mb-4'>
          Lighthouse Audit
        </h4>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
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
      </div>
      <div>
        <h4 className='text-sm font-semibold text-white mb-4'>Web Vitals</h4>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <PerformanceCard label='FCP' value={metrics.fcp} />
          <PerformanceCard label='LCP' value={metrics.lcp} />
          <PerformanceCard label='TBT' value={metrics.tbt} />
          <PerformanceCard label='CLS' value={metrics.cls} />
          <PerformanceCard label='Speed Index' value={metrics.speedIndex} />
        </div>

        <p className='mt-8 text-xs text-muted-foreground leading-relaxed whitespace-pre-line'>
          {footer[language]}
        </p>
      </div>
    </div>
  );
}

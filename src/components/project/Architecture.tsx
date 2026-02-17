import type { ProjectsData } from '@/types/portfolio';
import { PerformanceCard } from './PerformanceCard';

interface ArchitectureProps {
  performance: ProjectsData['performance'];
}

export function Architecture({ performance }: ArchitectureProps) {
  const { lighthouse, metrics } = performance;

  return (
    <div className='space-y-10 py-6'>
      <div>
        <h4 className='text-sm font-semibold text-white'>
          Layered Unidirectional Architecture
        </h4>
        <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
          Implemented a Page → Hook → Component architecture with explicit state
          ownership.
          <br /> Centralized shared mutations in Zustand store actions while
          isolating UI-only state within components to ensure predictable
          rendering. <br />
          Controlled client-side hydration to minimize layout shifts (CLS 0.003)
          and maintained Lighthouse performance scores above 95 in production
          audits.
        </p>
      </div>

      <div>
        <h4 className='text-sm font-semibold text-white'>
          State & Rendering Strategy
        </h4>
        <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
          Built with React + TypeScript and React Router. <br />
          Zustand was used with persist, devtools, and combine middleware to
          ensure predictable state management while maintaining minimal runtime
          overhead. <br />
          Data persistence is currently handled via localStorage.
        </p>
      </div>
      <div>
        <h4 className='text-sm font-semibold text-white'>
          Lighthouse Performance (Production Build)
        </h4>

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
          <PerformanceCard label='Speed Index' value={metrics.speedIndex} />
        </div>
      </div>

      <p className='text-xs text-muted-foreground'>
        Measurements were taken after production deployment using Lighthouse.
        Performance will be re-evaluated after migrating persistence to
        Supabase.
      </p>
    </div>
  );
}

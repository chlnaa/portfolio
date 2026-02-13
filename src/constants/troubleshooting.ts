import type { TroubleshootingCase } from '@/types/portfolio';

export const TROUBLESHOOTING_DATA: TroubleshootingCase[] = [
  {
    id: 1,
    title: 'UI Inconsistency Due to Unclear State Ownership',
    problem: 'Mixed use of global and local states caused UI updates to fail.',
    cause:
      'Side effects occurred because the state modification pathways were not unified.',
    solution:
      'Redesigned state flow and standardized structure through Store Actions.',
    result: [
      'Enabled traceability',
      'Secured UI consistency',
      'Reduced maintenance costs',
    ],
  },
  {
    id: 2,
    title: 'Stale Closure Issue in Asynchronous Timer',
    problem:
      'Timer malfunctioned as latest state values were not reflected in setInterval.',
    cause:
      'Closure reference issues occurring independently of the rendering cycle.',
    solution:
      'Applied useInterval hook from usehooks-ts to maintain latest callback reference.',
    result: ['Guaranteed latest state updates', 'Prevented memory leaks'],
  },
  {
    id: 3,
    title: 'Web Accessibility (WAI-ARIA) Non-compliance Warnings',
    problem:
      'Runtime warnings occurred due to missing WAI-ARIA attributes when using UI libraries.',
    cause: 'Failure to assign mandatory attributes such as aria-describedby.',
    solution:
      'Analyzed WAI-ARIA guidelines and supplemented the required attributes.',
    result: ['Zero runtime warnings', 'Improved screen reader accessibility'],
  },
];

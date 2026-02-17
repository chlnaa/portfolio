import type { ProjectsData } from '@/types/portfolio';

export const PROJECTS_DATA: ProjectsData = {
  id: 'focusdo',
  title: 'Focusdo',
  period: '2026.01 ~ Present',
  role: 'Planning · Design · Frontend Development',
  techStack: [
    'React',
    'TypeScript',
    'Zustand',
    'TanStack Query',
    'Tailwind CSS',
    'D3.js',
  ],
  introduction:
    'A productivity application integrating task management and focus sessions into a unified state-driven architecture.',

  overview:
    'Designed with explicit state ownership and predictable data flow to ensure UI consistency and long-term maintainability.',

  keyFeatures: [
    {
      title: 'Date-Centric State Isolation',
      description:
        'Implemented selectedDate as a single source of truth to guarantee deterministic task rendering and prevent cross-date state contamination.',
    },
    {
      title: 'Task-Integrated Focus Timer',
      description:
        'Links tasks with focus sessions to accumulate time records per task.',
    },
    {
      title: 'Derived Productivity Dashboard',
      description:
        'Calculates achievement metrics from existing data without introducing redundant state.',
    },
    {
      title: 'Weekly History Visualization',
      description:
        'Visualizes weekly focus patterns using structured data modeling and D3.js.',
    },
  ],

  challenges: [
    {
      problem:
        'UI inconsistencies caused by unclear state ownership across components.',
      solution:
        'Redefined state boundaries by centralizing shared mutations in Zustand store actions while isolating UI-only state within components.',
      result:
        'Improved predictability of UI rendering and made state changes easier to trace during debugging.',
    },
    {
      problem: 'Stale closure issue in asynchronous timer logic.',
      solution:
        'Resolved a stale closure issue by using the useInterval hook from usehooks-ts, which internally maintains the latest callback reference.',
      result:
        'Ensured accurate timer behavior and prevented memory leaks on unmount.',
    },
  ],

  learned: `
  Understood how unclear state ownership directly leads to UI inconsistency. 
  Practiced separating server state and UI state responsibilities.
  Improved debugging efficiency through explicit state modeling.
  `,
  links: {
    github: 'https://github.com/your-repo/focusdo',
    demo: 'https://focusdo-demo.com',
  },
  performance: {
    lighthouse: {
      performance: 100,
      accessibility: 92,
      bestPractices: 100,
    },
    metrics: {
      fcp: '0.4 s',
      lcp: '0.4 s',
      tbt: '0 ms',
      cls: '0.003',
      speedIndex: '0.5 s',
    },
  },
};

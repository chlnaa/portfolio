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
      title: 'Date-Centric Task Management',
      description:
        'Uses a global selectedDate as a single source of truth to isolate tasks by date.',
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
      problem: 'UI inconsistency caused by unclear state ownership.',
      solution:
        'Centralized all shared state mutations through Zustand Store Actions and localized UI-only state within components.',
      result:
        'Eliminated inconsistent UI updates and improved traceability of state changes.',
    },
    {
      problem: 'Stale closure issue in asynchronous timer logic.',
      solution:
        'Resolved a stale closure issue by using the useInterval hook from usehooks-ts, which internally maintains the latest callback reference.',
      result:
        'Ensured accurate timer behavior and prevented memory leaks on unmount.',
    },
  ],

  learned: ` - Understood how unclear state ownership directly leads to UI inconsistency.
  - Practiced separating server state and UI state responsibilities.
  - Improved debugging efficiency through explicit state modeling.`,

  links: {
    github: 'https://github.com/your-repo/focusdo',
    demo: 'https://focusdo-demo.com',
  },
};

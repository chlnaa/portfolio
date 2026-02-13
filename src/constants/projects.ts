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
    'A productivity application that integrates task management and focus sessions into a single state model to enhance data traceability.',

  overview:
    'Built a comprehensive productivity tool that helps users track tasks and focus sessions in real-time. The application focuses on data consistency and predictable state management, ensuring that every user interaction is traceable and reliable.',

  keyFeatures: [
    {
      title: 'Date-Centric Task Management',
      description:
        'Manage task isolation based on specific dates, utilizing a global selectedDate as the single Source of Truth.',
    },
    {
      title: 'Task-Integrated Focus Timer',
      description:
        'Link tasks with focus time to enable cumulative management of session records.',
    },
    {
      title: 'Derived Productivity Dashboard',
      description:
        'Calculate achievement rates based on existing data without storing additional redundant states.',
    },
    {
      title: 'Weekly History Visualization',
      description:
        'Visualize focus patterns based on weekly data modeling using D3.js.',
    },
  ],

  challenges: [
    {
      problem: 'UI Inconsistency Due to Unclear State Ownership',
      solution:
        'Redesigned the state flow and standardized the structure so that shared states are modified exclusively through Zustand Store Actions.',
      result:
        'Enabled full traceability of state changes and secured 100% UI consistency across components.',
    },
    {
      problem: 'Stale Closure Issue in Asynchronous Timer',
      solution:
        'Applied the useInterval hook from usehook-ts (based on useRef) to maintain a reference to the latest callback within the concurrent rendering cycle.',
      result:
        'Guaranteed accurate timer updates and prevented memory leaks upon component unmount.',
    },
  ],

  learned:
    'Gained a deep understanding of explicit state modeling and the importance of separating server state from UI state. Developed the ability to build scalable architectures that are ready for future backend integration while maintaining a high-quality user experience.',

  links: {
    github: 'https://github.com/your-repo/focusdo',
    demo: 'https://focusdo-demo.com',
  },
};

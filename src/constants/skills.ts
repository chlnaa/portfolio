import type { SkillCategory } from '@/types/portfolio';

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Frontend  Engineering',
    items: [
      {
        name: 'React',
        details: [
          'Designing reusable components using a hook-based architecture',
          'Controlling rendering scope to maintain predictable UI performance',
          'Structuring SPA applications with clear separation of concerns',
          'Hook-based component design Component-level styling with Tailwind CSS',
        ],
      },
      {
        name: 'TypeScript',
        details: [
          'Designing interface driven data contracts between components',
          'Explicit state modeling to prevent ambiguous UI states',
          'Maintaining strict type safety across medium-scale codebases',
        ],
      },
      {
        name: 'State Management',
        details: [
          'Server state handling using TanStack Query',
          'Lightweight UI state management with Zustand',
          'Clear separation between server data and client side interaction state',
        ],
      },
    ],
  },

  {
    category: 'Tooling & Code Quality',
    items: [
      {
        name: 'Workflow & Strategy',
        details: [
          'Applying Git Flow based branching strategies',
          'Maintaining consistent English commit conventions',
          'Structuring technical documentation and handover materials',
        ],
      },
      {
        name: 'Development Environment',
        details: [
          'Build setup and optimization using Vite',
          'Maintaining code consistency with ESLint and Prettier',
          'Following structured development workflows in team environments',
        ],
      },
    ],
  },
];

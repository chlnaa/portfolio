import type { SkillCategory } from '@/types/portfolio';

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      {
        name: 'React',
        details: [
          'Hook-based component design',
          'Minimizing re-render scope',
          'SPA architecture design',
        ],
      },
      {
        name: 'TypeScript',
        details: [
          'Interface-driven data contract design',
          'Explicit state modeling',
          'Strict type safety',
        ],
      },
      {
        name: 'State Management',
        details: [
          'TanStack Query (Server State)',
          'Zustand (UI State)',
          'Responsibility separation',
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
          'Branching strategy based on Git Flow',
          'Consistent adherence to English commit conventions',
          'Experience in structuring READMEs and handover documentation',
        ],
      },
      {
        name: 'Development Environment',
        details: [
          'Build setup and optimization using Vite',
          'Maintaining code consistency with ESLint and Prettier',
          'Standardizing development workflows for team collaboration',
        ],
      },
    ],
  },
];

import type { HomeData } from '@/types/portfolio';

export const HOME_DATA: HomeData = {
  title: 'Frontend Developer',
  subtitle: 'Designing Predictable State and Scalable UI Systems',
  description:
    'Architecting structured user interactions and data flows to build predictable, maintainable frontend systems.',
  keywords: [
    'React',
    'TypeScript',
    'SPA Architecture',
    'Zustand',
    'TanStack Query',
  ],
  actions: [
    { label: 'View Projects', href: '#projects', variant: 'primary' },
    { label: 'Contact Me', href: '#contact', variant: 'secondary' },
  ],
};

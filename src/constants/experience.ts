import type { ExperienceItem } from '@/types/portfolio';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    period: '2026 - Present',
    role: 'Frontend Developer',
    company: 'Focusdo Open Source Project',
    description:
      'Leading the frontend architecture for a focus-based productivity application.',
    techStack: ['React', 'TypeScript', 'Zustand', 'TanStack Query'],
    achievements: [
      'Designed a predictable state management system by separating Server and UI states.',
      'Implemented a high-performance weekly history visualization using D3.js.',
    ],
  },
  {
    id: 2,
    period: 'Previous Experience',
    role: 'Global Localization & QA Specialist',
    company: 'Professional Experience in Japan',
    description:
      'Possesses expertise in cross-cultural business communication and localization competency.',
    achievements: [
      'Optimized UI/UX layouts for various language variations during the localization process.',
      'Established clear technical documentation and guidelines for multilingual knowledge sharing.',
      'Utilized collaborative tools in a Japanese business environment with high communication accuracy.',
    ],
  },
];

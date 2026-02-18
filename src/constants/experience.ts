import type { ExperienceItem } from '@/types/portfolio';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    period: '2024 - 2026',
    role: 'Frontend Engineering Focus',
    company: 'Bachelor’s Program (Transfer) Computer Science',
    isPrimary: true,
    description:
      'Pursued formal academic coursework alongside intensive project-based training, transitioning into frontend engineering with a focus on scalable React architecture and performance-driven UI systems.',
    techStack: [
      'React',
      'TypeScript',
      'JavaScript',
      'Zustand',
      'TanStack Query',
      'Tailwind',
    ],
    achievements: [
      'Built production-level frontend applications with clear separation of Server and UI state.',
      'Implemented scalable component architecture with TypeScript-based type safety.',
      'Focused on performance optimization, data fetching patterns, and maintainable UI design.',
    ],
  },
  {
    id: 2,
    period: '2019.04 - 2023.09',
    role: 'Localization QA & Project Specialist (Contract)',
    company: 'Game Development / Localization Projects',
    description:
      'Managed multilingual game localization quality assurance across large-scale releases, ensuring linguistic consistency and delivery precision under strict production schedules.',
    achievements: [
      'Performed detailed translation validation (Japanese → Korean) ensuring linguistic accuracy and contextual integrity.',
      'Reviewed and incorporated QA feedback from both localization vendors and game development teams.',
      'Maintained and updated glossary and world-building style guides to ensure narrative consistency.',
      'Validated in-game text after implementation to maintain terminology consistency across builds.',
      'Utilized CAT tools to register and manage terminology databases for quality control.',
      'Managed delivery timelines through direct communication with directors and cross-functional teams.',
      'Ensured adherence to character limits and development constraints during localization integration.',
    ],
  },
  {
    id: 3,
    period: '2018.07 - 2019.04',
    role: 'Building Operations & Administrative Coordinator (Contract)',
    company: 'Food Manufacturing Company',
    isCondensed: true,
    description:
      'Handled operational coordination and documentation management for corporate building facilities in a Japanese business environment.',
    achievements: [
      'Translated contracts and technical documentation (Japanese → Korean).',
      'Managed contract records and issued billing documents with high accuracy.',
      'Processed accounting entries and coordinated with property management vendors.',
      'Coordinated internal construction estimates and handled component procurement.',
    ],
  },
  {
    id: 4,
    period: '2016.09 - 2018.02',
    role: 'Platform Operations Assistant (Contract)',
    company: 'E-Learning Platform Division',
    isCondensed: true,
    description:
      'Supported platform operations and administrative workflows for a digital learning service.',
    achievements: [
      'Managed user registration and course configuration within the e-learning platform.',
      'Generated weekly and monthly access reports for performance tracking.',
      'Maintained tenant accounts (creation, modification, deletion).',
      'Processed product order requests and verified deployment environments before certification issuance.',
      'Performed daily system checks to ensure service stability and detect platform errors.',
    ],
  },
];

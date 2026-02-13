import type { AboutData } from '@/types/portfolio';

export const ABOUT_DATA: AboutData = {
  title: 'About Me',
  description: [
    'A developer who structures static data into user experiences. Through game localization review work, I experienced the process where text, interaction, and graphics combine to complete the user experience.',
    'I have a strength in structural design—organizing complex business logic from a state model perspective and separating server state from UI state using Zustand and TanStack Query.',
  ],
  quickFacts: [
    { label: 'Location', value: 'Seoul, Korea' },
    { label: 'Focus', value: 'Frontend Development' },
    { label: 'Experience', value: 'Global Localization' },
    { label: 'Languages', value: 'Korean, Japanese' },
  ],
};

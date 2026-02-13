import type { ContactLink } from '@/types/portfolio';

export const CONTACT_DATA: ContactLink[] = [
  {
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    icon: 'Mail',
  },
  {
    label: 'GitHub',
    value: 'github.com/your-id',
    href: 'https://github.com/your-id',
    icon: 'Github',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/your-id',
    href: 'https://linkedin.com/in/your-id',
    icon: 'Linkedin',
  },
];

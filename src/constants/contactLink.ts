import type { ContactLink } from '@/types/portfolio';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/your-id',
    href: 'https://github.com/your-id',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/your-id',
    href: 'https://linkedin.com/in/your-id',
    icon: FaLinkedin,
  },
];

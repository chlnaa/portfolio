import type { ContactLink } from '@/types/portfolio';
import { Mail } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'Email',
    value: 'choinaa26@gmail.com',
    href: 'mailto:choinaa26@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/chlnaa',
    href: 'https://github.com/chlnaa',
    icon: FaGithub,
  },
];

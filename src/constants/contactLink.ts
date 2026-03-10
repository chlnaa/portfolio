import type { ContactLink } from '@/types/portfolio';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

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
  {
    label: 'GitHubProject',
    value: 'github.com/chlnaa/focus-based-todo',
    href: 'https://github.com/chlnaa/focus-based-todo',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/your-id',
    href: 'https://linkedin.com/in/your-id',
    icon: FaLinkedin,
  },
  {
    label: 'DeployUrl',
    value: 'DeployUrl',
    href: 'https://focus-based-todo.vercel.app',
    icon: FaExternalLinkAlt,
  },
];

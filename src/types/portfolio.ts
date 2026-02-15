export interface NavItem {
  label: string;
  href: string;
}

export interface HomeAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface HomeData {
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
  actions: HomeAction[];
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface AboutData {
  title: string;
  description: string[];
  quickFacts: QuickFact[];
}

export interface SkillItem {
  name: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ProjectChallenge {
  problem: string;
  solution: string;
  result: string;
}

export interface ProjectsData {
  id: string;
  title: string;
  period: string;
  role: string;
  techStack: string[];
  introduction: string;
  overview: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  challenges: ProjectChallenge[];
  learned: string;
  links: {
    github: string;
    demo: string;
  };
}

export interface TroubleshootingCase {
  id: number;
  title: string;
  problem: string;
  cause: string;
  solution: string;
  result: string[];
}

export interface GlobalExperience {
  title: string;
  content: string;
  details: {
    label: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
  techStack?: string[];
  achievements: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon?: React.ElementType;
}

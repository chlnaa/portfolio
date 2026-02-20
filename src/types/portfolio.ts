export interface NavItem {
  label: string;
  href: string;
}

export interface LocalizedText {
  en: string;
  ko: string;
  ja: string;
}

export interface LocalizedList {
  ko: string[];
  en: string[];
  ja: string[];
}

export interface HomeAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface HomeData {
  title: string;
  subtitle: LocalizedText;
  description: LocalizedText;
  keywords: string[];
  actions: HomeAction[];
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface AboutData {
  title: string;
  description: LocalizedText[];
  quickFacts: QuickFact[];
}

export interface SkillItem {
  name: string;
  details: LocalizedText[];
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ArchitectureSection {
  title: LocalizedText;
  description?: LocalizedText;
}

export interface ArchitectureData {
  sections: ArchitectureSection[];
  footer: LocalizedText;
}

export interface ProjectChallenge {
  problem: LocalizedText;
  solution: LocalizedText;
  result: LocalizedText;
}

export interface ProjectPerformance {
  lighthouse: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo?: number;
  };
  metrics: {
    fcp: string;
    lcp: string;
    tbt: string;
    cls: string;
    speedIndex: string;
  };
}

export interface ProjectsData {
  id: string;
  title: string;
  period: string;
  role: string;
  techStack: string[];
  introduction: LocalizedText;
  overview: LocalizedText;
  keyFeatures: {
    title: LocalizedText;
    description: LocalizedText;
  }[];
  challenges: ProjectChallenge[];
  learned: LocalizedList;
  links: {
    github: string;
    demo: string;
  };
  architecture: ArchitectureData;
  performance: ProjectPerformance;
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
  role: LocalizedText;
  company: LocalizedText;
  description: LocalizedText;
  techStack?: string[];
  achievements: LocalizedText[];
  isPrimary?: boolean;
  isCondensed?: boolean;
}

export interface ContactContent {
  description: LocalizedText[];
  openToWork: {
    badge: LocalizedText;
    headline: LocalizedText;
    description: LocalizedText[];
    availability: string;
  };
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon?: React.ElementType;
}

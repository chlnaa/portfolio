import type { HomeData } from '@/types/portfolio';

export const HOME_DATA: HomeData = {
  title: 'Frontend Developer',
  subtitle: {
    ko: '예측 가능한 상태와 확장 가능한\nUI 시스템을 설계합니다.',
    en: 'Designing Predictable State and Scalable UI Systems',
    ja: '予測可能な状態と拡張可能な\nUIシステムを設計します。',
  },
  description: {
    ko: '복잡한 요구사항을 명확한 데이터 흐름으로 전환하여,\n지속 가능한 프론트엔드 아키텍처를 구축합니다.',
    en: 'Transforming complex requirements into clear data flows\n to build sustainable frontend architectures.',
    ja: '複雑な要求事項を明確なデータフローへと変換し、\n持続可能なフロントエンドアーキテクチャを構築します。',
  },
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

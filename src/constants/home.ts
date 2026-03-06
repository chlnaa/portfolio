import type { HomeData } from '@/types/portfolio';

export const HOME_DATA: HomeData = {
  title: 'Frontend Developer',
  subtitle: {
    en: `Architecting Reliable Systems through Data Integrity and Consistency.`,
    ko: `데이터 무결성과 
         정합성 확보를 통해 신뢰할 수 있는 
         시스템 아키텍처를 설계합니다.`,
    ja: `データの完全性と
    整合性の確保を通じて、信頼性の
    高いシステムアーキテクチャを
    設計します。`,
  },
  description: {
    en: `Beyond feature implementation, I build source-data-driven aggregation pipelines to create sustainable and scalable frontend environments.`,
    ko: `단순한 기능 구현을 넘어 원천 데이터 기반의 집계 파이프라인을 구축하며,
         지속 가능하고 확장성 있는 프론트엔드 환경을 만듭니다.`,
    ja: `単なる機能実装を超え、ソースデータに基づいた集約パイプラインを構築し、
         持続可能で拡張性のあるフロントエンド環境を構築します。`,
  },
  keywords: [
    'React',
    'TypeScript',
    'SPA Architecture',
    'Zustand',
    'TanStack Query',
  ],
  actions: [
    { label: 'View Project', href: '#project', variant: 'primary' },
    { label: 'Contact Me', href: '#contact', variant: 'secondary' },
  ],
};

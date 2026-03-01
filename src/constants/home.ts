import type { HomeData } from '@/types/portfolio';

export const HOME_DATA: HomeData = {
  title: 'Frontend Developer',
  subtitle: {
    en: 'Building Reliable Systems by Solving Runtime Errors and State Sync Challenges',
    ko: '런타임 오차 보정과 서버 상태\n 동기화를 통해 신뢰할 수 있는\n 사용자 경험을 설계합니다.',
    ja: 'ランタイムエラーの補正とサーバー状態の同期を通じて、\n信頼性の高いユーザーエクスペリエンスを設計します。',
  },
  description: {
    en: 'I specialize in transforming complex business logic into high-precision, scalable frontend architectures.',
    ko: '복잡한 비즈니스 요구사항을 정밀한 데이터 흐름으로 전환하여,\n지속 가능한 프론트엔드 아키텍처를 구축합니다.',
    ja: '複雑なビジネス要件を精密なデータフローへと変換し、\n持속的なフロントエンドアーキテクチャを構築します。',
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

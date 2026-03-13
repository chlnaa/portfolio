import type { HomeData } from '@/types/portfolio';

export const HOME_DATA: HomeData = {
  title: 'Frontend Developer',
  subtitle: {
    en: `Building reliable frontend systems through clear state management and consistent data flow.`,
    ko: `명확한 상태 관리와 일관된 데이터 흐름을 기반으로
        신뢰할 수 있는 프론트엔드 시스템을 설계합니다.`,
    ja: `明確な状態管理と一貫したデータフローを基盤に、
        信頼できるフロントエンドシステムを設計します。`,
  },
  description: {
    en: `I focus on designing frontend systems where data flow and state ownership are clearly defined,
        so that UI behavior remains predictable and maintainable as the application grows.`,
    ko: `데이터 흐름과 상태 소유권이 명확하게 정의된 프론트엔드 시스템을 설계하여
          애플리케이션이 확장되더라도 UI 동작이 예측 가능하고 유지보수 가능하도록 만드는 데 집중합니다.`,
    ja: `データフローと状態の所有関係を明確に定義したフロントエンドシステムを設計し、
          アプリケーションが拡張してもUIの挙動が予測可能で保守しやすい構造を目指しています。`,
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

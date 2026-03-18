import type { HomeData } from '@/types/portfolio';

export const HOME_DATA: HomeData = {
  title: 'Frontend Developer',
  subtitle: {
    en: `Engineering predictable UI systems by designing explicit state ownership and ensuring data integrity.`,
    ko: `데이터 무결성과 명시적인 
          상태 소유권을 설계하여, 
          복잡한 비즈니스 로직에서도 
          예측 가능한 UI 시스템을 구축합니다.`,
    ja: `データの整合性と明示的な
          状態所有権を設計し、
          ビジネスロジックが複雑化しても
          予測可能なUIシステムを
          構築します。`,
  },
  description: {
    en: `Having prioritized precision and consistency in game localization, I now apply that same rigor to frontend engineering by ensuring data flows and states are managed with absolute clarity.`,
    ko: `게임 로컬라이징에서 정확성과 일관성을 중요하게 다뤄왔습니다. 
          이 경험을 바탕으로 프론트엔드에서도 데이터 흐름과 상태를 명확하게 관리하는 
          개발을 하고 있습니다.`,
    ja: `ゲームローカライズで培った正確性と一貫性へのこだわりを基盤に、
        フロントエンドにおいてもデータフローと状態を厳格に管理する開発を実践しています。`,
  },
  actions: [
    { label: 'View Project', href: '#project', variant: 'primary' },
    { label: 'Contact Me', href: '#contact', variant: 'secondary' },
  ],
};

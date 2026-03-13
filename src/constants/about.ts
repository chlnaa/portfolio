import type { AboutData } from '@/types/portfolio';

export const ABOUT_DATA: AboutData = {
  title: 'About Me',
  description: [
    {
      en: `Drawing from my experience in game localization—where precision is essential—
           I became interested in engineering systems that maintain strict control over data flow.`,

      ko: `텍스트와 상호작용의 정밀함이 중요한 게임 로컬라이징 경험을 통해
           데이터 흐름을 명확하게 통제하는 시스템 설계에 관심을 갖게 되었습니다.`,

      ja: `テキストと相互作用の精密さが求められるゲームローカライズの経験を通じて、
           データフローを明確に制御するシステム設計に興味を持つようになりました。`,
    },
    {
      en: `I focus on structuring complex requirements through state modeling,
          while clearly separating server-side aggregation from UI state.`,
      ko: `복잡한 비즈니스 요구사항을 상태 모델링으로 구조화하고, 
           서버 상태의 집계(Aggregation)와 UI 상태를 엄격히 분리합니다.
           TanStack Query와 Zustand를 전략적으로 활용하여 사용자에게 신뢰성 있는 
           정보와 즉각적인 피드백을 제공하는 고성능 시스템을 지향합니다.`,
      ja: `複雑なビジネス要件を状態モデリングで構造化し、
          サーバー側の集約(Aggregation)とUI状態を厳格に分離します。
          TanStack QueryとZustandを戦略的に活用し、
          ユーザーに信頼性の高い情報と即時のフィードバックを提供する高性能なシステムを追求しています。`,
    },
  ],
  quickFacts: [
    { label: 'Location', value: 'Seoul, Korea' },
    { label: 'Focus', value: 'Frontend Development' },
    { label: 'Experience', value: 'Game Localization' },
    { label: 'Languages', value: 'Korean, Japanese' },
  ],
};

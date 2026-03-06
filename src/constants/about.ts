import type { AboutData } from '@/types/portfolio';

export const ABOUT_DATA: AboutData = {
  title: 'About Me',
  description: [
    {
      en: 'Drawing from my background in game localization—where precision is paramount—I am driven to engineer systems with total control over data flow. I focus on building robust systems that guarantee data integrity in any environment by adhering to the Single Source of Truth (SSOT) principle.',
      ko: `텍스트와 상호작용의 정밀함이 생명인 게임 로컬라이징 경험을 바탕으로, 
           데이터의 흐름을 완벽히 통제하는 엔지니어링에 매료되었습니다. 
           단일 진실 공급원(SSOT) 원칙을 준수하여 어떤 환경에서도 데이터 무결성을 보장하는 
           견고한 시스템을 구축하는 데 집중합니다.`,
      ja: `テキストと相互作用の精密さが不可欠なゲームローカライズの経験を活かし、
            データフローを完璧に制御するエンジニアリングに魅了されました。
            単一真実のソース(SSOT)原則を遵守し、あらゆる環境下でデータの完全性を保証する
            堅牢なシステム構築に注力しています。`,
    },
    {
      en: `I excel at structuring complex business requirements through state modeling, strictly separating server-side aggregation from UI state. By strategically leveraging TanStack Query and Zustand, I aim to build high-performance systems that provide reliable information and instantaneous feedback.`,
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

import type { AboutData } from '@/types/portfolio';

export const ABOUT_DATA: AboutData = {
  title: 'About Me',
  description: [
    {
      en: 'Transitioned from game localization—where precision in text and interaction is paramount—to frontend development to personally engineer seamless user experiences. I focus on solving technical challenges like interval drift to ensure data integrity in any environment.',
      ko: '텍스트와 상호작용의 정밀함이 생명인 게임 로컬라이징 경험을 바탕으로, 완벽한 UX를\n 직접 엔지니어링하고자 개발자로 전향했습니다. 런타임 환경의 인터벌 오차를 보정하는 등 어떤 조건에서도 데이터 무결성을 보장하는 해결책을 찾는 데 집중합니다.',
      ja: 'テキストと相互作用の精密さが不可欠なゲームローカライズの経験を活かし、完璧なUXを自らエンジニアリングするために開発者へと転向しました。ランタイム環境のインターバル誤差を補正するなど、あらゆる条件下でデータの整合性を保証する解決策を見出すことに注力しています。',
    },
    {
      en: 'I excel at structuring complex logic through state modeling, leveraging TanStack Query for optimistic updates and Zustand for clean UI state management to build highly responsive, scalable systems.',
      ko: '복잡한 로직을 상태 모델 관점에서 구조화하는 데 강점이 있습니다. TanStack Query의 낙관적 업데이트와 Zustand를 활용해 서버와 UI 상태를 명확히 분리하며, 사용자에게 즉각적인 피드백을 주는 고성능 시스템을 지향합니다.',
      ja: '複雑なロジックを状態モデルの観点から構造化することに強みがあります。TanStack Queryの楽観的アップデートとZustandを活用してサーバーとUIの状態を明確に分離し、ユーザーに即時フィードバックを提供する高性能なシステムを追求しています。',
    },
  ],
  quickFacts: [
    { label: 'Location', value: 'Seoul, Korea' },
    { label: 'Focus', value: 'Frontend Development' },
    { label: 'Experience', value: 'Game Localization' },
    { label: 'Languages', value: 'Korean, Japanese' },
  ],
};

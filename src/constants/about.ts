import type { AboutData } from '@/types/portfolio';

export const ABOUT_DATA: AboutData = {
  title: 'About Me',
  description: [
    {
      ko: '정적인 데이터 검수에서 나아가 사용자 상호작용을 직접 설계하고자 개발자로 전향하였습니다.\n 게임 로컬라이징 경험을 통해 텍스트, 그래픽, 상호작용이 결합하여\n완성된 UX를 만드는 과정을 체득했습니다.',
      en: 'Pivoted to development to personally design user interactions beyond static data validation. My experience in game localization gave me a deep understanding of how text, graphics, and interaction converge to create a complete UX.',
      ja: '静的データの検収にとどまらず、ユーザーインタラクションを自ら設計するためにエンジニアへ転向しました。ゲームローカライズの経験を通じ、テキスト、グラフィック、相互作用が融合して一つの完成されたUXを生み出すプロセスを体得しました。',
    },
    {
      ko: '복잡한 비즈니스 로직을 상태 모델 관점에서 구조화하는 데 강점이 있으며,\n Zustand와 TanStack Query를 활용해 서버와 UI 상태를 명확히 분리하여 확장성 있는\n아키텍처를 설계하는 것을 지향합니다.',
      en: 'I specialize in structuring complex business logic through state modeling, focusing on designing scalable architectures by decoupling server and UI states using Zustand and TanStack Query.',
      ja: '複雑なビジネスロジックを状態モデルの観点から構造化することに強みがあり、ZustandやTanStack Queryを活用してサーバーとUIの状態を明確に分離し、拡張性のあるアーキテクチャを設計することを追求しています。',
    },
  ],
  quickFacts: [
    { label: 'Location', value: 'Seoul, Korea' },
    { label: 'Focus', value: 'Frontend Development' },
    { label: 'Experience', value: 'Game Localization' },
    { label: 'Languages', value: 'Korean, Japanese' },
  ],
};

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
      en: `Leveraging my experience in automating QA processes with regular expressions during localization, I apply a systematic approach to frontend development. I focus on structuring complex requirements through clear state modeling while maintaining a strict separation between server-side aggregation and UI state.`,
      ko: `로컬라이징 현장에서 정규 표현식을 활용해 검수 프로세스를 시스템화하며 효율을 높였던 
           경험이 있습니다. 이러한 시스템적 사고를 바탕으로, 프론트엔드에서도 복잡한 요구사항을 
           명확한 상태 모델링으로 구조화하고 서버 상태와 UI 상태를 엄격히 분리하는 설계에 집중합니다.`,
      ja: `ローカライズ現場で正規表現を活用し、検品プロセスをシステム化して効率を高めた経験があります。
            このようなシステム的思考に基づき、フロントエンドにおいても複雑な要件を明確な
          状態モデリングで構造化し、サーバー状態とUI状態を厳格に分離する設計に注力しています。`,
    },
  ],
  quickFacts: [
    { label: 'Location', value: 'Seoul, Korea' },
    { label: 'Focus', value: 'Frontend Development' },
    { label: 'Experience', value: 'Game Localization' },
    { label: 'Languages', value: 'Korean, Japanese' },
  ],
};

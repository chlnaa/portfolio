import type { ContactContent } from '@/types/portfolio';

export const CONTACT_CONTENT: ContactContent = {
  description: [
    {
      ko: `텍스트를 검수하다 화면을 만들게 된 프론트엔드 개발자입니다. 
          로컬라이징에서 쌓은 꼼꼼함과 일관성에 대한 감각을 개발에 녹이고 있습니다.
          현재 프론트엔드 포지션을 찾고 있습니다. 
          24시간 이내에 답변드리겠습니다.`,

      en: ` A frontend developer who went from checking text to building screens.
      I bring the precision and consistency I developed in game localization
      into how I write and structure frontend code.
      Currently looking for frontend opportunities.
      I typically respond within 24 hours.`,

      ja: `テキストの検収から画面制作へ転向したフロントエンドエンジニアです。
      ゲームローカライズで培った正確さと一貫性へのこだわりを、フロントエンド開発に活かしています。
      現在、フロントエンドエンジニアとしての機会を探しています。
      通常24時間以内に返信いたします。`,
    },
  ],
  openToWork: {
    badge: {
      en: 'Open to Work',
      ko: '구직 중',
      ja: '求職中',
    },
    headline: {
      en: 'Seeking Frontend Developer Positions',
      ko: '프론트엔드 개발자 포지션을 찾고 있습니다.',
      ja: 'フロントエンドエンジニアのポジションを探しています。',
    },
    description: [
      {
        en: `Looking for a frontend role where React and TypeScript are part of the stack.
             I care about how data flows through an application,
             and I work best in teams where attention to detail matters.`,
        ko: `React · TypeScript 기반 프론트엔드 포지션을 찾고 있습니다.
             데이터 흐름을 명확하게 설계하는 것을 중요하게 생각하며, 
             꼼꼼하게 일하는 팀에서 함께하고 싶습니다.`,
        ja: `React・TypeScriptを使用するフロントエンドのポジションを探しています。
              データがアプリケーション内をどう流れるかを大切にしており、
              細部へのこだわりを持つチームで働きたいと考えています。`,
      },
    ],
    availability: 'Available for hire',
  },
};

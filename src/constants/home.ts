import type { HomeData } from '@/types/portfolio';

export const HOME_DATA: HomeData = {
  title: 'Frontend Developer',
  subtitle: {
    en: `Building consistent, predictable UI by defining clear data flows and state ownership.`,
    ko: `데이터 흐름과 상태를 명확하게 
         정의하여, 일관성 있고 예측 가능한 
         UI를 만드는 것을 목표로 합니다.`,
    ja: `データの流れと状態を明確に
        定義し、一貫性があり予測可能な
        UI構築を目指しています。`,
  },
  description: {
    en: `In game localization, I learned that when consistency breaks—
         across terminology, tone, or character voice—
         the whole experience falls apart.
         That same instinct now shapes how I design data flows in frontend development.`,
    ko: `게임 로컬라이징에서 용어, 문장, 캐릭터 말투까지 일관성이 무너지면 전체 품질이 
        흔들린다는 것을 배웠습니다. 그 경험이 지금, 데이터 흐름을 일관되게 설계하는 것을
         가장 중요하게 여기는 이유입니다.`,
    ja: `ゲームローカライズで用語・文章・キャラクターの口調の一貫性が崩れると、全体の品質が
         揺らぐことを体で学びました。その経験が今、データフローを一貫して設計することを
         最も重視する理由となっています。`,
  },
  actions: [
    { label: 'View Project', href: '#project', variant: 'primary' },
    { label: 'Contact Me', href: '#contact', variant: 'secondary' },
  ],
};

import type { AboutData } from '@/types/portfolio';

export const ABOUT_DATA: AboutData = {
  title: 'About Me',
  description: [
    {
      en: `At a game localization company, I learned regular expressions from a colleague
           and applied them to automate HTML tag conversion in source texts.
           Manual work meant tags were easily missed—after automating,
           both accuracy and readability improved significantly.
           That moment of solving a real problem with code
           was what made me want to build things, not just check them.`,
      ko: `게임 로컬라이징 현장에서 동료에게 정규표현식을 배워, 원문의 HTML 문자열을 태그로 
           자동 변환하는 방식을 실무에 적용했습니다. 수작업으로는 태그가 빠지기 쉬웠던 작업이었는데,
           자동화 이후 누락이 줄고 검수 가독성도 높아졌습니다. 코드로 문제를 해결하는 그 순간이,
           검수하는 사람이 아니라 직접 만드는 사람이 되고 싶다는 결정적인 계기가 되었습니다.`,
      ja: `ゲームローカライズ現場で同僚から正規表現を学び、原文のHTMLタグ変換を自動化しました。
           手作業ではタグが抜けやすかった工程が改善され、精度と可読性が大きく向上しました。
           コードで課題を解決したその瞬間が、検収する側ではなく、自ら作る側になりたいという
           決定的なきっかけとなりました。`,
    },
  ],
  quickFacts: [
    { label: 'Location', value: 'Seoul, Korea' },
    { label: 'Focus', value: 'Frontend Development' },
    { label: 'Experience', value: 'Game Localization' },
    { label: 'Languages', value: 'Korean, Japanese' },
  ],
};

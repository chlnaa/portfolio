import type { ExperienceItem } from '@/types/portfolio';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    period: '2024 - 2026',
    role: {
      ko: '프론트엔드 엔지니어링 집중',
      en: 'Frontend Engineering Focus',
      ja: 'フロントエンドエンジニアリング専念',
    },
    company: {
      ko: '컴퓨터과학과 학사 편입',
      en: 'Bachelor’s Program (Transfer) - Computer Science',
      ja: 'コンピュータ科学部 学士編入',
    },
    isPrimary: true,
    description: {
      ko: '정적인 텍스트 검수에서 나아가 사용자와 직접 상호작용하는 동적인 콘텐츠를 설계하고 구현하고자 프론트엔드 엔지니어로 전향했습니다.',
      en: 'Pivoted to frontend engineering to design and implement dynamic user interactions, moving beyond static text validation and localization.',
      ja: '静的テキストの検収から、ユーザーと直接相互作用する動的コンテンツの設計・実装を目指し、フロントエンドエンジニアへ転向しました。',
    },

    techStack: [
      'React',
      'TypeScript',
      'JavaScript',
      'Zustand',
      'TanStack Query',
      'Tailwind',
    ],
    achievements: [
      {
        ko: 'Zustand와 TanStack Query를 활용하여 서버 상태와 UI 상태를 명확히 분리한 애플리케이션 구조를 설계하고 구현했습니다.',
        en: 'Built applications by clearly separating server and UI states using Zustand and TanStack Query.',
        ja: 'ZustandとTanStack Queryを活用し、サーバー状態とUI状態を明確に分離したアプリケーション構造を設計・実装しました。',
      },
      {
        ko: '자료구조, 알고리즘, 정보통신망 등 컴퓨터 과학 전공 과목 이수를 통해 프론트엔드 개발의 기술적 기초를 다졌습니다.',
        en: 'Strengthened technical foundations through computer science coursework, including Data Structures, Algorithms, and Information and Communications Networks..',
        ja: 'データ構造、アルゴリズム、情報通信ネットワークなどの専攻科目を通じて、フロントエンド開発の技術的な基礎を固めました。',
      },
      {
        ko: '캐싱 전략과 효율적인 데이터 페칭 패턴을 적용하여 애플리케이션의 성능과 사용자 경험을 개선했습니다.',
        en: 'Implemented optimized data fetching and caching strategies to improve user experience and application performance.',
        ja: 'キャッシュ戦略と効率的なデータフェッチパターンを適用し、アプリケーションのパフォーマンスとUXを向上させました。',
      },
    ],
  },
  {
    id: 2,
    period: '2019.04 - 2023.09',
    role: {
      ko: '로컬라이징 QA 및 프로젝트 담당 (파견사원)',
      en: 'Localization QA & Project Specialist (Contractor)',
      ja: 'ローカライズQAおよびプロジェクト担当 (派遣)',
    },
    company: {
      ko: '게임 개발 / 로컬라이징 프로젝트',
      en: 'Game Development / Localization Projects',
      ja: 'ゲーム開発／ローカライズプロジェクト',
    },
    description: {
      ko: '정규표현식과 CAT 툴을 활용해 번역 품질과 용어 일관성을 관리했습니다.',
      en: 'Managed translation quality and terminology consistency using Regex and CAT tools.',
      ja: '正規表現およびCATツールを活用し、翻訳品質と用語の一貫性を管理しました。',
    },
    achievements: [
      {
        ko: '정규표현식(Regex)을 활용해 원문 내 HTML 태그를 전환하여 검수 가독성을 높이고 작업 효율을 개선했습니다.',
        en: 'Improved QA efficiency and readability by utilizing Regular Expressions (Regex) to process HTML tags.',
        ja: '正規表現(Regex)を活用して原文内のHTMLタグを変換し、検収の可読性を高め、作業効率を改善しました。',
      },
      {
        ko: '기존 용어집(Glossary)의 지속적인 유지보수(수정·추가·삭제)를 통해 게임 빌드 내 용어 일관성을 확보했습니다.',
        en: 'Maintained and updated glossaries to ensure terminology consistency across game builds.',
        ja: '既存の用語集(Glossary)の継続的なメンテナンス（修正・追加・削除）を通じて、ゲームビルド内の用語の一貫性を確保しました。',
      },
      {
        ko: 'CAT 툴을 활용해 용어 불일치 및 오탈자에 대한 전수 검수를 수행하여 번역 정확도를 높였습니다.',
        en: 'Conducted comprehensive checks for terminology inconsistencies and typographical errors using CAT tools.',
        ja: 'CATツールを用いて用語の不一致および誤字脱字の総合チェックを実施し、翻訳の正確性を向上させました。',
      },
      {
        ko: '제한 문자수 및 지시사항을 준수하며 납품 일정을 관리하고, 작가의 의도에 맞춘 검수로 최종 퀄리티를 관리했습니다.',
        en: 'Managed delivery timelines and performed contextual QA to ensure high-quality localization under strict constraints.',
        ja: '文字数制限や指示事項を遵守して納品スケジュールを管理し、制作意図に合わせた検収で最終的なクオリティを管理しました。',
      },
    ],
  },
  {
    id: 3,
    period: '2018.07 - 2019.04',
    role: {
      ko: '행정 지원 (파견사원)',
      en: 'Administrative Coordinator (Contractor)',
      ja: '行政サポート (派遣)',
    },
    company: {
      ko: '식품 제조 기업',
      en: 'Food Manufacturing Company',
      ja: '食品製造企業',
    },
    isCondensed: true,
    description: {
      ko: 'Excel 기반 자동화 기능을 활용하여 행정 업무 효율을 개선하고 정확한 문서 업무를 수행했습니다.',
      en: 'Improved administrative efficiency by leveraging Excel-based automation and ensuring accurate documentation.',
      ja: 'Excelベースの自動化機能を活用して業務効率を改善し、正確な文書業務を遂行しました。',
    },
    achievements: [
      {
        ko: '엑셀 고급 필터 및 VBA 매크로를 활용해 전표 입력 시간을 30분에서 약 5분으로 단축했습니다.',
        en: 'Reduced voucher entry time from 30 minutes to approximately 5 minutes using advanced Excel filters and VBA macros.',
        ja: 'Excelの高度なフィルターおよびVBAマクロを活用し、伝票入力時間を30分から約5分へ短縮しました。',
      },
      {
        ko: '일본 현지 법인(한국 기업 지사) 환경에서 일-한 계약서 및 각종 비즈니스 문서의 번역 업무를 지원했습니다.',
        en: 'Provided Japanese-Korean translation for contracts and various business documents within a South Korean branch office in Japan.',
        ja: '日本現地法人（韓国企業の日本支社）において、日韓契約書および各種ビジネス文書の翻訳業務を支援しました。',
      },
    ],
  },
  {
    id: 4,
    period: '2016.09 - 2018.02',
    role: {
      ko: '플랫폼 운영 서포트 (파견사원)',
      en: 'Platform Operations Assistant (Contractor)',
      ja: 'プラットフォーム運営サポート (派遣)',
    },
    company: {
      ko: '이러닝 플랫폼 사업부',
      en: 'E-Learning Platform Division',
      ja: 'Eラーニングプラットフォーム事業部',
    },
    isCondensed: true,
    description: {
      ko: '이러닝 서비스 어카운트 관리 및 시스템 운영 보조 업무를 수행했습니다.',
      en: 'Supported e-learning platform operations by managing user accounts and performing routine system checks.',
      ja: 'eラーニングサービスのアカウント管理およびシステム運営補助業務を担当しました。',
    },
    achievements: [
      {
        ko: '유저 어카운트 추가·삭제·수정 및 고객사 납품 전 서비스 접속과 영상 재생 환경을 확인했습니다.',
        en: 'Managed user account lifecycles and verified system environments (access, playback) before client delivery.',
        ja: 'ユーザーアカウントの追加・削除・修正および顧客への納品前における接続状況や動画再生環境の確認を担当しました.',
      },
      {
        ko: '동작 체크 요청이 있는 고객사 사이트를 대상으로 팀 내 분담을 통해 주 1회 정기 점검을 담당하여 운영 안정성을 확인했습니다.',
        en: 'Conducted regular operational checks on requested customer sites, handling weekly sessions as part of a team-wide task distribution.',
        ja: '動作チェックの依頼があった顧客サイトを対象に、チーム内での役割分担を通じて週1回の定期点検を担当し、運営の安定性を確認しました。',
      },
      {
        ko: '특정 요청 고객사를 대상으로 플랫폼 접속 현황에 대한 주간·월간 리포트를 작성했습니다.',
        en: 'Generated weekly and monthly access analysis reports for designated client sites.',
        ja: '特定の依頼があった顧客を対象に、プラットフォームのアクセス状況に関する週次・月次レポートを作成しました。',
      },
      {
        ko: '복잡한 운영 업무를 정확하고 신속하게 처리하기 위해 개인 매뉴얼을 제작하여 활용했으며, 도메인 유효기간 및 내부 청구 프로세스를 관리했습니다.',
        en: 'Created personal operation manuals to handle diverse tasks accurately and swiftly, while managing domain validity and internal billing.',
        ja: '多岐にわたる運営業務を正確かつ迅速に処理するため独自のマニュアルを作成・活用し、ドメインの有効期限および社내請求プロセスを管理しました。',
      },
    ],
  },
];

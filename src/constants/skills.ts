import type { SkillCategory } from '@/types/portfolio';

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    items: [
      {
        name: 'React',
        details: [
          {
            ko: 'Hook 기반 아키텍처를 활용한 재사용 가능한 컴포넌트 설계',
            en: 'Designing reusable components using a hook-based architecture',
            ja: 'Hookベースのアーキテクチャを活用した再利用可能なコンポーネント設計',
          },
          {
            ko: '예측 가능한 UI 성능 유지를 위한 렌더링 스코프 최적화',
            en: 'Controlling rendering scope to maintain predictable UI performance',
            ja: '予測可能なUIパフォーマンス維持のためのレンダリングスコープの最適化',
          },
          {
            ko: '관심사 분리가 명확한 SPA 애플리케이션 구조 설계',
            en: 'Structuring SPA applications with clear separation of concerns',
            ja: '関心の分離が明確なSPAアプリケーションの構造設計',
          },
          {
            ko: 'Tailwind CSS를 활용한 컴포넌트 단위 스타일링',
            en: 'Component-level styling with Tailwind CSS',
            ja: 'Tailwind CSSを活用したコンポーネント単位のスタイリング',
          },
        ],
      },
      {
        name: 'TypeScript',
        details: [
          {
            ko: '인터페이스 기반의 컴포넌트 간 데이터 규격(Contract) 설계',
            en: 'Designing interface-driven data contracts between components',
            ja: 'インターフェース駆動のコンポーネント間データ契約(Contract)設計',
          },
          {
            ko: '모호한 UI 상태 방지를 위한 명시적 상태 모델링',
            en: 'Explicit state modeling to prevent ambiguous UI states',
            ja: '不透明なUI状態を防止するための明示的な状態モデリング',
          },
          {
            ko: '중대규모 코드베이스에서의 엄격한 타입 안정성 유지',
            en: 'Maintaining strict type safety across medium-scale codebases',
            ja: '中・大規模コードベースにおける厳格な型安全性の維持',
          },
        ],
      },
      {
        name: 'State Management',
        details: [
          {
            ko: 'TanStack Query를 활용한 서버 상태 핸들링',
            en: 'Server state handling using TanStack Query',
            ja: 'TanStack Queryを活用したサーバー状態のハンドリング',
          },
          {
            ko: 'Zustand를 활용한 가벼운 UI 상태 관리',
            en: 'Lightweight UI state management with Zustand',
            ja: 'Zustandを活用した軽量なUI状態管理',
          },
          {
            ko: '서버 데이터와 클라이언트 상호작용 상태의 명확한 분리',
            en: 'Clear separation between server data and client-side interaction state',
            ja: 'サーバーデータとクライアント側の相互作用状態の明確な分離',
          },
        ],
      },
    ],
  },

  {
    category: 'Tooling & Code Quality',
    items: [
      {
        name: 'Workflow & Strategy',
        details: [
          {
            ko: 'Git Flow 기반의 브랜칭 전략 적용',
            en: 'Applying Git Flow based branching strategies',
            ja: 'Git Flowベースのブランチ戦略の適用',
          },
          {
            ko: '일관된 영어 커밋 컨벤션 유지',
            en: 'Maintaining consistent English commit conventions',
            ja: '一貫した英語のコミットコンベンションの維持',
          },
          {
            ko: '구조화된 기술 문서화 및 인수인계 자료 작성',
            en: 'Structuring technical documentation and handover materials',
            ja: '構造化された技術文書化および引き継ぎ資料の作成',
          },
        ],
      },
      {
        name: 'Development Environment',
        details: [
          {
            ko: 'Vite를 활용한 빌드 설정 및 최적화',
            en: 'Build setup and optimization using Vite',
            ja: 'Viteを活用したビルド設定および最適化',
          },
          {
            ko: 'ESLint와 Prettier를 통한 코드 일관성 유지',
            en: 'Maintaining code consistency with ESLint and Prettier',
            ja: 'ESLintとPrettierによるコードの一貫性維持',
          },
          {
            ko: '팀 환경에서의 구조화된 개발 워크플로우 준수',
            en: 'Following structured development workflows in team environments',
            ja: 'チーム環境における構造化された開発ワークフローの遵守',
          },
        ],
      },
    ],
  },
];

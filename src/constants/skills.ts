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
            ja: `Hookベースのアーキテクチャを活用した再利用可能な
                   コンポーネント設計`,
          },
          {
            ko: '예측 가능한 UI 성능 유지를 위한 렌더링 스코프 최적화',
            en: 'Controlling rendering scope to maintain predictable UI performance',
            ja: `予測可能なUIパフォーマンス維持のための
                  レンダリングスコープの最適化`,
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
            ko: '인터페이스 기반의 컴포넌트 간 데이터 규격 설계',
            en: 'Designing interface-driven data contracts between components',
            ja: 'インターフェース駆動のコンポーネント間データ契約設計',
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
            ko: `TanStack Query를 활용한 서버 상태 관리 및 도메인 중심의 
                계층적 쿼리 키 설계`,
            en: 'Server state management and domain-driven hierarchical query key design using TanStack Query',
            ja: `TanStack Queryを活用したサーバー状態管理および
                ドメイン中心の階層的クエリキー設計`,
          },
          {
            ko: `Zustand 기반 단일 진실 공급원 구축으로 UI 상태의 일관성과
                 데이터 정합성 확보`,
            en: 'Establishing a Single Source of Truth with Zustand to ensure UI state consistency',
            ja: `Zustandベースの単一真実のソース構築によるUI状態の
                一貫性確保`,
          },
          {
            ko: `서버 상태 집계와 클라이언트 UI 상태의 역할을 명확히 분리`,
            en: 'Clear separation between server state aggregation and client UI state',
            ja: `サーバー状態の集約とクライアントUI状態の明確な役割分離`,
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
            ko: `Git Flow 기반 브랜칭 전략을 활용한 협업 및 
                  점진적 리팩토링 경험`,
            en: 'Experience with Git Flow-based branching strategies and incremental refactoring workflows',
            ja: `Git Flowベースのブランチ戦略を活用した協働および
                段階的リファクタリングの経験`,
          },
          {
            ko: `AI 도구를 활용한 디버깅 가속화 및 코드 리뷰 보조 워크플로우 
                활용 경험`,
            en: 'Experience using AI tools to accelerate debugging and assist code review workflows',
            ja: `AIツールを活用したデバッグ加速およびコードレビュー補助
                ワークフローの経験`,
          },
          {
            ko: `기술적 의사결정 과정 기록 및 정기적인 리팩토링을 통한 
                기술 부채 관리`,
            en: 'Managing technical debt through documented technical decisions and periodic refactoring',
            ja: `技術的意思決定の記録および定期的リファクタリングによる
                  技術的負債の管理`,
          },
          {
            ko: `개인의 기억력보다 문서화와 자동화된 도구(정규표현식 등)를 
                신뢰하며, 팀 전체의 결과물 퀄리티를 상향 평준화하는 
                워크플로우를 지향합니다.`,
            en: `Prioritizing documentation and automated tools over human memory to establish workflows that elevate and standardize the output quality of the entire team.`,
            ja: `個人の記憶力よりも、ドキュメント化や自動化ツール
                (正規表現など)を信頼し、チーム全体の成果物のクオリティを
                底上げするワークフローを追求しています。`,
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

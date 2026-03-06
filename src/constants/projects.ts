import type { ProjectsData } from '@/types/portfolio';

export const PROJECTS_DATA: ProjectsData = {
  id: 'focusdo',
  title: 'Focusdo',
  period: '2026.01 ~ Present',
  role: 'Planning · Design · Frontend Development',
  techStack: [
    'React',
    'TypeScript',
    'Zustand',
    'TanStack Query',
    'Tailwind CSS',
    'D3.js',
  ],
  introduction: {
    ko: '할 일 관리와 집중 세션을 명시적 상태 모델링 기반으로 통합한 생산성 애플리케이션입니다.',
    en: `A productivity application that unifies task management
         and focus sessions through explicit state modeling and deterministic data flow.`,
    ja: `明示的な状態モデリングと決定論的なデータフローを基盤に、
         タスク管理と集中セッションを統合した生産性アプリケーションです。`,
  },

  overview: {
    ko: `명시적인 상태 소유권과 결정론적 데이터 흐름을 중심으로 설계하여 UI 일관성을 확보하고 장기적인 유지보수 복잡도를 낮추었습니다.
         이 아키텍처는 데이터 무결성, 예측 가능한 상태 전이, 그리고 장기적인 유지보수성을 핵심 원칙으로 설계되었습니다.`,
    en: `Architected around explicit state ownership and deterministic data flow, 
         while improving UI consistency and reducing long-term maintenance complexity.
         This architecture prioritizes data integrity, predictable state transitions, and long-term maintainability.`,
    ja: `明示的な状態所有権と決定論的なデータフローを軸に設計し、 UIの一貫性を高めつつ長期的な保守複雑度を低減しました。
    このアーキテクチャは、データ整合性、予測可能な状態遷移、そして長期的な保守性を重視して設計されています。`,
  },

  keyFeatures: [
    {
      title: {
        ko: '날짜 중심의 상태 격리',
        en: 'Date-Centric State Isolation',
        ja: '日付中心の状態分離',
      },
      description: {
        ko: `selectedDate를 단일 진실 공급원(SSOT)으로 정의하여 날짜 간 상태 오염을 제거하고, 
             결정론적인 태스크 렌더링을 보장했습니다.`,
        en: `Defined selectedDate as a single source of truth (SSOT), ensuring deterministic task rendering and eliminating cross-date state contamination.`,
        ja: `selectedDateを単一真実ソース(SSOT)として定義し、 日付間の状態汚染を排除しつつ決定論的なタスクレンダリングを実現しました。`,
      },
    },
    {
      title: {
        ko: '태스크 통합형 집중 타이머',
        en: 'Task-Integrated Focus Timer',
        ja: 'タスク統合型集中タイマー',
      },
      description: {
        ko: `태스크와 집중 세션을 결합하여 각 항목별 누적 집중 시간을 
        정확히 추적하고 관리할 수 있도록 설계했습니다.`,
        en: `Integrated tasks with focus sessions to accurately track and accumulate focus time per task.`,
        ja: `タスクと集中セッションを統合し、 項目ごとの累積集中時間を正確に追跡・管理できるよう設計しました。`,
      },
    },
    {
      title: {
        ko: '파생 데이터 기반 대시보드',
        en: 'Derived Productivity Dashboard',
        ja: '派生データ基盤ダッシュボード',
      },
      description: {
        ko: `중복 상태를 추가하지 않고 기존 데이터로부터 성취 지표를 계산하여 
              데이터 정합성과 일관성을 유지했습니다.`,
        en: `Computed achievement metrics from existing data without introducing redundant state, preserving data integrity and consistency.`,
        ja: `冗長な状態を追加せず既存データから達成指標を算出することで、 データ整合性と一貫性を維持しました。`,
      },
    },
    {
      title: {
        ko: '주간 히스토리 시각화',
        en: 'Weekly History Visualization',
        ja: '週間履歴の可視化',
      },
      description: {
        ko: `구조화된 데이터 모델을 기반으로 D3.js를 활용해 
        주간 집중 패턴을 시각적으로 분석 가능하도록 구현했습니다.`,
        en: `Leveraged structured data modeling with D3.js to visualize and analyze weekly focus patterns.`,
        ja: `構造化されたデータモデルを基にD3.jsを活用し、 週間の集中パターンを可視化・分析可能にしました。`,
      },
    },
  ],

  challenges: [
    {
      problem: {
        ko: `useReducer 기반의 개별 상태 관리로 인해 투두와 포커스 데이터가 분산 저장되며 
            UI 불일치(Data Fragmentation)가 발생했습니다.`,
        en: `Individual state management using useReducer led to dispersed data storage between Todo and Focus pages, causing UI inconsistencies (Data Fragmentation).`,
        ja: `useReducerベースの個別状態管理により、TodoとFocusデータが分散保存され、
             UIの不整合(Data Fragmentation)が発生しました。`,
      },
      solution: {
        ko: `중앙 집중형 상태 관리 도구인 Zustand를 도입하여 상태 저장소를 통합하고, 
            모든 도메인 데이터를 단일 진실 공급원(SSOT) 구조로 재설계했습니다.`,
        en: `Adopted Zustand for centralized state management, integrating stores and redesigning all domain data into a Single Source of Truth (SSOT) architecture.`,
        ja: `中央集中型状態管理ツールのZustandを導入して状態ストアを統合し、
             すべてのドメインデータを単一真実のソース(SSOT)構造に再設計しました。`,
      },
      result: {
        ko: `데이터 흐름을 단일화하여 업데이트 지연 및 누락을 완전히 해결했으며, 
        로직 중앙화를 통해 코드 유지보수성을 크게 향상시켰습니다.`,
        en: `Resolved update delays and omissions by unifying data flow, and significantly improved maintainability through logic centralization.`,
        ja: `データフローを一本化することで更新の遅延や漏れを完全に解決し、
             ロジックの集約を通じてコードの保守性を大幅に向上させました。`,
      },
    },
    {
      problem: {
        ko: `집중 세션 저장과 통계 업데이트를 동시에 수행하는 Dual-write 구조에서 발생할 수 있는 
        데이터 정합성 리스크를 식별했습니다.`,
        en: `Identified data consistency risks within a dual-write structure that simultaneously handled session saving and statistics updates.`,
        ja: `集中セッション保存と統計更新を同時に行うDual-write構造で
            発生し得るデータ整合性のリスクを特定しました。`,
      },
      solution: {
        ko: `가공된 통계 컬럼을 제거하고 원천 데이터인 focus_sessions를 기반으로 
        실시간 집계(Aggregation) 쿼리 방식으로 아키텍처를 개편했습니다.`,
        en: `Eliminated derived stat columns and refactored the architecture to use real-time aggregation queries based on the source data, focus_sessions.`,
        ja: `加工された統計カラムを削除し、ソースデータであるfocus_sessionsに基づいた
            リアルタイム集約(Aggregation)クエリ方式にアーキテクチャを刷新しました。`,
      },
      result: {
        ko: `데이터 결함 가능성을 원천 차단하여 시스템 신뢰성을 확보했으며, 
        데이터 무결성을 보장하는 견고한 데이터 모델링을 완성했습니다.`,
        en: `Ensured system reliability by eliminating potential data flaws and completed a robust data modeling that guarantees integrity.`,
        ja: `データ欠損の可能性を根本的に遮断してシステムの信頼性を確保し、
            データの完全性を保証する堅牢なデータモデリングを完成させました。`,
      },
    },
  ],

  learned: {
    ko: [
      '프로젝트 초기 설계의 한계를 인지하고, 데이터 정합성을 위해 아키텍처를 과감히 재설계(Refactoring)하는 결단력의 중요성을 배웠습니다.',
      'useReducer의 데이터 파편화 문제를 해결하며, 복잡한 상태를 중앙 집중식(SSOT)으로 관리할 때 얻는 시스템 안정성을 체득했습니다.',
      '단순히 기능을 구현하는 수준을 넘어, 데이터 무결성과 정합성을 우선순위에 둔 엔지니어링 사고방식을 확립했습니다.',
      'React Query와 Zustand의 역할을 명확히 분리하여 서버 상태와 UI 상태 간의 간섭을 최소화하는 최적의 설계 패턴을 익혔습니다.',
    ],
    en: [
      'Learned the importance of decisive refactoring after recognizing the limitations of initial architectural designs for data consistency.',
      'Experienced the system stability gained from centralized state management (SSOT) while solving data fragmentation issues with useReducer.',
      'Established an engineering mindset that prioritizes data integrity and consistency over simple feature implementation.',
      'Mastered optimal design patterns to minimize interference between server and UI states by clearly separating the roles of React Query and Zustand.',
    ],
    ja: [
      'プロジェクト初期設計の限界を認識し、データ整合性のためにアーキテクチャを果敢に再設計(Refactoring)する決断力の重要性を学びました。',
      'useReducerのデータ断片化問題を解決し、複雑な状態を中央集中方式(SSOT)で管理することで得られるシステム安定性を体得しました。',
      '単なる機能実装を超え、データの完全性と整合性を最優先するエンジニアリング思考を確立しました。',
      'React QueryとZustandの役割を明確に分離し、サーバー状態とUI状態の干渉を最小限に抑える最適な設計パターンを習得しました。',
    ],
  },
  links: {
    github: 'https://github.com/your-repo/focusdo',
    demo: 'https://focusdo-demo.com',
  },
  architecture: {
    sections: [
      {
        title: {
          ko: '데이터 흐름 아키텍처',
          en: 'System Data Flow Architecture',
          ja: 'システムデータフローアーキテクチャ',
        },
        description: {
          ko: `애플리케이션의 데이터 흐름을 단방향 구조로 설계하여 예측 가능한 상태 전이를 보장했습니다.
      Client → React Query → Supabase API → PostgreSQL → focus_sessions(SSOT) → Client Aggregation 구조를 통해 
      데이터의 단일 출처와 통계 파생 로직을 명확히 분리했습니다.`,
          en: `Designed the application with a unidirectional data flow to ensure predictable state transitions.
      The data pipeline follows: Client → React Query → Supabase API → PostgreSQL → focus_sessions (SSOT) → Client-side Aggregation, clearly separating the source data from derived statistics.`,
          ja: `アプリケーションのデータフローを単方向構造で設計し、予測可能な状態遷移を保証しました。
      Client → React Query → Supabase API → PostgreSQL → focus_sessions(SSOT) → Client Aggregation のパイプラインを通じて、ソースデータと統計派生ロジックを明確に分離しています。`,
        },
      },
      {
        title: {
          ko: '데이터 무결성 및 집계 전략',
          en: 'Data Integrity & Aggregation Strategy',
          ja: 'データ整合性および集約戦略',
        },
        description: {
          ko: `데이터 불일치를 방지하기 위해 focus_sessions를 단일 진실 공급원(SSOT)으로 정의하는 데이터 모델링을 수행했습니다.
          가공된 상태값(Derived Data)을 DB에 저장하지 않고 React Query 기반 클라이언트 집계를 통해 실시간 통계 파이프라인을 구축했습니다.`,
          en: `Defined focus_sessions as the Single Source of Truth (SSOT) to prevent data inconsistencies.
          Instead of storing derived data in the database, a deterministic aggregation pipeline was implemented using React Query to compute statistics in real time.`,
          ja: `データ不整合を防止するため、focus_sessionsを単一真実のソース(SSOT)として定義するデータモデリングを実施しました。
          加工された状態値(Derived Data)をDBに保存せず、React Queryベースのクライアント集約によるリアルタイム統計パイプラインを構築しました。`,
        },
      },
      {
        title: {
          ko: '계층형 단방향 아키텍처',
          en: 'Layered Unidirectional Architecture',
          ja: 'レイヤード単方向アーキテクチャ',
        },
        description: {
          ko: `Page → Hook → Component 구조를 기반으로 명시적인 상태 소유권을 정의했습니다.
          공유 상태 변경은 Zustand 스토어 액션으로 중앙 집중화하고, 
          UI 전용 상태는 컴포넌트 내부에 격리하여 예측 가능한 렌더링을 보장했습니다.
          또한 클라이언트 하이드레이션을 제어하여 레이아웃 시프트를 최소화(CLS 0.003)했으며, 
          프로덕션 환경에서 Lighthouse 성능 점수 95점 이상을 유지했습니다.`,
          en: `Implemented a Page → Hook → Component architecture with explicit state ownership.
          Centralized shared mutations in Zustand store actions while isolating UI-only state within components to ensure deterministic rendering.
               Controlled client-side hydration to minimize layout shifts (CLS 0.003) and maintained Lighthouse performance scores above 95 in production audits.`,
          ja: `Page → Hook → Component 構造を基盤に、明示的な状態所有権を定義しました。
          共有状態の変更はZustandストアアクションに集約し、UI専用状態はコンポーネント内部に隔離することで決定論的なレンダリングを実現しました。
               さらにクライアント側ハイドレーションを制御し、CLS 0.003までレイアウトシフトを抑制し、本番環境でLighthouseスコア95以上を維持しました。`,
        },
      },
      {
        title: {
          ko: '서버 상태 및 영속성 관리',
          en: 'Server State & Persistence Management',
          ja: 'サーバー状態および永속性管理',
        },
        description: {
          ko: `React Query를 도입하여 서버 상태와 클라이언트 UI 상태를 엄격히 분리했습니다.
               Supabase(PostgreSQL) 기반의 영속성 계층을 구축하고, 계층적 쿼리 키(Query Keys) 전략을 통해 
               효율적인 캐시 무효화(Invalidation)와 데이터 동기화를 구현했습니다.`,
          en: `Adopted React Query to clearly separate server state from client UI state.
               Implemented a data layer based on Supabase (PostgreSQL) and designed hierarchical Query Keys to support efficient cache invalidation and data synchronization.`,
          ja: `React Queryを導入し、サーバー状態とクライアントUI状態を厳格に分離しました。
               Supabase(PostgreSQL)ベースの永続化レイヤーを構築し、階層的なクエリキー(Query Keys)戦略を通じて効率的なキャッシュ無効化とデータ同期を実装しました。`,
        },
      },
      {
        title: {
          ko: 'Lighthouse 성능 (프로덕션 빌드 기준)',
          en: 'Lighthouse Performance (Production Build)',
          ja: 'Lighthouseパフォーマンス(本番ビルド基準)',
        },
        description: {
          ko: `불필요한 렌더링을 줄이고 상태 소유권을 명확히 분리하여 성능을 최적화했습니다.
        클라이언트 하이드레이션을 제어해 Layout Shift를 최소화했으며,
        로컬 데이터 환경 기준 Lighthouse 성능 점수 95점 이상을 확인했습니다.`,

          en: `Optimized rendering performance by clearly separating state ownership and minimizing unnecessary re-renders.
        Controlled client-side hydration to reduce layout shifts,
        achieving Lighthouse performance scores above 95 in a local data environment.`,

          ja: `状態所有権を明確に分離し不要なレンダリングを削減することでパフォーマンスを最適化しました。
        クライアント側ハイドレーションを制御してレイアウトシフトを最小化し、
        ローカルデータ環境でLighthouseスコア95以上を確認しました。`,
        },
      },
    ],
    footer: {
      ko: `현재 Supabase 기반의 데이터 파이프라인 구축이 완료되었으며, 향후 대규모 데이터 처리를 위해 DB View, Indexing, Server-side Aggregation 최적화를 계획하고 있습니다.`,
      en: `The Supabase-based data pipeline is now fully operational. Future plans include optimizing database views, indexing strategies, and server-side aggregation for large-scale data processing.`,
      ja: `現在、Supabaseベースのデータパイプライン構築が完了しており、今後は大規模データ処理のためにDB View、Indexing、Server-side Aggregationの最適化を予定しています。`,
    },
  },
  performance: {
    lighthouse: {
      performance: 100,
      accessibility: 92,
      bestPractices: 100,
    },
    metrics: {
      fcp: '0.4 s',
      lcp: '0.4 s',
      tbt: '0 ms',
      cls: '0.003',
      speedIndex: '0.5 s',
    },
  },
};

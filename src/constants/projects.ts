import type { ProjectsData } from '@/types/portfolio';

export const PROJECTS_DATA: ProjectsData = {
  id: 'focusdo',
  title: 'FocusDo',
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
    ko: `할 일 관리와 집중 세션 기록을 결합한 생산성 웹 애플리케이션입니다.
        데이터 흐름을 명확하게 유지하고 상태 관리가 예측 가능하도록 구조를 설계했습니다.`,
    en: `A productivity web application that combines task management
        with focus session tracking.
        The system is structured to keep data flow predictable
        and state management explicit.`,
    ja: `タスク管理と集中セッション記録を組み合わせた生産性Webアプリケーションです。
        データフローを明確に保ち、状態管理が予測可能になるよう構造を設計しました。`,
  },

  overview: {
    ko: `애플리케이션은 명확한 상태 소유권과 예측 가능한 데이터 흐름을 중심으로 설계되었습니다.
          이를 통해 UI 일관성을 높이고 프로젝트가 확장되더라도 유지보수가 쉬운 구조를 만들었습니다.`,
    en: `The application focuses on clear state ownership and a predictable data flow.
          This approach improves UI consistency and makes the system easier to maintain as it grows.`,
    ja: `アプリケーションは明確な状態所有権と予測可能なデータフローを中心に設計されています。
          これによりUIの一貫性を高め、システムが拡張しても保守しやすい構造を実現しました。`,
  },

  keyFeatures: [
    {
      title: {
        ko: '목적 기반의 상태 격리 및 표준화',
        en: 'Purpose-Driven State Isolation & Standardization',
        ja: '目的ベースの状態分離と標準化',
      },
      description: {
        ko: `전역 상태 남용으로 인한 오염을 방지하기 위해 상태 소유권을 격리하고, 날짜 데이터를 문자열(string)로 표준화하여 정합성을 확보했습니다.`,
        en: `Prevented state contamination by isolating state ownership and standardized date handling as strings to ensure data integrity.`,
        ja: `状態汚染を防ぐため状態所有権を分離し、日付データを文字列(string)に標準化することでデータ整合性を確保しました。`,
      },
    },
    {
      title: {
        ko: '태스크 통합형 집중 타이머',
        en: 'Task-Integrated Focus Timer',
        ja: 'タスク統合型集中タイマー',
      },
      description: {
        ko: `태스크와 집중 세션을 결합하여 각 항목별 누적 집중 시간을 정확히 추적하고 
            관리할 수 있도록 설계했습니다.`,
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
        ko: `중복 상태를 추가하지 않고 기존 데이터로부터 성취 지표를 계산하여 데이터 정합성과 
              일관성을 유지했습니다.`,
        en: `Computed achievement metrics from existing data without introducing redundant state, preserving data integrity and consistency.`,
        ja: `冗長な状態を追加せず既存データから達成指標を算出することで、データ整合性と
            一貫性を維持しました。`,
      },
    },
    {
      title: {
        ko: '주간 히스토리 시각화',
        en: 'Weekly History Visualization',
        ja: '週間履歴の可視化',
      },
      description: {
        ko: `구조화된 데이터 모델을 기반으로 D3.js를 활용해 주간 집중 패턴을 시각적으로 
            분석 가능하도록 구현했습니다.`,
        en: `Leveraged structured data modeling with D3.js to visualize and analyze weekly focus patterns.`,
        ja: `構造化されたデータモデルを基にD3.jsを活用し、 週間の集中パターンを可視化・分析可能にしました。`,
      },
    },
  ],

  challenges: [
    {
      problem: {
        ko: `기능 확장 및 외부 DB 연동 과정에서 전역 상태로 관리하던 날짜 데이터가 페이지 간에 간섭을 일으키는 구조적 결함을 발견했습니다.`,
        en: `Identified structural flaws where date data managed in global state caused cross-page interference during feature expansion and DB integration.`,
        ja: `機能拡張の過程で、グローバル状態で管理していた日付データがページ間で干渉を引き起こす構造的な欠陥を発見しました。`,
      },
      solution: {
        ko: `공통 데이터의 무분별한 전역화를 지양하고, 페이지별 목적에 맞게 지역 상태(useState)로 격리하여 상태 간섭을 원천 차단했습니다.`,
        en: `Avoided indiscriminate globalization of shared data and isolated it into page-specific local states to eliminate state interference.`,
        ja: `共通データの無分別なグローバル化を避け、ページごとの目的に合わせてローカル状態(useState)に分離することで干渉を遮断しました。`,
      },
      result: {
        ko: `상태 오염 문제를 근본적으로 해결했으며, 아키텍처의 질은 데이터의 성격과 소유권이 결정한다는 
              설계 원칙을 확립했습니다.`,
        en: `Fundamentally resolved state contamination issues and established a design principle that architecture quality is determined by data nature and ownership.`,
        ja: `状態汚染問題を根本的に解決し、アーキテクチャの質はデータの性質と所有権が決定するという
              設計原則を確立しました。`,
      },
    },
    {
      problem: {
        ko: `집중 세션 저장과 통계 업데이트를 동시에 처리하는
             Dual-write 구조에서 데이터 정합성 문제가 발생할 가능성을 확인했습니다.`,
        en: `Identified potential data consistency risks caused by a dual-write structure
             that handled both session persistence and statistics updates.`,
        ja: `集中セッション保存と統計更新を同時に処理する
             Dual-write構造により、データ整合性のリスクが発生する可能性を確認しました。`,
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
      '프로젝트 초기 설계의 한계를 인지하고, 데이터 정합성을 위해 아키텍처를 과감히 재설계하는 결단력의 중요성을 배웠습니다.',
      `초기 설계에서 useReducer로 관리하던 데이터의 파편화 문제를 인식하고,
      Zustand 기반 중앙 집중식 구조로 재설계하여 시스템 안정성을 확보했습니다.`,
      '이 프로젝트를 통해 기능 구현보다 데이터 무결성을 우선하는 설계의 중요성을 배웠습니다.',
      'React Query와 Zustand의 역할을 명확히 분리하여 서버 상태와 UI 상태 간의 간섭을 최소화하는 최적의 설계 패턴을 익혔습니다.',
    ],
    en: [
      'Learned the importance of decisive refactoring after recognizing the limitations of initial architectural designs for data consistency.',
      `Recognized the fragmentation issue of data managed by useReducer in the initial design, 
       and secured system stability by redesigning into a Zustand-based centralized structure.`,
      'This project helped me understand the importance of prioritizing data integrity over quick feature implementation.',
      'Mastered optimal design patterns to minimize interference between server and UI states by clearly separating the roles of React Query and Zustand.',
    ],
    ja: [
      'プロジェクト初期設計の限界を認識し、データ整合性のためにアーキテクチャを果敢に再設計する決断力の重要性を学びました。',
      `初期設計で useReducer により管理されていたデータの断편化問題を認識し、
       Zustandベースの中央集権型構造に再設計することでシステムの安定性を確保しました。`,
      'このプロジェクトを通じて、機能実装よりもデータ整合性を優先する設計の重要性を学びました。',
      'React QueryとZustandの役割を明確に分離し、サーバー状態とUI状態の干渉を最小限に抑える最適な設計パターンを習得しました。',
    ],
  },
  links: {
    github: 'https://github.com/chlnaa/focus-based-todo',
    demo: 'https://focus-based-todo.vercel.app',
  },
  architecture: {
    intro: {
      ko: `아래 다이어그램은 애플리케이션의
          단방향 데이터 흐름과 집계 파이프라인 구조를 보여줍니다.`,
      en: `The following diagram illustrates the application's
          unidirectional data flow and aggregation pipeline.`,
      ja: `以下の図は、アプリケーションの
          単方向データフローと集約パイプライン構造を示しています。`,
    },
    sections: [
      {
        title: {
          ko: '데이터 흐름 아키텍처',
          en: 'Unidirectional Data Flow',
          ja: 'システムデータフローアーキテクチャ',
        },
        description: {
          ko: `애플리케이션의 데이터 흐름을 단방향 구조로 설계하여 예측 가능한 상태 전이를 보장했습니다.      
              Client → React Query → Supabase API → PostgreSQL 
              → focus_sessions (SSOT for analytics) + todo → Client Aggregation 구조를 통해 
              데이터의 단일 출처와 통계 파생 로직을 명확히 분리했습니다. 
              focus_sessions를 집계 지표의 단일 진실 공급원으로 정의하고, 
              todo 테이블과 조합하여 완성률 등의 생산성 지표를 클라이언트에서 도출합니다.
              `,
          en: `Designed the application's data flow in a unidirectional structure to guarantee predictable state transitions.
               Through the structure of Client → React Query → Supabase API → PostgreSQL 
               → focus_sessions (SSOT for analytics) + todo → Client Aggregation, 
               clearly separated the single source of truth from the statistical derivation logic. 
               Defined focus_sessions as the single source of truth for aggregated metrics, 
               and derived productivity indicators such as completion rates on the client side by combining it with the todo table.`,
          ja: `アプリケーションのデータフローを単方向構造で設計し、予測可能な状態遷移を保証しました。
              Client → React Query → Supabase API → PostgreSQL 
              → focus_sessions (SSOT for analytics) + todo → Client Aggregation という構造を通じて、
              データの単一ソースと統計派生ロジックを明確に分離しました。
              focus_sessions を集計指標の単一の真実のリソースとして定義し、
              todo テーブルと組み合わせることで、完了率などの生産性指標をクライアント側で導出します。`,
        },
      },
      {
        title: {
          ko: '데이터 무결성 및 집계 전략',
          en: 'Data Integrity & Aggregation Strategy',
          ja: 'データ整合性および集約戦略',
        },
        description: {
          ko: `데이터 무결성을 유지하기 위해 focus_sessions 테이블을 단일 진실 공급원으로 정의했습니다.
               가공된 통계 데이터를 데이터베이스에 저장하지 않고, 원천 세션 데이터를 기반으로 
               클라이언트에서 집계를 수행해 생산성 지표를 계산하도록 설계했습니다.
               이 구조는 Dual-write로 인한 데이터 불일치 위험을 제거합니다.`,

          en: `To maintain data integrity, the focus_sessions table was defined as the Single Source of Truth (SSOT).
               Instead of storing derived statistics in the database, productivity metrics are 
               calculated through client-side aggregation based on the raw session data. 
               This design removes the risk of data inconsistencies caused by dual-write updates.`,

          ja: `データ整合性を保つため、focus_sessions テーブルを単一の真実のソースとして定義しました。
              加工された統計データをデータベースに保存せず、セッションの生データを基にクライアント側で
              集約処理を行い生産性指標を計算する設計としました。
              この構造により、Dual-writeによるデータ不整合のリスクを排除しています。`,
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
          또한 클라이언트 하이드레이션을 제어하여 레이아웃 시프트를 최소화했으며,
          로컬 Lighthouse 측정 기준 CLS 0.003을 기록했습니다.`,
          en: `Implemented a Page → Hook → Component architecture with explicit state ownership.
          Centralized shared mutations in Zustand store actions while isolating UI-only state within components to ensure deterministic rendering.
          Controlled client-side hydration to minimize layout shifts. In local Lighthouse measurements, the application recorded a CLS score of 0.003.`,
          ja: `Page → Hook → Component 構造を基盤に、明示的な状態所有権を定義しました。
          共有状態の変更はZustandストアアクションに集約し、UI専用状態はコンポーネント内部に
          隔離することで決定論的なレンダリングを実現しました。
          また、クライアントサイドのハイドレーションを制御することでレイアウトシフトを最小限に抑え、
          ローカルのLighthouse測定基準でCLS 0.003を記録しました。`,
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
               Supabase(PostgreSQL) 기반의 영속성 계층을 구축하고, 
               계층적 쿼리 키 전략을 통해 효율적인 캐시 무효화와 데이터 동기화를 구현했습니다.`,
          en: `Adopted React Query to clearly separate server state from client UI state.
               Implemented a data layer based on Supabase (PostgreSQL) and designed hierarchical Query Keys to support efficient cache invalidation and data synchronization.`,
          ja: `React Queryを導入し、サーバー状態とクライアントUI状態を厳格に分離しました。
               Supabase(PostgreSQL)ベースの永続化レイヤーを構築し、階層的なクエリキー戦略を通じて
              効率的なキャッシュ無効化とデータ同期を実装しました。`,
        },
      },
    ],
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
    footer: {
      ko: `성능 지표는 Supabase 데이터 마이그레이션 이전 로컬 환경에서 측정되었습니다.
            향후 대규모 데이터 처리를 위해 DB View, Indexing 전략, Server-side Aggregation 최적화를 진행할 예정입니다.`,
      en: `The following metrics represent baseline performance measurements captured in a local environment before the Supabase migration.
            Future optimization plans include DB Views, indexing strategies, and server-side aggregation for scalable data processing.`,
      ja: `パフォーマンス指標は、Supabaseへのデータ移行前のローカル環境で測定されています。
           今後は大規模データ処理のため、DB ViewやIndexing戦略、Server-side Aggregationの最適化を進める予定です。`,
    },
  },
};

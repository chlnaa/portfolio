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
    en: 'A productivity application that unifies task management\nand focus sessions through explicit state modeling and deterministic data flow.',
    ja: '明示的な状態モデリングと決定論的なデータフローを基盤に、\nタスク管理と集中セッションを統合した生産性アプリケーションです。',
  },

  overview: {
    ko: '명시적인 상태 소유권과 결정론적 데이터 흐름을 중심으로 설계하여,\nUI 일관성을 확보하고 장기적인 유지보수 복잡도를 낮추었습니다.',
    en: 'Architected around explicit state ownership and deterministic data flow,\n increasing UI consistency while reducing long-term maintenance complexity.',
    ja: '明示的な状態所有権と決定論的なデータフローを軸に設計し、\nUIの一貫性を高めつつ長期的な保守複雑度を低減しました。',
  },

  keyFeatures: [
    {
      title: {
        ko: '날짜 중심의 상태 격리',
        en: 'Date-Centric State Isolation',
        ja: '日付中心の状態分離',
      },
      description: {
        ko: 'selectedDate를 단일 진실 공급원(SSOT)으로 정의하여\n날짜 간 상태 오염을 제거하고, 결정론적인 태스크 렌더링을 보장했습니다.',
        en: 'Defined selectedDate as a single source of truth (SSOT),\nensuring deterministic task rendering and eliminating cross-date state contamination.',
        ja: 'selectedDateを単一真実ソース(SSOT)として定義し、\n日付間の状態汚染を排除しつつ決定論的なタスクレンダリングを実現しました。',
      },
    },
    {
      title: {
        ko: '태스크 통합형 집중 타이머',
        en: 'Task-Integrated Focus Timer',
        ja: 'タスク統合型集中タイマー',
      },
      description: {
        ko: '태스크와 집중 세션을 결합하여\n각 항목별 누적 집중 시간을 정확히 추적하고 관리할 수 있도록 설계했습니다.',
        en: 'Integrated tasks with focus sessions to accurately track\nand accumulate focus time per task.',
        ja: 'タスクと集中セッションを統合し、\n項目ごとの累積集中時間を正確に追跡・管理できるよう設計しました。',
      },
    },
    {
      title: {
        ko: '파생 데이터 기반 대시보드',
        en: 'Derived Productivity Dashboard',
        ja: '派生データ基盤ダッシュボード',
      },
      description: {
        ko: '중복 상태를 추가하지 않고 기존 데이터로부터 성취 지표를 계산하여\n데이터 정합성과 일관성을 유지했습니다.',
        en: 'Computed achievement metrics from existing data without introducing redundant state,\npreserving data integrity and consistency.',
        ja: '冗長な状態を追加せず既存データから達成指標を算出することで、\nデータ整合性と一貫性を維持しました。',
      },
    },
    {
      title: {
        ko: '주간 히스토리 시각화',
        en: 'Weekly History Visualization',
        ja: '週間履歴の可視化',
      },
      description: {
        ko: '구조화된 데이터 모델을 기반으로 D3.js를 활용해\n주간 집중 패턴을 시각적으로 분석 가능하도록 구현했습니다.',
        en: 'Leveraged structured data modeling with D3.js\nto visualize and analyze weekly focus patterns.',
        ja: '構造化されたデータモデルを基にD3.jsを活用し、\n週間の集中パターンを可視化・分析可能にしました。',
      },
    },
  ],

  challenges: [
    {
      problem: {
        ko: '컴포넌트 간 불분명한 상태 소유권으로 인해 UI 불일치가 발생했습니다.',
        en: 'UI inconsistencies emerged due to ambiguous state ownership across components.',
        ja: 'コンポーネント間の曖昧な状態所有権により、UIの不整合が発生しました。',
      },
      solution: {
        ko: '공유 상태 변경은 Zustand 스토어 액션으로 중앙 집중화하고,\nUI 전용 상태는 컴포넌트 내부에 격리하여 상태 경계를 재정의했습니다.',
        en: 'Redefined state boundaries by centralizing shared mutations within Zustand store actions\nwhile isolating UI-specific state inside components.',
        ja: '共有状態の変更をZustandストアのアクションに集約し、\nUI専用状態をコンポーネント内部に隔離することで状態境界を再定義しました。',
      },
      result: {
        ko: '렌더링 예측 가능성이 크게 향상되었으며, 디버깅 시 상태 추적이 단순화되었습니다.',
        en: 'Increased rendering determinism and significantly simplified state tracing during debugging.',
        ja: 'レンダリングの決定性が向上し、デバッグ時の状態追跡が大幅に簡素化されました。',
      },
    },
    {
      problem: {
        ko: '비동기 타이머 로직에서 Stale Closure 문제가 발생했습니다.',
        en: 'A stale closure issue occurred within asynchronous timer logic.',
        ja: '非同期タイマーロジック内でStale Closureの問題が発生しました。',
      },
      solution: {
        ko: '최신 콜백 참조를 내부적으로 유지하는\nusehooks-ts의 useInterval 훅을 도입하여 클로저 문제를 해결했습니다.',
        en: 'Resolved the stale closure issue by adopting the useInterval hook from usehooks-ts,\n which internally maintains the latest callback reference.',
        ja: '最新のコールバック参照を内部で保持する\nusehooks-tsのuseIntervalフックを導入し、クロージャ問題を解決しました。',
      },
      result: {
        ko: '타이머 정확도를 확보하고 언마운트 시 발생할 수 있는 메모리 누수를 방지했습니다.',
        en: 'Ensured accurate timer execution and prevented potential memory leaks during unmount.',
        ja: 'タイマーの正確性を確保し、アンマウント時の潜在的なメモリリークを防止しました。',
      },
    },
  ],

  learned: {
    ko: [
      '모호한 상태 소유권이 UI 불일치로 직결된다는 점을 실전에서 검증했습니다.',
      '서버 상태와 UI 상태를 엄격히 분리하는 설계 원칙의 중요성을 체득했습니다.',
      '명시적인 상태 모델링이 복잡한 상호작용 흐름에서 디버깅 효율을 크게 향상시킨다는 것을 확인했습니다.',
    ],
    en: [
      'Validated how ambiguous state ownership directly produces UI inconsistency.',
      'Reinforced the importance of strict separation between server and UI state.',
      'Demonstrated how explicit state modeling significantly improves debugging efficiency in complex interaction flows.',
    ],
    ja: [
      '曖昧な状態所有権がUIの不整合を生むことを実践的に検証しました。',
      'サーバー状態とUI状態の厳格な分離の重要性を再確認しました。',
      '明示的な状態モデリングが複雑な相互作用においてデバッグ効率を大きく向上させることを実証しました。',
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
          ko: '계층형 단방향 아키텍처',
          en: 'Layered Unidirectional Architecture',
          ja: 'レイヤード単方向アーキテクチャ',
        },
        description: {
          ko: `Page → Hook → Component 구조를 기반으로 명시적인 상태 소유권을 정의했습니다.\n 공유 상태 변경은 Zustand 스토어 액션으로 중앙 집중화하고, UI 전용 상태는 컴포넌트 내부에 격리하여 예측 가능한 렌더링을 보장했습니다.
               또한 클라이언트 하이드레이션을 제어하여 레이아웃 시프트를 최소화(CLS 0.003)했으며, 프로덕션 환경에서 Lighthouse 성능 점수 95점 이상을 유지했습니다.`,
          en: `Implemented a Page → Hook → Component architecture with explicit state ownership.\nCentralized shared mutations in Zustand store actions while isolating UI-only state within components to ensure deterministic rendering.
               Controlled client-side hydration to minimize layout shifts (CLS 0.003) and maintained Lighthouse performance scores above 95 in production audits.`,
          ja: `Page → Hook → Component 構造を基盤に、明示的な状態所有権を定義しました。\n共有状態の変更はZustandストアアクションに集約し、UI専用状態はコンポーネント内部に隔離することで決定論的なレンダリングを実現しました。
               さらにクライアント側ハイドレーションを制御し、CLS 0.003までレイアウトシフトを抑制し、本番環境でLighthouseスコア95以上を維持しました。`,
        },
      },
      {
        title: {
          ko: '상태 및 렌더링 전략',
          en: 'State & Rendering Strategy',
          ja: '状態およびレンダリング戦略',
        },
        description: {
          ko: `React + TypeScript 및 React Router 기반으로 구현되었습니다.
               Zustand의 persist, devtools, combine 미들웨어를 활용하여 예측 가능한 상태 관리를 유지하면서 런타임 오버헤드를 최소화했습니다.
               현재 데이터 영속성은 localStorage를 통해 관리하고 있습니다.`,
          en: `Built with React + TypeScript and React Router.
               Used Zustand with persist, devtools, and combine middleware to ensure predictable state management while maintaining minimal runtime overhead.
               Data persistence is currently handled via localStorage.`,
          ja: `React + TypeScript および React Router を基盤に構築しました。
               Zustandのpersist、devtools、combineミドルウェアを活用し、予測可能な状態管理と最小限のランタイムオーバーヘッドを両立しました。
               現在のデータ永続化はlocalStorageで管理しています。`,
        },
      },
      {
        title: {
          ko: 'Lighthouse 성능 (프로덕션 빌드 기준)',
          en: 'Lighthouse Performance (Production Build)',
          ja: 'Lighthouseパフォーマンス(本番ビルド基準)',
        },
      },
    ],

    footer: {
      ko: '측정은 프로덕션 배포 후 Lighthouse를 통해 수행되었습니다. 향후 Supabase 기반 영속성으로 전환 후 재측정할 예정입니다.',
      en: 'Measurements were taken after production deployment using Lighthouse. Performance will be re-evaluated after migrating persistence to Supabase.',
      ja: '計測は本番デプロイ後にLighthouseで実施しました。今後Supabaseベースの永続化へ移行後、再評価を予定しています。',
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

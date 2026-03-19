# 포트폴리오

[English](./README.md) | [한국어](./README.ko.md) | [日本語](./README.ja.md)

# 🚀 Modern Portfolio 2026

> **React 19**와 **Vite**로 구축된 고성능 개인 포트폴리오입니다. 깔끔한 UI/UX와 매끄러운 다국어 지원에 집중했습니다.

---

## 🔗 Live Demo

[👉 포트폴리오 웹사이트 방문하기](choinaa-portfolio.vercel.app)

## 🌟 주요 특징

### 🌍 다국어 지원 (i18n)

- **한국어, 영어, 일본어**: 글로벌 사용자를 고려하여 3개 국어로 모든 콘텐츠를 로컬라이징했습니다.
- **Context API**: 전역 상태 관리를 통해 일관성 있는 다국어 UI 렌더링을 구현했습니다.

### 🎨 UX 및 성능 (UX & Performance)

- **최적화된 인터랙션**: 연락처 링크의 `select-none` 적용 및 **Framer Motion**을 활용한 자연스러운 애니메이션을 구현했습니다.
- **타입 안정성**: **TypeScript**를 사용하여 견고한 컴포넌트 구조를 설계하고 빌드 에러를 사전에 방지했습니다.
- **현대적인 UI 키트**: **Tailwind CSS**와 **shadcn/ui**를 조합하여 전문적이고 일관된 디자인 시스템을 구축했습니다.

### 📱 반응형 및 접근성 (Responsive & Accessible)

- **모바일**: 모든 기기 환경에 대응하는 완전한 반응형 레이아웃을 제공합니다.
- **직관적인 접근성**: 각 프로젝트 카드는 개별 GitHub 저장소로 직접 연결되어 코드 리뷰의 편의성을 높였습니다.

## 🛠️ 기술 스택

- **핵심**: React 19, TypeScript, Vite
- **스타일링**: Tailwind CSS, shadcn/ui
- **애니메이션**: Framer Motion
- **아이콘**: Lucide React, React Icons
- **배포**: Vercel

## 🚀 Key Features

- **다이렉트 네비게이션**: 각 프로젝트 카드를 전체 프로필이 아닌 개별 레포지토리로 연결하여 접근성 향상.
- **UX 디테일**: 연락처 링크에 `select-none`을 적용하여 의도치 않은 텍스트 드래그 방지.
- **다국어 지원**: 영어, 한국어, 일본어 3개 국어 완벽 지원.
- **반응형 디자인**: 모든 디바이스 환경에 최적화된 레이아웃 제공.

## 📂프로젝트 구조(요약)

- `src/App.tsx`: 섹션 구성(히어로/소개/경험/스킬/프로젝트/연락)
- `src/components/`: 섹션 및 공용 컴포넌트
- `src/context/`: 전역 Provider(테마, 언어)
- `src/constants/`: UI에서 사용하는 정적 데이터

### 🏃 시작하기

**의존성 설치**

```bash
npm install
```

**개발 서버 실행**

```bash
npm run dev
```

**배포용 빌드 (타입 체크 포함)**

```bash
npm run build
```

© 2026 choi. All rights reserved.

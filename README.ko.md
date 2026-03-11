# 포트폴리오

[English](./README.md) | [한국어](./README.ko.md) | [日本語](./README.ja.md)

### 📌 프로젝트 소개

React 19와 Vite를 기반으로 제작된 고성능 개인 포트폴리오 웹사이트입니다.
깔끔한 UI/UX와 부드러운 애니메이션을 통해 현대적인 프론트엔드 개발 역량을 보여줍니다.

### 🛠️ 기술 스택

- **핵심**: React 19, TypeScript, Vite
- **스타일링**: Tailwind CSS, shadcn/ui
- **애니메이션**: Framer Motion
- **아이콘**: Lucide React, React Icons

### 🚀 Key Features

- **다이렉트 네비게이션**: 각 프로젝트 카드를 전체 프로필이 아닌 개별 레포지토리로 연결하여 접근성 향상.
- **UX 디테일**: 연락처 링크에 `select-none`을 적용하여 의도치 않은 텍스트 드래그 방지.
- **다국어 지원**: 영어, 한국어, 일본어 3개 국어 완벽 지원.
- **반응형 디자인**: 모든 디바이스 환경에 최적화된 레이아웃 제공.

### 🏃 시작하기

# 의존성 설치

```bash
npm install
```

# 개발 서버 실행

```bash
npm run dev
```

# 배포용 빌드 (타입 체크 포함)

```bash
npm run build
```

## 프로젝트 구조(요약)

- `src/App.tsx`: 섹션 구성(히어로/소개/경험/스킬/프로젝트/연락)
- `src/components/`: 섹션 및 공용 컴포넌트
- `src/context/`: 전역 Provider(테마, 언어)
- `src/constants/`: UI에서 사용하는 정적 데이터

## 라이선스

라이선스 파일을 추가하지 않는 한 이 프로젝트는 private 입니다.

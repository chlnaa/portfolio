# ポートフォリオ

[English](./README.md) | [한국어](./README.ko.md) | [日本語](./README.ja.md)

# 🚀 Modern Portfolio 2026

> **React 19** と **Vite** を採用した高性能な個人ポートフォリオサイトです。洗練されたUI/UXとスムーズな多言語対応に注力して制作しました。

---

## 🔗 Live Demo

[👉 ポートフォリオサイトを見る](choinaa-portfolio.vercel.app)

## 🌟 主な特徴 (Key Highlights)

### 🌍 多言語対応 (i18n)

- **日本語・韓国語・英語**: グローバルな閲覧者を想定し、3ヶ国語での完全なローカライズを実現しました。
- **Context API**: 言語状態のグローバル管理により、一貫性のある多言語UIレンダリングを実装しています。

### 🎨 UX とパフォーマンス (UX & Performance)

- **インタラクションの最適化**: 連絡先リンクへの `select-none` 適用や、**Framer Motion** による自然で滑らかなアニメーションを実装しました。
- **型安全な開発**: **TypeScript** を活用し、堅牢なコンポーネント構造の設計とビルドエラーの未然防止を徹底しました。
- **モダンなUIキット**: **Tailwind CSS** と **shadcn/ui** を組み合わせ、プロフェッショナルかつ統一感のあるデザインシステムを構築しました。

### 📱 レスポンシブ & アクセシビリティ (Responsive & Accessible)

- **モバイル**: あらゆるデバイス環境に最適化された、完全レスポンシブなレイアウトを提供します。
- **直感的なアクセシビリティ**: 各プロジェクトカードから該当の GitHub リポジトリへ直接アクセス可能で、コードレビューの利便性を高めています。

## 🛠️ Tech Stack

- **コア**: React 19, TypeScript, Vite
- **スタイリング**: Tailwind CSS, shadcn/ui
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React, React Icons
- **デプロイ**: Vercel

## 🚀 主な機能

- **ダイレクトナビゲーション**: 各プロジェクトカードを個別のリポジトリに直接リンクし、アクセシビリティを向上。
- **UXの最適化**: 連絡先リンクに `select-none` を適用し、意図しないテキスト選択を防止。
- **多言語対応**: 英語、韓国語、日本語の3ヶ国語に完全対応。
- **レスポンシブデザイン**: あらゆるデバイス（モバイル、タブレット、デスクトップ）に最適化されたレイアウト。

## 📂 プロジェクト構成（概要）

- `src/App.tsx`: セクション構成（Hero/About/Experience/Skills/Projects/Contact）
- `src/components/`: セクションおよび共通コンポーネント
- `src/context/`: グローバル Provider（テーマ、言語）
- `src/constants/`: UI で使う静的データ

## 🏃 はじめに

**依存関係のインストール**

```bash
npm install
```

**開発サーバーの起動**

```bash
npm run dev
```

**本番用ビルド (型チェックを含む)**

```bash
npm run build
```

© 2026 choi. All rights reserved.

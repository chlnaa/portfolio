# ポートフォリオ

[English](./README.md) | [한국어](./README.ko.md) | [日本語](./README.ja.md)

### 📌 プロジェクト概要

React 19 と Vite をベースに構築された高性能な個人ポートフォリオサイトです。洗練されたUI/UXと滑らかなアニメーションを通じて、モダンなフロントエンド開発スキルを展示しています。

### 🛠️ Tech Stack

- **コア**: React 19, TypeScript, Vite
- **スタイリング**: Tailwind CSS, shadcn/ui
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React, React Icons

### 🚀 主な機能

- **ダイレクトナビゲーション**: 各プロジェクトカードを個別のリポジトリに直接リンクし、アクセシビリティを向上。
- **UXの最適化**: 連絡先リンクに `select-none` を適用し、意図しないテキスト選択を防止。
- **多言語対応**: 英語、韓国語、日本語の3ヶ国語に完全対応。
- **レスポンシブデザイン**: あらゆるデバイス（モバイル、タブレット、デスクトップ）に最適化されたレイアウト。

### 🏃 はじめに

# 依存関係のインストール

```bash
npm install
```

# 開発サーバーの起動

```bash
npm run dev
```

# 本番用ビルド (型チェックを含む)

```bash
npm run build
```

## プロジェクト構成（概要）

- `src/App.tsx`: セクション構成（Hero/About/Experience/Skills/Projects/Contact）
- `src/components/`: セクションおよび共通コンポーネント
- `src/context/`: グローバル Provider（テーマ、言語）
- `src/constants/`: UI で使う静的データ

## ライセンス

ライセンスファイルを追加しない限り、このプロジェクトは private です。

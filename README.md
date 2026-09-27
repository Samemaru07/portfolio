# Samemaru's Portfolio

[Samemaru's Portfolio](https://samemaru.vercel.app)

## プロジェクト概要

ポートフォリオサイト兼ホームページのリポジトリです。

## 目次

## 技術スタック

- フレームワーク: [Next.js](https://nextjs.org/) (App Router)
- 開発言語: [TypeScript](https://www.typescriptlang.org/ja/)
- スタイリング: [Tailwind CSS](https://tailwindcss.com/)
- ホスティング: [Vercel](https://vercel.com/samemaru07)
- パッケージマネージャ: [npm](https://docs.npmjs.com/)

## 設計・実装の工夫点

### UI

#### エンジニアウケするデザイン

- CUI や開発ツールの世界観を取り入れ、自身の技術領域や人となりを一目で伝える構成を採用。
    - トップセクション: 親しみやすさとエンジニアらしさの演出のため、ASCII アート `cowsay` を配置。
    - コンセプトセクション: Web のルーティング構造とディレクトリ階層の親和性を表現するため、`tree` コマンドの出力を模したページ内ジャンプリンクを配置。
    - マイルストーンセクション: これまでの歩みを開発プロセスになぞらえて可視化するため、Git のコミットグラフをモチーフにしたタイムラインを配置 (過去の学生生活は履歴の整理として Squash merge 表現を採用) 。

#### ダークモード・レスポンシブデザイン

- 閲覧環境やユーザーの好みに応じたアクセシビリティを確保するため、Tailwind CSS によるダークモード切り替えを実装し、明暗両環境でのコントラスト比と視認性を担保。
- 画面幅の狭いモバイル環境において背景グラフィックスがコンテンツの可読性を損なわないよう、Hero セクションの白ブラー範囲を画面幅に応じて最適化。
- スマートフォン表示時に縦長画像やスクリーンショットが縮小されて潰れる問題を防ぐため、作品詳細モーダル内のプレビュー表示を原寸幅の縦スクロール仕様とし、操作性を損なわないようヘッダーをスクロール追従で固定化。

### 設計・コーディング

#### コンポーネントとデータの分離

- 実績やコンテンツの更新頻度が高いポートフォリオの性質を考慮し、作品データ (Works) や各種経歴情報を UI 描画ロジックから切り離して独立したデータ定義ファイルとして管理。
- 制作物の追加・修正時に JSX やコンポーネント構造を変更する必要をなくし、データ配列の編集のみで安全に保守できる構造を確立。

#### テーマに沿ったUI設計と再利用可能なコンポーネント化

- サイト全体におけるデザインの一貫性維持と開発効率向上のため、タイトルバナー、セクションヘッダー、モーダル、タグチップなどの共通パーツを独立コンポーネントとして設計。
- 各コンポーネントに TypeScript による厳密な Props インターフェースを定義し、型安全性の担保とコンポーネントの再利用性を両立。

#### クローラー・共有に最適化したSEO・メタデータ設計

- SNS 共有時におけるプレビューカードの描画崩れや URL 不整合を防ぐため、Next.js (App Router) の `metadataBase` を設定し、完全な絶対 URL による OGP・Twitter Card 連携を実現。
- 静的ファイルの肥大化や手動運用のコストを排除するため、Next.js の Metadata Route ( `app/robots.ts`、`app/sitemap.ts` ) を採用し、検索エンジンのクロール指示およびサイトマップ配信をコードベースで動的に管理。

#### パフォーマンスを考慮したアセット・フォント最適化

- Web フォント読み込み時のレイアウトシフト (CLS) 防止および描画遅延の最小化のため、`next/font/google` を用いてフォント (Zen Kaku Gothic New, Caveat, JetBrains Mono) の最適化配信を実施。
- 初期生成された不要な SVG ファイル群を削除してビルド成果物の軽量化を図り、 ファビコンおよびアプリアイコンを Next.js のメタデータ仕様に準拠した形式で配置することで、無駄なリクエストの削減と各端末環境への最適化を達成。

## ディレクトリ構成

```bash
.
├ src/
│  ├ app/          # App Routerのルーティング・レイアウト・メタデータ
│  ├ components/   # 共通UI・各セクションコンポーネント
│  ├ data/         # 実績・プロフィール等の表示用データ定義
│  └ types/        # TypeScript型定義
├ public/
│  ├ images/       # 画像アセット
│  └ og-image.png  # SNS共有時OGP画像
├ CONTRIBUTING.md  # 開発・運用規約
└ README.md        # プロジェクト概要ドキュメント
```

## 環境構築・開発手順

## ライセンス

<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). -->
<!---->
<!-- ## Getting Started -->
<!---->
<!-- First, run the development server: -->
<!---->
<!-- ```bash -->
<!-- npm run dev -->
<!-- # or -->
<!-- yarn dev -->
<!-- # or -->
<!-- pnpm dev -->
<!-- # or -->
<!-- bun dev -->
<!-- ``` -->
<!---->
<!-- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. -->
<!---->
<!-- You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file. -->
<!---->
<!-- This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel. -->
<!---->
<!-- ## Learn More -->
<!---->
<!-- To learn more about Next.js, take a look at the following resources: -->
<!---->
<!-- - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API. -->
<!-- - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial. -->
<!---->
<!-- You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome! -->
<!---->
<!-- ## Deploy on Vercel -->
<!---->
<!-- The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. -->
<!---->
<!-- Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->

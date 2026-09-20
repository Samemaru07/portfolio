import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
    {
        id: "os",
        categoryNumber: "01",
        icon: "🐧",
        title: "OS・実行環境",
        subtitle: "メインOS / 開発環境",
        themeColor: "emerald",
        skills: [
            {
                name: "Arch Linux",
                level: "daily",
                tooltip: "日常の開発・メインOS",
            },
            {
                name: "Ubuntu",
                level: "daily",
                tooltip: "サブOS・WSLで使用",
            },
            {
                name: "Windows",
                level: "daily",
                tooltip: "サブOS / 学内指定ソフトウェア",
            },
            {
                name: "Bash",
                level: "daily",
                tooltip: "シェルスクリプトによる操作・自動化",
            },
            {
                name: "Linux全般",
                level: "project",
                tooltip: "開発・運用での活用",
            },
        ],
    },
    {
        id: "infra",
        categoryNumber: "02",
        icon: "⚙️",
        title: "インフラ・CI/CD・データベース",
        subtitle: "構成管理 / 自動化 / DB",
        themeColor: "sky",
        skills: [
            {
                name: "Git",
                level: "daily",
                tooltip: "バージョン管理・コミット運用",
            },
            {
                name: "GitHub Actions",
                level: "project",
                tooltip: "CI/CDワークフロー構築",
            },
            {
                name: "Terraform",
                level: "project",
                tooltip: "クラウド構成のコード管理",
            },
            {
                name: "Ansible",
                level: "project",
                tooltip: "構成自動化・プロビジョニング",
            },
            {
                name: "PostgreSQL",
                level: "project",
                tooltip: "データベース構築・利用",
            },
            {
                name: "MySQL",
                level: "project",
                tooltip: "データベース構築・利用",
            },
            { name: "Docker", level: "experienced", tooltip: "コンテナ環境" },
        ],
    },
    {
        id: "backend",
        categoryNumber: "03",
        icon: "⚡",
        title: "バックエンド・低レイヤー言語",
        subtitle: "開発言語 / フレームワーク",
        themeColor: "amber",
        skills: [
            {
                name: "Python",
                level: "project",
                tooltip: "スクリプティング・ツール開発",
            },
            {
                name: "PyTorch",
                level: "project",
                tooltip: "機械学習モデル検証",
            },
            { name: "PHP", level: "project", tooltip: "Webバックエンド開発" },
            {
                name: "Laravel",
                level: "project",
                tooltip: "Webアプリケーションフレームワーク",
            },
            {
                name: "Lua",
                level: "project",
                tooltip: "エディタ設定・スクリプト",
            },
            { name: "C", level: "experienced" },
            { name: "C++", level: "experienced" },
            { name: "Go", level: "experienced" },
        ],
    },
    {
        id: "frontend",
        categoryNumber: "04",
        icon: "🎨",
        title: "フロントエンド・組版",
        subtitle: "UI開発 / ドキュメント作成",
        themeColor: "purple",
        skills: [
            {
                name: "Next.js",
                level: "project",
                tooltip: "ポートフォリオ等で使用",
            },
            {
                name: "TypeScript",
                level: "project",
                tooltip: "型安全なフロントエンド開発",
            },
            {
                name: "React",
                level: "project",
                tooltip: "コンポーネントUI開発",
            },
            {
                name: "JavaScript",
                level: "project",
                tooltip: "Web制作・ロジック実装",
            },
            {
                name: "HTML / CSS / SCSS",
                level: "project",
                tooltip: "マークアップ・スタイリング",
            },
            {
                name: "Tailwind CSS",
                level: "project",
                tooltip: "ユーティリティファーストCSS",
            },
            {
                name: "LaTeX",
                level: "project",
                tooltip: "実験レポート表紙公式化",
            },
            { name: "Vite", level: "experienced", tooltip: "ビルドツール" },
        ],
    },
];

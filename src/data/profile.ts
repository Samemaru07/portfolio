import { TimelineItem, PhilosophyItem } from "@/types";

export const profileIntroduction = {
    headline:
        "「さめまる」はインフラ設計からセキュリティを考慮した運用・バックエンド開発に関心を持つ高専4年生です。",
    paragraphs: [
        "複雑なシステムをシンプルに、再現性高く、運用を見据えた設計を学び、実践しています。",
        "特にLinuxが好きで、普段はArch Linuxで開発を行っています。分割キーボードとNeovimを愛してやみません。",
    ],
};

export const timelineItems: TimelineItem[] = [
    {
        id: "birth",
        year: "2007",
        title: "爆誕 🐣",
        description: "誕生。",
    },
    {
        id: "elementary",
        year: "Elementary School",
        title: "PCとの出会い",
        description:
            "小学生の頃からパソコンに深い興味を持ち、コンピュータの世界やものづくりに夢中になる。",
    },
    {
        id: "wro2021",
        year: "2021",
        badge: {
            label: "Award",
            variant: "award",
        },
        title: "WRO 2021 石川地区予選優勝・全国大会プレゼンテーション賞受賞",
        description:
            "自律型ロボット競技会「WRO 2021」にて地区優勝および全国大会プレゼンテーション賞を受賞。「得意なことをもっと伸ばしたい」という思いから、高専の電子情報工学科への進学を決意する。",
    },
    {
        id: "kosen-entry",
        year: "2023",
        badge: {
            label: "高専 入学",
            variant: "school",
        },
        title: "高等専門学校 電子情報工学科 入学",
        description:
            "学校での学びに全力で注力。ソフトウェアからハードウェア、ネットワークまで、幅広い情報技術の分野に積極的に足を踏み入れ知見を広げる。",
    },
    {
        id: "kosen-4th",
        year: "2026 (現在)",
        badge: {
            label: "高専 4年生",
            variant: "current",
        },
        title: "専門領域の実践と制作活動",
        description:
            "インフラ・運用の自動化を見据えた技術習得を進めつつ、日常の開発環境や学内課題の改善に取り組む。",
        isCurrent: true,
        subItems: [
            {
                title: "TeX版 実験レポート表紙の作成・学校公式採用",
                description:
                    "学生向けTeXスタイルファイルの作成とCI自動化を導入。",
            },
            {
                title: "ターミナルエミュレータ「Hyper」のカスタマイズ・改良",
                description:
                    "日常の開発体験を高めるため、より使い勝手の良いエミュレータを目指して機能拡張中。",
                statusBadge: "In Progress",
            },
        ],
    },
];

export const philosophies: PhilosophyItem[] = [
    {
        number: "01",
        title: "再現性と品質",
        description:
            "CIを活用した自動検証により、手動作業に依存しない品質と再現性を担保",
    },
    {
        number: "02",
        title: "シンプルさ",
        description:
            "過度な複雑さを避け、可読性とトラブルシューティング性を優先",
    },
    {
        number: "03",
        title: "運用視点",
        description:
            "作って終わりにせず、日々のメンテナンス性や継続的な改善を重視",
    },
];

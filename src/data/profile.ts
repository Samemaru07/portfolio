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
        gitRef: "tag: root",
        title: "爆誕 🐣",
        description: "富山県で誕生。石川県で暮らし始める。",
    },
    {
        id: "elementary",
        year: "Elementary School",
        gitRef: "squash-merge -> main",
        title: "PCとの出会い",
        description:
            "小学生の頃からパソコンに深い興味を持ち、コンピュータの世界やものづくりに夢中になる。",
    },
    {
        id: "junior-high",
        year: "Junior High School (2021)",
        gitRef: "squash-merge -> main",
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
        gitRef: "branch: college",
        badge: {
            label: "高専 入学",
            variant: "school",
        },
        title: "高等専門学校 電子情報工学科 入学",
        description:
            "高専へ進学し、情報工学の基礎からハードウェア・ネットワークまで幅広く学び始める。学業と専門性の探求に専念すべく、ここから『college』ブランチへ。",
        subItems: [
            {
                title: "初の本格プログラミング",
                description:
                    "高専1年次。構文やロジックの基礎を徹底的に叩き込み、コードを書いて思い通りの動作を実現するプログラミングの面白さに目覚める。",
                statusBadge: "1st year",
            },
            {
                title: "Pythonで画像セグメンテーションAIの開発",
                description:
                    "高専2年次。PyTorch・Pythonを用いた深層学習に挑戦し、画像の領域分割（セグメンテーション）モデルの実装と精度検証に取り組む。",
                statusBadge: "2nd year",
            },
            {
                title: "聖地巡礼ブログサイトの公開（Web・DB設計）",
                description:
                    "高専3年次。Next.js (App Router) と Laravel REST API を設計し、AWS S3への画像保存やVPS環境へのデプロイまで、フルスタックWeb開発を一貫してやり遂げる。",
                statusBadge: "3rd year",
            },
            {
                title: "TeX版 実験レポート表紙の実装・学校公式採用",
                description:
                    "高専4年次。学校指定のWord/PDF表紙しかなかった課題に対し、主要3エンジン対応のTeXスタイルファイルを独自実装。GitHub ActionsによるCI検証を組み込み、学校公式テンプレートとして正式採用される。",
                statusBadge: "4th year",
            },
            {
                title: "インフラ設計・セキュリティ・運用自動化の探求",
                description:
                    "高専4年次（現在地）。Arch Linuxや自作PCの環境構築から発展し、Terraform/Ansibleを用いたIaCやCI/CDパイプラインの構築など、「再現性が高く、運用のしやすい堅牢なシステム設計」を軸とした専門領域の探求に注力中。",
                statusBadge: "HEAD -> college",
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

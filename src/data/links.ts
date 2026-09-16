import { ExternalLink } from "@/types";

export const externalLinks: {
    github: ExternalLink[];
    sns: ExternalLink[];
    articles: ExternalLink[];
} = {
    github: [
        {
            title: "GitHub",
            handle: "@Samemaru07",
            url: "https://github.com/Samemaru07",
        },
    ],
    sns: [
        {
            title: "X (Twitter)",
            handle: "@samemaru0830_07",
            url: "https://x.com/samemaru0830_07",
        },
        {
            title: "Instagram",
            handle: "@same._.0830",
            url: "https://www.instagram.com/same._.0830/",
            colorVariant: "pink",
        },
    ],
    articles: [
        {
            title: "Zenn",
            handle: "@samemaru07（メイン執筆中）",
            url: "https://zenn.dev/samemaru07",
            badge: "Main",
            colorVariant: "sky",
        },
        {
            title: "Qiita",
            handle: "@osame083007",
            url: "https://qiita.com/osame083007",
            colorVariant: "emerald",
        },
        {
            title: "dev.to",
            handle: "@samemaru07",
            url: "https://dev.to/samemaru07",
            colorVariant: "amber",
        },
    ],
};

import { EnvironmentItem, ConfigRepo } from "@/types";

export const environmentItems: EnvironmentItem[] = [
    {
        id: "arch",
        icon: "🐧",
        title: "Arch Linux & Neovim",
        badgeLabel: "Arch Linux Desktop",
        imageUrl: "/images/environment/arch-desktop.webp",
        description:
            "ローリングリリースで最新の技術に触れられるArch LinuxをメインOSに採用。エディタはキーバインドからプラグインまで自作設定を施したNeovimで高速コーディングを行っています。",
        tags: ["#ArchLinux", "#Neovim", "#Dotfiles"],
    },
    {
        id: "pc",
        icon: "🖥️",
        title: "自作PC",
        badgeLabel: "Custom Workstation",
        imageUrl: "/images/environment/custom-pc.webp",
        description:
            "パーツ選定から組み立て・配線まで自身で行ったメインマシン。どんな重い作業もお手の物。中身は2代目で、ファフナー・マークアレス & 戦艦「金剛」",
        specs: "CPU: AMD Ryzen 7 5700X / GPU: NVIDIA GeForce RTX 5060Ti 16GB / RAM: 32GB / SSD: 1TB / etc...",
        tags: ["#CustomPC"],
    },
    {
        id: "keyboard",
        icon: "⌨️",
        title: "分割キーボード",
        badgeLabel: "Split Keyboard",
        imageUrl: "/images/environment/split-keyboard.webp",
        description:
            "肩や手首への負担を軽減し、長時間のリサーチやコーディングを快適にする左右分離型キーボードを愛用。キーキャップ・キースイッチ・テンティングスタンドをカスタマイズ。キーマップのファームウェアも用途に合わせて最適化しています。",
        specs: "Corne v4.1",
        tags: ["#SplitKeyboard", "#Ergonomics"],
    },
];

export const configRepos: ConfigRepo[] = [
    {
        name: "dotfiles",
        displayPath: { prefix: "~/", name: ".dotfiles" },
        badge: "Arch Linux",
        description:
            "開発環境一式。chezmoiを用いており、Arch LinuxのみならずWSLにも適用可能。",
        url: "https://github.com/Samemaru07/dotfiles",
    },
    {
        name: "nvim",
        displayPath: { prefix: "~/.config/", name: "nvim" },
        badge: "Lua",
        description: "Neovimのキーバインド・プラグイン構成ファイル",
        url: "https://github.com/Samemaru07/nvim-config",
    },
];

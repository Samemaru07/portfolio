import { EnvironmentItem, ConfigRepo } from "@/types";

export const environmentItems: EnvironmentItem[] = [
    {
        id: "arch",
        icon: "🐧",
        title: "Arch Linux & Neovim",
        badgeLabel: "Arch Linux Desktop",
        imageUrl: "/images/environment/arch-desktop.jpg",
        description:
            "ローリングリリースで最新の技術に触れられるArch LinuxをメインOSに採用。エディタはキーバインドからプラグインまで自作設定を施したNeovimで高速コーディングを行っています。",
        tags: ["#ArchLinux", "#Neovim", "#Dotfiles"],
    },
    {
        id: "pc",
        icon: "🖥️",
        title: "自作PC",
        badgeLabel: "Custom Workstation",
        imageUrl: "/images/environment/custom-pc.jpg",
        description:
            "パーツ選定から組み立て・配線まで自身で行ったメインマシン。どんな重い作業もお手の物。",
        specs: "CPU: AMD Ryzen 7 5700X / GPU: NVIDIA GeForce RTX 5060Ti 16GB / RAM: 32GB / SSD: 1TB / etc...",
        tags: ["#CustomPC", "#Workstation"],
    },
    {
        id: "keyboard",
        icon: "⌨️",
        title: "分割キーボード",
        badgeLabel: "Split Keyboard",
        imageUrl: "/images/environment/split-keyboard.jpg",
        description:
            "肩や手首への負担を軽減し、長時間のリサーチやコーディングを快適にする左右分離型キーボードを愛用。キーマップのファームウェアも用途に合わせて最適化しています。",
        tags: ["#SplitKeyboard", "#Ergonomics"],
    },
];

export const configRepos: ConfigRepo[] = [
    {
        name: "dotfiles",
        displayPath: { prefix: "~/", name: ".dotfiles" },
        badge: "Arch Linux",
        description: "Arch Linuxの開発環境・シェル設定一式",
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

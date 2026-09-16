// 制作物（Works）の型定義
export interface Project {
    id: string;
    icon: string;
    categoryBadge: string;
    cardTitle: string;
    topTitle: string;
    summary: string;
    description: string[];
    tags: string[];
    techStack: string;
    repoUrl: string | null;
    imageUrl: string;
    imageCaption: string;
    isWip?: boolean;
}

// 経歴（Timeline）のサブ項目
export interface TimelineSubItem {
    title: string;
    description: string;
    statusBadge?: string;
}

// 経歴（Timeline）のメイン項目
export interface TimelineItem {
    id: string;
    year: string;
    badge?: {
        label: string;
        variant: "award" | "school" | "current";
    };
    title: string;
    description: string;
    isCurrent?: boolean;
    subItems?: TimelineSubItem[];
}

// スキル（Skills）項目
export type SkillLevel = "daily" | "project" | "experienced";

export interface SkillItem {
    name: string;
    level: SkillLevel;
    tooltip?: string;
}

export interface SkillCategory {
    id: string;
    categoryNumber: string;
    icon: string;
    title: string;
    subtitle: string;
    themeColor: "emerald" | "sky" | "amber" | "purple";
    skills: SkillItem[];
}

// 開発の心得（Philosophy）
export interface PhilosophyItem {
    number: string;
    title: string;
    description: string;
}

// 開発環境（Environment）
export interface EnvironmentItem {
    id: string;
    icon: string;
    title: string;
    badgeLabel: string;
    imageUrl: string;
    description: string;
    specs?: string;
    tags: string[];
}

export interface ConfigRepo {
    name: string;
    displayPath: {
        prefix: string;
        name: string;
    };
    badge: string;
    description: string;
    url: string;
}

// 外部リンク（Links）
export interface ExternalLink {
    title: string;
    handle: string;
    url: string;
    badge?: string;
    colorVariant?: "sky" | "pink" | "emerald" | "amber" | "default";
}

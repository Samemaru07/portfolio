"use client";

import React, { useEffect, useState } from "react";

export interface BackgroundSection {
    id: string;
    imageUrl: string;
    alt: string;
}

const defaultBackgrounds: BackgroundSection[] = [
    {
        id: "hero",
        imageUrl: "/images/backgrounds/banpaku.JPG",
        alt: "Hero Background",
    },
    {
        id: "works",
        imageUrl: "/images/backgrounds/aobuta.png",
        alt: "Works Background",
    },
    {
        id: "profile",
        imageUrl: "/images/backgrounds/precure.JPG",
        alt: "Profile Background",
    },
    {
        id: "environment",
        imageUrl: "/images/backgrounds/unicorn.jpg",
        alt: "Environment Background",
    },
    {
        id: "links",
        imageUrl: "/images/backgrounds/strikefreedom.jpg",
        alt: "Links Background",
    },
];

interface BackgroundLayerProps {
    sections?: BackgroundSection[];
}

export default function BackgroundLayer({
    sections = defaultBackgrounds,
}: BackgroundLayerProps) {
    const [activeSectionId, setActiveSectionId] = useState<string>(
        sections[0]?.id || "hero",
    );

    useEffect(() => {
        const handleScroll = () => {
            const scrollY =
                window.scrollY || document.documentElement.scrollTop;
            const clientHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;

            // 1. ページ最上部（スクロール開始前）は確実に先頭セクション
            if (scrollY < 80) {
                if (sections[0]) {
                    setActiveSectionId(sections[0].id);
                }
                return;
            }

            // 2. ページ最下部に到達した際は確実に末尾セクション
            if (scrollY + clientHeight >= scrollHeight - 50) {
                const lastSection = sections[sections.length - 1];
                if (lastSection) {
                    setActiveSectionId(lastSection.id);
                }
                return;
            }

            // 3. 画面の中央ライン（ビューポート高さの45%〜50%）にあるセクションを検出
            const viewportCenter = scrollY + clientHeight * 0.3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const sec = sections[i];
                const el = document.getElementById(sec.id);
                if (!el) continue;

                const rect = el.getBoundingClientRect();
                const elementTop = rect.top + scrollY;

                // セクションの上端が画面中央ラインを通過している一番下のものをアクティブにする
                if (elementTop <= viewportCenter) {
                    setActiveSectionId(sec.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // 初期描画時にも実行

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sections]);

    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none"
        >
            {/* 1. 背景画像スタック（クロスフェード） */}
            {sections.map((sec) => {
                const isActive = sec.id === activeSectionId;

                return (
                    <div
                        key={sec.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            isActive ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <img
                            src={sec.imageUrl}
                            alt={sec.alt}
                            className="w-full h-full object-cover object-center filter brightness-[0.95] dark:brightness-[0.8] contrast-[1.05]"
                            onError={(e) => {
                                (
                                    e.currentTarget as HTMLImageElement
                                ).style.display = "none";
                            }}
                        />
                    </div>
                );
            })}

            {/* 2. 可読性保護用オーバーレイ（ライト / ダーク共通） */}
            <div className="absolute inset-0 bg-warm-50/83 dark:bg-[#1A1918]/85 backdrop-blur-[3px] transition-colors duration-500" />

            {/* 3. 上下端のソフトグラデーション */}
            <div className="absolute inset-0 bg-gradient-to-b from-warm-50/40 via-transparent to-warm-50/60 dark:from-[#1A1918]/40 dark:via-transparent dark:to-[#1A1918]/60 pointer-events-none" />
        </div>
    );
}

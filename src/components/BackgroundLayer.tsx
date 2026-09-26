"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export interface BackgroundSection {
    id: string;
    imageUrl: string;
    alt: string;
}

const defaultBackgrounds: BackgroundSection[] = [
    {
        id: "hero",
        imageUrl: "/images/backgrounds/banpaku.webp",
        alt: "Hero Background",
    },
    {
        id: "works",
        imageUrl: "/images/backgrounds/aobuta.webp",
        alt: "Works Background",
    },
    {
        id: "profile",
        imageUrl: "/images/backgrounds/precure.webp",
        alt: "Profile Background",
    },
    {
        id: "environment",
        imageUrl: "/images/backgrounds/unicorn.webp",
        alt: "Environment Background",
    },
    {
        id: "links",
        imageUrl: "/images/backgrounds/strikefreedom.webp",
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

            if (scrollY < 80) {
                if (sections[0]) {
                    setActiveSectionId(sections[0].id);
                }
                return;
            }

            if (scrollY + clientHeight >= scrollHeight - 50) {
                const lastSection = sections[sections.length - 1];
                if (lastSection) {
                    setActiveSectionId(lastSection.id);
                }
                return;
            }

            const viewportCenter = scrollY + clientHeight * 0.3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const sec = sections[i];
                const el = document.getElementById(sec.id);
                if (!el) continue;

                const rect = el.getBoundingClientRect();
                const elementTop = rect.top + scrollY;

                if (elementTop <= viewportCenter) {
                    setActiveSectionId(sec.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sections]);

    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none"
        >
            {/* 全背景要素をDOMに維持し、CSSトランジションによる確実なクロスフェードを実現 */}
            {sections.map((sec) => {
                const isActive = sec.id === activeSectionId;

                return (
                    <div
                        key={sec.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            isActive ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={sec.imageUrl}
                                alt={sec.alt}
                                fill
                                sizes="100vw"
                                priority={sec.id === sections[0]?.id}
                                className="object-cover object-center filter brightness-[0.95] dark:brightness-[0.8] contrast-[1.05]"
                            />
                        </div>
                    </div>
                );
            })}

            <div className="absolute inset-0 bg-warm-50/83 dark:bg-[#1A1918]/85 backdrop-blur-[3px] transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-warm-50/40 via-transparent to-warm-50/60 dark:from-[#1A1918]/40 dark:via-transparent dark:to-[#1A1918]/60 pointer-events-none" />
        </div>
    );
}

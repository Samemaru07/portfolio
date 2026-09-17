"use client";

import { useEffect, useState } from "react";

export default function Header() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

        setIsDark(shouldBeDark);
        if (shouldBeDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const nextDark = !isDark;
        setIsDark(nextDark);
        if (nextDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-warm-50/80 dark:bg-[#1A1918]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <a
                    href="#"
                    className="font-bold tracking-tight text-lg hover:opacity-80 transition text-[#2C2927] dark:text-white"
                >
                    Samemaru
                </a>

                {/* Desktop Nav */}
                <div className="flex items-center space-x-6 sm:space-x-8 text-sm font-medium">
                    <nav className="hidden md:flex items-center space-x-6 text-[#5A5551] dark:text-neutral-400">
                        <a href="#works" className="hover:text-black dark:hover:text-white transition">
                            Works
                        </a>

                        {/* Profile with Hover Dropdown */}
                        <div className="relative group py-2">
                            <a
                                href="#profile"
                                className="flex items-center gap-1 hover:text-black dark:hover:text-white transition cursor-pointer"
                            >
                                <span>Profile</span>
                                <span className="text-xs transition-transform duration-200 group-hover:rotate-90 text-neutral-400 select-none">
                                    ›
                                </span>
                            </a>

                            {/* Dropdown Menu */}
                            <div className="absolute left-0 top-full -mt-1 w-52 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 transform -translate-y-1 group-hover:translate-y-0 z-50">
                                <div className="p-1.5 rounded-xl bg-white/95 dark:bg-[#252422]/95 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-xl space-y-0.5 text-xs">
                                    <a
                                        href="#profile-me"
                                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition text-[#2C2927] dark:text-neutral-200"
                                    >
                                        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                                            me/
                                        </span>
                                        <span className="text-[11px] text-neutral-400">経歴・自己紹介</span>
                                    </a>

                                    <a
                                        href="#profile-philosophy"
                                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition text-[#2C2927] dark:text-neutral-200"
                                    >
                                        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                                            philosophy/
                                        </span>
                                        <span className="text-[11px] text-neutral-400">開発の心得</span>
                                    </a>

                                    <a
                                        href="#skills"
                                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition text-[#2C2927] dark:text-neutral-200"
                                    >
                                        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                                            skills/
                                        </span>
                                        <span className="text-[11px] text-neutral-400">スキルスタック</span>
                                    </a>

                                    <a
                                        href="#hobbies"
                                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition text-[#2C2927] dark:text-neutral-200"
                                    >
                                        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                                            hobbies/
                                        </span>
                                        <span className="text-[11px] text-neutral-400">趣味・ギャラリー</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a href="#environment" className="hover:text-black dark:hover:text-white transition">
                            Environment
                        </a>
                        <a href="#sns-github" className="hover:text-black dark:hover:text-white transition">
                            SNS/GitHub
                        </a>
                    </nav>

                    {/* Theme Toggle Switch */}
                    <button
                        id="themeToggle"
                        type="button"
                        onClick={toggleTheme}
                        aria-label="テーマ切り替え"
                        className="flex items-center gap-1.5 p-1 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 transition"
                    >
                        <span className="text-xs px-1 text-amber-500 select-none">☀️</span>
                        <div className="w-8 h-4 bg-neutral-300 dark:bg-neutral-600 rounded-full p-0.5 flex items-center transition">
                            <div
                                className={`w-3 h-3 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${mounted && isDark ? "translate-x-4" : ""
                                    }`}
                            />
                        </div>
                        <span className="text-xs px-1 text-neutral-400 select-none">🌙</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

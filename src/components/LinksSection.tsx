import { externalLinks } from "@/data/links";
import React from "react";

export default function LinksSection() {
    return (
        <div
            id="sns-github"
            className="pt-12 border-t border-black/5 dark:border-white/5 space-y-8 scroll-mt-20"
        >
            <div className="space-y-1">
                <h3 className="text-2xl font-bold text-[#2C2927] dark:text-white">
                    SNS & リンク
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6560] dark:text-neutral-400 leading-relaxed pt-0.5">
                    ソースコードを公開しているGitHub、日頃の発信を行うSNS、執筆している技術記事へのリンクです。
                </p>
            </div>

            <div className="space-y-6">
                {/* Category 1: GitHub */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        <h4 className="text-sm font-bold text-[#2C2927] dark:text-white">
                            GitHub
                        </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {externalLinks.github.map((link) => (
                            <a
                                key={link.title}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-xl bg-white/70 dark:bg-[#252422] border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition flex items-center justify-between group shadow-sm"
                            >
                                <div className="space-y-0.5">
                                    <span className="text-sm font-bold text-[#2C2927] dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                                        {link.title}
                                    </span>
                                    <p className="text-xs text-neutral-400 font-mono">
                                        {link.handle}
                                    </p>
                                </div>
                                <span className="text-sm font-bold text-[#2C2927] dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                                    ↗
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Category 2: SNS */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                        <h4 className="text-sm font-bold text-[#2C2927] dark:text-white">
                            SNS
                        </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {externalLinks.sns.map((link) => (
                            <a
                                key={link.title}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-xl bg-white/70 dark:bg-[#252422] border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 flex items-center justify-between group shadow-sm"
                            >
                                <div className="space-y-0 5">
                                    <span
                                        className={`text-sm font-bold text-[#2C2927] dark:text-white transition ${
                                            link.colorVariant === "pink"
                                                ? "group-hover:text-pink-600 dark:group-hover:text-pink-400"
                                                : "group-hover:text-amber-600 dark:group-hover:text-amber-400"
                                        }`}
                                    >
                                        {link.title}
                                    </span>
                                    <p className="text-xs text-neutral-400 font-mono">
                                        {link.handle}
                                    </p>
                                </div>
                                <span className="text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                    ↗
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Category 3: 技術記事 */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        <h4 className="text-sm font-bold text-[#2C2927] dark:text-white">
                            技術記事
                        </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {externalLinks.articles.map((link) => {
                            const isMain = link.badge === "Main";

                            return (
                                <a
                                    key={link.title}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-xl bg-white/70 dark:bg-[#252422] transition flex items-center justify-between group shadow-sm ${
                                        isMain
                                            ? "border border-sky-500/30 dark:border-sky-400/30 hover:border-sky-500/60 dark:hover:border-sky-400/60"
                                            : "border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20"
                                    }`}
                                >
                                    <div className="space-y-0.5">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`text-sm font-bold text-[#2C2927] dark:text-white transition ${
                                                    link.colorVariant === "sky"
                                                        ? "group-hover:text-sky-600 dark:group-hover:text-sky-400"
                                                        : link.colorVariant ===
                                                            "emerald"
                                                          ? "group-hover:text-emerald-600 dark:group-hover:text-sky-400"
                                                          : "group-hover:text-amber-600 dark:group-hover:text-amber-400"
                                                }`}
                                            >
                                                {link.title}
                                            </span>
                                            {link.badge && (
                                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-mono font-medium">
                                                    {link.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-[#6B6560] dark:text-neutral-400">
                                            {link.handle}
                                        </p>
                                    </div>
                                    <span
                                        className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                                            isMain
                                                ? "text-sky-500"
                                                : "text-neutral-400"
                                        }`}
                                    >
                                        ↗
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

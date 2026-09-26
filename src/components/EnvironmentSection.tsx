import { configRepos, environmentItems } from "@/data/environment";
import Image from "next/image";
import React from "react";

export default function EnvironmentSection() {
    return (
        <section
            id="environment"
            className="pt-12 border-t border-black/5 dark:border-white/5 space-y-6 scroll-mt-20"
        >
            {/* Header */}
            <div className="space-y-1">
                <h3 className="text-2xl font-bold text-[#2C2927] dark:text-white">
                    開発環境
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6560] dark:text-neutral-400 leading-relaxed pt-0.5">
                    日々の生産性と開発体験（DevEx）を極限まで高めるためのこだわりの環境です。OSから入力機器に至るまで自身の手で最適化しています。
                </p>
            </div>

            {/* Environment Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {environmentItems.map((item) => (
                    <div
                        key={item.id}
                        className="p-5 rounded-2xl bg-white/70 dark:bg-[#252422] border border-black/5 dark:border-white/5 shadow-sm space-y-4 hover:shadow-md transition flex flex-col justify-between group"
                    >
                        <div className="space-y-3">
                            {/* Image Preview */}
                            <div className="group relative rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 aspect-[16/10] border border-black/5 dark:border-white/5">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition duration-300"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                                    <span className="text-[11px] font-mono text-white">
                                        {item.badgeLabel}
                                    </span>
                                </div>
                            </div>

                            {/* Text Info */}
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-base">
                                        {item.icon}
                                    </span>
                                    <h4 className="font-bold text-sm sm:text-base text-[#2C2927] dark:text-white">
                                        {item.title}
                                    </h4>
                                </div>
                                <p className="text-xs text-[#6B6560] dark:text-neutral-400 leading-relaxed font-sans">
                                    {item.description}
                                    {item.specs && (
                                        <span className="font-mono text-[11px] text-[#524E4A] dark:text-neutral-300 block pt-1.5 break-all">
                                            {item.specs}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2 text-[11px] font-mono text-neutral-500 border-t border-black/5 dark:border-white/5">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 rounded bg-warm-100 dark:bg-neutral-800"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Config & Dotfiles Repositories */}
            <div className="p-5 rounded-2xl bg-white/70 dark:bg-[#252422] border border-black/5 dark:border-white/5 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-2.5">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                            <span>📂</span> Config Repositories
                        </span>
                        <span className="text-[11px] text-[#7A746E] dark:text-neutral-400">
                            設定・構成リポジトリ
                        </span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400">
                        GitHub
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {configRepos.map((repo) => (
                        <a
                            key={repo.name}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-xl bg-warm-50/60 dark:bg-[#1E1D1B] border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition flex items-center justify-between group"
                        >
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-mono font-bold text-[#2C2927] dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition flex items-center gap-1">
                                        <span className="text-emerald-500">
                                            {repo.displayPath.prefix}
                                        </span>
                                        {repo.displayPath.name}
                                    </span>
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-mono">
                                        {repo.badge}
                                    </span>
                                </div>
                                <p className="text-xs text-[#6B6560] dark:text-neutral-400 font-sans">
                                    {repo.description}
                                </p>
                            </div>
                            <span className="text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-sm">
                                ↗
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

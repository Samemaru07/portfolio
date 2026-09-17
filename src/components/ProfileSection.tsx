import React from "react";
import {
    profileIntroduction,
    timelineItems,
    philosophies,
} from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { hobbiesData } from "@/data/hobbies";

export default function ProfileSection() {
    return (
        <section
            id="profile"
            className="pt-12 border-t border-black/5 dark:border-white/5 space-y-12 scroll-mt-20"
        >
            {/* 1. Profile Me & Timeline */}
            <div id="profile-me" className="scroll-mt-24 space-y-6">
                <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-[#2C2927] dark:text-white">
                        Profile & History
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B6560] dark:text-neutral-400 leading-relaxed pt-0.5">
                        エンジニアを志す背景と、これまでの歩み・マイルストーンです。
                    </p>
                </div>

                {/* 自己紹介文 */}
                <div className="space-y-3 text-sm leading-relaxed text-[#544F4A] dark:text-neutral-300 max-w-3xl font-sans">
                    <p className="font-medium text-[#2C2927] dark:text-white">
                        {profileIntroduction.headline}
                    </p>
                    {profileIntroduction.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                    ))}
                </div>

                {/* Timeline Component */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-[#252422] border border-black/5 dark:border-white/5 shadow-sm space-y-6">
                    <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-3">
                        <h4 className="text-sm font-bold text-[#2C2927] dark:text-white flex items-center gap-2">
                            <span>📅</span> 経歴・マイルストーン
                        </h4>
                        <span className="text-xs font-mono text-neutral-400">
                            History
                        </span>
                    </div>

                    <div className="space-y-7 border-l-2 border-emerald-500/30 dark:border-emerald-500/20 pl-4 sm:pl-6 ml-2 font-sans">
                        {timelineItems.map((item) => {
                            const isCurrent = item.isCurrent;

                            return (
                                <div key={item.id} className="relative group">
                                    {/* Node Dot */}
                                    <div
                                        className={`absolute -left-[23px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-4 border-white dark:border-[#252422] ${
                                            isCurrent
                                                ? "bg-emerald-500 ring-2 ring-emerald-500/20"
                                                : "bg-neutral-300 dark:bg-neutral-600"
                                        }`}
                                    />

                                    <div className="space-y-1.5">
                                        {/* Header line: Year & Badge */}
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span
                                                className={`text-xs font-mono font-bold ${
                                                    isCurrent
                                                        ? "text-emerald-600 dark:text-emerald-400"
                                                        : "text-neutral-500"
                                                }`}
                                            >
                                                {item.year}
                                            </span>
                                            {item.badge && (
                                                <span
                                                    className={`text-[11px] px-2 py-0.5 rounded font-medium ${
                                                        item.badge.variant ===
                                                        "award"
                                                            ? "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-semibold"
                                                            : item.badge
                                                                    .variant ===
                                                                "current"
                                                              ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300"
                                                              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                                                    }`}
                                                >
                                                    {item.badge.label}
                                                </span>
                                            )}
                                        </div>

                                        {/* Title & Description */}
                                        <h5 className="text-sm font-bold text-[#2C2927] dark:text-white">
                                            {item.title}
                                        </h5>
                                        <p className="text-xs text-[#6B6560] dark:text-neutral-400 leading-relaxed">
                                            {item.description}
                                        </p>

                                        {/* Sub Items (e.g. Current achievements) */}
                                        {item.subItems &&
                                            item.subItems.length > 0 && (
                                                <div className="ml-2 sm:ml-4 pl-3.5 border-l border-neutral-300 dark:border-neutral-700 space-y-3 pt-2 text-xs">
                                                    {item.subItems.map(
                                                        (sub, sIdx) => (
                                                            <div
                                                                key={sIdx}
                                                                className="space-y-0.5 relative"
                                                            >
                                                                <div className="absolute -left-[18px] top-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                                <div className="font-medium text-[#2C2927] dark:text-neutral-200 flex items-center gap-1.5 flex-wrap">
                                                                    <span>
                                                                        {
                                                                            sub.title
                                                                        }
                                                                    </span>
                                                                    {sub.statusBadge && (
                                                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-mono">
                                                                            {
                                                                                sub.statusBadge
                                                                            }
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <p className="text-[11px] text-[#7A746E] dark:text-neutral-400 leading-normal">
                                                                    {
                                                                        sub.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* 2. Philosophy (開発の心得) */}
            <div
                id="profile-philosophy"
                className="scroll-mt-24 space-y-4 pt-4 border-t border-black/5 dark:border-white/5"
            >
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <h4 className="text-lg font-bold text-[#2C2927] dark:text-white">
                            開発の心得
                        </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6B6560] dark:text-neutral-400 leading-relaxed pt-0.5">
                        保守性・可読性の高いコード設計と運用のしやすさを重視しています。適切な責務の分離やCIを用いたテスト・自動化を実践しています。
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 text-xs font-sans">
                    {philosophies.map((phil) => (
                        <div
                            key={phil.number}
                            className="p-5 rounded-2xl bg-white/70 dark:bg-[#252422] border border-black/5 dark:border-white/5 shadow-sm space-y-1.5 hover:shadow-md transition"
                        >
                            <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 block text-xs">
                                {phil.number}. {phil.title}
                            </span>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {phil.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Skills */}
            <div
                id="skills"
                className="scroll-mt-24 space-y-4 pt-4 border-t border-black/5 dark:border-white/5"
            >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                        <h4 className="text-lg font-bold text-[#2C2927] dark:text-white">
                            スキルスタック & ツール
                        </h4>
                        <p className="text-xs text-[#7A746E] dark:text-neutral-400">
                            実務・個人開発・高専での学びを通して触れてきた技術群
                        </p>
                    </div>
                    {/* 凡例 */}
                    <div className="flex items-center gap-3 text-[11px] font-mono flex-wrap">
                        <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            日常利用・中核
                        </span>
                        <span className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-sky-500" />
                            制作・プロジェクト実績
                        </span>
                        <span className="inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
                            <span className="w-2 h-2 rounded-full bg-neutral-400" />
                            使用経験あり
                        </span>
                    </div>
                </div>

                {/* 4カテゴリグリッド */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {skillCategories.map((cat) => (
                        <div
                            key={cat.id}
                            className="p-5 rounded-2xl bg-white/70 dark:bg-[#252422] border border-black/5 dark:border-white/5 shadow-sm space-y-3"
                        >
                            <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-2.5">
                                <span className="text-xs font-sans font-bold text-[#2C2927] dark:text-neutral-200 flex items-center gap-1.5">
                                    <span>{cat.icon}</span> {cat.categoryNumber}
                                    . {cat.title}
                                </span>
                                <span className="text-[10px] text-neutral-400 font-sans">
                                    {cat.subtitle}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2 text-xs font-mono">
                                {cat.skills.map((skill) => {
                                    let badgeStyle =
                                        "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300";

                                    if (skill.level === "daily") {
                                        badgeStyle =
                                            "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-300/40 dark:border-emerald-700/40 font-bold";
                                    } else if (skill.level === "project") {
                                        badgeStyle =
                                            "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-300/40 dark:border-sky-700/40 font-semibold";
                                    }

                                    return (
                                        <span
                                            key={skill.name}
                                            className={`px-2.5 py-1 rounded-md transition ${badgeStyle}`}
                                            title={skill.tooltip}
                                        >
                                            {skill.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. Hobbies */}
            <div
                id="hobbies"
                className="scroll-mt-24 space-y-6 pt-4 border-t border-black/5 dark:border-white/5"
            >
                <div className="space-y-1">
                    <h4 className="text-lg font-bold text-[#2C2927] dark:text-white">
                        趣味
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6B6560] dark:text-neutral-400 leading-relaxed pt-0.5">
                        {hobbiesData.leadText}
                    </p>
                </div>

                {/* 最近ハマっているもの */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <h5 className="text-base font-bold text-[#2C2927] dark:text-white">
                            最近ハマっている・作っているもの
                        </h5>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {hobbiesData.recentHighlights.map((hl) => (
                            <div
                                key={hl.id}
                                className="p-5 rounded-2xl bg-white/70 dark:bg-[#252422] border border-black/5 dark:border-white/5 shadow-sm space-y-2 hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">{hl.icons}</span>
                                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-300 font-semibold">
                                        {hl.badge}
                                    </span>
                                </div>
                                <h6 className="font-bold text-sm sm:text-base text-[#2C2927] dark:text-white">
                                    {hl.title}
                                </h6>
                                <p className="text-xs text-[#6B6560] dark:text-neutral-400 leading-relaxed">
                                    {hl.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* フォトギャラリー */}
                <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <h5 className="text-base font-bold text-[#2C2927] dark:text-white">
                                代表フォトギャラリー
                            </h5>
                        </div>
                        <span className="text-xs font-mono text-neutral-400">
                            Selected Photos
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {hobbiesData.gallery.map((sec, gIdx) => (
                            <div
                                key={gIdx}
                                className="p-5 rounded-2xl bg-white/70 dark:bg-[#252422] border border-black/5 dark:border-white/5 shadow-sm space-y-4"
                            >
                                <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-2">
                                    <h6 className="text-xs sm:text-sm font-bold text-[#2C2927] dark:text-white flex items-center gap-1.5">
                                        <span>{gIdx === 0 ? "🎨" : "⛩️"}</span>{" "}
                                        {sec.category}
                                    </h6>
                                    <span className="text-[11px] font-mono text-neutral-400">
                                        {sec.photos.length} photos
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {sec.photos.map((p, pIdx) => (
                                        <div
                                            key={pIdx}
                                            className="group relative rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 aspect-[4/3] border border-black/5 dark:border-white/5"
                                        >
                                            <img
                                                src={p.url}
                                                alt={p.label}
                                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                                                <span className="text-[11px] font-medium text-white">
                                                    {p.label}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-[11px] text-[#7A746E] dark:text-neutral-400">
                                    {sec.caption}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

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
            {/* 1. Profile Me & Git Graph Timeline */}
            <div id="profile-me" className="scroll-mt-24 space-y-6">
                <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-[#2C2927] dark:text-white">
                        Profile & History
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B6560] dark:text-neutral-400 leading-relaxed pt-0.5">
                        エンジニアを志す背景と、コミットログに見立てたこれまでの歩み・マイルストーンです。
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

                {/* Git Log Terminal Window */}
                <div className="rounded-2xl bg-term-bg dark:bg-[#252422] text-[#F5F2EB] shadow-terminal dark:shadow-terminal-dark overflow-hidden border border-term-border">
                    {/* Terminal Header */}
                    <div className="px-4 py-2.5 bg-[#2E2C2A] dark:bg-[#1E1D1B] flex items-center justify-between border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                            </div>
                            <span className="text-xs font-mono text-neutral-400 ml-2 select-none">
                                &gt;_ git log --graph --all
                            </span>
                        </div>
                        <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-400 hidden sm:flex">
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400" />{" "}
                                main
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-sky-400" />{" "}
                                college (active)
                            </span>
                        </div>
                    </div>

                    {/* Terminal Body: Git Visual Graph */}
                    <div className="p-5 sm:p-7 font-mono text-xs leading-relaxed space-y-4 overflow-x-auto">
                        <div className="text-[#A39E98] pb-2 border-b border-white/5 flex items-center justify-between">
                            <span>
                                $ git log --graph --oneline --decorate --all
                            </span>
                            <span className="text-[10px] text-neutral-500">
                                HEAD -&gt; college
                            </span>
                        </div>

                        <div className="space-y-0 pt-2">
                            {timelineItems.map((item, index) => {
                                const isFirst = index === 0;
                                const hasSubItems =
                                    item.subItems && item.subItems.length > 0;

                                return (
                                    <div key={item.id} className="space-y-0">
                                        {/* メインコミット行 */}
                                        <div className="flex items-stretch group">
                                            {/* グラフライン描画カラム: 幅56px固定 (main軸: 18px, college軸: 42px) */}
                                            <div className="relative w-14 shrink-0">
                                                {/* main縦線: 上から下端まで一定の濃さ(opacity-75)で貫通 */}
                                                <div
                                                    className={`absolute left-[18px] w-[2.5px] -translate-x-1/2 bg-[#10b981] opacity-75 bottom-0 ${
                                                        isFirst
                                                            ? "top-[14px]"
                                                            : "top-0"
                                                    }`}
                                                />

                                                {/* 2023年（高専入学）：collegeブランチへの分岐曲線 */}
                                                {hasSubItems && (
                                                    <svg
                                                        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                                                        viewBox="0 0 56 48"
                                                        preserveAspectRatio="none"
                                                    >
                                                        <path
                                                            d="M 18 14 C 18 30, 42 24, 42 48"
                                                            fill="none"
                                                            stroke="#38bdf8"
                                                            strokeWidth="2"
                                                            strokeDasharray="3 3"
                                                            strokeOpacity="0.85"
                                                        />
                                                    </svg>
                                                )}

                                                {/* mainコミットノード */}
                                                <span className="absolute left-[18px] top-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full z-10 box-border w-2.5 h-2.5 bg-[#2E2C2A] border-2 border-emerald-500" />
                                            </div>

                                            {/* コミット情報コンテンツ */}
                                            <div className="pb-5 pt-1 space-y-1 flex-1 min-w-0 pr-2">
                                                <div className="flex items-center gap-2 flex-wrap font-mono text-[11px] leading-tight">
                                                    {/* 年・期間：アンバー系で強調 */}
                                                    <span className="text-amber-300 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                                                        [{item.year}]
                                                    </span>
                                                    {item.gitRef && (
                                                        <span className="text-emerald-400 font-medium">
                                                            ({item.gitRef})
                                                        </span>
                                                    )}
                                                    {item.badge && (
                                                        <span className="text-neutral-400 font-sans text-[11px]">
                                                            · {item.badge.label}
                                                        </span>
                                                    )}
                                                </div>

                                                <h5 className="font-bold text-sm sm:text-base text-white font-sans tracking-wide pt-0.5">
                                                    {item.title}
                                                </h5>

                                                <p className="text-xs text-neutral-300/85 leading-relaxed font-sans max-w-3xl">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* 【collegeブランチ】学年ごとのコミット群 */}
                                        {hasSubItems &&
                                            item.subItems!.map((sub, sIdx) => {
                                                const isCollegeHead =
                                                    sIdx ===
                                                    item.subItems!.length - 1;

                                                return (
                                                    <div
                                                        key={sIdx}
                                                        className="flex items-stretch group"
                                                    >
                                                        {/* グラフライン描画カラム */}
                                                        <div className="relative w-14 shrink-0">
                                                            {/* main幹縦線: 他の箇所と同一の濃さ (opacity-75) で下端まで貫通 */}
                                                            <div className="absolute left-[18px] top-0 bottom-0 w-[2.5px] -translate-x-1/2 bg-[#10b981] opacity-75" />

                                                            {/* collegeブランチ縦線: HEADノード以降も途切れず下端 (bottom-0) まで貫通 */}
                                                            <div className="absolute left-[42px] -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#38bdf8] opacity-80" />

                                                            {/* collegeコミットノード */}
                                                            <span
                                                                className={`absolute left-[42px] top-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full z-10 box-border ${
                                                                    isCollegeHead
                                                                        ? "w-3.5 h-3.5 bg-sky-400 ring-4 ring-sky-500/20 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                                                                        : "w-2.5 h-2.5 rounded-full bg-sky-400 ring-2 ring-[#252422]"
                                                                }`}
                                                            />
                                                        </div>

                                                        {/* サブコミット情報コンテンツ */}
                                                        <div className="pb-5 pt-1 space-y-1 flex-1 min-w-0 pr-2">
                                                            <div className="flex items-center gap-2 flex-wrap font-mono text-[11px] leading-tight">
                                                                {/* 学年 / 現在地バッジ：目立たせる配色 */}
                                                                {sub.statusBadge && (
                                                                    <span
                                                                        className={`px-1.5 py-0.5 rounded font-mono text-[10px] font-medium border ${
                                                                            isCollegeHead
                                                                                ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30 font-bold"
                                                                                : "bg-amber-400/10 text-amber-200 border-amber-400/20"
                                                                        }`}
                                                                    >
                                                                        [
                                                                        {
                                                                            sub.statusBadge
                                                                        }
                                                                        ]
                                                                    </span>
                                                                )}
                                                                <span className="text-sky-300 font-medium">
                                                                    (college)
                                                                </span>
                                                            </div>

                                                            <h6 className="font-bold text-xs sm:text-sm text-neutral-200 font-sans tracking-wide pt-0.5">
                                                                {sub.title}
                                                            </h6>

                                                            <p className="text-[11px] text-neutral-400 font-sans leading-relaxed max-w-3xl">
                                                                {
                                                                    sub.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                );
                            })}
                        </div>
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

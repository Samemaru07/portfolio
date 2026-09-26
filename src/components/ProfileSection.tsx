import React from "react";
import {
    profileIntroduction,
    timelineItems,
    philosophies,
} from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { hobbiesData } from "@/data/hobbies";
import Image from "next/image";

export default function ProfileSection() {
    // 中核スタック（daily）を自動抽出
    const coreSkills = skillCategories.flatMap((cat) =>
        cat.skills
            .filter((s) => s.level === "daily")
            .map((s) => ({
                ...s,
                categoryTitle: cat.title,
                categoryIcon: cat.icon,
            })),
    );

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
                <div className="rounded-2xl bg-[#1E1D1B]/80 dark:bg-[#121110]/85 text-[#F5F2EB] shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-1px_1px_rgba(0,0,0,0.2)] overflow-hidden border border-white/20">
                    {/* Terminal Header */}
                    <div className="px-4 py-2.5 bg-white/10 dark:bg-white/5 flex items-center justify-between border-b border-white/15">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-sm" />
                            </div>
                            <span className="text-xs font-mono text-white/80 ml-2 select-none font-medium drop-shadow-sm">
                                &gt;_ git log --graph --all
                            </span>
                        </div>
                        <div className="flex items-center gap-4 text-[11px] font-mono text-white/70 hidden sm:flex">
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400" />{" "}
                                main
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-sky-400" />{" "}
                                college (in progress)
                            </span>
                        </div>
                    </div>

                    {/* Terminal Body: Git Visual Graph */}
                    <div className="p-5 sm:p-7 font-mono text-xs leading-relaxed space-y-4 overflow-x-auto">
                        <div className="text-[#A39E98] pb-2 border-b border-white/10 flex items-center justify-between">
                            <span className="font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                $ git log --graph --oneline --decorate --all
                            </span>
                            <span className="text-[10px] text-neutral-400">
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
                                                    <span className="text-amber-300 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                                        [{item.year}]
                                                    </span>
                                                    {item.gitRef && (
                                                        <span className="text-emerald-400 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                                            ({item.gitRef})
                                                        </span>
                                                    )}
                                                    {item.badge && (
                                                        <span className="text-neutral-300 font-sans text-[11px] drop-shadow-sm">
                                                            · {item.badge.label}
                                                        </span>
                                                    )}
                                                </div>

                                                <h5 className="font-bold text-sm sm:text-base text-white font-sans tracking-wide pt-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                                    {item.title}
                                                </h5>

                                                <p className="text-xs text-neutral-200/90 leading-relaxed font-sans max-w-3xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
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
                                                                <span className="text-sky-300 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                                                    (college)
                                                                </span>
                                                            </div>

                                                            <h6 className="font-bold text-xs sm:text-sm text-neutral-100 font-sans tracking-wide pt-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                                                {sub.title}
                                                            </h6>

                                                            <p className="text-[11px] text-neutral-300 font-sans leading-relaxed max-w-3xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
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

            {/* 2. Philosophy (開発の心得: GitHub Actions Pipeline 風) */}
            <div
                id="profile-philosophy"
                className="scroll-mt-24 space-y-4 pt-4 border-t border-black/5 dark:border-white/5"
            >
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <h4 className="text-lg font-bold text-[#2C2927] dark:text-white">
                            開発の心得
                        </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6B6560] dark:text-neutral-400 leading-relaxed pt-0.5">
                        保守性・可読性の高いコード設計と運用のしやすさを重視しています。適切な責務の分離やCIを用いたテスト・自動化を実践しています。
                    </p>
                </div>

                {/* GitHub Actions ワークフローパネル */}
                <div className="rounded-2xl bg-[#1E1D1B]/80 dark:bg-[#121110]/85 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-1px_1px_rgba(0,0,0,0.2)] overflow-hidden text-[#F5F2EB]">
                    {/* Panel Header: ワークフロー実行メタ情報 */}
                    <div className="px-4 py-3 bg-white/10 dark:bg-white/5 border-b border-white/15 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                        <div className="flex items-center gap-2.5">
                            {/* 静的なステータスドット */}
                            <span className="w-2 h-2 rounded-full bg-emerald-500/80 shrink-0" />
                            <span className="text-neutral-300 font-medium">
                                workflow:{" "}
                                <span className="text-white">
                                    verify-principles.yml
                                </span>
                            </span>
                            <span className="text-neutral-500 hidden sm:inline">
                                #42
                            </span>
                        </div>

                        <div className="flex items-center gap-3 text-[11px] text-neutral-400">
                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 font-medium">
                                <svg
                                    className="w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                passing
                            </span>
                            <span className="hidden sm:inline text-neutral-500">
                                in 350ms
                            </span>
                        </div>
                    </div>

                    {/* Panel Body: パイプラインジョブ群 */}
                    <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {philosophies.map((phil, idx) => {
                            const durations = ["120ms", "90ms", "140ms"];
                            const jobNames = [
                                "quality-assurance",
                                "clean-architecture",
                                "maintainability",
                            ];

                            return (
                                <div
                                    key={phil.number}
                                    className="rounded-xl bg-white/[0.03] dark:bg-black/20 border border-white/10 hover:border-white/20 p-4 transition duration-200 flex flex-col justify-between space-y-3"
                                >
                                    {/* Job Header */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400">
                                            <span className="truncate">
                                                job: {jobNames[idx]}
                                            </span>
                                            {/* 時間表示は緑ではなく控えめなニュートラル */}
                                            <span className="text-neutral-500 shrink-0">
                                                {durations[idx]}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 pt-0.5">
                                            {/* 控えめなチェックマーク */}
                                            <span className="text-emerald-400 flex items-center justify-center shrink-0">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </span>
                                            <h5 className="font-bold text-sm text-neutral-100 font-sans tracking-wide">
                                                {phil.number}. {phil.title}
                                            </h5>
                                        </div>
                                    </div>

                                    {/* Job Output / Description */}
                                    <div className="pt-2.5 border-t border-white/5">
                                        <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                                            {phil.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* 3. Skills (スペックシート / テクニカル仕様書風) */}
            <div
                id="skills"
                className="scroll-mt-24 space-y-5 pt-4 border-t border-black/5 dark:border-white/5"
            >
                {/* 見出し & 習熟度ガイド */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div className="space-y-1">
                        <h4 className="text-lg font-bold text-[#2C2927] dark:text-white">
                            スキルスタック &amp; ツール
                        </h4>
                        <p className="text-xs sm:text-sm text-[#6B6560] dark:text-neutral-400 leading-relaxed pt-0.5">
                            高専での学びや個人開発で培ってきた技術群
                        </p>
                    </div>

                    {/* 控えめな凡例 */}
                    <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-500 shrink-0">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>中核・日常利用</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                            <span>制作・プロジェクト実績</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                            <span>使用経験</span>
                        </span>
                    </div>
                </div>

                {/* スペックシート本体 */}
                <div className="rounded-2xl bg-white/40 dark:bg-[#1E1D1B]/40 border border-black/5 dark:border-white/10 overflow-hidden divide-y divide-black/5 dark:divide-white/5 shadow-sm">
                    {skillCategories.map((cat) => (
                        <div
                            key={cat.id}
                            className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 md:gap-6 hover:bg-black/[0.015] dark:hover:bg-white/[0.015] transition-colors"
                        >
                            {/* 左カラム: カテゴリ名（仕様書の項目名風） */}
                            <div className="md:col-span-4 lg:col-span-3 space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">{cat.icon}</span>
                                    <span className="font-bold text-xs sm:text-sm text-[#2C2927] dark:text-neutral-100 font-sans tracking-tight">
                                        {cat.title}
                                    </span>
                                </div>
                                <p className="text-[11px] font-mono text-neutral-400">
                                    {cat.subtitle}
                                </p>
                            </div>

                            {/* 右カラム: スキル群とスペック詳細のグリッド */}
                            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {cat.skills.map((skill) => {
                                    // 習熟度に応じたスタイル定義
                                    let cardStyle =
                                        "bg-neutral-500/5 dark:bg-white/[0.03] border-black/5 dark:border-white/5";
                                    let nameColor =
                                        "text-neutral-700 dark:text-neutral-300";
                                    let descColor =
                                        "text-neutral-500 dark:text-neutral-400";

                                    if (skill.level === "daily") {
                                        // 中核・日常利用
                                        cardStyle =
                                            "bg-emerald-500/10 dark:bg-emerald-500/[0.12] border-emerald-500/20 dark:border-emerald-500/30";
                                        nameColor =
                                            "text-emerald-950 dark:text-emerald-200 font-bold";
                                        descColor =
                                            "text-emerald-800/80 dark:text-emerald-300/80";
                                    } else if (skill.level === "project") {
                                        // 制作・プロジェクト実績
                                        cardStyle =
                                            "bg-sky-500/10 dark:bg-sky-500/[0.12] border-sky-500/20 dark:border-sky-500/30";
                                        nameColor =
                                            "text-sky-950 dark:text-sky-200 font-semibold";
                                        descColor =
                                            "text-sky-800/80 dark:text-sky-300/80";
                                    }

                                    return (
                                        <div
                                            key={skill.name}
                                            className={`p-2.5 rounded-xl border transition-all flex flex-col justify-between space-y-1 ${cardStyle}`}
                                        >
                                            <span
                                                className={`text-xs font-mono tracking-tight ${nameColor}`}
                                            >
                                                {skill.name}
                                            </span>
                                            <p
                                                className={`text-[11px] font-sans leading-relaxed ${descColor}`}
                                            >
                                                {skill.tooltip}
                                            </p>
                                        </div>
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
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={p.url}
                                                    alt={p.label}
                                                    fill
                                                    loading="lazy"
                                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                                                    className="object-cover group-hover:scale-105 transition duration-300"
                                                />
                                            </div>
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

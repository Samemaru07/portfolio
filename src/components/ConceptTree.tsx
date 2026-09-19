import React from "react";

export default function ConceptTree() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6">
            {/* Left: Concept Description */}
            <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#2C2927] dark:text-white">
                        Concept
                    </h2>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-[#544F4A] dark:text-neutral-300">
                    <p>
                        このサイトは、エンジニアを志す高専生「
                        <strong>さめまる</strong>」の
                        <br />
                        ホームページ兼ポートフォリオサイトです。
                    </p>
                    <p>
                        今まで作った制作物や、
                        <br />
                        身につけたスキルをまとめています。
                    </p>
                    <p className="font-medium text-[#2C2927] dark:text-neutral-100">
                        「好き」を詰め込んだこのサイト、
                        <br />
                        ぜひご堪能下さいませ。
                    </p>
                    <div className="p-4 rounded-xl bg-orange-50/80 dark:bg-neutral-800/60 border border-orange-200/60 dark:border-neutral-700/60 text-xs text-orange-900 dark:text-orange-200 space-y-1">
                        <p className="font-semibold flex items-center gap-1.5">
                            <span>💡</span> ナビゲーションのヒント
                        </p>
                        <p className="leading-normal">
                            右側の標準出力（ツリー階層）をクリックしていただくと、各セクションに直接ジャンプできます。ご活用下さい♪
                        </p>
                    </div>
                </div>
            </div>

            {/* Right: Terminal 2: Tree Navigation */}
            <div className="lg:col-span-7 transform hover:-translate-y-0.5 transition duration-300">
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
                                &gt;_ tree
                            </span>
                        </div>
                        <span className="text-[11px] font-mono text-white/60 drop-shadow-sm">
                            interactive sitemap
                        </span>
                    </div>

                    {/* Terminal Body: Tree Links */}
                    <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                        <div className="text-neutral-400 mb-2 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                            $ tree .
                        </div>
                        <div className="text-[#F5F2EB] space-y-1">
                            <div className="text-amber-300 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                https://samemaru.com/
                            </div>

                            {/* tree line: works */}
                            <div className="flex items-center">
                                <span className="text-neutral-400 select-none">
                                    ├──&nbsp;
                                </span>
                                <a
                                    href="#works"
                                    className="group flex items-center gap-1.5 text-sky-300 hover:text-sky-200 hover:underline px-1 py-0.5 rounded transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                                >
                                    <span>works/</span>
                                    <span className="text-[10px] opacity-0 group-hover:opacity-100 text-neutral-300 transition">
                                        → 制作物
                                    </span>
                                </a>
                            </div>

                            {/* tree line: profile */}
                            <div className="flex items-center">
                                <span className="text-neutral-400 select-none">
                                    ├──&nbsp;
                                </span>
                                <a
                                    href="#profile"
                                    className="group flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 hover:underline px-1 py-0.5 rounded transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                                >
                                    <span>profile/</span>
                                </a>
                            </div>

                            {/* profile child: me */}
                            <div className="flex items-center">
                                <span className="text-neutral-400 select-none">
                                    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;
                                </span>
                                <a
                                    href="#profile-me"
                                    className="group flex items-center gap-1.5 text-neutral-200 hover:text-white hover:underline px-1 py-0.5 rounded transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                                >
                                    <span>me/</span>
                                    <span className="text-[10px] opacity-0 group-hover:opacity-100 text-neutral-300 transition">
                                        → 自己紹介 &amp; 経歴
                                    </span>
                                </a>
                            </div>

                            {/* profile child: philosophy */}
                            <div className="flex items-center">
                                <span className="text-neutral-400 select-none">
                                    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;
                                </span>
                                <a
                                    href="#profile-philosophy"
                                    className="group flex items-center gap-1.5 text-neutral-200 hover:text-white hover:underline px-1 py-0.5 rounded transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                                >
                                    <span>philosophy/</span>
                                    <span className="text-[10px] opacity-0 group-hover:opacity-100 text-neutral-300 transition">
                                        → 開発の心得
                                    </span>
                                </a>
                            </div>

                            {/* profile child: skills */}
                            <div className="flex items-center">
                                <span className="text-neutral-400 select-none">
                                    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;
                                </span>
                                <a
                                    href="#skills"
                                    className="group flex items-center gap-1.5 text-neutral-200 hover:text-white hover:underline px-1 py-0.5 rounded transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                                >
                                    <span>skills/</span>
                                    <span className="text-[10px] opacity-0 group-hover:opacity-100 text-neutral-300 transition">
                                        → スキルスタック
                                    </span>
                                </a>
                            </div>

                            {/* profile child: hobbies */}
                            <div className="flex items-center">
                                <span className="text-neutral-400 select-none">
                                    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;
                                </span>
                                <a
                                    href="#hobbies"
                                    className="group flex items-center gap-1.5 text-neutral-200 hover:text-white hover:underline px-1 py-0.5 rounded transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                                >
                                    <span>hobbies/</span>
                                    <span className="text-[10px] opacity-0 group-hover:opacity-100 text-neutral-300 transition">
                                        → 趣味
                                    </span>
                                </a>
                            </div>

                            {/* tree line: environment */}
                            <div className="flex items-center">
                                <span className="text-neutral-400 select-none">
                                    ├──&nbsp;
                                </span>
                                <a
                                    href="#environment"
                                    className="group flex items-center gap-1.5 text-amber-300 hover:text-amber-200 hover:underline px-1 py-0.5 rounded transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                                >
                                    <span>environment/</span>
                                    <span className="text-[10px] opacity-0 group-hover:opacity-100 text-neutral-300 transition">
                                        → 開発環境
                                    </span>
                                </a>
                            </div>

                            {/* tree line: sns-github */}
                            <div className="flex items-center">
                                <span className="text-neutral-400 select-none">
                                    └──&nbsp;
                                </span>
                                <a
                                    href="#sns-github"
                                    className="group flex items-center gap-1.5 text-pink-300 hover:text-pink-200 hover:underline px-1 py-0.5 rounded transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                                >
                                    <span>sns-github/</span>
                                    <span className="text-[10px] opacity-0 group-hover:opacity-100 text-neutral-300 transition">
                                        → 外部リンク
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Terminal status line */}
                        <div className="mt-4 pt-3 border-t border-white/10 text-neutral-400 text-[11px] flex justify-between items-center">
                            <span>4 directories, 6 nodes</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

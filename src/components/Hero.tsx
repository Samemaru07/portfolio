import Image from "next/image";
import React from "react";

export default function Hero() {
    return (
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white via-warm-50 to-warm-100 dark:from-[#201F1D] dark:via-[#1A1918] dark:to-[#161514] p-6 sm:p-10 lg:p-12 border border-black/5 dark:border-white/5 shadow-sm transition-all">
            {/* Background: Technical Blueprint Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Background / Right-side Blended Model Kit Layer */}
            <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 pointer-events-none select-none overflow-hidden">
                <div className="relative w-full h-full">
                    {/* ローカル画像最適化サーバーの処理待機を排除し、静的アセットを直接配信するためunoptimizedを指定 */}
                    <Image
                        src="/images/hero-model.webp"
                        alt="My Favorite Plastic Model"
                        fill
                        priority
                        unoptimized
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center lg:object-right filter contrast-[1.05] saturate-[0.9] dark:saturate-[1.1] transform scale-100"
                    />
                    {/* 1枚目：横方向 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-warm-50 via-warm-50/80 to-warm-50/20 via-50% to-85% lg:from-warm-50 lg:via-warm-50/60 lg:to-transparent lg:via-40% lg:to-60% dark:from-[#1A1918] dark:via-[#1A1918]/80 dark:to-transparent dark:via-50% dark:to-85% dark:lg:from-[#1A1918] dark:lg:via-[#1A1918]/70 dark:lg:to-transparent dark:lg:via-40% dark:lg:to-70%" />

                    {/* 2枚目：縦方向 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-50/80 via-transparent to-transparent dark:from-[#1A1918]/70 dark:via-transparent dark:to-transparent" />
                </div>
            </div>

            {/* Foreground Content Layer */}
            <div className="relative z-10 max-w-2xl space-y-7 text-left">
                {/* Title & Subtitle */}
                <div className="space-y-3">
                    <h1 className="tracking-tight leading-tight">
                        <span className="font-script block text-5xl sm:text-6xl lg:text-7xl font-bold -mb-2 text-[#2C2927] dark:text-white drop-shadow-sm">
                            Welcome to
                        </span>
                        <span className="font-script block text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2C2927] via-[#524B45] to-[#8C7A6B] dark:from-white dark:via-neutral-200 dark:to-neutral-400 drop-shadow-sm">
                            Samemaru&apos;s Portfolio!
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base text-[#6B6560] dark:text-neutral-300 font-medium tracking-wide">
                        設計から運用までをデザインする。
                    </p>
                </div>

                {/* Hero Terminal: cowsay */}
                <div className="max-w-md">
                    <div className="rounded-2xl bg-[#1E1D1B]/80 dark:bg-[#121110]/85 text-white shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-1px_1px_rgba(0,0,0,0.2)] overflow-hidden border border-white/20 transform hover:-translate-y-0.5 transition duration-300">
                        {/* Terminal Header */}
                        <div className="px-4 py-2 bg-white/10 dark:bg-white/5 flex items-center justify-between border-b border-white/15">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-sm" />
                                <span className="text-xs font-mono text-white/80 ml-2 select-none font-medium drop-shadow-sm">
                                    &gt;_ cowsay.sh
                                </span>
                            </div>
                            <span className="text-[10px] font-mono text-white/60 drop-shadow-sm">
                                bash
                            </span>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-4 font-mono text-xs leading-tight overflow-x-auto select-all">
                            <div className="text-white/80 mb-1 font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                $ cowsay &quot;Look at the Nu GUNDAM.&quot;
                            </div>
                            <pre className="text-white font-bold whitespace-pre font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                                {` --------------------------
< Look at the Nu GUNDAM. >
 --------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

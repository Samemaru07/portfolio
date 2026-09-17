import React from "react";

export default function Hero() {
    return (
        <section className="relative rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-12 border border-black/5 dark:border-white/5 bg-gradient-to-br from-white/60 via-warm-50/40 to-warm-100/50 dark:from-[#201F1D]/80 dark:via-[#1A1918]/70 dark:to-[#161514]/90 shadow-sm transition-all">
            {/* Background: Technical Blueprint Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Background / Right-side Blended Model Kit Layer */}
            <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 pointer-events-none select-none overflow-hidden">
                <div className="relative w-full h-full">
                    <img
                        src="/images/hero-model.png"
                        alt="My Favorite Plastic Model"
                        className="w-full h-full object-cover object-center lg:object-right filter contrast-[1.05] saturate-[0.9] dark:saturate-[1.1] transform scale-100"
                    />
                    {/* 1枚目：横方向（60%〜70%地点で完全に透明化を終わらせる） */}
                    <div className="absolute inset-0 bg-gradient-to-r from-warm-50 via-warm-50/60 to-transparent via-40% to-60% dark:from-[#1A1918] dark:via-[#1A1918]/70 dark:to-transparent dark:via-40% dark:to-70%" />

                    {/* 2枚目：縦方向（上端のモヤを除去し、下端の切れ目だけを薄く馴染ませる） */}
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
                    <div className="rounded-2xl bg-term-bg/95 dark:bg-[#252422]/95 backdrop-blur-md text-[#F5F2EB] shadow-terminal dark:shadow-terminal-dark overflow-hidden border border-term-border/80 transform hover:-translate-y-0.5 transition duration-300">
                        {/* Terminal Header */}
                        <div className="px-4 py-2 bg-[#2E2C2A] dark:bg-[#1E1D1B] flex items-center justify-between border-b border-white/5">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                                <span className="text-xs font-mono text-neutral-400 ml-2 select-none">
                                    &gt;_ cowsay.sh
                                </span>
                            </div>
                            <span className="text-[10px] font-mono text-neutral-400">
                                bash
                            </span>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-4 font-mono text-xs leading-tight overflow-x-auto select-all">
                            <div className="text-[#A39E98] mb-1">
                                $ cowsay &quot;Forget the cow. Look right.&quot;
                            </div>
                            <pre className="text-[#F5F2EB] whitespace-pre font-mono">
                                {` --------------------------------
< Forget the cow. Look right. >
 --------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\`
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

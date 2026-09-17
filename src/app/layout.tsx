import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const zenKaku = Zen_Kaku_Gothic_New({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-zen-kaku",
    display: "swap",
});

const caveat = Caveat({
    weight: ["600", "700"],
    subsets: ["latin"],
    variable: "--font-caveat",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Samemaru's Portfolio",
    description:
        "設計から運用までをデザインする。高専4年生さめまるのポートフォリオサイト。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className="scroll-smooth">
            <body
                className={`${zenKaku.variable} ${caveat.variable} ${jetbrainsMono.variable} font-sans bg-warm-50 dark:bg-[#1A1918] text-[#2C2927] dark:text-[#EAE6E1] antialiased min-h-screen flex flex-col transition-colors duration-300 selection:bg-orange-200 dark:selection:bg-neutral-700`}
            >
                <Header />
                <main className="flex-grow max-w-[1280px] mx-auto px-6 py-12 md:py-16 space-y-24 w-full">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

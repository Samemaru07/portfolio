"use client";

import { useEffect, useState } from "react";

const TARGET_IMAGES = [
    "/images/hero-model.webp",
    "/images/backgrounds/aobuta.webp",
    "/images/backgrounds/banpaku.webp",
    "/images/backgrounds/precure.webp",
    "/images/backgrounds/strikefreedom.webp",
    "/images/backgrounds/unicorn.webp",
    "/images/environment/arch-desktop.webp",
    "/images/environment/custom-pc.webp",
    "/images/environment/split-keyboard.webp",
    "/images/hobbies/event-trip.webp",
    "/images/hobbies/gunpla-comp.webp",
    "/images/hobbies/gunpla-kit.webp",
    "/images/hobbies/pilgrimage-scenery.webp",
    "/images/projects/hyper-preview.webp",
    "/images/projects/hyper-preview_thumbnail.webp",
    "/images/projects/iac-preview-thumbnail.webp",
];

export const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        let loadedCount = 0;
        const total = TARGET_IMAGES.length;

        const updateProgress = () => {
            loadedCount += 1;
            const currentPercent = Math.round((loadedCount / total) * 100);
            setProgress(currentPercent);

            if (loadedCount >= total) {
                setTimeout(() => {
                    setIsFinished(true);
                }, 300);
            }
        };

        TARGET_IMAGES.forEach((src) => {
            const img = new Image();
            img.src = src;
            if (img.complete) {
                updateProgress();
            } else {
                img.onload = updateProgress;
                img.onerror = updateProgress;
            }
        });
    }, []);

    useEffect(() => {
        if (!isFinished) {
            return;
        }

        const timer = setTimeout(() => {
            setShouldRender(false);
        }, 400);

        return () => clearTimeout(timer);
    }, [isFinished]);

    if (!shouldRender) {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-neutral-950 transition-opacity duration-300 ease-out ${
                isFinished ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
        >
            <div className="w-64 sm:w-72">
                <div className="mb-2 flex items-center justify-between text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    <span>Loading...</span>
                    <span>{progress}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                    <div
                        className="h-full bg-neutral-900 dark:bg-neutral-100 transition-all duration-200 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

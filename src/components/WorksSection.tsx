"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Project } from "@/types";

interface ModalProps {
    project: Project;
    onClose: () => void;
}

function ProjectModal({ project, onClose }: ModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 transition-opacity duration-200">
            <div className="absolute inset-0" onClick={onClose} />

            <div className="relative w-full max-w-5xl bg-white dark:bg-[#1E1D1B] rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden flex flex-col max-h-[90vh] z-10 animate-in fade-in zoom-in-95 duration-200">
                <div className="px-6 sm:px-8 py-3.5 bg-neutral-100/80 dark:bg-[#161514] border-b border-black/5 dark:border-white/5 flex items-center justify-between select-none">
                    <span className="text-xs sm:text-sm font-sans font-medium text-neutral-500 dark:text-neutral-400">
                        {project.topTitle}
                    </span>
                    <button
                        onClick={onClose}
                        type="button"
                        aria-label="閉じる"
                        className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div className="p-6 sm:p-8 md:p-10 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-8 text-[#2C2927] dark:text-[#EAE6E1]">
                    <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between flex-wrap gap-3">
                                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#2C2927] dark:text-white">
                                    概要
                                </h3>
                                {project.repoUrl && (
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-mono font-medium hover:opacity-90 transition shadow-sm"
                                    >
                                        <span>GitHub Repository</span>
                                        <span className="text-[11px]">↗</span>
                                    </a>
                                )}
                            </div>

                            <div className="space-y-3 text-xs sm:text-sm text-[#4D4945] dark:text-neutral-300 leading-relaxed font-sans">
                                {project.description.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2 pt-4 border-t border-black/5 dark:border-white/5">
                            <h4 className="text-sm font-bold tracking-tight text-[#2C2927] dark:text-white">
                                使用言語・技術など
                            </h4>
                            <p className="text-xs sm:text-sm text-[#4D4945] dark:text-neutral-300 font-sans">
                                {project.techStack}
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-start">
                        <div className="rounded-2xl overflow-hidden bg-warm-100/70 dark:bg-[#161514] border border-black/5 dark:border-white/5 p-3 flex flex-col gap-2">
                            <div className="w-full rounded-xl overflow-hidden bg-white dark:bg-neutral-800 border border-black/5 dark:border-white/5 relative flex items-center justify-center shadow-sm">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.topTitle}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto block object-contain"
                                    sizes="(max-width: 1024px) 100vw, 400px"
                                />
                            </div>
                            {project.imageCaption && (
                                <p className="text-[11px] font-mono text-center text-neutral-400 truncate px-1">
                                    {project.imageCaption}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function WorksSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );

    return (
        <section
            id="works"
            className="pt-12 border-t border-black/5 dark:border-white/5 space-y-6 scroll-mt-20"
        >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-[#2C2927] dark:text-white">
                        制作物
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B6560] dark:text-neutral-400 leading-relaxed pt-0.5">
                        個人開発や学内で制作・改善してきたシステムや成果物です。
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => {
                    const displayThumbnail =
                        project.thumbnailUrl || project.imageUrl;

                    return (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer p-6 rounded-2xl border transition flex flex-col justify-between group bg-white/70 dark:bg-[#252422] border-black/5 dark:border-white/5 shadow-sm hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="space-y-3">
                                <div className="relative h-36 rounded-xl overflow-hidden bg-warm-100 dark:bg-[#1E1D1B] border border-black/5 dark:border-white/5">
                                    <Image
                                        src={displayThumbnail}
                                        alt={project.cardTitle}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-mono font-medium shadow-sm">
                                        {project.categoryBadge}
                                    </div>
                                </div>

                                <h4 className="font-bold text-base flex items-center gap-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition text-[#2C2927] dark:text-white">
                                    <span>{project.cardTitle}</span>
                                </h4>

                                <p className="text-xs text-[#6B6560] dark:text-neutral-400 leading-relaxed">
                                    {project.summary}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-3 mt-4 border-t border-black/5 dark:border-white/5">
                                <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-neutral-500">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 rounded bg-warm-100 dark:bg-neutral-800"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 flex items-center gap-1 group-hover:underline">
                                    詳細 ›
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}

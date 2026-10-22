"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { projects } from "./data";

const cardClass =
    "rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#191827] to-[#11111B] shadow-2xl shadow-black/30";

function ProjectCard({ p }) {
    return (
        <div
            className={`group relative flex flex-col rounded-xl border border-white/[0.08] bg-white/[0.025] transition-all duration-200 hover:border-violet-400/40 hover:bg-violet-400/[0.06] ${
                p.featured ? "p-6 sm:p-8" : "p-5"
            }`}
        >
            {p.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={p.image}
                    alt={`Screenshot of ${p.title}`}
                    className="mb-5 aspect-video w-full rounded-lg border border-white/10 object-cover"
                />
            )}
            <span className="text-xs text-violet-300">{p.tag}</span>
            <h3 className={`mt-1 font-semibold text-white ${p.featured ? "text-2xl" : "text-lg"}`}>
                <Link
                    href={`/projects/${p.slug}`}
                    className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-violet-300"
                >
                    {p.title}
                </Link>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-sm">
                <span className="inline-flex items-center gap-1.5 text-white/50 transition-colors group-hover:text-violet-200">
                    Read the story
                    <Icon icon="lucide:arrow-right" width={14} height={14} />
                </span>
                {p.links?.length > 0 && (
                    <div className="relative z-10 flex flex-wrap gap-4">
                        {p.links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 font-semibold text-violet-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
                            >
                                {l.label}
                                <Icon icon="lucide:arrow-up-right" width={14} height={14} />
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Projects() {
    const featured = projects.filter((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);

    return (
        <main className="min-h-screen bg-[#0B0B12] bg-[linear-gradient(rgba(11,11,18,0.85),rgba(11,11,18,0.85)),url('/projects/border-of-life2.png')] bg-cover bg-center lg:bg-fixed p-4 sm:p-8 lg:p-12">
            <div className="mx-auto flex max-w-6xl flex-col gap-6">
                <section className={`${cardClass} p-6 sm:p-10`}>
                    <Link
                        href="/"
                        className="mb-6 inline-flex items-center gap-2 text-sm text-violet-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
                    >
                        <Icon icon="lucide:arrow-left" width={16} height={16} />
                        Back home
                    </Link>
                    <h1 className="text-3xl font-semibold text-white sm:text-4xl">Projects</h1>
                    <p className="mt-3 max-w-xl leading-relaxed text-white/70">
                        Games, web apps and tools I have built, from full products to
                        shaders and mods.
                    </p>
                </section>

                <section className={`${cardClass} p-6 sm:p-8`}>
                    <h2 className="mb-6 text-xl font-semibold text-white">Featured</h2>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        {featured.map((p) => (
                            <ProjectCard key={p.title} p={p} />
                        ))}
                    </div>
                </section>

                <section className={`${cardClass} p-6 sm:p-8`}>
                    <h2 className="mb-6 text-xl font-semibold text-white">More work</h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {rest.map((p) => (
                            <ProjectCard key={p.title} p={p} />
                        ))}
                    </div>
                </section>

                <Link
                    href="/about"
                    className="flex w-full items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 p-4 font-semibold text-violet-200 transition-all duration-200 hover:border-violet-300/60 hover:bg-violet-500/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
                >
                    See the skills behind them
                </Link>
            </div>
        </main>
    );
}
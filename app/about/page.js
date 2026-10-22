import { Icon } from "@iconify/react";
import Link from "next/link";

const groups = [
    {
        title: "Game development",
        blurb: "My main focus. I build complete games, from systems to polish.",
        skills: [
            { title: "Unity", years: "7 years", used: "Games, tools and prototypes", icon: "simple-icons:unity" },
            { title: "C#", years: "7 years", used: "Unity gameplay, tools and Beat Saber mods", icon: "simple-icons:csharp" },
            { title: "Unreal Engine", years: "2 years", used: "Border Of Life, Festival Manager", icon: "simple-icons:unrealengine" },
            { title: "Blueprints",  years: "2 year", used: "Combat, cutscenes and building systems", icon: "lucide:workflow" },
            { title: "C++", years: "1 year", used: "Border Of Life", icon: "simple-icons:cplusplus" },
        ],
    },
    {
        title: "Web development",
        blurb: "Full-stack apps with a modern React stack.",
        skills: [
            { title: "Next.js", years: "1 year", used: "Finite, this portfolio", icon: "simple-icons:nextdotjs" },
            { title: "TypeScript", years: "2 years", used: "Finite, Beat Saber modcharts", icon: "simple-icons:typescript" },
            { title: "Supabase", years: "1 year", used: "Finite (auth and database)", icon: "simple-icons:supabase" },
        ],
    },
    {
        title: "Graphics & tooling",
        blurb: "Shaders, visual effects and scripting tools for the Beat Saber community.",
        skills: [
            { title: "HLSL", years: "1 year", used: "Unity shaders for Vivify: fog, crystal", icon: "lucide:sparkles" },
            { title: "Lua", years: "3 year", used: "Roblox, BeatForge modcharting library", icon: "simple-icons:lua" },
        ],
    },
];

const cardClass =
    "rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#191827] to-[#11111B] shadow-2xl shadow-black/30";

export default function Skills() {
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
                    <h1 className="text-3xl font-semibold text-white sm:text-4xl">Skills</h1>
                    <p className="mt-3 max-w-xl leading-relaxed text-white/70">
                        The tools I use most, and what I have built with them.
                    </p>
                </section>

                {groups.map((g) => (
                    <section key={g.title} className={`${cardClass} p-6 sm:p-8`}>
                        <h2 className="text-xl font-semibold text-white">{g.title}</h2>
                        <p className="mt-1 mb-6 text-sm text-white/60">{g.blurb}</p>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {g.skills.map((s) => (
                                <div
                                    key={s.title}
                                    className="flex items-start gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-200 hover:border-violet-400/40 hover:bg-violet-400/[0.06]"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white">
                                        <Icon icon={s.icon} width={26} height={26} />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-baseline justify-between gap-3">
                                            <h3 className="font-semibold text-white">{s.title}</h3>
                                            {s.years && (
                                                <span className="shrink-0 text-xs text-violet-300">{s.years}</span>
                                            )}
                                        </div>
                                        <p className="mt-1 text-sm leading-relaxed text-white/70">{s.used}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                <Link
                    href="/projects"
                    className="flex w-full items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 p-4 font-semibold text-violet-200 transition-all duration-200 hover:border-violet-300/60 hover:bg-violet-500/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
                >
                    See them in action: All Projects
                </Link>
            </div>
        </main>
    );
}
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

// TODO: fill these in
const EMAIL = "thijsvz.helmond@gmail.com";
const GITHUB = "https://github.com/ThijsvZwam";
const STATUS = "Open to internships & junior roles"; // change or set to "" to hide

const skills = [
  { title: "Unity", desc: "7 years", icon: "simple-icons:unity" },
  { title: "C#", desc: "7 years", icon: "simple-icons:csharp" },
  { title: "Unreal Engine", desc: "2 years", icon: "simple-icons:unrealengine" },
];

const projects = [
  {
    slug: "finite",
    title: "Finite",
    desc: "A social media app built around intentional use, with a daily time-limiting feature. Co-developed full-stack.",
    tag: "Next.js, Supabase",
  },
  {
    slug: "border-of-life",
    title: "Border Of Life",
    desc: "A Persona 5-styled action JRPG with full combat and cutscenes.",
    tag: "Unreal Engine 5, Blueprints, C++",
  },
  {
    slug: "beat-saber-modcharts",
    title: "Beat Saber Modcharts",
    desc: "Custom environments, shaders and visual effects for Beat Saber maps, using the Heck suite of mods.",
    tag: "HLSL, TypeScript",
  },
  {
    slug: "festival-manager",
    title: "Festival Manager",
    desc: "A building and placement game where you design and run your own festival.",
    tag: "Unreal Engine 5, Blueprints",
  },
  {
    slug: "beattimer",
    title: "BeatTimer",
    desc: "A mobile WebApp where you guess the time between audio beeps.",
    tag: "Mobile WebApp",
  },
];

const cardClass =
    "rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#191827] to-[#11111B] shadow-2xl shadow-black/30";

export default function Home() {
  return (
      <main className="min-h-screen bg-[#0B0B12] bg-[linear-gradient(rgba(11,11,18,0.85),rgba(11,11,18,0.85)),url('/projects/border-of-life2.png')] bg-cover bg-center lg:bg-fixed p-4 sm:p-8 lg:p-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-start">
          {/* Sidebar */}
          <aside
              className={`${cardClass} flex w-full flex-col gap-5 p-6 sm:p-8 lg:sticky lg:top-12 lg:w-[26rem] lg:shrink-0`}
          >
            <div className="flex items-center gap-4">
              <Image
                  src="/profilepic.jpg"
                  alt="Portrait of Thijs van Zwam"
                  width={120}
                  height={160}
                  priority
                  className="h-32 w-24 rounded-3xl border border-white/10 object-cover"
              />
              <div>
                <h1 className="text-2xl font-semibold text-white">Thijs van Zwam</h1>
                <p className="text-sm text-violet-300">Developer & Creative technologist</p>
                {STATUS && (
                    <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {STATUS}
                    </p>
                )}
              </div>
            </div>

            <div className="h-px bg-white/10" />

            <p className="text-sm leading-relaxed text-white/70">
              I build games, tools and web apps, from shaders and modding tools to
              full-stack products. I combine a designer's eye with development
              experience to make products that look good and are easy to use.
            </p>

            <div className="flex flex-col gap-3">
              {skills.map((p) => (
                  <div
                      key={p.title}
                      className="grid grid-cols-[3rem_1fr_auto] items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-200 hover:border-violet-400/40 hover:bg-violet-400/[0.06]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-white">
                      <Icon icon={p.icon} width={26} height={26} />
                    </div>
                    <h3 className="font-semibold text-white">{p.title}</h3>
                    <span className="text-sm text-white/60">{p.desc}</span>
                  </div>
              ))}
            </div>

            <Link
                href="/about"
                className="flex w-full items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 p-4 font-semibold text-violet-200 transition-all duration-200 hover:border-violet-300/60 hover:bg-violet-500/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
            >
              All Skills
            </Link>
          </aside>

          {/* Main column */}
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            {/* Hero */}
            <section className={`${cardClass} p-6 sm:p-10`}>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                I build games, tools and web apps that people enjoy using.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-white/70">
                Seven years of Unity and C#, two years of Unreal Engine, plus
                full-stack web work with Next.js. I ship complete projects, from
                the first prototype to the polish.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                >
                  <Icon icon="lucide:mail" width={18} height={18} />
                  Get in touch
                </a>
                <Link
                    href="/projects"
                    className="inline-flex items-center rounded-xl border border-violet-400/30 bg-violet-500/10 px-6 py-3 font-semibold text-violet-200 transition-all duration-200 hover:border-violet-300/60 hover:bg-violet-500/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                >
                  View projects
                </Link>
                <Link
                    href="/contact"
                    className="inline-flex items-center rounded-xl border border-violet-400/30 bg-violet-500/10 px-6 py-3 font-semibold text-violet-200 transition-all duration-200 hover:border-violet-300/60 hover:bg-violet-500/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                >
                  Contact
                </Link>
                <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-white/80 transition-all duration-200 hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                >
                  <Icon icon="simple-icons:github" width={18} height={18} />
                  GitHub
                </a>
              </div>
            </section>

            {/* Projects */}
            <section className={`${cardClass} flex flex-col p-6 sm:p-8`}>
              <h2 className="mb-6 text-2xl font-semibold text-white">Selected projects</h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((p) => (
                    <div
                        key={p.slug}
                        className="group relative rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-200 hover:border-violet-400/40 hover:bg-violet-400/[0.06]"
                    >
                      <span className="text-xs text-violet-300">{p.tag}</span>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        <Link
                            href={`/projects/${p.slug}`}
                            className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-violet-300"
                        >
                          {p.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
                    </div>
                ))}
              </div>

              <Link
                  href="/projects"
                  className="mt-6 flex w-full items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 p-4 font-semibold text-violet-200 transition-all duration-200 hover:border-violet-300/60 hover:bg-violet-500/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
              >
                All Projects
              </Link>
            </section>

            {/* Contact */}
            <section
                className={`${cardClass} flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8`}
            >
              <div>
                <h2 className="text-xl font-semibold text-white">Want to work together?</h2>
                <p className="mt-1 text-sm text-white/70">
                  Send me a message and I'll reply within a few days.
                </p>
              </div>
              <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              >
                <Icon icon="lucide:mail" width={18} height={18} />
                {EMAIL}
              </a>
            </section>
          </div>
        </div>
      </main>
  );
}
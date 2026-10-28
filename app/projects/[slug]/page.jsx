import { Icon } from "@iconify/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";

const cardClass =
    "rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#191827] to-[#11111B] shadow-2xl shadow-black/30";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const p = projects.find((x) => x.slug === slug);
    return p ? { title: `${p.title} | Projects`, description: p.desc } : {};
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const p = projects.find((x) => x.slug === slug);
    if (!p) notFound();

    const isVideoFile = p.video && /\.(mp4|webm)$/i.test(p.video);

    return (
        <main className="min-h-screen bg-[#0B0B12] bg-[linear-gradient(rgba(11,11,18,0.85),rgba(11,11,18,0.85)),url('/projects/border-of-life2.png')] bg-cover bg-center lg:bg-fixed p-4 sm:p-8 lg:p-12">
            <div className="mx-auto flex max-w-6xl flex-col gap-6">
                {/* Header */}
                <section className={`${cardClass} p-6 sm:p-10`}>
                    <Link
                        href="/projects"
                        className="mb-6 inline-flex items-center gap-2 text-sm text-violet-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
                    >
                        <Icon icon="lucide:arrow-left" width={16} height={16} />
                        All projects
                    </Link>
                    <span className="block text-xs text-violet-300">{p.tag}</span>
                    <h1 className="mt-1 text-3xl font-semibold text-white sm:text-5xl">{p.title}</h1>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">{p.desc}</p>
                    {p.links?.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-4 text-sm">
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
                </section>

                {/* Story sections: image alternates left/right */}
                {p.sections?.map((s, i) => (
                    <section key={s.heading} className={`${cardClass} p-6 sm:p-10`}>
                        <div
                            className={`grid items-center gap-8 ${
                                s.image ? "md:grid-cols-2" : ""
                            }`}
                        >
                            <div className={i % 2 === 1 ? "md:order-last" : ""}>
                                {s.image && (
                                    <img
                                        src={s.image}
                                        alt={s.imageAlt ?? s.heading}
                                        className="w-full rounded-xl border border-white/10 object-cover"
                                    />
                                )}
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-white">{s.heading}</h2>
                                <div className="mt-4 space-y-4 leading-relaxed text-white/70">
                                    {s.text.map((para, j) => (
                                        <p key={j}>{para}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                {/* Placeholder for projects you haven't written up yet */}
                {!p.sections && (
                    <section className={`${cardClass} p-6 sm:p-10`}>
                        {p.image && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={p.image}
                                alt={`Screenshot of ${p.title}`}
                                className="mb-6 w-full rounded-xl border border-white/10 object-cover"
                            />
                        )}
                        <p className="text-white/50">The full write-up for this project is coming soon.</p>
                    </section>
                )}

                {/* Optional video */}
                {p.video && (
                    <section className={`${cardClass} p-6 sm:p-10`}>
                        <h2 className="mb-5 text-2xl font-semibold text-white">Video</h2>
                        {isVideoFile ? (
                            <video
                                src={p.video}
                                controls
                                className="aspect-video w-full rounded-xl border border-white/10 bg-black"
                            />
                        ) : (
                            <iframe
                                src={p.video}
                                title={`${p.title} video`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                allowFullScreen
                                className="aspect-video w-full rounded-xl border border-white/10"
                            />
                        )}
                    </section>
                )}
            </div>
        </main>
    );
}
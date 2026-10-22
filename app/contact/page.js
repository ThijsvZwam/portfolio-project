import { Icon } from "@iconify/react";
import Link from "next/link";

const cardClass =
    "rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#191827] to-[#11111B] shadow-2xl shadow-black/30";

const contacts = [
    { label: "Email", value: "thijsvz.helmond@gmail.com", href: "mailto:thijsvz.helmond@gmail.com", icon: "lucide:mail", external: false },
    { label: "Twitter / X", value: "@ThijsvZwam", href: "https://twitter.com/thijsvzwam", icon: "simple-icons:x" },
    { label: "GitHub", value: "ThijsvZwam", href: "https://github.com/thijsvzwam", icon: "simple-icons:github" },
    { label: "YouTube", value: "@ThijsGamingYT", href: "https://youtube.com/@thijsgamingyt", icon: "simple-icons:youtube" },
    { label: "Discord", value: "TVMG server", href: "https://discord.com/invite/xZmSt8SG47", icon: "simple-icons:discord" },
];

export const metadata = { title: "Contact" };

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#0B0B12] bg-[linear-gradient(rgba(11,11,18,0.85),rgba(11,11,18,0.85)),url('/projects/border-of-life2.png')] bg-cover bg-center lg:bg-fixed p-4 sm:p-8 lg:p-12">
            <div className="mx-auto flex max-w-3xl flex-col gap-6">
                <section className={`${cardClass} p-6 sm:p-10`}>
                    <Link
                        href="/"
                        className="mb-6 inline-flex items-center gap-2 text-sm text-violet-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
                    >
                        <Icon icon="lucide:arrow-left" width={16} height={16} />
                        Back home
                    </Link>
                    <h1 className="text-3xl font-semibold text-white sm:text-4xl">Let&apos;s talk</h1>
                    <p className="mt-3 max-w-xl leading-relaxed text-white/70">
                        The fastest way to reach me is below. Happy to talk projects, collabs, or just
                        Beat Saber modding.
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {contacts.map((c) => (
                            <a
                                key={c.label}
                                href={c.href}
                                {...(c.external === false
                                    ? {}
                                    : { target: "_blank", rel: "noopener noreferrer" })}
                                className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-200 hover:border-violet-400/40 hover:bg-violet-400/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
                            >
                                <Icon icon={c.icon} width={24} height={24} className="shrink-0 text-violet-300" />
                                <div className="min-w-0 flex-1">
                                    <span className="block text-xs text-white/50">{c.label}</span>
                                    <span className="block truncate font-semibold text-white">{c.value}</span>
                                </div>
                                <Icon
                                    icon="lucide:arrow-up-right"
                                    width={16}
                                    height={16}
                                    className="shrink-0 text-white/40 transition-colors group-hover:text-violet-200"
                                />
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
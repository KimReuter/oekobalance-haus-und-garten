// src/app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";

export const metadata = {
    title: "Blog – Ökobalance Haus & Garten",
    description:
        "Einblicke in Projekte, Tipps zu nachhaltigem Bauen und Pflegehinweise rund um Haus & Garten.",
};

const posts = [
    {
        slug: "holz-terrasse-richtig-planen",
        title: "Holzterrasse nachhaltig planen",
        teaser:
            "Welche Hölzer eignen sich, worauf du beim Unterbau achten solltest und wie deine Terrasse lange schön bleibt.",
        tag: "Holz & Terrassen",
        img: "/blog-holzterrasse.jpg",
        readTime: "5 Min.",
    },
    {
        slug: "pflege-von-natursteinflaechen",
        title: "Pflege von Natursteinflächen",
        teaser:
            "Wie du Natursteinwege, Einfahrten und Mauern schonend reinigst und vor Moos & Algen schützt.",
        tag: "Naturstein",
        img: "/blog-naturstein.jpg",
        readTime: "4 Min.",
    },
    {
        slug: "regenwasser-nutzen",
        title: "Regenwasser clever nutzen",
        teaser:
            "Ideen für Regentonnen, Versickerung und Bewässerung – damit dein Garten vom Regen profitiert.",
        tag: "Nachhaltigkeit",
        img: "/blog-regenwasser.jpg",
        readTime: "6 Min.",
    },
];

export default function BlogPage() {
    return (
        <main className="text-slate-800">
            {/* HERO */}
            <PageHero
                imageSrc="/blog-hero.jpg" // Bild unter /public ablegen
                title="Blog & Einblicke"
                subtitle="Praxiswissen, Inspiration und Tipps rund um Haus, Garten und nachhaltiges Bauen."
                navTrigger="start"
            />

            {/* Intro */}
            <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-slate-700">
                        Hier teilen wir Erfahrungen aus Projekten, beantworten typische
                        Fragen unserer Kundinnen und Kunden und geben Anregungen, wie du
                        dein Zuhause nachhaltig weiterentwickeln kannst.
                    </p>
                </div>
            </section>

            {/* Posts-Grid */}
            <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
                <h2 className="text-2xl md:text-3xl font-extrabold text-center">
                    Aktuelle Beiträge
                </h2>

                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.slug}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
                        >
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={post.img}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                            </div>

                            <div className="flex flex-1 flex-col p-5">
                                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                                    {post.tag}
                                </p>
                                <h3 className="mt-2 text-base font-semibold text-slate-900">
                                    {post.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-600 flex-1">
                                    {post.teaser}
                                </p>

                                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                                    <span>{post.readTime} Lesezeit</span>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-brand-primary font-medium hover:underline underline-offset-4"
                                    >
                                        Mehr lesen
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white">
                <div className="mx-auto max-w-6xl px-6 py-14 text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold">
                        Hast du ein Thema im Kopf?
                    </h2>
                    <p className="mt-3 text-slate-700">
                        Schreib uns, wenn du eine Frage zu Materialien, Planung oder
                        Ausführung hast – viele Blogartikel entstehen genau aus solchen
                        Gesprächen.
                    </p>
                    <div className="mt-8 mb-4 flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-xl px-6 py-3
    bg-brand-primary text-white font-semibold tracking-tight
    transform-gpu transition-transform duration-150
    hover:scale-[1.03]
    no-underline hover:no-underline"
                        >
                            Frage stellen 💬
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
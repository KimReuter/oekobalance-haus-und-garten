import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";

export const metadata = {
  title: "Portfolio – Ökobalance Haus & Garten",
  description:
    "Ausgewählte Projekte aus Gartenbau, Holz- und Steinbau, Terrassen, Pflasterarbeiten und nachhaltiger Gestaltung.",
};

const projects = [
  {
    slug: "gartengestaltung-naturstein",
    title: "Moderne Gartengestaltung mit Naturstein",
    teaser:
      "Harmonische Kombination aus Naturstein, Holz und Stauden – pflegeleicht und langlebig.",
    img: "/portfolio-garten-naturstein.jpg",
    tag: "Gartengestaltung",
  },
  {
    slug: "holzterrasse-douglasie",
    title: "Terrasse aus Douglasie – warm & natürlich",
    teaser:
      "Massive Unterkonstruktion, saubere Linienführung und regionale Materialien.",
    img: "/portfolio-holzterrasse.jpg",
    tag: "Holzbau",
  },
  {
    slug: "pflaster-einfahrt-anthrazit",
    title: "Einfahrt in Anthrazit – klar & funktional",
    teaser:
      "Robuste Steinwahl, präziser Schnitt und optimierte Entwässerung.",
    img: "/portfolio-pflaster.jpg",
    tag: "Pflasterarbeiten",
  },
  {
    slug: "mauerwerken-gabionen",
    title: "Gabionen & Trockenmauern",
    teaser:
      "Moderne Sichtschutzlösung mit regionalem Füllmaterial.",
    img: "/portfolio-gabionen.jpg",
    tag: "Steinbau",
  },
  {
    slug: "gartenhaus-fundament",
    title: "Fundament & Vorbereitung fürs Gartenhaus",
    teaser:
      "Stabile Gründung, Frostschutz und Präzisionsnivellierung.",
    img: "/portfolio-gartenhaus.jpg",
    tag: "Fundament & Vorbereitung",
  },
  {
    slug: "trockenbau-innen",
    title: "Innenausbau & Trockenbau",
    teaser:
      "Saubere Kanten, schnelle Umsetzung und reduzierte Optik.",
    img: "/portfolio-innenausbau.jpg",
    tag: "Innenausbau",
  },
];

export default function PortfolioPage() {
  return (
    <main className="text-slate-800">

      {/* HERO */}
      <PageHero
        imageSrc="/portfolio-hero.jpg"
        title="Unsere Projekte"
        subtitle="Ausgewählte Arbeiten, die zeigen, wie wir denken und bauen."
        navTrigger="start"
      />

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-slate-700">
            Jede Baustelle ist anders – aber die Haltung bleibt gleich:
            nachhaltige Materialien, präzise Umsetzung und verlässliche Abläufe.
            Hier findest du eine Auswahl realisierter Projekte aus Holz, Stein,
            Gartenbau und Innenausbau.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">
          Unsere Arbeiten im Überblick
        </h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  {p.tag}
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 flex-1">
                  {p.teaser}
                </p>

                <div className="mt-4 flex justify-end">
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="text-brand-primary font-medium text-sm hover:underline underline-offset-4"
                  >
                    Details ansehen →
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
            Dein Projekt soll hier als Nächstes stehen?
          </h2>
          <p className="mt-3 text-slate-700">
            Ob Terrasse, Mauerwerk, Pflaster oder komplette Gartengestaltung:
            wir beraten transparent, planen pragmatisch und bauen sauber.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3
              bg-brand-primary text-white font-semibold tracking-tight
              transform-gpu transition-transform duration-150
              hover:scale-[1.03] no-underline hover:no-underline"
            >
              Projekt anfragen 🚀
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
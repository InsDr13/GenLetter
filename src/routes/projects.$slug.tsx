import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "./about";
import { PROJECTS } from "@/lib/data";
import { useProjects, useCat } from "@/lib/use-content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = PROJECTS.find((x) => x.slug === params.slug);
    const title = `${p?.title ?? "Projet"} — BETAREX | Architecture & design RDC`;
    const description = p?.summary ?? "Projet BETAREX";
    const url = `/projects/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        ...(p ? [{ property: "og:image" as const, content: p.cover }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: p
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: p.title,
                description: p.summary,
                image: p.cover,
                dateCreated: p.year,
                locationCreated: { "@type": "Place", name: p.location },
                creator: { "@type": "Organization", name: "BETAREX" },
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "/" },
                  { "@type": "ListItem", position: 2, name: "Projets", item: "/projects" },
                  { "@type": "ListItem", position: 3, name: p.title, item: url },
                ],
              }),
            },
          ]
        : [],
    };
  },
  loader: ({ params }): { slug: string } => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  component: ProjectDetail,
  notFoundComponent: () => <NotFoundView />,
});

function NotFoundView() {
  const { t } = useI18n();
  return (
    <div className="container-x py-40 text-center">
      <div className="eyebrow">404</div>
      <h1 className="mt-4 font-display text-5xl text-ink">{t("proj.notFound")}</h1>
      <Link to="/projects" className="mt-8 inline-block border-b border-ink pb-1 text-sm uppercase tracking-widest text-ink hover:text-clay">{t("proj.all")}</Link>
    </div>
  );
}

function ProjectDetail() {
  const { slug } = Route.useLoaderData() as { slug: string };
  const { t } = useI18n();
  const localized = useProjects();
  const cat$ = useCat();
  const project = localized.find((p) => p.slug === slug)!;
  const idx = localized.findIndex((p) => p.slug === project.slug);
  const next = localized[(idx + 1) % localized.length];

  return (
    <>
      <PageHero eyebrow={`${cat$(project.cat)} · ${project.year}`} title={project.title} image={project.cover} />

      <section className="container-x pt-10">
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-clay transition-colors">
          <ArrowLeft className="h-4 w-4" aria-hidden /> {t("proj.back")}
        </Link>
      </section>

      <section className="container-x py-12">
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 border-y border-line py-10">
          {[
            [t("proj.category"), cat$(project.cat)],
            [t("proj.year"), project.year],
            [t("proj.location"), project.location],
            [t("proj.surface"), project.surface],
            [t("proj.client"), project.client],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-xs uppercase tracking-widest text-ink-soft">{k}</dt>
              <dd className="mt-2 font-display text-xl text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-x pb-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <div>
            <div className="eyebrow">{t("proj.synopsis")}</div>
            <p className="mt-4 font-mono text-sm text-ink-soft leading-relaxed">{project.summary}</p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-clay/15 px-4 py-2 text-xs uppercase tracking-widest text-clay">
              {t("proj.statusLbl")} : {project.status}
            </div>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="font-display text-2xl md:text-4xl leading-[1.15] tracking-tight text-ink">
            {project.description}
          </motion.p>
        </div>
      </section>

      <section className="bg-muted/40 border-t border-line py-24">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="eyebrow">{t("proj.context")}</div>
            <p className="mt-6 text-lg leading-relaxed text-ink">{project.context}</p>
          </div>
          <div>
            <div className="eyebrow">{t("proj.objectives")}</div>
            <ul className="mt-6 space-y-4">
              {project.objectives.map((o, i) => (
                <motion.li key={o} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="flex items-start gap-4 border-b border-line pb-4">
                  <span className="font-mono text-xs text-clay shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-ink leading-relaxed">{o}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="eyebrow">{t("proj.prestations")}</div>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {project.prestations.map((p, i) => (
                <li key={p} className="flex items-baseline gap-6 py-5">
                  <span className="font-mono text-xs text-clay shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl text-ink">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow">{t("proj.results")}</div>
            <ul className="mt-8 space-y-6">
              {project.results.map((r, i) => (
                <motion.li key={r} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }} className="border-l-2 border-clay pl-6">
                  <p className="text-ink leading-relaxed">{r}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x pb-32 space-y-6">
        {project.gallery.map((src, i) => (
          <motion.figure key={src + i} initial={{ opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} className={`overflow-hidden bg-stone ${i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
            <img src={src} alt={`${project.title} — vue ${i + 1}`} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1.6s]" />
          </motion.figure>
        ))}
      </section>

      <section className="container-x pb-24">
        <div className="flex flex-wrap items-center justify-between gap-8 border-t border-line pt-10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-clay">
            <ArrowLeft className="h-4 w-4" aria-hidden /> {t("proj.all")}
          </Link>
          <Link to="/projects/$slug" params={{ slug: next.slug }} className="group inline-flex items-center gap-4">
            <span className="eyebrow">{t("proj.next")}</span>
            <span className="font-display text-2xl md:text-3xl text-ink group-hover:text-clay transition-colors">{next.title} →</span>
          </Link>
        </div>
      </section>
    </>
  );
}

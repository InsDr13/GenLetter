import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { PageHero } from "./about";
import { useI18n } from "@/lib/i18n";
import { useProjects, useCat } from "@/lib/use-content";
import heroChantier from "@/assets/hero-chantier.jpg";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projets & réalisations — BETAREX | Architecture & design RDC" },
      { name: "description", content: "Sélection de projets d'architecture, design d'intérieur, urbanisme et génie civil réalisés par BETAREX, cabinet d'architecture en RDC." },
      { name: "keywords", content: "projets architecture RDC, réalisations BETAREX, portfolio architecte Kinshasa" },
      { property: "og:title", content: "Projets — BETAREX" },
      { property: "og:description", content: "Nos réalisations en RDC." },
      { property: "og:url", content: "/projects" },
      { property: "og:image", content: heroChantier },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const CATS = ["Tous", "Architecture", "Résidentiel", "Mixte", "Intérieur"] as const;
const CAT_KEYS: Record<(typeof CATS)[number], string> = {
  "Tous": "projects.cat.all",
  "Architecture": "projects.cat.archi",
  "Résidentiel": "projects.cat.resi",
  "Mixte": "projects.cat.mix",
  "Intérieur": "projects.cat.int",
};

function Projects() {
  const { t } = useI18n();
  const PROJECTS = useProjects();
  const cat$ = useCat();
  const [cat, setCat] = useState<(typeof CATS)[number]>("Tous");
  const items = cat === "Tous" ? PROJECTS : PROJECTS.filter((p) => p.cat === cat);

  return (
    <>
      <PageHero eyebrow={t("projects.eyebrow")} title={t("projects.title")} image={heroChantier} />

      <section className="container-x py-16 md:py-24">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-line pb-6">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`relative font-display text-2xl md:text-3xl tracking-tight transition-colors ${cat === c ? "text-ink" : "text-ink-soft hover:text-ink"}`}
            >
              {t(CAT_KEYS[c])}
              {cat === c && (
                <motion.span layoutId="cat-underline" className="absolute -bottom-[26px] left-0 right-0 h-px bg-clay" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.article key={p.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }} className="group">
              <Link to="/projects/$slug" params={{ slug: p.slug }}>
                <div className="relative overflow-hidden aspect-[4/5] bg-stone">
                  <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl text-ink group-hover:text-clay transition-colors">{p.title}</h3>
                  <span className="font-mono text-xs tracking-widest text-ink-soft">{p.year}</span>
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-widest text-clay">{cat$(p.cat)}</div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}

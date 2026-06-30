import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "./about";
import { useI18n } from "@/lib/i18n";
import { useServices } from "@/lib/use-content";
import heroArch from "@/assets/hero-architecture.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — BETAREX | Expertise, architecture, design & génie civil RDC" },
      { name: "description", content: "Expertise immobilière, études architecturales, design d'intérieur, urbanisme, audits techniques et construction par BETAREX, cabinet d'architecture en RDC depuis 2016." },
      { name: "keywords", content: "services architecture RDC, expertise immobilière Kinshasa, design intérieur Congo, audit technique bâtiment" },
      { property: "og:title", content: "Services — BETAREX" },
      { property: "og:description", content: "Six pratiques au service de vos projets immobiliers en RDC." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: heroArch },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  const { t } = useI18n();
  const SERVICES = useServices();
  return (
    <>
      <PageHero eyebrow={t("services.eyebrow")} title={t("services.title")} image={heroArch} />

      <section className="container-x py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24 mb-20">
          <div className="eyebrow">{t("services.method")}</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight max-w-4xl text-ink">
            {t("services.lead.a")}<em className="not-italic text-clay">{t("services.lead.b")}</em>{t("services.lead.c")}
          </h2>
        </div>

        <div className="space-y-px">
          {SERVICES.map((s) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group grid items-start gap-8 border-t border-line py-10 md:grid-cols-[80px_1fr_1.2fr_180px] md:gap-10"
              >
                <div className="font-mono text-sm tracking-widest text-clay">{s.n}</div>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight text-ink group-hover:text-clay transition-colors">{s.t}</h3>
                <p className="text-base text-ink-soft leading-relaxed">{s.short}</p>
                <div className="aspect-[4/3] overflow-hidden bg-stone">
                  <img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-10">
          <p className="font-display text-3xl md:text-4xl max-w-2xl leading-tight text-ink">{t("services.bottomCta")}</p>
          <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-xs uppercase tracking-[0.2em] text-bone hover:bg-clay transition-colors">
            {t("services.contactBtn")}
          </Link>
        </div>
      </section>
    </>
  );
}

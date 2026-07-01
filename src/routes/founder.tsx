import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./about";
import { useI18n } from "@/lib/i18n";
import heroExpertise from "@/assets/hero-expertise.jpg";
import heroArch from "@/assets/hero-architecture.jpg";
import profil from "@/assets/profil.jpg";


export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Joël MWILARHE Beni — Fondateur BETAREX | Architecte & Expert Immobilier" },
      { name: "description", content: "Architecte enregistré au CNOA-RDC et Expert Immobilier assermenté près la Cour d'Appel de Kinshasa Gombe — fondateur de BETAREX." },
      { property: "og:title", content: "Joël MWILARHE Beni — Fondateur BETAREX" },
      { property: "og:description", content: "Architecte enregistré au CNOA-RDC et Expert Immobilier agréé." },
      { property: "og:url", content: "/founder" },
      { property: "og:image", content: heroExpertise },
    ],
    links: [{ rel: "canonical", href: "/founder" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Joël MWILARHE Beni",
          jobTitle: "Architecte & Expert Immobilier",
          worksFor: { "@type": "Organization", name: "BETAREX" },
          nationality: "CD",
        }),
      },
    ],
  }),
  component: Founder,
});

function Founder() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("founder.hero.eyebrow")} title={t("founder.hero.title")} image={heroArch} />

      <section className="container-x py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-stone">
              <img src={profil} alt="Joël MWILARHE Beni — fondateur BETAREX" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">{t("founder.cap")}</div>
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow">{t("founder.bio.eyebrow")}</div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
              {t("founder.bio.h1a")}<em className="not-italic text-clay">{t("founder.bio.h1b")}</em>.
            </h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>{t("founder.bio.p1")}</p>
              <p>{t("founder.bio.p2")}</p>
              <p>{t("founder.bio.p3")}</p>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-px bg-line border border-line">
              {[
                [t("founder.facts.training"), t("founder.facts.training.v")],
                [t("founder.facts.order"), t("founder.facts.order.v")],
                [t("founder.facts.sworn"), t("founder.facts.sworn.v")],
                [t("founder.facts.found"), "2016"],
              ].map(([k, v]) => (
                <div key={k} className="bg-bone p-6">
                  <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">{k}</dt>
                  <dd className="mt-2 font-display text-xl text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "./about";
import { SERVICES } from "@/lib/data";
import { useServices } from "@/lib/use-content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    const title = `${s?.t ?? "Service"} — BETAREX | Cabinet d'architecture & expertise RDC`;
    const description = s?.short ?? "Service BETAREX";
    const url = `/services/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        ...(s ? [{ property: "og:image" as const, content: s.img }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: s
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: s.t,
                description: s.d,
                provider: { "@type": "Organization", name: "BETAREX" },
                areaServed: { "@type": "Country", name: "République Démocratique du Congo" },
                serviceType: s.t,
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "/" },
                  { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
                  { "@type": "ListItem", position: 3, name: s.t, item: url },
                ],
              }),
            },
          ]
        : [],
    };
  },
  loader: ({ params }): { slug: string } => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  component: ServiceDetail,
  notFoundComponent: () => <NotFoundView />,
});

function NotFoundView() {
  const { t } = useI18n();
  return (
    <div className="container-x py-40 text-center">
      <div className="eyebrow">404</div>
      <h1 className="mt-4 font-display text-5xl text-ink">{t("svc.notFound")}</h1>
      <Link to="/services" className="mt-8 inline-block border-b border-ink pb-1 text-sm uppercase tracking-widest text-ink hover:text-clay">{t("svc.allServices")}</Link>
    </div>
  );
}

function ServiceDetail() {
  const { slug } = Route.useLoaderData() as { slug: string };
  const { t } = useI18n();
  const localized = useServices();
  const service = localized.find((s) => s.slug === slug)!;
  const others = localized.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero eyebrow={`${t("svc.eyebrowPrefix")} ${service.n}`} title={service.t} image={service.img} />

      <section className="container-x py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <div>
            <div className="eyebrow">{t("svc.summary")}</div>
            <p className="mt-4 font-mono text-sm text-ink-soft leading-relaxed">{service.short}</p>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="font-display text-3xl md:text-4xl leading-[1.1] tracking-tight text-ink">
            {service.d}
          </motion.p>
        </div>
      </section>

      <section className="bg-muted py-24 border-t border-line">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <div>
            <div className="eyebrow">{t("svc.objectives")}</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-ink">
              {t("svc.objectivesH.a")}<em className="not-italic text-clay">{t("svc.objectivesH.b")}</em>.
            </h2>
          </div>
          <ul className="grid gap-px bg-line border border-line sm:grid-cols-2">
            {service.objectives.map((o, i) => (
              <motion.li key={o} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="bg-bone p-6 flex gap-4">
                <span className="font-mono text-xs text-clay shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-ink leading-relaxed">{o}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="eyebrow">{t("svc.deliverables")}</div>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {service.deliverables.map((d, i) => (
                <motion.li key={d} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="flex items-baseline gap-6 py-5">
                  <span className="font-mono text-xs text-clay shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl text-ink">{d}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow">{t("svc.process")}</div>
            <div className="mt-8 space-y-6">
              {service.process.map((p, i) => (
                <motion.div key={p.k} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="border-l-2 border-clay pl-6">
                  <div className="font-mono text-xs uppercase tracking-widest text-clay">{t("svc.step")} {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 font-display text-2xl text-ink">{p.k}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.v}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink text-bone py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24 items-start">
            <div>
              <div className="eyebrow text-bone/70">{t("svc.advantages")}</div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                {t("svc.advantagesH.a")}<em className="not-italic text-clay">{t("svc.advantagesH.b")}</em>.
              </h2>
            </div>
            <ul className="grid gap-px bg-bone/15 sm:grid-cols-2">
              {service.advantages.map((a, i) => (
                <motion.li key={a} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="bg-ink p-6 flex gap-4 border border-bone/10">
                  <span className="font-display text-3xl text-clay shrink-0">·</span>
                  <span className="text-bone leading-relaxed">{a}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {service.gallery.length > 0 && (
        <section className="container-x py-24 md:py-32">
          <div className="eyebrow">{t("svc.gallery")}</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-ink max-w-2xl">{t("svc.galleryH")}</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((src, i) => (
              <motion.div key={src + i} initial={{ opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.06 }} className="aspect-[4/3] overflow-hidden bg-stone">
                <img src={src} alt={`${service.t} — illustration ${i + 1}`} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1.4s]" />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section className="container-x pb-24">
        <div className="rounded-sm bg-clay text-bone p-10 md:p-16">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] items-end">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
              {t("svc.startCta", { title: service.t })}
            </h2>
            <div className="flex flex-col gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-xs uppercase tracking-[0.2em] text-bone hover:bg-bone hover:text-ink transition-colors">
                {t("svc.quote")} <span aria-hidden>→</span>
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 border border-bone rounded-full px-7 py-4 text-xs uppercase tracking-[0.2em] text-bone hover:bg-bone hover:text-ink transition-colors">
                {t("svc.contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow">{t("svc.others")}</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink">
              {t("svc.othersH.a")}<em className="not-italic text-clay">{t("svc.othersH.b")}</em>.
            </h2>
          </div>
          <Link to="/services" className="border-b border-ink pb-1 text-xs uppercase tracking-widest text-ink hover:text-clay hover:border-clay">{t("svc.allServices")}</Link>
        </div>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {others.slice(0, 6).map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group bg-bone p-8 transition-colors hover:bg-ink">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-widest text-clay">{s.n}</span>
                <span className="font-mono text-xs text-ink-soft group-hover:text-bone transition-colors">→</span>
              </div>
              <h3 className="mt-10 font-display text-2xl leading-tight text-ink group-hover:text-bone transition-colors">{s.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft group-hover:text-bone/85 transition-colors">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

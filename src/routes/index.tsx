import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { useI18n } from "@/lib/i18n";
import {
  useServices, useProjects, useTestimonials, usePartners, useMissions, useValues, useCat,
} from "@/lib/use-content";
import heroArch from "@/assets/hero-architecture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BETAREX — Architecture, expertise immobilière & génie civil à Kinshasa, RDC" },
      { name: "description", content: "Cabinet d'architecture, génie civil, design d'intérieur et expertise immobilière en RDC. Études, conception, suivi de chantier — depuis 2016." },
      { name: "keywords", content: "BETAREX, architecte Kinshasa, expertise immobilière RDC, design intérieur Congo, génie civil Kinshasa, cabinet architecture RDC" },
      { property: "og:title", content: "BETAREX — Architecture & Expertise à Kinshasa" },
      { property: "og:description", content: "Cabinet d'architecture, génie civil, design d'intérieur et expertise immobilière en RDC." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroArch },
      { name: "twitter:image", content: heroArch },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroArch, fetchpriority: "high" } as any,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "BETAREX",
          image: heroArch,
          description: "Cabinet d'architecture, génie civil et expertise immobilière en RDC.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "04, Mont des Arts — Immeuble EKAB Appt 1B",
            addressLocality: "Kinshasa",
            addressCountry: "CD",
          },
          telephone: "+243821010517",
          email: "betarex.rdc@gmail.com",
          foundingDate: "2016",
          priceRange: "$$",
          areaServed: { "@type": "Country", name: "République Démocratique du Congo" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "BETAREX",
          url: "/",
          inLanguage: ["fr", "en"],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroCarousel />
      <Marquee />
      <Manifesto />
      <Missions />
      <Values />
      <Services />
      <VideoPresentation />
      <Featured />
      <ProjectsGrid />
      <Stats />
      <Testimonials />
      <Partners />
      <CTA />
    </>
  );
}

function VideoPresentation() {
  const { t } = useI18n();
  const VIDEO_ID = "dQw4w9WgXcQ";
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20 items-end mb-12">
        <div>
          <div className="eyebrow">{t("home.video.eyebrow")}</div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-ink">
            {t("home.video.title")} <em className="not-italic text-clay">BETAREX</em>.
          </h2>
        </div>
        <p className="font-mono text-sm text-ink-soft leading-relaxed max-w-xl">{t("home.video.subtitle")}</p>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="relative aspect-video w-full overflow-hidden bg-ink rounded-sm shadow-2xl">
        <iframe
          src="https://www.youtube.com/embed/dUBmSOCkakE?si=a1FMK5uZZ96_OG5Z"
          title="Presentation betarex RDC"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </motion.div>
    </section>
  );
}

function Marquee() {
  const { t } = useI18n();
  const words = [0, 1, 2, 3, 4, 5, 6].map((i) => t(`marquee.${i}`));
  const loop = [...words, ...words, ...words];
  return (
    <section aria-hidden className="border-y border-line bg-bone py-8 overflow-hidden">
      <div className="marquee-track gap-12">
        {loop.map((w, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-3xl md:text-5xl text-ink italic">
            {w}
            <span className="h-2 w-2 rounded-full bg-clay" />
          </span>
        ))}
      </div>
    </section>
  );
}

function RevealText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

function Manifesto() {
  const { t } = useI18n();
  return (
    <section className="container-x py-24 md:py-40">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
        <RevealText>
          <div className="eyebrow">{t("home.manifesto.eyebrow")}</div>
          <p className="mt-6 font-mono text-sm text-ink-soft leading-relaxed">{t("home.manifesto.lead")}</p>
        </RevealText>
        <div>
          <RevealText delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-ink">
              {t("home.manifesto.h2a")}<em className="not-italic text-clay">{t("home.manifesto.h2b")}</em>{t("home.manifesto.h2c")}
            </h2>
          </RevealText>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { k: t("home.manifesto.k1"), v: t("home.manifesto.v1") },
              { k: t("home.manifesto.k2"), v: t("home.manifesto.v2") },
              { k: t("home.manifesto.k3"), v: t("home.manifesto.v3") },
            ].map((c, i) => (
              <RevealText key={c.k} delay={0.15 + i * 0.08}>
                <div className="border-t border-line pt-5">
                  <div className="font-mono text-xs uppercase tracking-widest text-clay">{c.k}</div>
                  <p className="mt-3 text-sm text-ink leading-relaxed">{c.v}</p>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Missions() {
  const { t } = useI18n();
  const MISSIONS = useMissions();
  return (
    <section id="missions" className="border-t border-line bg-bone py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <RevealText>
            <div className="eyebrow">{t("home.missions.eyebrow")}</div>
            <h2 className="mt-4 font-display text-5xl md:text-7xl tracking-tight text-ink">
              {t("home.missions.h1")} <em className="not-italic text-clay">{t("home.missions.h2")}</em>
            </h2>
          </RevealText>
        </div>
        <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {MISSIONS.map((m, i) => (
            <motion.div key={m.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }} className="group bg-bone p-8 md:p-10 transition-colors hover:bg-ink">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs tracking-widest text-clay">{m.n}</span>
                <span className="h-px w-10 bg-line group-hover:bg-clay transition-colors" />
              </div>
              <h3 className="mt-10 font-display text-3xl text-ink group-hover:text-bone transition-colors">{m.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft group-hover:text-bone/85 transition-colors">{m.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const { t } = useI18n();
  const VALUES = useValues();
  return (
    <section id="valeurs" className="relative overflow-hidden bg-ink text-bone py-24 md:py-32">
      <div className="absolute inset-0 opacity-20">
        <img src={heroArch} alt="" aria-hidden className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/90 to-ink" />
      <div className="container-x relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24 items-start">
          <RevealText>
            <div className="eyebrow text-bone">{t("home.values.eyebrow")}</div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.02] tracking-tight text-bone">
              {t("home.values.h1a")}<em className="not-italic text-clay">{t("home.values.h1b")}</em>.
            </h2>
            <p className="mt-6 text-bone/85 leading-relaxed max-w-md">{t("home.values.lead")}</p>
          </RevealText>
          <div className="grid gap-px bg-bone/15 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <motion.div key={v.n} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="bg-ink p-8 md:p-10">
                <div className="font-display text-5xl text-clay">{v.n}</div>
                <h3 className="mt-6 font-display text-3xl text-bone">{v.t}</h3>
                <p className="mt-3 text-sm text-bone/80 leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useI18n();
  const SERVICES = useServices();
  return (
    <section id="services" className="border-t border-line bg-muted py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <RevealText>
            <div className="eyebrow">{t("home.services.eyebrow")}</div>
            <h2 className="mt-4 font-display text-5xl md:text-7xl tracking-tight text-ink">{t("home.services.title")}</h2>
          </RevealText>
          <Link to="/services" className="border-b border-ink pb-1 text-xs uppercase tracking-widest text-ink hover:text-clay hover:border-clay">{t("home.services.cta")}</Link>
        </div>

        <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }} className="group relative bg-bone transition-colors hover:bg-ink">
              <Link to="/services/$slug" params={{ slug: s.slug }} className="block p-8 md:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-widest text-clay">{s.n}</span>
                  <span className="font-mono text-xs tracking-widest text-ink-soft group-hover:text-bone transition-colors">→</span>
                </div>
                <h3 className="mt-12 font-display text-3xl leading-tight text-ink group-hover:text-bone transition-colors">{s.t}</h3>
                <p className="mt-6 text-sm leading-relaxed text-ink-soft group-hover:text-bone/85 transition-colors">{s.short}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured() {
  const { t } = useI18n();
  return (
    <section className="container-x py-24 md:py-40">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, scale: 1.06 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="aspect-[4/5] overflow-hidden bg-stone">
            <img src={heroArch} alt="Projet d'architecture durable BETAREX en RDC" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1.5s]" />
          </motion.div>
        </div>
        <div className="lg:col-span-5 lg:pb-8">
          <RevealText>
            <div className="eyebrow">{t("home.featured.eyebrow")}</div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.98] tracking-tight text-ink">
              {t("home.featured.h1a")}<em className="not-italic text-clay">{t("home.featured.h1b")}</em>.
            </h2>
            <p className="mt-8 text-base text-ink leading-relaxed">{t("home.featured.desc")}</p>
          </RevealText>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-8 border-t border-line pt-8">
            {[
              [t("home.featured.year"), "2024"],
              [t("home.featured.place"), "Kinshasa, RDC"],
              [t("home.featured.surface"), "1 240 m²"],
              [t("home.featured.status"), t("home.featured.status.val")],
            ].map(([k, v], i) => (
              <RevealText key={k} delay={i * 0.05}>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-ink-soft">{k}</dt>
                  <dd className="mt-1 font-display text-xl text-ink">{v}</dd>
                </div>
              </RevealText>
            ))}
          </dl>
          <Link to="/projects/$slug" params={{ slug: "residence-durable" }} className="mt-10 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs uppercase tracking-[0.2em] text-ink hover:text-clay hover:border-clay transition-colors">
            {t("home.featured.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectsGrid() {
  const { t } = useI18n();
  const PROJECTS = useProjects();
  const cat$ = useCat();
  const items = PROJECTS.slice(0, 6);
  return (
    <section className="border-y border-line bg-ink text-bone py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <RevealText>
            <div className="eyebrow text-bone">{t("home.projects.eyebrow")}</div>
            <h2 className="mt-4 font-display text-5xl md:text-7xl tracking-tight text-bone">{t("home.projects.title")}</h2>
          </RevealText>
          <Link to="/projects" className="border-b border-bone pb-1 text-xs uppercase tracking-widest text-bone hover:text-clay hover:border-clay">{t("home.projects.cta")}</Link>
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.article key={p.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }} className="group">
              <Link to="/projects/$slug" params={{ slug: p.slug }}>
                <div className="relative aspect-[4/5] overflow-hidden bg-bone/5">
                  <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-clay px-4 py-2 text-[0.65rem] uppercase tracking-widest text-bone">{t("home.projects.hoverCta")}</span>
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl text-bone">{p.title}</h3>
                  <span className="font-mono text-xs tracking-widest text-bone/70">{p.year}</span>
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-widest text-clay">{cat$(p.cat)}</div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { t } = useI18n();
  const stats = [
    { n: "10+", l: t("home.stats.1.l"), s: t("home.stats.1.s") },
    { n: "13", l: t("home.stats.2.l"), s: t("home.stats.2.s") },
    { n: "120+", l: t("home.stats.3.l"), s: t("home.stats.3.s") },
    { n: "100%", l: t("home.stats.4.l"), s: t("home.stats.4.s") },
  ];
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24 items-start">
        <RevealText>
          <div className="eyebrow">{t("home.stats.eyebrow")}</div>
          <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-tight leading-[1.02] text-ink">
            {t("home.stats.h1a")}<em className="not-italic text-clay">{t("home.stats.h1b")}</em>{t("home.stats.h1c")}
          </h2>
        </RevealText>
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08 }} className="bg-bone p-6 md:p-8">
              <div className="font-display text-6xl md:text-7xl tracking-tight text-ink">{s.n}</div>
              <div className="mt-6 text-sm text-ink">{s.l}</div>
              <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft">{s.s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useI18n();
  const TESTIMONIALS = useTestimonials();
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="relative overflow-hidden bg-muted py-24 md:py-32 border-t border-line">
      <div className="container-x mb-14">
        <RevealText>
          <div className="eyebrow">{t("home.testimonials.eyebrow")}</div>
          <h2 className="mt-6 font-display text-5xl md:text-7xl tracking-tight max-w-4xl text-ink">
            {t("home.testimonials.h1a")}<em className="not-italic text-clay">{t("home.testimonials.h1b")}</em>{t("home.testimonials.h1c")}
          </h2>
        </RevealText>
      </div>

      <div className="testimonials-track-wrap group">
        <div className="testimonials-track gap-6 px-5">
          {loop.map((tt, i) => (
            <figure key={i} className="w-[85vw] sm:w-[420px] shrink-0 bg-bone p-8 md:p-10 border border-line">
              <div className="font-display text-5xl text-clay leading-none">"</div>
              <blockquote className="mt-4 font-display text-xl md:text-2xl leading-snug text-ink">{tt.q}</blockquote>
              <figcaption className="mt-8 border-t border-line pt-5">
                <div className="font-display text-lg text-ink">{tt.a}</div>
                <div className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-soft mt-1">{tt.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const { t } = useI18n();
  const PARTNERS = usePartners();
  const loop = [...PARTNERS, ...PARTNERS];
  return (
    <section className="border-t border-line bg-bone py-24 md:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-24 items-end mb-14">
          <RevealText>
            <div className="eyebrow">{t("home.partners.eyebrow")}</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight text-ink">
              {t("home.partners.h1a")}<em className="not-italic text-clay">{t("home.partners.h1b")}</em>.
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="text-ink leading-relaxed max-w-xl">{t("home.partners.lead")}</p>
          </RevealText>
        </div>

        <div className="grid gap-px bg-line border border-line sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: (i % 4) * 0.06 }} className="group bg-bone p-8 flex flex-col items-center justify-center text-center min-h-[160px] hover:bg-ink transition-colors">
              <div className="grid h-14 w-14 place-items-center rounded-full border border-line text-clay font-display text-xl group-hover:border-clay transition-colors">
                {p.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </div>
              <div className="mt-4 font-display text-lg text-ink group-hover:text-bone transition-colors">{p.name}</div>
              <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft group-hover:text-clay transition-colors">{p.tag}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden border-t border-line pt-8">
          <div className="marquee-track gap-12 opacity-70">
            {loop.map((p, i) => (
              <span key={i} className="flex items-center gap-12 font-display text-xl md:text-2xl text-ink-soft whitespace-nowrap">
                {p.name}
                <span className="h-1 w-1 rounded-full bg-clay" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { t } = useI18n();
  return (
    <section className="container-x py-24 md:py-32">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="relative overflow-hidden rounded-sm bg-clay text-bone p-10 md:p-20">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] items-end">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-3xl text-bone">{t("home.cta.h1")}</h2>
          <div className="flex flex-col gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-xs uppercase tracking-[0.2em] text-bone hover:bg-bone hover:text-ink transition-colors">
              {t("home.cta.start")} <span aria-hidden>→</span>
            </Link>
            <a href="tel:+243821010517" className="inline-flex items-center justify-center gap-3 border border-bone rounded-full px-7 py-4 text-xs uppercase tracking-[0.2em] text-bone hover:bg-bone hover:text-ink transition-colors">
              +243 82 1010 517
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

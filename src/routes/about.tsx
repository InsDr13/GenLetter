import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Award, BadgeCheck, Building2, ClipboardCheck, Compass, Globe2, Handshake, HardHat, Map, Palette, Ruler, ShieldCheck, Smile, Users,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useDomains, useMethodology, usePartners, useReasons, useTeam, useValues } from "@/lib/use-content";
import heroArch from "@/assets/hero-architecture.jpg";
import heroExpertise from "@/assets/hero-expertise.jpg";

const ICONS: Record<string, LucideIcon> = {
  ClipboardCheck, Compass, HardHat, Map, Palette, Smile,
  Building2, Ruler,
  Users, Award, Globe2, ShieldCheck, Handshake, BadgeCheck,
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — BETAREX | Cabinet d'expertise & d'architecture en RDC (depuis 2016)" },
      { name: "description", content: "BETAREX (Bureau d'Études d'Architecture et d'Expertise) — cabinet congolais spécialisé en expertise immobilière, architecture, génie civil et conseil immobilier à Kinshasa depuis 2016." },
      { name: "keywords", content: "architecte Kinshasa, expert immobilier RDC, cabinet architecture Congo, BETAREX, génie civil RDC" },
      { property: "og:title", content: "À propos — BETAREX" },
      { property: "og:description", content: "Cabinet congolais d'expertise immobilière, architecture et génie civil — depuis 2016." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: heroExpertise },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const { t, lang } = useI18n();
  const VALUES = useValues();
  const TEAM_MEMBERS = useTeam();
  const DOMAINS = useDomains();
  const METHODOLOGY = useMethodology();
  const REASONS = useReasons();
  const PARTNERS = usePartners();

  return (
    <>
      <PageHero eyebrow={t("about.hero.eyebrow")} title={t("about.hero.title")} image={heroArch} />

      <section className="container-x py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <div><div className="eyebrow">{t("about.who.eyebrow")}</div></div>
          <div className="space-y-6 text-base leading-relaxed text-ink-soft max-w-3xl">
            <p className="font-display text-3xl md:text-4xl leading-tight text-ink">{t("about.who.p1")}</p>
            <p>{t("about.who.p2")}</p>
            <p>{t("about.who.p3")}</p>
            <p>{t("about.who.p4")}</p>
            <p>
              {t("about.who.p5a")}<strong className="text-ink">{t("about.who.p5name")}</strong>{t("about.who.p5b")}
            </p>
          </div>
        </div>
      </section>

      {/* Vision · Mission */}
      <section className="border-t border-line bg-muted/50 py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
          <RevealCard delay={0}>
            <div className="eyebrow">{t("about.vision.eyebrow")}</div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
              {t("about.vision.h1a")}<em className="not-italic text-clay">{t("about.vision.h1b")}</em>{t("about.vision.h1c")}
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">{t("about.vision.p")}</p>
          </RevealCard>
          <RevealCard delay={0.1}>
            <div className="eyebrow">{t("about.mission.eyebrow")}</div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
              {t("about.mission.h1a")}<em className="not-italic text-clay">{t("about.mission.h1b")}</em>{t("about.mission.h1c")}
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">{t("about.mission.p")}</p>
          </RevealCard>
        </div>
      </section>

      {/* Valeurs */}
      <section className="container-x py-24 md:py-32">
        <div>
          <div className="eyebrow">{t("about.values.eyebrow")}</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tight text-ink">
            {t("about.values.h1a")}<em className="not-italic text-clay">{t("about.values.h1b")}</em>.
          </h2>
        </div>
        <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <motion.div key={v.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.08 }} className="bg-bone p-8">
              <div className="font-display text-4xl text-clay">{v.n}</div>
              <h3 className="mt-6 font-display text-2xl text-ink">{v.t}</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Équipe */}
      <section className="border-y border-line bg-muted/40 py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow">{t("about.team.eyebrow")}</div>
              <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tight text-ink">
                {t("about.team.h1a")}<em className="not-italic text-clay">{t("about.team.h1b")}</em>.
              </h2>
            </div>
            <p className="max-w-md text-ink-soft leading-relaxed">{t("about.team.lead")}</p>
          </div>
          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((m, i) => {
              const Icon = ICONS[m.icon] ?? Users;
              return (
                <motion.div key={m.role} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.05 }} className="group bg-bone p-8 transition-colors hover:bg-ink">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-line text-clay group-hover:border-clay transition-colors">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-mono text-3xl text-clay">{String((m as any).count ?? "").toString().padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl text-ink group-hover:text-bone transition-colors">{m.role}</h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed group-hover:text-bone/85 transition-colors">{m.d}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domaines */}
      <section className="container-x py-24 md:py-32">
        <div className="eyebrow">{t("about.domains.eyebrow")}</div>
        <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tight text-ink max-w-3xl">
          {t("about.domains.h1a")}<em className="not-italic text-clay">{t("about.domains.h1b")}</em>.
        </h2>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {DOMAINS.map((d, i) => {
            const Icon = ICONS[d.icon] ?? Building2;
            return (
              <motion.article key={d.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: i * 0.1 }} className="border border-line bg-bone p-8 md:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-clay/10 text-clay">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-8 font-display text-3xl text-ink">{d.t}</h3>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {d.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-ink leading-relaxed">
                      <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-clay" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Méthodologie */}
      <section className="border-t border-line bg-ink text-bone py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow text-bone/70">{t("about.method.eyebrow")}</div>
              <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tight">
                {t("about.method.h1a")}<em className="not-italic text-clay">{t("about.method.h1b")}</em>.
              </h2>
            </div>
            <p className="max-w-md text-bone/80 leading-relaxed">{t("about.method.lead")}</p>
          </div>
          <ol className="mt-16 grid gap-px bg-bone/15 sm:grid-cols-2 lg:grid-cols-4">
            {METHODOLOGY.map((m, i) => (
              <motion.li key={m.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: (i % 4) * 0.08 }} className="bg-ink p-6 md:p-8">
                <div className="font-mono text-xs uppercase tracking-widest text-clay">{t("svc.step")} {m.n}</div>
                <h3 className="mt-4 font-display text-2xl text-bone">{m.t}</h3>
                <p className="mt-3 text-sm text-bone/75 leading-relaxed">{m.d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="container-x py-24 md:py-32">
        <div className="eyebrow">{t("about.why.eyebrow")}</div>
        <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tight text-ink max-w-3xl">
          {t("about.why.h1a")}<em className="not-italic text-clay">{t("about.why.h1b")}</em>.
        </h2>
        <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => {
            const Icon = ICONS[r.icon] ?? BadgeCheck;
            return (
              <motion.div key={r.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.05 }} className="bg-bone p-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-clay/10 text-clay">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-2xl text-ink">{r.t}</h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{r.d}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Références */}
      <section className="border-t border-line bg-muted/40 py-24 md:py-32">
        <div className="container-x">
          <div className="eyebrow">{t("about.refs.eyebrow")}</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tight text-ink max-w-3xl">
            {t("about.refs.h1a")}<em className="not-italic text-clay">{t("about.refs.h1b")}</em>.
          </h2>
          <div className="mt-14 grid gap-px bg-line border border-line sm:grid-cols-2 lg:grid-cols-4">
            {PARTNERS.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: (i % 4) * 0.05 }} className="group bg-bone p-8 flex flex-col items-center justify-center text-center min-h-[160px] hover:bg-ink transition-colors">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-line text-clay font-display text-xl group-hover:border-clay transition-colors">
                  {p.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>
                <div className="mt-4 font-display text-base text-ink group-hover:text-bone transition-colors">{p.name}</div>
                <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft group-hover:text-clay transition-colors">{p.tag}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordonnées + fondateur */}
      <section className="container-x py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="eyebrow">{t("about.contact.eyebrow")}</div>
            <dl className="mt-6 space-y-5 text-sm">
              {[
                [t("about.contact.k.address"), "04, Mont des Arts — Immeuble EKAB Appt 1B / Kinshasa - Lingwala"],
                [t("about.contact.k.rccm"), "15-A26037"],
                [t("about.contact.k.idnat"), "01-93-N97336T"],
                [t("about.contact.k.tax"), "A 1603136 C"],
                [t("about.contact.k.phone"), "+243 82 1010 517"],
                [t("about.contact.k.email"), "betarex.rdc@gmail.com"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[140px_1fr] gap-6 border-b border-line pb-4">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Link to="/founder" className="group block self-end border-t border-line pt-10">
            <div className="eyebrow">{t("about.dir.eyebrow")}</div>
            <h3 className="mt-6 font-display text-4xl md:text-5xl tracking-tight group-hover:text-clay transition-colors">
              {t("about.dir.h1")} <span aria-hidden>→</span>
            </h3>
            <p className="mt-4 text-ink-soft">{t("about.dir.lead")}</p>
          </Link>
        </div>
      </section>
      {/* lang ref to satisfy unused-var */}
      <span className="sr-only" aria-hidden>{lang}</span>
    </>
  );
}

function RevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

export function PageHero({ eyebrow, title, image }: { eyebrow: string; title: string; image: string }) {
  return (
    <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden bg-ink text-bone">
      <img src={image} alt="" aria-hidden loading="eager" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/30 to-ink/80" />
      <div className="container-x relative z-10 flex h-full flex-col justify-end pb-16 md:pb-24">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-clay" />
          <span className="eyebrow text-bone/70">{eyebrow}</span>
        </div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="mt-6 max-w-[20ch] font-display text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] tracking-tight">
          {title}
        </motion.h1>
      </div>
    </section>
  );
}

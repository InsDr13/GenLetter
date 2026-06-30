import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "./about";
import { useI18n } from "@/lib/i18n";
import heroExpertise from "@/assets/hero-expertise.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BETAREX | Kinshasa, RDC — Architecture & expertise" },
      { name: "description", content: "Démarrez votre projet d'architecture, design ou expertise immobilière avec BETAREX à Kinshasa, RDC. Devis et conseil personnalisés." },
      { name: "keywords", content: "contact architecte Kinshasa, devis expertise immobilière RDC, BETAREX contact" },
      { property: "og:title", content: "Contact — BETAREX" },
      { property: "og:description", content: "Contactez le cabinet BETAREX à Kinshasa." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: heroExpertise },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact BETAREX",
          mainEntity: {
            "@type": "Organization",
            name: "BETAREX",
            telephone: "+243821010517",
            email: "betarex.rdc@gmail.com",
          },
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow={t("contact.hero.eyebrow")} title={t("contact.hero.title")} image={heroExpertise} />

      <section className="container-x py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <div className="eyebrow">{t("contact.left.eyebrow")}</div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
              {t("contact.left.h1a")}<em className="not-italic text-clay">{t("contact.left.h1b")}</em>{t("contact.left.h1c")}
            </h2>
            <p className="mt-8 text-ink-soft leading-relaxed">{t("contact.left.lead")}</p>

            <div className="mt-12 space-y-8">
              {[
                { k: t("contact.k.studio"), v: t("contact.v.studio") },
                { k: t("contact.k.phone"), v: t("contact.v.phone") },
                { k: t("contact.k.email"), v: t("contact.v.email") },
              ].map((c) => (
                <div key={c.k} className="border-t border-line pt-5">
                  <div className="font-mono text-xs uppercase tracking-widest text-clay">{c.k}</div>
                  <p className="mt-2 whitespace-pre-line text-ink leading-relaxed">{c.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              {[t("contact.tag.1"), t("contact.tag.2"), t("contact.tag.3")].map((v) => (
                <div key={v} className="border border-line rounded-full px-4 py-3 text-center font-mono text-[0.7rem] uppercase tracking-widest text-ink-soft">
                  {v}
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-sm border border-line bg-card p-8 md:p-10 self-start"
          >
            <div className="eyebrow">{t("contact.form.eyebrow")}</div>
            <h3 className="mt-4 font-display text-3xl">{t("contact.form.h")}</h3>

            {sent ? (
              <div className="mt-10 border border-clay bg-clay/10 p-6">
                <p className="font-display text-2xl text-clay">{t("contact.form.thanks")}</p>
                <p className="mt-2 text-sm text-ink-soft">{t("contact.form.thanksLead")}</p>
              </div>
            ) : (
              <div className="mt-8 grid gap-5">
                <Field label={t("contact.form.name")} type="text" name="name" required />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label={t("contact.form.email")} type="email" name="email" required />
                  <Field label={t("contact.form.phone")} type="tel" name="phone" />
                </div>
                <Field label={t("contact.form.subject")} type="text" name="subject" required />
                <label className="block">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{t("contact.form.message")}</span>
                  <textarea name="message" rows={5} required className="mt-2 w-full bg-transparent border-b border-line py-3 text-ink focus:border-clay focus:outline-none resize-none" />
                </label>
                <button type="submit" className="mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-xs uppercase tracking-[0.2em] text-bone hover:bg-clay transition-colors">
                  {t("contact.form.send")}
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input {...props} className="mt-2 w-full bg-transparent border-b border-line py-3 text-ink focus:border-clay focus:outline-none" />
    </label>
  );
}

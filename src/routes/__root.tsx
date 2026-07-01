import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Facebook, Instagram, Linkedin, Youtube, Globe } from "lucide-react";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { ScrollToTop } from "@/components/ScrollToTop";
import heroArch from "@/assets/hero-architecture.jpg";
import logo from "@/assets/logo-betarex.png";

function NotFoundComponent() {
  const { t } = useI18n();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-4">{t("err.404.eyebrow")}</div>
        <h1 className="text-6xl">{t("err.404.title")}</h1>
        <p className="mt-4 text-sm text-muted-foreground">{t("err.404.desc")}</p>
        <Link to="/" className="mt-8 inline-block border-b border-ink pb-1 text-sm uppercase tracking-widest hover:text-clay">
          {t("err.404.cta")}
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useI18n();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl">{t("err.gen.title")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("err.gen.desc")}</p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border-b border-ink pb-1 text-sm uppercase tracking-widest hover:text-clay"
          >
            {t("err.gen.retry")}
          </button>
          <a href="/" className="border-b border-ink pb-1 text-sm uppercase tracking-widest hover:text-clay">{t("err.gen.home")}</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0f0f0f" },
      { name: "format-detection", content: "telephone=no" },
      { name: "author", content: "BETAREX" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "CD-KN" },
      { name: "geo.placename", content: "Kinshasa" },
      { name: "geo.position", content: "-4.3217;15.3126" },
      { name: "ICBM", content: "-4.3217, 15.3126" },
      { property: "og:site_name", content: "BETAREX" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_CD" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@betarex" },
    ],
    links: [
      { rel: "icon", href: "/img/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..700,0..100&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BETAREX",
          legalName: "BETAREX SARL",
          url: "/",
          logo: "/img/favicon.png",
          description: "Cabinet d'architecture, génie civil et expertise immobilière à Kinshasa, RDC.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "04, Mont des Arts — Immeuble EKAB Appt 1B",
            addressLocality: "Kinshasa",
            addressRegion: "Lingwala",
            addressCountry: "CD",
          },
          telephone: "+243821010517",
          email: "betarex.rdc@gmail.com",
          foundingDate: "2016",
          sameAs: [
            "https://web.facebook.com/profile.php?id=61576224650077",
            "https://www.instagram.com/betarex.rdc/",
            "https://www.youtube.com/@betarex",
            "https://www.linkedin.com/company/betarex",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/founder", key: "nav.founder" },
  { to: "/services", key: "nav.services" },
  { to: "/projects", key: "nav.projects" },
  { to: "/contact", key: "nav.contact" },
] as const;

function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
      aria-label="Language"
      className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-ink hover:text-clay transition-colors ${className}`}
    >
      <Globe className="h-3.5 w-3.5" aria-hidden />
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 bg-bone/95 backdrop-blur-xl ${scrolled ? "border-b border-line shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "border-b border-transparent"}`}>
      <div className="container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-4 md:py-5">
     <Link
  to="/"
  className="flex items-center gap-3 min-w-0"
  onClick={() => setOpen(false)}
  aria-label="BETAREX — Home"
>
  <img
    src={logo}
    alt="BETAREX"
    className="h-12 w-auto object-contain"
  />

  <div className="flex flex-col leading-tight">
    <span className="text-lg font-bold tracking-wide text-black">
      BETAREX
    </span>
    <span className="text-xs font-medium text-black">
      Architectes • RDC
    </span>
  </div>
</Link>
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm font-medium tracking-wide text-ink hover:text-clay transition-colors [&.active]:text-clay"
            >
              {t(item.key)}
            </Link>
          ))}
          <LangSwitch className="ml-2" />
          <Link to="/contact" className="ml-2 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs uppercase tracking-widest text-bone hover:bg-clay transition-colors">
            {t("nav.cta")}
            <span aria-hidden>→</span>
          </Link>
        </nav>
        <div className="lg:hidden flex items-center gap-3">
          <LangSwitch />
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-bone"
            aria-label={t("menu")}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-px w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-line bg-bone">
          <div className="container-x flex flex-col py-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-2xl text-ink hover:text-clay [&.active]:text-clay"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-32 bg-ink text-bone">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="eyebrow text-bone/60">BETAREX · Kinshasa</div>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              {t("footer.title")} <em className="text-clay not-italic">{t("footer.titleEm")}</em> {t("footer.titleEnd")}
            </h2>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-3 border-b border-bone/40 pb-2 text-sm uppercase tracking-widest hover:text-clay hover:border-clay transition-colors">
              {t("footer.cta")} <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="space-y-4">
            <div className="eyebrow text-bone/60">{t("footer.studio")}</div>
            <address className="not-italic text-sm text-bone/80 leading-relaxed">
              04, Mont des Arts<br />
              Immeuble EKAB, Appt 1B<br />
              Lingwala, Kinshasa<br />
              République Démocratique du Congo
            </address>
            <p className="text-sm text-bone/80">
              <a href="tel:+243821010517" className="hover:text-clay">+243 82 1010 517</a>
            </p>
          </div>
          <div className="space-y-4">
            <div className="eyebrow text-bone/60">{t("footer.contact")}</div>
            <p className="text-sm text-bone/80"><a href="mailto:betarex.rdc@gmail.com" className="hover:text-clay">betarex.rdc@gmail.com</a></p>
            <p className="text-sm text-bone/80"><a href="mailto:info.betarex-rdc@gmail.com" className="hover:text-clay">info.betarex-rdc@gmail.com</a></p>
            <div className="flex items-center gap-3 pt-4">
              <a href="https://web.facebook.com/profile.php?id=61576224650077" target="_blank" rel="noreferrer noopener" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-bone/20 text-bone/80 hover:text-clay hover:border-clay transition-colors">
                <Facebook className="h-4 w-4" aria-hidden />
              </a>
              <a href="https://www.instagram.com/betarex.rdc/" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-bone/20 text-bone/80 hover:text-clay hover:border-clay transition-colors">
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
              <a href="https://www.youtube.com/@betarex" target="_blank" rel="noreferrer noopener" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full border border-bone/20 text-bone/80 hover:text-clay hover:border-clay transition-colors">
                <Youtube className="h-4 w-4" aria-hidden />
              </a>
              <a href="https://www.linkedin.com/company/betarex" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-bone/20 text-bone/80 hover:text-clay hover:border-clay transition-colors">
                <Linkedin className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-4 border-t border-bone/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-bone/50">{t("footer.rights", { year: new Date().getFullYear() })}</p>
          <p className="font-mono text-xs text-bone/50">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}

// Silence unused warning for preloaded asset reference
void heroArch;

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <Header />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
      </I18nProvider>
    </QueryClientProvider>
  );
}

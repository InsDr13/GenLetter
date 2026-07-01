import { useI18n } from "./i18n";
import {
  SERVICES, PROJECTS, MISSIONS, VALUES, TEAM_MEMBERS, DOMAINS, METHODOLOGY, REASONS, TESTIMONIALS, PARTNERS,
  type Service, type Project,
} from "./data";
import {
  SERVICES_EN, PROJECTS_EN, MISSIONS_EN, VALUES_EN, TEAM_MEMBERS_EN, DOMAINS_EN, METHODOLOGY_EN, REASONS_EN, TESTIMONIALS_EN, PARTNER_TAGS_EN, CAT_EN,
} from "./data.en";

function mergeBySlug<T extends { slug: string }>(fr: T[], en: Partial<T>[]): T[] {
  return fr.map((f) => {
    const e = en.find((x) => x.slug === f.slug);
    if (!e) return f;
    // Preserve image/gallery/etc. from FR
    return { ...f, ...e, img: (e as any).img || (f as any).img, gallery: (e as any).gallery?.length ? (e as any).gallery : (f as any).gallery, cover: (e as any).cover || (f as any).cover, cat: (f as any).cat, year: (f as any).year, surface: (f as any).surface };
  });
}

const SERVICES_LOCALIZED = { fr: SERVICES, en: mergeBySlug(SERVICES, SERVICES_EN) };
const PROJECTS_LOCALIZED = { fr: PROJECTS, en: mergeBySlug(PROJECTS as any, PROJECTS_EN as any) as Project[] };

export function useServices(): Service[] { return SERVICES_LOCALIZED[useI18n().lang]; }
export function useProjects(): Project[] { return PROJECTS_LOCALIZED[useI18n().lang]; }
export function useMissions() { return useI18n().lang === "en" ? MISSIONS_EN : MISSIONS; }
export function useValues() { return useI18n().lang === "en" ? VALUES_EN : VALUES; }
export function useTeam() {
  const { lang } = useI18n();
  if (lang === "fr") return TEAM_MEMBERS;
  return TEAM_MEMBERS.map((m, i) => ({ ...m, role: TEAM_MEMBERS_EN[i]?.role ?? m.role, d: TEAM_MEMBERS_EN[i]?.d ?? m.d }));
}
export function useDomains() {
  const { lang } = useI18n();
  if (lang === "fr") return DOMAINS;
  return DOMAINS.map((d, i) => ({ ...d, t: DOMAINS_EN[i]?.t ?? d.t, items: DOMAINS_EN[i]?.items ?? d.items }));
}
export function useMethodology() { return useI18n().lang === "en" ? METHODOLOGY_EN : METHODOLOGY; }
export function useReasons() { return useI18n().lang === "en" ? REASONS_EN : REASONS; }
export function useTestimonials() { return useI18n().lang === "en" ? TESTIMONIALS_EN : TESTIMONIALS; }

export function usePartners() {
  const { lang } = useI18n();
  if (lang === "fr") return PARTNERS;
  return PARTNERS.map((p) => ({ ...p, tag: PARTNER_TAGS_EN[p.tag] ?? p.tag }));
}

export function useCat() {
  const { lang } = useI18n();
  return (c: string) => (lang === "en" ? (CAT_EN[c] ?? c) : c);
}

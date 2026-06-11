export type ThemeSlug =
  | 'modern-civic'
  | 'patriotic-classic'
  | 'warm-local'
  | 'courthouse-ledger'
  | 'river-county';

export type ThemeLayout =
  | 'editorial-split'
  | 'rally-banner'
  | 'local-stories'
  | 'ledger-rail'
  | 'river-panorama';

export type CampaignTheme = {
  slug: ThemeSlug;
  label: string;
  route: string;
  layout: ThemeLayout;
  layoutLabel: string;
  tone: string;
  className: string;
  heroLine: string;
  motif: string;
};

export const themeRoutes: CampaignTheme[] = [
  {
    slug: 'modern-civic',
    label: 'Modern Civic',
    route: '/modern-civic',
    layout: 'editorial-split',
    layoutLabel: 'Editorial split layout',
    tone: 'Refined, white-space driven, civic and composed.',
    className: 'theme-modern',
    heroLine: 'Dependable records. Respectful service. A steady hand for Stewart County.',
    motif: 'Court records and architectural linework'
  },
  {
    slug: 'patriotic-classic',
    label: 'Patriotic Classic',
    route: '/patriotic-classic',
    layout: 'rally-banner',
    layoutLabel: 'Rally banner layout',
    tone: 'Traditional campaign energy with navy, gold, and restrained patriotic detail.',
    className: 'theme-patriotic',
    heroLine: 'A classic campaign look for steady local public service.',
    motif: 'Ballot stripes, stars, and campaign banner rules'
  },
  {
    slug: 'warm-local',
    label: 'Warm Local',
    route: '/warm-local',
    layout: 'local-stories',
    layoutLabel: 'Local stories layout',
    tone: 'Approachable, neighborly, and community-forward.',
    className: 'theme-warm',
    heroLine: 'Local service, clear records, and care for the people who walk through the door.',
    motif: 'Soft county horizon, courthouse lines, and warm gold light'
  },
  {
    slug: 'courthouse-ledger',
    label: 'Courthouse Ledger',
    route: '/courthouse-ledger',
    layout: 'ledger-rail',
    layoutLabel: 'Ledger rail layout',
    tone: 'Documented, orderly, and quietly authoritative.',
    className: 'theme-ledger',
    heroLine: 'A record-forward civic presentation built around clarity, order, and trust.',
    motif: 'Ledger rules, filing rows, and court-office precision'
  },
  {
    slug: 'river-county',
    label: 'River County',
    route: '/river-county',
    layout: 'river-panorama',
    layoutLabel: 'River panorama layout',
    tone: 'Modern local, outdoors-informed, optimistic, and polished.',
    className: 'theme-river',
    heroLine: 'A fresh local look inspired by Stewart County landscapes and steady public service.',
    motif: 'River contours, route-map facts, and arched portrait framing'
  }
];

export const selectedThemeSlug: ThemeSlug = 'modern-civic';
export const defaultTheme = themeRoutes.find((theme) => theme.slug === selectedThemeSlug) ?? themeRoutes[0];

export function getThemeBySlug(slug?: string): CampaignTheme {
  return themeRoutes.find((theme) => theme.slug === slug) ?? defaultTheme;
}

# Anyone But Gray Campaign Website

Static campaign website for the `anyonebutgray.com` launch. The app is built with React, Vite, TypeScript, PrimeReact v10, PrimeIcons, PrimeFlex, React Router, and custom CSS tokens.

## Preview Themes

- `/` and `/modern-civic`: refined white-space editorial split layout.
- `/patriotic-classic`: full-width rally banner layout with restrained patriotic styling.
- `/warm-local`: softer local story layout with photo-first composition and stacked priority rows.
- `/courthouse-ledger`: document-ledger layout with a desktop left rail and non-original teal/copper palette.
- `/river-county`: panoramic local landscape layout with river/route-map styling and non-original teal/green/copper palette.

All themes read from `src/content/campaignContent.ts`, so campaign facts and placeholders only need to be edited once. The homepage theme is controlled by `selectedThemeSlug` in `src/themes/themeRegistry.ts`.

## Commands

```powershell
npm install
npm run dev
npm test
npm run build
npm run build:github
```

## Launch Checklist

Do not publish the site as final until these placeholders are replaced and confirmed:

- Keep or replace the Stewart County courthouse imagery in `public/assets/`:
  - `stewart-co-courthouse.png` is the original local courthouse photo copied from Downloads.
  - `stewart-courthouse-engraving.png` is used by the Courthouse Ledger layout.
  - `stewart-courthouse-watercolor.png` is used by the River County layout.
- Replace site copy and priorities in `src/content/campaignContent.ts`.
- Replace campaign email, phone, and social links.
- Confirm the exact paid-for/disclaimer language with the campaign.
- Recheck official election links and voting dates before launch.
- Choose the winning theme and update `selectedThemeSlug` in `src/themes/themeRegistry.ts`; preview routes can remain for review or be removed.
- Configure the GoDaddy domain `anyonebutgray.com` after the new repository is created.

## GitHub Pages + GoDaddy Domain

The included GitHub Actions workflow builds with `npm run build:github` and publishes `dist/` to GitHub Pages. For the custom domain launch, `build:github` uses the normal Vite root base (`/`) so assets load correctly at `https://anyonebutgray.com/`. Use `npm run build:github:repo-path` only if temporarily previewing at the repository-path URL.

When the domain is known:

1. Add the custom domain in the repository's GitHub Pages settings.
2. Point the GoDaddy DNS records to GitHub Pages using GitHub's current custom-domain instructions.
3. Re-run the deployment and verify HTTPS is active.

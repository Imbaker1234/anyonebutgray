# Anyone But Gray Campaign Website

Static single-page website for the `anyonebutgray.com` launch. The app is built with React, Vite, TypeScript, PrimeReact v10, PrimeIcons, PrimeFlex, React Router, and custom CSS tokens.

## Site Structure

The deployed site renders one public page at `/`. Legacy review paths are redirected back to the homepage by the React router.

All public copy lives in `src/content/campaignContent.ts`, so campaign facts and placeholders only need to be edited once. The visible page component lives in `src/components/CampaignSite.tsx`.

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
- Replace site copy and priorities in `src/content/campaignContent.ts`.
- Replace campaign email, phone, and social links.
- Confirm the exact paid-for/disclaimer language with the campaign.
- Recheck official election links and voting dates before launch.

## GitHub Pages + GoDaddy Domain

The included GitHub Actions workflow builds with `npm run build:github` and publishes `dist/` to GitHub Pages. For the custom domain launch, `build:github` uses the normal Vite root base (`/`) so assets load correctly at `https://anyonebutgray.com/`. Use `npm run build:github:repo-path` only if temporarily previewing at the repository-path URL.

Domain setup:

1. Add the custom domain in the repository's GitHub Pages settings.
2. Point the GoDaddy DNS records to GitHub Pages using GitHub's current custom-domain instructions.
3. Re-run the deployment and verify HTTPS is active.

import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { CampaignSite } from './components/CampaignSite';
import { defaultTheme, themeRoutes } from './themes/themeRegistry';

export function App() {
  return (
    <>
      <HashScroller />
      <Routes>
        <Route path="/" element={<CampaignSite theme={defaultTheme} />} />
        {themeRoutes.map((theme) => (
          <Route path={`/${theme.slug}`} element={<CampaignSite theme={theme} />} key={theme.slug} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

function HashScroller() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
}

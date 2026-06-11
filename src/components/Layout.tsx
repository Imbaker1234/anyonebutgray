import { NavLink, Outlet } from 'react-router-dom';
import { FileText, Library, Search } from 'lucide-react';
import { siteConfig } from '../content/siteConfig';

const navItems = [
  { to: '/evidence', label: 'Evidence', icon: FileText },
  { to: '/sources', label: 'Sources', icon: Library },
  { to: '/records-requests', label: 'Records Requests', icon: Search },
];

export function Layout() {
  return (
    <div className="siteShell">
      <header className="siteHeader">
        <a className="brandMark" href="/" aria-label="Anyone But Gray home">
          <span className="brandMark__symbol" aria-hidden="true">
            <img src="/assets/anyonebutgray-star-mark.png" alt="" />
          </span>
          <span>{siteConfig.name}</span>
        </a>
        <nav className="siteNav" aria-label="Primary navigation">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to}>
              <Icon aria-hidden="true" size={16} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="siteFooter">
        <div>
          <strong>{siteConfig.domain}</strong>
          <p>{siteConfig.disclaimer}</p>
        </div>
        <a href={siteConfig.complianceSource} target="_blank" rel="noreferrer">
          Tennessee Code 2-19-120
        </a>
      </footer>
    </div>
  );
}

import type { CSSProperties } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { campaignContent } from '../content/campaignContent';
import { CampaignTheme, themeRoutes } from '../themes/themeRegistry';

type CampaignSiteProps = {
  theme: CampaignTheme;
};

type AssetStyle = CSSProperties & Record<string, string>;

const assetUrl = (fileName: string) => `${import.meta.env.BASE_URL}assets/${fileName}`;
const routeUrl = (route: string) => `${import.meta.env.BASE_URL}${route.replace(/^\//, '')}`;
const imageVars = (assets: Record<string, string>): AssetStyle =>
  Object.fromEntries(Object.entries(assets).map(([name, fileName]) => [name, `url("${assetUrl(fileName)}")`])) as AssetStyle;

const ledgerRecords = [
  {
    number: '01',
    icon: 'pi-user',
    title: 'About This Site',
    body: 'Anyone But Gray is an independent voter information and campaign accountability site.',
    detail: 'Placeholder copy should be replaced with confirmed campaign language before launch.',
    href: '#about'
  },
  {
    number: '02',
    icon: 'pi-building-columns',
    title: 'Why This Election Matters',
    body: 'Local offices affect public records, services, and everyday access to government.',
    detail: 'Use this area for confirmed issue language and official voter information.',
    href: '#office'
  },
  {
    number: '03',
    icon: 'pi-check-square',
    title: 'Priorities',
    body: 'A focused plan to strengthen records, service, and accountability.',
    detail: 'Clear goals. Practical steps. Results that you can see and measure.',
    href: '#priorities'
  },
  {
    number: '04',
    icon: 'pi-envelope',
    title: 'Voting Information',
    body: 'Dates, locations, and resources for Stewart County voters.',
    detail: 'Official links and deadlines to make your voting plan simple.',
    href: '#vote-info'
  },
  {
    number: '05',
    icon: 'pi-question',
    title: 'Questions',
    body: 'Answers to common questions about the office and the election.',
    detail: 'Straightforward information about the role, the election, and how you can vote.',
    href: '#questions'
  }
];

const riverFacts = [
  {
    icon: 'pi-calendar',
    label: 'Election Day',
    value: campaignContent.election.date
  },
  {
    icon: 'pi-building-columns',
    label: 'Office on the Ballot',
    value: 'Local office'
  },
  {
    icon: 'pi-map-marker',
    label: 'Your County',
    value: campaignContent.election.county
  },
  {
    icon: 'pi-users',
    label: 'Our Future',
    value: 'Steady service for Stewart County'
  }
];

export function CampaignSite({ theme }: CampaignSiteProps) {
  if (theme.layout === 'ledger-rail') {
    return <LedgerCampaignSite theme={theme} />;
  }

  if (theme.layout === 'river-panorama') {
    return <RiverCampaignSite theme={theme} />;
  }

  return <StandardCampaignSite theme={theme} />;
}

function StandardCampaignSite({ theme }: CampaignSiteProps) {
  return (
    <div
      className={`campaign-site ${theme.className} layout-${theme.layout}`}
      data-layout={theme.layout}
      style={imageVars({ '--courthouse-photo': 'stewart-co-courthouse.png' })}
    >
      <PreviewRail activeTheme={theme} />
      <header className="site-header">
        <BrandLockup />
        <PrimaryNav />
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <h1 id="hero-title">{campaignContent.candidate.name}</h1>
            <p className="office-line">{campaignContent.candidate.office}</p>
            <p className="hero-line">{theme.heroLine}</p>
            <HeroActions />
            <ElectionDetails />
          </div>

          <CandidatePhoto className="hero-visual reveal" motif={theme.motif} />
        </section>

        <ThemeSummary theme={theme} />
        <StandardContentSections />
      </main>

      <SiteFooter />
    </div>
  );
}

function LedgerCampaignSite({ theme }: CampaignSiteProps) {
  return (
    <div
      className={`campaign-site ${theme.className} layout-${theme.layout} ledger-site`}
      data-layout={theme.layout}
      style={imageVars({
        '--ledger-spread': 'courthouse-ledger-spread.png',
        '--courthouse-engraving': 'stewart-courthouse-engraving.png'
      })}
    >
      <PreviewRail activeTheme={theme} />
      <div className="ledger-shell">
        <aside className="ledger-sidebar" aria-label="Courthouse Ledger navigation">
          <a className="ledger-monogram" href="#top" aria-label="Anyone But Gray campaign home">
            AB
          </a>
          <div className="ledger-sidebar-title">
            <strong>Anyone But Gray</strong>
            <span>Voter Information</span>
          </div>
          <nav className="ledger-nav" aria-label="Ledger navigation">
            <a href="#top">
              <i className="pi pi-home" aria-hidden="true" />
              About
            </a>
            <a href="#about">
              <i className="pi pi-id-card" aria-hidden="true" />
              About
            </a>
            <a href="#priorities">
              <i className="pi pi-list-check" aria-hidden="true" />
              Priorities
            </a>
            <a href="#vote-info">
              <i className="pi pi-calendar" aria-hidden="true" />
              Vote Info
            </a>
            <a href="#questions">
              <i className="pi pi-question-circle" aria-hidden="true" />
              Questions
            </a>
            <a href="#contact">
              <i className="pi pi-envelope" aria-hidden="true" />
              Contact
            </a>
          </nav>
          <div className="ledger-sidebar-card">Independent site</div>
          <small>Stewart County, Tennessee</small>
        </aside>

        <main className="ledger-main" id="top">
          <section className="ledger-masthead" aria-label="Courthouse Ledger masthead">
            <div>
              <span>Office</span>
              <strong>{campaignContent.candidate.office}</strong>
            </div>
            <div className="ledger-masthead-title">
              <h1>Courthouse Ledger</h1>
              <p>Records. Access. Accountability.</p>
            </div>
            <div>
              <span>Election Day</span>
              <strong>{campaignContent.election.date}</strong>
            </div>
          </section>

          <section className="ledger-book" aria-labelledby="ledger-candidate">
            <div className="ledger-book-left">
              <div className="ledger-photo-card">
                <div className="ledger-photo-placeholder">
                  <span>Your Photo Here</span>
                  <small>{campaignContent.candidate.photoPath}</small>
                </div>
              </div>
              <div className="ledger-candidate-copy">
                <h2 id="ledger-candidate">{campaignContent.candidate.name}</h2>
                <p className="ledger-office">{campaignContent.candidate.office}</p>
                <p className="ledger-script">Independent voter information</p>
                <p>{theme.heroLine}</p>
              </div>
            </div>

            <div className="ledger-book-right">
              <div className="ledger-courthouse-print" aria-label="Stewart County courthouse engraving" />
              <div className="ledger-facts">
                <span>Election Facts</span>
                <strong>Election Day: {campaignContent.election.date}</strong>
                <ol>
                  <li>
                    <b>Early voting</b>
                    <em>Confirm official window</em>
                  </li>
                  <li>
                    <b>Registration deadline</b>
                    <em>Confirm with election office</em>
                  </li>
                  <li>
                    <b>Election day</b>
                    <em>{campaignContent.election.date}</em>
                  </li>
                </ol>
              </div>
              <a className="ledger-vote-card" href="#vote-info">
                <i className="pi pi-building-columns" aria-hidden="true" />
                <span>Vote Info</span>
                <small>View official links</small>
              </a>
              <div className="ledger-ballot-card">
                <span>Office on the Ballot</span>
                <strong>{campaignContent.candidate.office}</strong>
              </div>
            </div>
          </section>

          <section className="ledger-summary" aria-label="Campaign theme summary">
            <div>
              <p data-testid="active-theme">{theme.label}</p>
              <small data-testid="layout-kind">{theme.layoutLabel}</small>
            </div>
            <span>{theme.tone}</span>
          </section>

          <section className="ledger-records" aria-label="Campaign records">
            {ledgerRecords.map((record) => (
              <a className="ledger-record-row" href={record.href} key={record.number}>
                <div className="ledger-record-number">
                  <span>Record</span>
                  <strong>{record.number}</strong>
                </div>
                <i className={`pi ${record.icon}`} aria-hidden="true" />
                <div>
                  <h3>{record.title}</h3>
                  <p>{record.body}</p>
                </div>
                <p>{record.detail}</p>
                <span className="ledger-row-action">View Section</span>
              </a>
            ))}
          </section>

          <LedgerContentSections />
          <LedgerContact />
          <LedgerFooter />
        </main>
      </div>
    </div>
  );
}

function RiverCampaignSite({ theme }: CampaignSiteProps) {
  return (
    <div
      className={`campaign-site ${theme.className} layout-${theme.layout} river-site`}
      data-layout={theme.layout}
      style={imageVars({
        '--river-panorama': 'river-county-panorama.png',
        '--courthouse-watercolor': 'stewart-courthouse-watercolor.png',
        '--courthouse-photo': 'stewart-co-courthouse.png'
      })}
    >
      <PreviewRail activeTheme={theme} />
      <main className="river-main" id="top">
        <header className="river-nav-wrap" aria-label="River County navigation">
          <a className="river-brand" href="#top" aria-label="Anyone But Gray campaign home">
            <strong>{campaignContent.candidate.name}</strong>
            <small>{campaignContent.candidate.office}</small>
          </a>
          <PrimaryNav className="river-nav" />
          <a className="river-vote-button" href="#vote-info">
            <i className="pi pi-map-marker" aria-hidden="true" />
            Vote Info
          </a>
        </header>

        <section className="river-hero" aria-labelledby="river-title">
          <div className="river-hero-copy reveal">
            <h1 id="river-title">{campaignContent.candidate.name}</h1>
            <p className="river-office">{campaignContent.candidate.office}</p>
            <div className="river-wave" aria-hidden="true" />
            <p className="river-election">
              Election Day: <strong>{campaignContent.election.date}</strong>
            </p>
            <p className="river-candidacy">
              <i className="pi pi-check-circle" aria-hidden="true" />
              Independent voter information
            </p>
            <HeroActions />
          </div>

          <div className="river-portrait reveal" aria-label="Campaign visual placeholder">
            <div className="river-photo-placeholder">
              <span>Campaign Visual</span>
              <strong>{campaignContent.candidate.name}</strong>
              <small>Drop in {campaignContent.candidate.photoPath}</small>
            </div>
            <div className="river-ribbon">Community. Integrity. Service.</div>
          </div>
        </section>

        <section className="river-route-strip" aria-label="Campaign route facts">
          <div className="river-route-card">
            <span>Our route to a stronger</span>
            <strong>{campaignContent.election.county}</strong>
          </div>
          {riverFacts.map((fact) => (
            <div className="river-fact" key={fact.label}>
              <i className={`pi ${fact.icon}`} aria-hidden="true" />
              <div>
                <strong>{fact.label}</strong>
                <span>{fact.value}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="river-theme-summary" aria-label="Campaign theme summary">
          <div>
            <p data-testid="active-theme">{theme.label}</p>
            <small data-testid="layout-kind">{theme.layoutLabel}</small>
          </div>
          <span>{theme.tone}</span>
        </section>

        <section className="river-meet-band" id="about" aria-labelledby="river-about-title">
          <div>
            <span>About</span>
            <h2 id="river-about-title">{campaignContent.about.heading}</h2>
            <p>{campaignContent.about.body}</p>
            <a className="river-small-button" href="#contact">
              Contact the Campaign
              <i className="pi pi-arrow-right" aria-hidden="true" />
            </a>
          </div>
          <figure className="river-courthouse-card">
            <span aria-hidden="true" />
            <figcaption>Stewart County Court House</figcaption>
          </figure>
        </section>

        <section className="river-office-band" id="office" aria-labelledby="river-office-title">
          <i className="pi pi-building-columns" aria-hidden="true" />
          <div>
            <span>Why it matters</span>
            <h2 id="river-office-title">{campaignContent.office.heading}</h2>
            <p>{campaignContent.office.body}</p>
          </div>
          <a href="#about">Learn More</a>
        </section>

        <section className="river-priorities" id="priorities" aria-labelledby="river-priorities-title">
          <div className="river-section-kicker">
            <span>Campaign Focus</span>
            <h2 id="river-priorities-title">Priorities</h2>
          </div>
          <div className="river-priority-list">
            {campaignContent.priorities.map((priority, index) => (
              <article key={priority.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{priority.title}</h3>
                  <p>{priority.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="river-vote-map" id="vote-info" aria-labelledby="river-vote-title">
          <div>
            <h2 id="river-vote-title">Voting Information</h2>
            <p>Everything you need for a smooth voting experience should point back to official sources.</p>
            <a className="river-small-button" href={campaignContent.voterLinks[0].href} target="_blank" rel="noreferrer">
              Get Vote Info
              <i className="pi pi-arrow-up-right" aria-hidden="true" />
            </a>
          </div>
          <div className="river-link-columns">
            {campaignContent.voterLinks.map((link) => (
              <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                <i className="pi pi-map-marker" aria-hidden="true" />
                <strong>{link.label}</strong>
                <span>{link.note}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="river-questions" id="questions" aria-labelledby="river-questions-title">
          <div className="section-heading">
            <h2 id="river-questions-title">Questions</h2>
          </div>
          <FaqAccordion />
        </section>

        <RiverContact />
      </main>
      <RiverFooter />
    </div>
  );
}

function BrandLockup() {
  return (
    <a className="brand-lockup" href="#top" aria-label="Anyone But Gray campaign home">
      <span className="brand-mark">AB</span>
      <span>
        <strong>{campaignContent.candidate.name}</strong>
        <small>{campaignContent.candidate.office}</small>
      </span>
    </a>
  );
}

function PrimaryNav({ className = 'site-nav' }: { className?: string }) {
  return (
    <nav className={className} aria-label="Primary navigation">
      {campaignContent.navigation.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function HeroActions() {
  return (
    <div className="hero-actions" aria-label="Campaign actions">
      <a className="p-button p-component primary-action" href="#vote-info">
        <span className="p-button-label">{campaignContent.election.primaryCta}</span>
      </a>
      <a className="secondary-action" href="#about">
        {campaignContent.election.secondaryCta}
      </a>
    </div>
  );
}

function ElectionDetails() {
  return (
    <dl className="election-details">
      <div>
        <dt>Election Day</dt>
        <dd>{campaignContent.election.date}</dd>
      </div>
      <div>
        <dt>Ballot</dt>
        <dd>{campaignContent.candidate.ballotLine}</dd>
      </div>
    </dl>
  );
}

function CandidatePhoto({ className, motif }: { className: string; motif: string }) {
  return (
    <div className={className} aria-label="Campaign visual placeholder">
      <div className="photo-frame">
        <div className="photo-placeholder">
          <span>Campaign Visual</span>
          <strong>{campaignContent.candidate.name}</strong>
          <small>Drop in {campaignContent.candidate.photoPath}</small>
        </div>
      </div>
      <div className="visual-caption">
        <span>{motif}</span>
      </div>
    </div>
  );
}

function ThemeSummary({ theme }: CampaignSiteProps) {
  return (
    <section className="intro-band" aria-label="Campaign theme summary">
      <div>
        <p data-testid="active-theme">{theme.label}</p>
        <small data-testid="layout-kind">{theme.layoutLabel}</small>
      </div>
      <span>{theme.tone}</span>
    </section>
  );
}

function StandardContentSections() {
  return (
    <>
      <section className="content-section split-section" id="about" aria-labelledby="about-title">
        <div>
          <h2 id="about-title">{campaignContent.about.heading}</h2>
          <p>{campaignContent.about.body}</p>
        </div>
        <aside className="note-panel">
          <strong>Campaign copy note</strong>
          <p>{campaignContent.about.note}</p>
        </aside>
      </section>

      <section className="content-section office-section" id="office" aria-labelledby="office-title">
        <div className="section-heading">
          <h2 id="office-title">{campaignContent.office.heading}</h2>
          <p>{campaignContent.office.body}</p>
        </div>
      </section>

      <PrioritiesSection className="content-section priorities-section" headingId="priorities-title" />
      <VoteSection className="content-section vote-section" headingId="vote-title" />
      <QuestionsSection className="content-section faq-section" headingId="faq-title" />
      <ContactSection />
    </>
  );
}

function LedgerContentSections() {
  return (
    <section className="ledger-details" aria-label="Campaign details">
      <article id="about">
        <span>Record 01</span>
        <h2>{campaignContent.about.heading}</h2>
        <p>{campaignContent.about.body}</p>
      </article>
      <article id="office">
        <span>Record 02</span>
        <h2>{campaignContent.office.heading}</h2>
        <p>{campaignContent.office.body}</p>
      </article>
      <article id="priorities">
        <span>Record 03</span>
        <h2>Priorities</h2>
        <div className="ledger-priority-list">
          {campaignContent.priorities.map((priority) => (
            <div key={priority.title}>
              <h3>{priority.title}</h3>
              <p>{priority.body}</p>
            </div>
          ))}
        </div>
      </article>
      <article id="vote-info">
        <span>Record 04</span>
        <h2>Voting Information</h2>
        <div className="ledger-link-list">
          {campaignContent.voterLinks.map((link) => (
            <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
              <strong>{link.label}</strong>
              <small>{link.note}</small>
              <i className="pi pi-arrow-up-right" aria-hidden="true" />
            </a>
          ))}
        </div>
      </article>
      <article id="questions">
        <span>Record 05</span>
        <h2>Questions</h2>
        <FaqAccordion />
      </article>
    </section>
  );
}

function PrioritiesSection({ className, headingId }: { className: string; headingId: string }) {
  return (
    <section className={className} id="priorities" aria-labelledby={headingId}>
      <div className="section-heading">
        <h2 id={headingId}>Priorities</h2>
        <p>Three clear promises can live here once the campaign confirms final wording.</p>
      </div>
      <div className="priority-grid">
        {campaignContent.priorities.map((priority, index) => (
          <article className="priority-card" key={priority.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{priority.title}</h3>
            <p>{priority.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function VoteSection({ className, headingId }: { className: string; headingId: string }) {
  return (
    <section className={className} id="vote-info" aria-labelledby={headingId}>
      <div className="section-heading">
        <h2 id={headingId}>Voting Information</h2>
        <p>Confirm polling places, early voting windows, and registration details with official election sources before sharing.</p>
      </div>
      <div className="link-list">
        {campaignContent.voterLinks.map((link) => (
          <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
            <span>{link.label}</span>
            <small>{link.note}</small>
            <i className="pi pi-arrow-up-right" aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}

function QuestionsSection({ className, headingId }: { className: string; headingId: string }) {
  return (
    <section className={className} id="questions" aria-labelledby={headingId}>
      <div className="section-heading">
        <h2 id={headingId}>Questions</h2>
      </div>
      <FaqAccordion />
    </section>
  );
}

function FaqAccordion() {
  return (
    <Accordion multiple>
      {campaignContent.faqs.map((faq) => (
        <AccordionTab header={faq.question} key={faq.question}>
          <p>{faq.answer}</p>
        </AccordionTab>
      ))}
    </Accordion>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div>
        <h2 id="contact-title">{campaignContent.contact.heading}</h2>
        <p>Replace these placeholders with the campaign's confirmed contact channels before launch.</p>
      </div>
      <ContactActions />
    </section>
  );
}

function LedgerContact() {
  return (
    <section className="ledger-contact" id="contact" aria-labelledby="ledger-contact-title">
      <div>
        <span>Stewart County</span>
        <h2 id="ledger-contact-title">{campaignContent.contact.heading}</h2>
      </div>
      <ContactActions />
    </section>
  );
}

function RiverContact() {
  return (
    <section className="river-contact" id="contact" aria-labelledby="river-contact-title">
      <div>
        <span>Thank you, Stewart County.</span>
        <h2 id="river-contact-title">{campaignContent.contact.heading}</h2>
      </div>
      <ContactActions />
    </section>
  );
}

function ContactActions() {
  return (
    <div className="contact-actions">
      <a className="p-button p-component" href={`mailto:${campaignContent.contact.email}`}>
        <i className="pi pi-envelope" aria-hidden="true" />
        <span className="p-button-label">{campaignContent.contact.email}</span>
      </a>
      <a className="p-button p-component" href={campaignContent.contact.facebook}>
        <i className="pi pi-facebook" aria-hidden="true" />
        <span className="p-button-label">Facebook</span>
      </a>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="disclaimer">{campaignContent.launchReadiness.disclaimer}</p>
      <SourceLinks />
    </footer>
  );
}

function LedgerFooter() {
  return (
    <footer className="ledger-footer">
      <i className="pi pi-briefcase" aria-hidden="true" />
      <p>{campaignContent.launchReadiness.disclaimer}</p>
      <SourceLinks />
    </footer>
  );
}

function RiverFooter() {
  return (
    <footer className="river-footer">
      <p>{campaignContent.launchReadiness.disclaimer}</p>
      <SourceLinks />
    </footer>
  );
}

function SourceLinks() {
  return (
    <div>
      {campaignContent.sources.map((source) => (
        <a href={source.href} key={source.href} target="_blank" rel="noreferrer">
          {source.label}
        </a>
      ))}
    </div>
  );
}

function PreviewRail({ activeTheme }: { activeTheme: CampaignTheme }) {
  return (
    <div className="preview-rail" aria-label="Theme preview routes">
      <span>Previewing {activeTheme.label}</span>
      <nav>
        {themeRoutes.map((theme) => (
          <a
            aria-current={theme.slug === activeTheme.slug ? 'page' : undefined}
            href={routeUrl(theme.route)}
            key={theme.slug}
          >
            {theme.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

import type { CSSProperties } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { campaignContent } from '../content/campaignContent';

type AssetStyle = CSSProperties & Record<string, string>;

const assetUrl = (fileName: string) => `${import.meta.env.BASE_URL}assets/${fileName}`;
const imageVars = (assets: Record<string, string>): AssetStyle =>
  Object.fromEntries(Object.entries(assets).map(([name, fileName]) => [name, `url("${assetUrl(fileName)}")`])) as AssetStyle;

const heroLine = 'Independent voter information, election resources, and accountability notes for Stewart County voters.';
const visualMotif = 'Stewart County voter information';

export function CampaignSite() {
  return (
    <div
      className="campaign-site theme-modern layout-editorial-split"
      data-layout="single-page"
      style={imageVars({ '--courthouse-photo': 'stewart-co-courthouse.png' })}
    >
      <header className="site-header">
        <BrandLockup />
        <PrimaryNav />
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <h1 id="hero-title">{campaignContent.candidate.name}</h1>
            <p className="office-line">{campaignContent.candidate.office}</p>
            <p className="hero-line">{heroLine}</p>
            <HeroActions />
            <ElectionDetails />
          </div>

          <CandidatePhoto />
        </section>

        <ContentSections />
      </main>

      <SiteFooter />
    </div>
  );
}

function BrandLockup() {
  return (
    <a className="brand-lockup" href="#top" aria-label="Anyone But Gray home">
      <span className="brand-mark">AB</span>
      <span>
        <strong>{campaignContent.candidate.name}</strong>
        <small>{campaignContent.candidate.office}</small>
      </span>
    </a>
  );
}

function PrimaryNav() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
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
    <div className="hero-actions" aria-label="Site actions">
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
        <dt>Resource</dt>
        <dd>{campaignContent.candidate.ballotLine}</dd>
      </div>
    </dl>
  );
}

function CandidatePhoto() {
  return (
    <div className="hero-visual reveal" aria-label="Campaign visual placeholder">
      <div className="photo-frame">
        <div className="photo-placeholder">
          <span>Voter Resource</span>
          <strong>{campaignContent.candidate.name}</strong>
          <small>{campaignContent.candidate.photoPath}</small>
        </div>
      </div>
      <div className="visual-caption">
        <span>{visualMotif}</span>
      </div>
    </div>
  );
}

function ContentSections() {
  return (
    <>
      <section className="content-section split-section" id="about" aria-labelledby="about-title">
        <div>
          <h2 id="about-title">{campaignContent.about.heading}</h2>
          <p>{campaignContent.about.body}</p>
        </div>
        <aside className="note-panel">
          <strong>Independent site</strong>
          <p>{campaignContent.about.note}</p>
        </aside>
      </section>

      <section className="content-section office-section" id="office" aria-labelledby="office-title">
        <div className="section-heading">
          <h2 id="office-title">{campaignContent.office.heading}</h2>
          <p>{campaignContent.office.body}</p>
        </div>
      </section>

      <PrioritiesSection />
      <VoteSection />
      <QuestionsSection />
      <ContactSection />
    </>
  );
}

function PrioritiesSection() {
  return (
    <section className="content-section priorities-section" id="priorities" aria-labelledby="priorities-title">
      <div className="section-heading">
        <h2 id="priorities-title">Priorities</h2>
        <p>Three clear issue areas for voters reviewing this local election.</p>
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

function VoteSection() {
  return (
    <section className="content-section vote-section" id="vote-info" aria-labelledby="vote-title">
      <div className="section-heading">
        <h2 id="vote-title">Voting Information</h2>
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

function QuestionsSection() {
  return (
    <section className="content-section faq-section" id="questions" aria-labelledby="faq-title">
      <div className="section-heading">
        <h2 id="faq-title">Questions</h2>
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
        <p>Use the confirmed contact channels for the campaign or site organizer here.</p>
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

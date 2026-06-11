import { ArrowRight, ArrowUpRight, FileText, Library, Search, ShieldAlert } from 'lucide-react';
import { Link, Route, Routes } from 'react-router-dom';
import { EvidenceCard } from './components/EvidenceCard';
import { Layout } from './components/Layout';
import { OpinionCaseCard } from './components/OpinionCaseCard';
import { RecordRequestList } from './components/RecordRequestList';
import { SourceLedger } from './components/SourceLedger';
import { StatusBadge } from './components/StatusBadge';
import { evidenceItems, featuredEvidence, getEvidenceById, publishedEvidence } from './content/evidence';
import { opinionCases } from './content/opinions';
import { recordRequests } from './content/recordsRequests';
import { accountabilityTimeline, fundingTrend, summaryPoints } from './content/summary';

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

function formatMoney(amount: number) {
  return moneyFormatter.format(amount);
}

function EvidenceSupportLinks({ evidenceIds, label }: { evidenceIds: string[]; label: string }) {
  const items = evidenceIds.map(getEvidenceById);

  return (
    <div className="compactSupportList" aria-label={label}>
      {items.map((item) => (
        <a className="compactSupportLink" href={item.sourceUrl} target="_blank" rel="noreferrer" key={item.id}>
          <div>
            <StatusBadge status={item.status} />
            <strong>{item.title}</strong>
          </div>
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      ))}
    </div>
  );
}

function FundingIncreaseSection() {
  return (
    <section className="fundingCallout" aria-labelledby="funding-callout-heading">
      <div className="fundingCallout__metric">
        <span>+{fundingTrend.increasePercent}%</span>
        <h2 id="funding-callout-heading">{fundingTrend.title}</h2>
        <p>{fundingTrend.text}</p>
      </div>
      <div className="fundingCallout__details">
        <div className="fundingFigures" aria-label="Sheriff and jail funding comparison">
          <div>
            <span>{fundingTrend.startLabel}</span>
            <strong>{formatMoney(fundingTrend.startAmount)}</strong>
          </div>
          <div>
            <span>{fundingTrend.endLabel}</span>
            <strong>{formatMoney(fundingTrend.endAmount)}</strong>
          </div>
          <div>
            <span>Increase</span>
            <strong>{formatMoney(fundingTrend.increaseAmount)}</strong>
          </div>
        </div>
        <div className="fundingSupportGrid">
          <div>
            <h3>Funding records</h3>
            <EvidenceSupportLinks evidenceIds={fundingTrend.evidenceIds} label="Budget records for funding increase" />
          </div>
          <div>
            <h3>Failures still in the record</h3>
            <EvidenceSupportLinks
              evidenceIds={fundingTrend.unresolvedEvidenceIds}
              label="Evidence of unresolved administration failures"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PersuasiveSummarySection() {
  return (
    <section className="persuasiveSummary" aria-labelledby="persuasive-summary-heading">
      <div className="persuasiveSummary__intro">
        <div>
          <h2 id="persuasive-summary-heading">The case against Gray is a management failure case.</h2>
          <p className="persuasiveSummary__lede">
            This site does not need to pretend every crime number is disastrous. The stronger
            argument is simpler: after years in office, Gray still has a record of staffing
            warnings, jail-condition complaints, litigation exposure, weak public accountability,
            and budgeted sheriff/jail spending that voters can compare against results.
          </p>
        </div>
        <div className="persuasiveSummary__standard">
          <strong>Bottom line</strong>
          <p>
            Stewart County deserves a sheriff who can staff the office, answer citizens, run the
            jail competently, and show records that prove accountability.
          </p>
        </div>
      </div>
      <div className="summaryPointGrid">
        {summaryPoints.map((point) => (
          <article className="summaryPoint" key={point.id}>
            <h3>{point.title}</h3>
            <p>{point.text}</p>
            <EvidenceSupportLinks evidenceIds={point.evidenceIds} label={`Support for ${point.title}`} />
          </article>
        ))}
      </div>
    </section>
  );
}

function AccountabilityTimelineSection() {
  return (
    <section className="timelineBand" aria-labelledby="timeline-heading">
      <div className="sectionHeading">
        <span>03</span>
        <div>
          <h2 id="timeline-heading">Accountability timeline</h2>
          <p>
            The pattern is easier to see in sequence: tenure, public-safety warnings, jail
            complaints, budget context, outside review, and unresolved litigation.
          </p>
        </div>
      </div>
      <div className="timelineList">
        {accountabilityTimeline.map((event) => (
          <article className="timelineItem" key={event.id}>
            <div className="timelineItem__date">{event.date}</div>
            <div className="timelineItem__body">
              <h3>{event.title}</h3>
              <p>{event.text}</p>
              <EvidenceSupportLinks evidenceIds={event.evidenceIds} label={`Sources for ${event.title}`} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <section className="bannerHero" aria-label="Anyone But Gray campaign banner">
        <img
          src="/assets/anyonebutgray-banner-hero.png"
          alt="Anyone But Gray banner with Sheriff Gray campaign artwork"
        />
      </section>

      <section className="heroSection">
        <div className="heroSection__copy">
          <h1>Gray Wrong For Stewart County</h1>
          <p>
            The opinion is simple: Sheriff Gray has had years to stabilize staffing, training,
            jail conditions, and basic responsiveness. The public record shows warnings,
            complaints, turnover, and headline stunts instead of a fixed system.
          </p>
          <a className="heroFundingFact" href="#funding-callout-heading">
            <span>+{fundingTrend.increasePercent}%</span>
            <strong>
              Sheriff and jail appropriations rose {formatMoney(fundingTrend.increaseAmount)}{' '}
              while the same failures remained in the record.
            </strong>
            <ArrowRight aria-hidden="true" size={17} />
          </a>
          <div className="heroActions">
            <Link className="button button--primary" to="/evidence">
              <FileText aria-hidden="true" size={18} />
              Review Support
            </Link>
            <Link className="button button--secondary" to="/sources">
              <Library aria-hidden="true" size={18} />
              Source Ledger
            </Link>
          </div>
        </div>
        <div className="recordPanel" aria-label="Why Gray is wrong for Stewart County">
          <div className="recordPanel__header">
            <ShieldAlert aria-hidden="true" size={22} />
            <span>Why this matters</span>
          </div>
          <ul>
            <li>Staffing shortages became public-safety warnings.</li>
            <li>Training concerns deserve records, not excuses.</li>
            <li>Jail complaints should not need a publicity stunt.</li>
            <li>Citizens deserve complaint logs and answers.</li>
          </ul>
        </div>
      </section>

      <FundingIncreaseSection />

      <PersuasiveSummarySection />

      <section className="sectionBand sectionBand--opinions">
        <div className="opinionStack">
          {opinionCases.map((opinionCase, index) => (
            <OpinionCaseCard key={opinionCase.id} opinionCase={opinionCase} index={index} />
          ))}
        </div>
      </section>

      <section className="sectionBand sectionBand--tight">
        <div className="sectionHeading">
          <span>02</span>
          <div>
            <h2>Key support</h2>
            <p>
              The strongest public support starts with staffing, public-safety warnings, budget
              context, jail complaints, training-spending questions, and litigation exposure.
            </p>
          </div>
        </div>
        <div className="evidenceGrid">
          {featuredEvidence.map((item) => (
            <EvidenceCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <AccountabilityTimelineSection />
    </>
  );
}

function EvidencePage() {
  return (
    <section className="pageSection">
      <div className="pageIntro">
        <h1>Support</h1>
        <p>
          Every item below carries a source, date, status label, and caution note. Strong opinions
          should still show voters the support behind them.
        </p>
      </div>
      <div className="evidenceGrid evidenceGrid--full">
        {publishedEvidence.map((item) => (
          <EvidenceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function SourcesPage() {
  return (
    <section className="pageSection">
      <div className="pageIntro">
        <h1>Source ledger</h1>
        <p>
          This ledger is the control surface for the site: if a claim cannot be matched to a source,
          it should not be published as evidence.
        </p>
      </div>
      <SourceLedger items={evidenceItems} />
    </section>
  );
}

function RecordsRequestsPage() {
  return (
    <section className="pageSection">
      <div className="pageIntro">
        <h1>Records requests</h1>
        <p>
          These are the records that would turn community concerns into verifiable evidence or show
          that a claim should be dropped.
        </p>
      </div>
      <RecordRequestList requests={recordRequests} />
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="pageSection pageSection--centered">
      <div className="pageIntro">
        <h1>Page not found</h1>
        <p>The requested page is not part of the source ledger.</p>
      </div>
      <Link className="button button--primary" to="/">
        <Search aria-hidden="true" size={18} />
        Return home
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="evidence" element={<EvidencePage />} />
        <Route path="sources" element={<SourcesPage />} />
        <Route path="records-requests" element={<RecordsRequestsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

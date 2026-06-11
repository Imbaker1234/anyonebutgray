import { ArrowUpRight, FileText } from 'lucide-react';
import type { EvidenceItem } from '../content/evidence';
import { StatusBadge } from './StatusBadge';

export function EvidenceCard({ item }: { item: EvidenceItem }) {
  return (
    <article className="evidenceCard">
      <div className="evidenceCard__topline">
        <StatusBadge status={item.status} />
        <span className="evidenceCard__date">{item.date}</span>
      </div>
      <h3>{item.title}</h3>
      <p className="evidenceCard__claim">{item.shortClaim}</p>
      <p>{item.summary}</p>
      <div className="evidenceCard__note">
        <FileText aria-hidden="true" size={16} />
        <span>{item.notes}</span>
      </div>
      <a className="sourceLink" href={item.sourceUrl} target="_blank" rel="noreferrer">
        <span>{item.sourceName}</span>
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </article>
  );
}

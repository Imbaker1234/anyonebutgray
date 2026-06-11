import { ArrowUpRight } from 'lucide-react';
import { getEvidenceById } from '../content/evidence';
import type { OpinionCase } from '../content/opinions';
import { StatusBadge } from './StatusBadge';

export function OpinionCaseCard({ opinionCase, index }: { opinionCase: OpinionCase; index: number }) {
  const evidenceItems = opinionCase.evidenceIds.map(getEvidenceById);

  return (
    <article className="opinionCard">
      <div className="opinionCard__marker">{String(index + 1).padStart(2, '0')}</div>
      <div className="opinionCard__content">
        <h3>{opinionCase.title}</h3>
        <p className="opinionCard__opinion">{opinionCase.opinion}</p>
        <p className="opinionCard__caveat">{opinionCase.caveat}</p>
        <div className="supportList" aria-label={`Supporting evidence for ${opinionCase.title}`}>
          {evidenceItems.map((item) => (
            <a className="supportItem" key={item.id} href={item.sourceUrl} target="_blank" rel="noreferrer">
              <div>
                <StatusBadge status={item.status} />
                <strong>{item.title}</strong>
                <span>{item.shortClaim}</span>
              </div>
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

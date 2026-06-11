import { ArrowUpRight } from 'lucide-react';
import type { EvidenceItem } from '../content/evidence';
import { StatusBadge } from './StatusBadge';

export function SourceLedger({ items }: { items: EvidenceItem[] }) {
  return (
    <div className="sourceLedger" role="region" aria-label="Source ledger">
      <table>
        <thead>
          <tr>
            <th scope="col">Claim lane</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Source</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <strong>{item.title}</strong>
                <span>{item.shortClaim}</span>
              </td>
              <td>
                <StatusBadge status={item.status} />
              </td>
              <td>{item.date}</td>
              <td>
                <a href={item.sourceUrl} target="_blank" rel="noreferrer">
                  {item.sourceName}
                  <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

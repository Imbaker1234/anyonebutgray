import type { EvidenceStatus } from '../content/evidence';

const statusClassMap: Record<EvidenceStatus, string> = {
  'Confirmed public record': 'statusBadge statusBadge--record',
  'News report': 'statusBadge statusBadge--news',
  'Court allegation': 'statusBadge statusBadge--court',
  Context: 'statusBadge statusBadge--context',
};

export function StatusBadge({ status }: { status: EvidenceStatus }) {
  return <span className={statusClassMap[status]}>{status}</span>;
}

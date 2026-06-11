import { describe, expect, it } from 'vitest';
import { evidenceItems, evidenceStatuses, publishedEvidence } from '../content/evidence';
import { opinionCases } from '../content/opinions';
import { accountabilityTimeline, fundingTrend, summaryPoints } from '../content/summary';

const forbiddenTerms = ['M' + 'ary', 'Tem' + 'plon', 'Vote-For-' + 'M' + 'ary'];

describe('evidence source model', () => {
  it('keeps every published item tied to a source, date, status, and caution note', () => {
    for (const item of publishedEvidence) {
      expect(item.sourceUrl).toMatch(/^https:\/\//);
      expect(item.date.trim().length).toBeGreaterThan(0);
      expect(evidenceStatuses).toContain(item.status);
      expect(item.notes.trim().length).toBeGreaterThan(0);
    }
  });

  it('does not publish unsupported records-request items as evidence', () => {
    const unsupported = evidenceItems.filter((item) => item.sourceType === 'records-request');

    expect(unsupported.every((item) => !item.publishable)).toBe(true);
  });

  it('keeps prohibited campaign linkage terms out of evidence copy', () => {
    const serialized = JSON.stringify({ evidenceItems, opinionCases });

    for (const term of forbiddenTerms) {
      expect(serialized).not.toContain(term);
    }
  });

  it('keeps every opinion case tied to existing evidence', () => {
    const evidenceIds = new Set(evidenceItems.map((item) => item.id));

    for (const opinionCase of opinionCases) {
      expect(opinionCase.evidenceIds.length).toBeGreaterThan(0);

      for (const evidenceId of opinionCase.evidenceIds) {
        expect(evidenceIds.has(evidenceId)).toBe(true);
      }
    }
  });

  it('keeps summary, funding, and timeline content tied to existing evidence', () => {
    const evidenceIds = new Set(evidenceItems.map((item) => item.id));
    const sections = [
      ...summaryPoints,
      ...accountabilityTimeline,
      fundingTrend,
      { ...fundingTrend, evidenceIds: fundingTrend.unresolvedEvidenceIds },
    ];

    for (const section of sections) {
      expect(section.evidenceIds.length).toBeGreaterThan(0);

      for (const evidenceId of section.evidenceIds) {
        expect(evidenceIds.has(evidenceId)).toBe(true);
      }
    }
  });
});

export interface SummaryPoint {
  id: string;
  title: string;
  text: string;
  evidenceIds: string[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  text: string;
  evidenceIds: string[];
}

export interface FundingTrend {
  id: string;
  title: string;
  startLabel: string;
  startAmount: number;
  endLabel: string;
  endAmount: number;
  increaseAmount: number;
  increasePercent: number;
  text: string;
  evidenceIds: string[];
  unresolvedEvidenceIds: string[];
}

export const fundingTrend: FundingTrend = {
  id: 'sheriff-jail-funding-increase',
  title: 'More money did not cure the failures.',
  startLabel: 'FY2022-23 Sheriff + Jail',
  startAmount: 3759563,
  endLabel: 'FY2025-26 Sheriff + Jail',
  endAmount: 4599937,
  increaseAmount: 840374,
  increasePercent: 22.4,
  text:
    'Combined Sheriff Department and Jail appropriations rose by $840,374 from FY2022-23 to FY2025-26. Voters can fairly ask why a larger budget has not produced a visibly stable, responsive, accountable operation.',
  evidenceIds: [
    'fy2023-sheriff-jail-appropriations-baseline',
    'fy2026-sheriff-jail-appropriations',
  ],
  unresolvedEvidenceIds: [
    'staffing-retention-shortage',
    'jail-heating-conditions',
    'fy2025-training-spending',
    'hunt-former-jail-employee-docket',
  ],
};

export const summaryPoints: SummaryPoint[] = [
  {
    id: 'management-not-crime-wave',
    title: 'This is a management case, not a scare tactic.',
    text:
      'Voters do not need to prove every crime metric moved in the wrong direction to reject an incumbent sheriff. The stronger case is staffing instability, jail problems, weak transparency, and repeated litigation exposure under Gray’s watch.',
    evidenceIds: [
      'gray-took-office-and-official-mission',
      'staffing-retention-shortage',
      'jail-heating-conditions',
      'hunt-former-jail-employee-docket',
    ],
  },
  {
    id: 'budget-without-stability',
    title: 'Public money kept flowing, but stability did not follow.',
    text:
      'County records show combined Sheriff Department and Jail appropriations rising 22.4% from FY2022-23 to FY2025-26. That does not prove waste, but it makes the performance question sharper: what did taxpayers get for the money?',
    evidenceIds: [
      'fy2023-sheriff-jail-appropriations-baseline',
      'fy2026-sheriff-jail-appropriations',
      'fy2025-training-spending',
    ],
  },
  {
    id: 'accountability-gap',
    title: 'The public should not have to dig this hard.',
    text:
      'The office offers some public lookup tools, but complaint outcomes, discipline records, use-of-force summaries, staffing records, and processing-time data still have to be chased through records requests.',
    evidenceIds: ['official-public-inquiry-tools', 'official-public-records-request-form'],
  },
];

export const accountabilityTimeline: TimelineEvent[] = [
  {
    id: 'gray-took-office',
    date: '2018',
    title: 'Gray takes office',
    text:
      'The official sheriff office biography says Gray took office September 1, 2018, giving voters a full-term record to judge.',
    evidenceIds: ['gray-took-office-and-official-mission'],
  },
  {
    id: 'fatal-shooting-review',
    date: '2022',
    title: 'Fatal deputy-involved shooting goes to outside review',
    text:
      'TBI opened an independent investigation after Stewart County deputies shot and killed Billy Joe Reynolds. This belongs in the timeline as external-review context, not as a misconduct finding.',
    evidenceIds: ['tbi-fatal-shooting-external-review'],
  },
  {
    id: 'staffing-warning',
    date: '2023',
    title: 'Gray publicly warns about staffing consequences',
    text:
      'News reports captured the office’s staffing and pay crisis, including warnings about response times, deputy backup, SRO coverage, pod closures, and inmate transfers.',
    evidenceIds: ['staffing-retention-shortage', 'wsmv-staffing-public-safety-warning'],
  },
  {
    id: 'lawsuits-2025',
    date: '2025',
    title: 'Federal litigation exposure grows',
    text:
      'Federal dockets show Hunt and Doe litigation involving Stewart County or Gray’s office orbit late in the term. These remain allegations unless proven, but they are leadership-risk context.',
    evidenceIds: ['hunt-former-jail-employee-docket', 'doe-civil-rights-docket'],
  },
  {
    id: 'jail-and-lawsuits-2026',
    date: '2026',
    title: 'Jail complaints and another Doe docket continue the pattern',
    text:
      'Cold-pod complaints became public news, Gray staged an overnight jail stay, and a second Doe civil-rights docket appeared in federal court.',
    evidenceIds: ['jail-heating-conditions', 'doe-2026-civil-rights-docket'],
  },
];

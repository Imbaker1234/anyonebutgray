export interface OpinionCase {
  id: string;
  title: string;
  opinion: string;
  caveat: string;
  evidenceIds: string[];
}

export const opinionCases: OpinionCase[] = [
  {
    id: 'wrong-for-stewart-county',
    title: 'Gray is wrong for Stewart County.',
    opinion:
      'A sheriff who has to warn the public about patrols without backup, slower response times, SROs being pulled from schools, and inmates being shipped away has not solved the job voters hired him to do.',
    caveat:
      "This is an opinion about leadership performance. The supporting data is the publicly reported staffing crisis and Gray's own public warnings about what that crisis could mean.",
    evidenceIds: [
      'gray-took-office-and-official-mission',
      'staffing-retention-shortage',
      'wsmv-staffing-public-safety-warning',
    ],
  },
  {
    id: 'budget-without-results',
    title: 'A 22.4% funding increase did not buy a stronger public-safety operation.',
    opinion:
      'Taxpayers put $840,374 more into combined sheriff and jail appropriations between FY2022-23 and FY2025-26. Gray should not get credit for excuses when the public record still shows staffing warnings, jail complaints, and thin training-spending lines.',
    caveat:
      'This is not a claim of theft or budget misuse. It is a performance argument: public spending should produce stability, transparency, and competent operations.',
    evidenceIds: [
      'fy2023-sheriff-jail-appropriations-baseline',
      'fy2026-sheriff-jail-appropriations',
      'fy2025-training-spending',
      'staffing-retention-shortage',
      'jail-heating-conditions',
    ],
  },
  {
    id: 'untrained-children-complaint',
    title: 'The staffing mess is why some citizens say the county is policed by untrained children.',
    opinion:
      'That phrase is harsh, but the frustration is real: turnover, thin training-spending lines, and hiring language where experience is preferred instead of required all point to a department that has not earned public confidence.',
    caveat:
      'This does not claim every officer is young, uncertified, or untrained. It presents a voter complaint and then shows the staffing and training records that make the complaint worth investigating.',
    evidenceIds: [
      'staffing-retention-shortage',
      'fy2025-training-spending',
      'official-patrol-hiring-page',
    ],
  },
  {
    id: 'jail-stunt-not-solution',
    title: 'Stunts like staying the night in jail do little to solve the problem.',
    opinion:
      'Sleeping in a pod may generate headlines, but it does not fix heating systems, staffing pressure, inspection follow-up, or the management culture that lets jail complaints become public news.',
    caveat:
      'The evidence supports a criticism of priorities and follow-through. It does not prove intentional mistreatment.',
    evidenceIds: ['jail-heating-conditions', 'tci-inspection-reinspection-trail'],
  },
  {
    id: 'complaints-need-daylight',
    title: 'Citizens deserve answers, not dismissiveness.',
    opinion:
      'Citizens report unanswered concerns, lack of follow-through, rude responses to calm complaints, and calls ending before the problem is handled. A sheriff who wants public trust should be able to show complaint logs, call records, and written outcomes.',
    caveat:
      'These are complaint themes that need records. Court complaints are allegations unless a court finds facts, and ordinary citizen complaints should be tied to logs or written records before being treated as proven.',
    evidenceIds: [
      'citizen-unresponsiveness-complaints',
      'jail-heating-conditions',
      'wimber-medical-care-complaint',
      'dennis-family-complaint',
      'official-public-records-request-form',
      'official-public-inquiry-tools',
    ],
  },
  {
    id: 'jail-processing-and-idling',
    title: 'Slow jail processing and idle-duty reports point to management failure.',
    opinion:
      'When citizens describe jail processing as painfully slow and report corrections staff idling while basic answers are hard to get, the issue is bigger than one bad interaction. It is a management and accountability problem.',
    caveat:
      'Processing delays and idling reports need timestamps, shift logs, post records, and complaint files. The opinion is that Gray should have to produce those records and answer for what they show.',
    evidenceIds: [
      'jail-processing-delay-complaints',
      'corrections-idling-complaints',
      'staffing-retention-shortage',
      'official-public-records-request-form',
    ],
  },
  {
    id: 'litigation-exposure',
    title: 'Repeated federal litigation is a warning sign, even before final judgment.',
    opinion:
      'An incumbent sheriff should be able to point to a stable, accountable office. Instead, late in Gray’s tenure, Stewart County and figures around the office appear in multiple federal dockets involving workplace or civil-rights allegations.',
    caveat:
      'These lawsuits are allegations unless and until a court makes findings. The voter-facing point is leadership risk, legal exposure, and the need for accountability records.',
    evidenceIds: [
      'hunt-former-jail-employee-docket',
      'doe-civil-rights-docket',
      'doe-2026-civil-rights-docket',
    ],
  },
];

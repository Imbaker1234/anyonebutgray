export const evidenceStatuses = [
  'Confirmed public record',
  'News report',
  'Court allegation',
  'Context',
] as const;

export type EvidenceStatus = (typeof evidenceStatuses)[number];

export type EvidenceSourceType =
  | 'news'
  | 'public-record'
  | 'court-docket'
  | 'law'
  | 'records-request';

export interface EvidenceItem {
  id: string;
  title: string;
  shortClaim: string;
  status: EvidenceStatus;
  sourceType: EvidenceSourceType;
  sourceName: string;
  sourceUrl: string;
  date: string;
  summary: string;
  publishable: boolean;
  notes: string;
}

export const evidenceItems: EvidenceItem[] = [
  {
    id: 'gray-took-office-and-official-mission',
    title: 'Gray has owned this office since 2018',
    shortClaim:
      'The sheriff office biography says Frankie Gray took office on September 1, 2018, and the official mission promises efficient, effective service while protecting constitutional rights.',
    status: 'Confirmed public record',
    sourceType: 'public-record',
    sourceName: 'Stewart County Sheriff Office leadership and mission pages',
    sourceUrl: 'https://stewartcountysheriff.com/sheriff-frankie-gray/',
    date: 'Office assumed 2018-09-01',
    summary:
      'The official biography establishes that Gray is not a new sheriff inheriting a short-term problem. The office mission statement sets the standard: efficient, effective public service and constitutional-rights protection.',
    publishable: true,
    notes:
      'Use this as the accountability frame. It is not an attack by itself; it establishes tenure and the office standard voters can judge against.',
  },
  {
    id: 'official-public-inquiry-tools',
    title: 'The office offers inquiry tools but not an accountability dashboard',
    shortClaim:
      'The sheriff office website lists booking logs, inmate roster, warrants, sex-offender information, and public records requests, but routine complaint and discipline outcomes still require records work.',
    status: 'Context',
    sourceType: 'public-record',
    sourceName: 'Stewart County Sheriff Office website',
    sourceUrl: 'https://stewartcountysheriff.com/',
    date: 'Site footer 2026',
    summary:
      'Operational lookup tools are public, which is useful. But voters still need public-records requests for complaint logs, dispositions, discipline records, use-of-force summaries, and other accountability data.',
    publishable: true,
    notes:
      'This supports a transparency critique. Keep the wording to what the site shows and what records still need to be requested.',
  },
  {
    id: 'staffing-retention-shortage',
    title: 'Staffing and retention shortage',
    shortClaim:
      'NewsChannel 5 reported the office was short nearly two dozen correctional officers, had lost more than 20 correctional staff within a year, and was short patrol deputies.',
    status: 'News report',
    sourceType: 'news',
    sourceName: 'NewsChannel 5',
    sourceUrl:
      'https://www.newschannel5.com/news/low-salary-is-costing-the-stewart-county-sheriffs-office-from-hiring-and-keeping-staff',
    date: '2023-03-21',
    summary:
      'The report described low pay, correctional officer turnover, deputy departures, and Gray warning that delayed response times, school resource officer coverage pressure, pod closures, and inmate transfers could follow if staffing did not improve.',
    publishable: true,
    notes:
      'Use this lane for staffing and service-level questions. Keep attribution to the news report and avoid claiming motives or misconduct.',
  },
  {
    id: 'wsmv-staffing-public-safety-warning',
    title: 'Gray warned staffing could jeopardize safety',
    shortClaim:
      'WSMV reported that Gray warned deputy backup, response times, school resource officer coverage, and inmate housing could be affected by staffing shortages.',
    status: 'News report',
    sourceType: 'news',
    sourceName: 'WSMV',
    sourceUrl:
      'https://www.wsmv.com/2023/03/21/stewart-co-sheriff-pleads-higher-wages-amid-shortage-deputies-corrections-officers/',
    date: '2023-03-20',
    summary:
      'WSMV reported that three deputies had left in the prior month and 20 correctional officers had left in the prior year. Gray said the county could see slower response times, deputies on patrol without backup, SROs pulled from schools, and inmates shipped elsewhere.',
    publishable: true,
    notes:
      'This supports the opinion that staffing was not a minor HR issue. It was presented publicly as a public-safety risk.',
  },
  {
    id: 'official-patrol-hiring-page',
    title: 'Current hiring page says experience is preferred, not required',
    shortClaim:
      'The sheriff office hiring page says patrol officer applicants must meet basic requirements, attend 12 weeks of training after hire, and that POST certification and experience are preferred but not required.',
    status: 'Context',
    sourceType: 'public-record',
    sourceName: 'Stewart County Sheriff Office hiring page',
    sourceUrl: 'https://stewartcountysheriff.com/hiring-correctional-officers/',
    date: 'Site footer 2026',
    summary:
      'The official hiring page shows the department is accepting patrol officer applications and says POST certification and experience are preferred, not required. That does not prove officers are untrained, but it is relevant to voter concerns about turnover, readiness, and supervision.',
    publishable: true,
    notes:
      'Use this carefully. It supports a concern about hiring pipeline and experience level, not a claim that specific officers lack certification.',
  },
  {
    id: 'jail-heating-conditions',
    title: 'Heating complaints before the overnight jail stay',
    shortClaim:
      'NewsChannel 5 reported heating-unit problems in multiple jail pods and complaints from inmates and families before Gray stayed overnight in a pod.',
    status: 'News report',
    sourceType: 'news',
    sourceName: 'NewsChannel 5',
    sourceUrl:
      'https://www.newschannel5.com/news/state/tennessee/stewart-county/stewart-county-sheriff-stays-the-night-in-jail-amid-heating-challenges-at-detention-center',
    date: '2026-02-02',
    summary:
      'The article reported that heating units in a couple of pods were creating concerns, jail staff were monitoring temperatures, and Gray said he spent a night in a pod after receiving complaints.',
    publishable: true,
    notes:
      'This supports a jail maintenance and conditions lane. It does not, by itself, prove intentional mistreatment or a legal violation.',
  },
  {
    id: 'fy2023-sheriff-jail-appropriations-baseline',
    title: 'FY2022-23 sheriff and jail funding baseline',
    shortClaim:
      'The FY2022-23 county appropriations resolution lists $1,815,679 for the Sheriff Department and $1,943,884 for the Jail, a combined $3,759,563.',
    status: 'Confirmed public record',
    sourceType: 'public-record',
    sourceName: 'Stewart County FY2022-23 Appropriations Resolution',
    sourceUrl:
      'https://www.stewartcogov.com/county_budgets_audits/2022/appropriations_resolution.pdf',
    date: 'FY2022-23 budget cycle',
    summary:
      'This gives voters the earlier public funding baseline for the same two sheriff-office functions: the Sheriff Department and Jail appropriations.',
    publishable: true,
    notes:
      'Use this with the FY2025-26 appropriation record for a funding-growth comparison. It is budget context, not a financial-misconduct claim.',
  },
  {
    id: 'fy2026-sheriff-jail-appropriations',
    title: 'Multimillion-dollar sheriff and jail appropriations continued',
    shortClaim:
      'The FY2025-26 county appropriations resolution lists $2,306,361 for the Sheriff Department and $2,293,576 for the Jail, a combined $4,599,937.',
    status: 'Confirmed public record',
    sourceType: 'public-record',
    sourceName: 'Stewart County FY2025-26 Appropriations Resolution',
    sourceUrl:
      'https://www.stewartcogov.com/county_budgets_audits/2025/appropriations_resolution.pdf',
    date: 'FY2025-26 budget cycle',
    summary:
      'The budget record does not prove misuse of funds. It does show that the sheriff and jail functions are not tiny side operations, and voters can fairly compare multimillion-dollar appropriations against staffing, jail-condition, complaint, and transparency problems.',
    publishable: true,
    notes:
      'Use as budget context, not a corruption claim. The stronger argument is performance and accountability against available public spending.',
  },
  {
    id: 'fy2025-training-spending',
    title: 'Thin in-service and staff-development spending',
    shortClaim:
      'FY2025 county audit detail lists $4,597 for Sheriff Department in-service/staff development and $600 for Jail in-service/staff development.',
    status: 'Confirmed public record',
    sourceType: 'public-record',
    sourceName: 'Stewart County FY2025 Annual Financial Report',
    sourceUrl:
      'https://comptroller.tn.gov/content/dam/cot/la/documents/county/2025/FY25StewartAFR.pdf',
    date: 'Fiscal year ended 2025-06-30',
    summary:
      'Against actual totals of $2,319,868 for the Sheriff Department and $2,158,086 for the Jail, the audit detail lists comparatively small staff-development line items. The audit summary itself did not report findings of financial noncompliance.',
    publishable: true,
    notes:
      'Frame as a budget and training-priority question, not proof that specific officers were poorly trained.',
  },
  {
    id: 'tci-inspection-reinspection-trail',
    title: 'Jail inspection and reinspection trail',
    shortClaim:
      'TDOC jail inspection/certification reporting showed Stewart County Jail with a certification status and an inspection followed by reinspection in 2025.',
    status: 'Context',
    sourceType: 'public-record',
    sourceName: 'Tennessee Department of Correction Jail Summary Reports',
    sourceUrl: 'https://www.tn.gov/correction/statistics/jail-summary-reports.html',
    date: 'Inspected 2025-07-14; re-inspected 2025-09-12',
    summary:
      'The downloaded Dec. 2025 TCI inspection/certification workbook row for Stewart County Jail showed status C, an inspection date of 2025-07-14, and a reinspection date of 2025-09-12.',
    publishable: true,
    notes:
      'Do not call this a failed inspection unless the underlying inspection letters or corrective-action documents say that.',
  },
  {
    id: 'doe-civil-rights-docket',
    title: 'Pending federal civil-rights docket',
    shortClaim:
      'A federal docket lists Doe et al. v. Stewart County, Tennessee et al. as a pending civil-rights case filed in 2025.',
    status: 'Court allegation',
    sourceType: 'court-docket',
    sourceName: 'Justia docket, Doe et al. v. Stewart County, Tennessee et al.',
    sourceUrl: 'https://dockets.justia.com/docket/tennessee/tnmdce/3%3A2025cv00634/104855',
    date: 'Filed 2025-06-09',
    summary:
      'The Justia docket identifies the matter as a federal civil-rights case in the Middle District of Tennessee. The public site should treat docket entries and complaint allegations as allegations unless court findings establish otherwise.',
    publishable: true,
    notes:
      'Use only as litigation context. Retrieve the complaint and later orders before making any specific factual allegation from the case.',
  },
  {
    id: 'hunt-former-jail-employee-docket',
    title: 'Former jail employee lawsuit docket',
    shortClaim:
      'CourtListener lists Hunt v. Stewart County, Tennessee as a federal case filed May 2, 2025, with Stewart County, Frankie Gray, and Ricky Robertson named in docket metadata.',
    status: 'Court allegation',
    sourceType: 'court-docket',
    sourceName: 'CourtListener docket, Hunt v. Stewart County, Tennessee',
    sourceUrl: 'https://www.courtlistener.com/docket/70132759/hunt-v-stewart-county-tennessee/',
    date: 'Filed 2025-05-02',
    summary:
      'The docket supports litigation-exposure context. The site should not state the underlying allegations as fact without the complaint and later court orders.',
    publishable: true,
    notes:
      'Use as federal litigation exposure. Retrieve pleadings before making specific workplace-harassment or retaliation claims.',
  },
  {
    id: 'doe-2026-civil-rights-docket',
    title: 'Second Doe civil-rights docket in 2026',
    shortClaim:
      'Justia lists Doe v. Stewart County, Tennessee et al. as a civil-rights case filed February 13, 2026, naming Stewart County and Dana Saltkill as defendants.',
    status: 'Court allegation',
    sourceType: 'court-docket',
    sourceName: 'Justia docket, Doe v. Stewart County, Tennessee et al.',
    sourceUrl: 'https://dockets.justia.com/docket/tennessee/tnmdce/3%3A2026cv00161/107867',
    date: 'Filed 2026-02-13',
    summary:
      'The docket adds to the litigation-exposure picture during Gray’s tenure. It is not a finding of liability and should be labeled as pending litigation or allegations only.',
    publishable: true,
    notes:
      'Use to show recurring federal civil-rights exposure. Do not infer facts from sealed or unretrieved pleadings.',
  },
  {
    id: 'tbi-fatal-shooting-external-review',
    title: 'Fatal deputy-involved shooting required outside review',
    shortClaim:
      'TBI announced an independent investigation after Stewart County deputies shot and killed Billy Joe Reynolds in May 2022; later reporting said the district attorney found the use of force justified.',
    status: 'Context',
    sourceType: 'news',
    sourceName: 'TBI Newsroom and WSMV reporting',
    sourceUrl:
      'https://tbinewsroom.com/2022/05/22/tbi-agents-investigating-stewart-county-officer-involved-shooting/',
    date: '2022-05-22',
    summary:
      'This should not be framed as misconduct. It is a serious event during Gray’s tenure that triggered formal outside review and belongs in a complete accountability timeline.',
    publishable: true,
    notes:
      'Use as timeline context only. The TBI page says TBI acts as fact-finder and the district attorney determines justification.',
  },
  {
    id: 'wimber-medical-care-complaint',
    title: 'Earlier inmate medical-care complaint was dismissed',
    shortClaim:
      'A 2019 federal opinion describes a pro se inmate complaint alleging refused medical treatment at the Stewart County Jail, naming Frankie Gray among defendants, then dismisses the case.',
    status: 'Court allegation',
    sourceType: 'court-docket',
    sourceName: 'Justia, Wimber v. Stewart County Detention Center et al.',
    sourceUrl:
      'https://law.justia.com/cases/federal/district-courts/tennessee/tnmdce/3%3A2019cv00572/79652/4/',
    date: '2019-07-22',
    summary:
      'The court opinion says the complaint alleged refusal to provide medical treatment for asthma and breathing problems. The court dismissed the case on screening/preclusion grounds, so this is complaint evidence, not proof that the allegation was true.',
    publishable: true,
    notes:
      'Useful for a complaints tracker only. The dismissal must be shown beside the allegation.',
  },
  {
    id: 'dennis-family-complaint',
    title: 'Family complaint allegation against Gray was dismissed',
    shortClaim:
      'A 2019 federal opinion says a former inmate alleged his family called Gray after a jail fight video was posted online; the court dismissed the claims against Gray.',
    status: 'Court allegation',
    sourceType: 'court-docket',
    sourceName: 'Midpage, Dennis v. Gray',
    sourceUrl: 'https://app.midpage.ai/document/dennis-v-gray-10436086',
    date: '2019-11-14',
    summary:
      'The opinion describes the plaintiff allegation that family members called Gray after a video was uploaded. The court held the allegations did not show direct participation or Section 1983 liability, and dismissed the case.',
    publishable: true,
    notes:
      'Use as a complaint signal, not as proof of constitutional liability or misconduct.',
  },
  {
    id: 'official-public-records-request-form',
    title: 'Official records request path exists',
    shortClaim:
      'The sheriff office website provides a public records request form, giving voters a path to request complaint logs, staffing records, and training records.',
    status: 'Context',
    sourceType: 'public-record',
    sourceName: 'Stewart County Sheriff Office public records requests',
    sourceUrl: 'https://stewartcountysheriff.com/public-records-requests/',
    date: 'Site footer 2026',
    summary:
      'The public records page says the office provides a fillable and downloadable records request form. Complaint gathering should use this path for logs, policies, and responsive documents.',
    publishable: true,
    notes:
      'This is the practical next step for complaint evidence. It does not prove any complaint on its own.',
  },
  {
    id: 'citizen-unresponsiveness-complaints',
    title: 'Citizen reports of unresponsiveness and disrespect',
    shortClaim:
      'Citizens report unanswered concerns, poor follow-through, dismissive treatment, and calls ending before issues are resolved.',
    status: 'Context',
    sourceType: 'records-request',
    sourceName: 'Complaint logs, call records, and disposition records needed',
    sourceUrl: 'https://stewartcountysheriff.com/public-records-requests/',
    date: 'Needs complaint records',
    summary:
      'The claim should be verified through complaint logs, call records, public-records correspondence, and written dispositions. Until those records are gathered, this is a citizen-complaint theme rather than a proven factual finding.',
    publishable: false,
    notes:
      'Useful homepage opinion support only when labeled as needing records. Do not state that specific staff hung up on specific callers without source documents.',
  },
  {
    id: 'jail-processing-delay-complaints',
    title: 'Citizen reports of painfully slow jail processing',
    shortClaim:
      'Citizens report that jail processing and release-related handling can be painfully slow and hard to get answers about.',
    status: 'Context',
    sourceType: 'records-request',
    sourceName: 'Booking, release, and call-log records needed',
    sourceUrl: 'https://stewartcountysheriff.com/public-records-requests/',
    date: 'Needs processing records',
    summary:
      'The claim should be tested against booking timestamps, release timestamps, bond-processing records, transport logs, and call records connected to processing questions.',
    publishable: false,
    notes:
      'Frame as a complaint theme until processing-time records or documented complaints are obtained.',
  },
  {
    id: 'corrections-idling-complaints',
    title: 'Reports of corrections officers idling on duty',
    shortClaim:
      'Reports say some corrections officers appear idle while jail processes move slowly and complaints go unanswered.',
    status: 'Context',
    sourceType: 'records-request',
    sourceName: 'Shift logs, post orders, rounds logs, and complaint records needed',
    sourceUrl: 'https://stewartcountysheriff.com/public-records-requests/',
    date: 'Needs staffing and activity records',
    summary:
      'The claim should be verified through post assignment logs, rounds records, supervisor notes, incident logs, complaint files, and any available video-retention or audit records.',
    publishable: false,
    notes:
      'Do not name individual officers or present idling as fact unless records support it.',
  },
  {
    id: 'political-ad-disclaimer',
    title: 'Political-ad disclaimer requirement',
    shortClaim:
      'Tennessee political-ad law is a launch compliance gate for a site designed to influence votes.',
    status: 'Context',
    sourceType: 'law',
    sourceName: 'Tennessee Code 2-19-120',
    sourceUrl:
      'https://law.justia.com/codes/tennessee/title-2/chapter-19/part-1/section-2-19-120/',
    date: '2024 code',
    summary:
      'The site should include a paid-for disclaimer and authorization language before public launch. Exact wording should be confirmed before the domain is publicized.',
    publishable: true,
    notes:
      'Compliance context, not an attack claim. Keep the placeholder visible until sponsor text is finalized.',
  },
];

export const publishedEvidence = evidenceItems.filter((item) => item.publishable);

export const featuredEvidence = publishedEvidence.filter((item) =>
  [
    'staffing-retention-shortage',
    'wsmv-staffing-public-safety-warning',
    'fy2023-sheriff-jail-appropriations-baseline',
    'fy2026-sheriff-jail-appropriations',
    'jail-heating-conditions',
    'fy2025-training-spending',
    'hunt-former-jail-employee-docket',
  ].includes(item.id),
);

export function getEvidenceById(id: string) {
  const item = evidenceItems.find((evidenceItem) => evidenceItem.id === id);

  if (!item) {
    throw new Error(`Missing evidence item: ${id}`);
  }

  return item;
}

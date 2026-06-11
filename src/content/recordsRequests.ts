export type RecordRequestStatus = 'Draft request' | 'Requested' | 'Received' | 'Not available';

export interface RecordRequest {
  id: string;
  title: string;
  status: RecordRequestStatus;
  agency: string;
  purpose: string;
  requestedRecords: string[];
}

export const recordRequests: RecordRequest[] = [
  {
    id: 'complaint-logs-and-dispositions',
    title: 'Complaint logs and dispositions',
    status: 'Draft request',
    agency: 'Stewart County Sheriff Office / county records custodian',
    purpose:
      'Gather evidence of complaints without relying on rumor, screenshots, or social media arguments.',
    requestedRecords: [
      'Citizen complaint logs from 2020 through present, with private information redacted as required',
      'Internal complaint disposition letters or summary outcomes',
      'Policies for receiving, investigating, tracking, and closing complaints against staff or jail operations',
    ],
  },
  {
    id: 'call-handling-and-hangups',
    title: 'Call handling, hang-up, and public-contact records',
    status: 'Draft request',
    agency: 'Stewart County Sheriff Office / county records custodian',
    purpose:
      'Verify citizen reports of unresponsiveness, rude treatment, and calls ending before complaints are handled.',
    requestedRecords: [
      'Non-emergency line call logs and call-detail records tied to complaint or records-request calls',
      'Policies for front-desk, dispatch, and administrative call handling',
      'Complaints mentioning rude conduct, hang-ups, refusal to take a complaint, or failure to follow up',
    ],
  },
  {
    id: 'jail-processing-times',
    title: 'Jail booking, release, and processing-time records',
    status: 'Draft request',
    agency: 'Stewart County Jail / county records custodian',
    purpose:
      'Test reports that jail processing is painfully slow and difficult for families or citizens to get answers about.',
    requestedRecords: [
      'Booking timestamps, release timestamps, and bond-processing timestamps from 2023 through present',
      'Policies and target timelines for booking, release, bonding, and inmate transfer processing',
      'Complaints or incident notes mentioning processing delays, delayed release, or unanswered status requests',
    ],
  },
  {
    id: 'corrections-activity-and-idling',
    title: 'Corrections officer activity and supervision records',
    status: 'Draft request',
    agency: 'Stewart County Jail / county records custodian',
    purpose:
      'Verify reports that some corrections officers appear idle while jail work, processing, or complaint response slows down.',
    requestedRecords: [
      'Post assignment logs, rounds logs, and supervisor check records from 2023 through present',
      'Policies for required rounds, post coverage, breaks, and supervisory review',
      'Complaints, incident reports, or discipline records mentioning sleeping, idling, missed rounds, or failure to perform assigned duties',
    ],
  },
  {
    id: 'tci-inspection-letters',
    title: 'TCI inspection letters and corrective-action records',
    status: 'Draft request',
    agency: 'Tennessee Department of Correction / Stewart County Jail',
    purpose:
      'Confirm what the July 2025 inspection and September 2025 reinspection found before publishing any stronger inspection claim.',
    requestedRecords: [
      'Inspection report or letter for 2025-07-14',
      'Reinspection report or letter for 2025-09-12',
      'Any corrective-action plan, deficiency list, or closure letter tied to those dates',
    ],
  },
  {
    id: 'jail-training-records',
    title: 'Jail and patrol training records',
    status: 'Draft request',
    agency: 'Stewart County Sheriff Office / county records custodian',
    purpose:
      'Test the training concern with records rather than anecdotes, including academy, field training, in-service, and jail-specific training documentation.',
    requestedRecords: [
      'Annual training summaries for jail staff and deputies from 2023 through present',
      'Field training policy and completion records, with private personnel details redacted as required',
      'Budget backup for in-service and staff-development line items',
    ],
  },
  {
    id: 'jail-staffing-rosters',
    title: 'Jail staffing rosters and pod coverage',
    status: 'Draft request',
    agency: 'Stewart County Jail / county records custodian',
    purpose:
      'Verify whether jail staffing levels and supervision coverage match public safety needs across shifts.',
    requestedRecords: [
      'Shift rosters by month from 2023 through present',
      'Post assignment logs showing pod coverage by shift',
      'Vacancy, turnover, and overtime summaries for correctional officers',
    ],
  },
  {
    id: 'front-office-coverage',
    title: 'Administrative front-office coverage',
    status: 'Draft request',
    agency: 'Stewart County Sheriff Office / county records custodian',
    purpose:
      'Check lobby, records-desk, and phone-coverage concerns with objective schedules or logs before making any public claim.',
    requestedRecords: [
      'Public lobby hours and records-desk coverage schedules',
      'Call-routing or front-desk coverage policies',
      'Any public complaint logs about office accessibility, with private information redacted',
    ],
  },
  {
    id: 'litigation-complaints',
    title: 'Complaints and responsive filings in jail-related litigation',
    status: 'Draft request',
    agency: 'Federal docket / county counsel / PACER retrieval',
    purpose:
      'Separate allegations from findings and avoid publishing docket claims without underlying pleadings.',
    requestedRecords: [
      'Complaint and amended complaint in Doe et al. v. Stewart County, Tennessee et al.',
      'Complaint and responsive filings in Hunt v. Stewart County, Tennessee et al.',
      'County responses, dispositive motions, and orders that address factual allegations',
      'Other sheriff-office or jail civil-rights complaints filed from 2020 through present',
    ],
  },
];

export type CampaignLink = {
  label: string;
  href: string;
  note?: string;
};

export type CampaignPriority = {
  title: string;
  body: string;
};

export type CampaignFaq = {
  question: string;
  answer: string;
};

export const campaignContent = {
  candidate: {
    name: 'Anyone But Gray',
    office: 'Independent voter information site',
    ballotLine: 'Independent voter information and campaign accountability resource',
    photoPath: '/assets/campaign-placeholder.jpg',
    photoReady: false
  },
  election: {
    date: 'August 6, 2026',
    county: 'Stewart County',
    primaryCta: 'Vote Info',
    secondaryCta: 'About'
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Priorities', href: '#priorities' },
    { label: 'Vote Info', href: '#vote-info' },
    { label: 'Contact', href: '#contact' }
  ],
  about: {
    heading: 'About This Site',
    body:
      'This independent site is being prepared as a voter-information resource. Replace this placeholder copy with confirmed, approved campaign language before launch.',
    note:
      'No candidate affiliation, endorsement, or authorization is implied by this placeholder build.'
  },
  office: {
    heading: 'Why This Election Matters',
    body:
      'Local offices affect public records, services, and everyday access to government. This section should be replaced with confirmed issue language before launch.'
  },
  priorities: [
    {
      title: 'Accountable local government',
      body:
        "Keep the campaign's final wording here focused on accountability, transparency, and public service."
    },
    {
      title: 'Respectful public service',
      body:
        'Use this space for confirmed language about how residents should be treated by public officials.'
    },
    {
      title: 'Clear communication',
      body:
        'Replace this with confirmed language for practical, understandable communication with the public.'
    }
  ] satisfies CampaignPriority[],
  voterLinks: [
    {
      label: 'Stewart County voter information',
      href: 'https://stewartcountyelection.com/voting-information/',
      note: 'Official local election information'
    },
    {
      label: 'Stewart County 2026 elections',
      href: 'https://stewartcountyelection.com/2026-elections/',
      note: 'Candidate and election notices'
    },
    {
      label: 'Tennessee voter lookup',
      href: 'https://tnmap.tn.gov/voterlookup/',
      note: 'State voter registration and polling-place lookup'
    }
  ] satisfies CampaignLink[],
  faqs: [
    {
      question: 'When is Election Day?',
      answer:
        'Election Day is listed as August 6, 2026. Confirm dates, early voting, and polling-place information with the Stewart County Election Commission before launch.'
    },
    {
      question: 'Where can voters find official voting details?',
      answer:
        'Use the official Stewart County Election Commission and Tennessee voter lookup links on this page for current voting information.'
    },
    {
      question: 'Why are some sections marked as placeholders?',
      answer:
        'This site avoids inventing campaign claims. Replace the placeholder biography, priorities, contact details, and disclaimer with confirmed campaign language before publishing.'
    }
  ] satisfies CampaignFaq[],
  contact: {
    heading: 'Contact the Campaign',
    email: 'campaign@example.com',
    phone: '(000) 000-0000',
    facebook: 'https://www.facebook.com/'
  },
  launchReadiness: {
    photoConfirmed: false,
    biographyConfirmed: false,
    contactConfirmed: false,
    disclaimerConfirmed: false,
    disclaimer:
      'Paid for by [campaign committee / treasurer - confirm before launch]'
  },
  sources: [
    {
      label: 'Stewart County Election Commission',
      href: 'https://stewartcountyelection.com/'
    },
    {
      label: 'Tennessee Court Clerks',
      href: 'https://www.tncourts.gov/courts/court-clerks/about'
    },
    {
      label: 'Tennessee voter lookup',
      href: 'https://tnmap.tn.gov/voterlookup/'
    }
  ]
};

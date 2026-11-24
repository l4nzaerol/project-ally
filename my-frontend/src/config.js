export const EVENT = {
  name: '18-Day Campaign to End VAW',
  shortName: 'END VAW',
  tagline: 'Sama-samang wakasan ang VAW sa Bagong Cabuyao',
  dateLabel: '2026',
  venueName: 'Venue',
  partnerLogo: {
    src: '/img/cysdocombined.png',
    alt: 'Lungsod ng Cabuyao, Bagong Cabuyao, Cabuyao Sports Committee, and Youth Development Affairs Office',
  },
}

export const SPEAKERS = [
  {
    id: 'speaker-1',
    name: 'Ms. Melizza Jean Viente',
    topic: 'Resource Person',
  },
  {
    id: 'speaker-2',
    name: 'Ms. Mel Rebaya',
    topic: 'Resource Person',
  },
  
]

export const SPEAKER_QUESTIONS = [
  {
    id: 'knowledge',
    sheetHeader: 'Demonstrated good knowledge of the topic',
    text: 'The guest speakers demonstrated good knowledge of the topic.',
  },
  {
    id: 'clarity',
    sheetHeader: 'Presented the topic clearly and effectively',
    text: 'The guest speakers presented the topic clearly and effectively.',
  },
  {
    id: 'engaging',
    sheetHeader: 'Was engaging and maintained attention',
    text: "The guest speakers were engaging and able to maintain the participants' attention.",
  },
  {
    id: 'examples',
    sheetHeader: 'Provided relevant examples and practical insights',
    text: 'The guest speakers provided relevant examples and practical insights.',
  },
  {
    id: 'participation',
    sheetHeader: 'Encouraged participation and interaction',
    text: 'The guest speakers encouraged participation and interaction.',
  },
  {
    id: 'professional',
    sheetHeader: 'Was professional and respectful throughout the seminar',
    text: 'The guest speakers were professional and respectful throughout the seminar.',
  },
  {
    id: 'questions',
    sheetHeader: 'Addressed questions appropriately',
    text: 'The guest speakers were able to address questions appropriately.',
  },
  {
    id: 'overall',
    sheetHeader: 'Overall satisfaction with the presentations',
    text: 'Overall, I am satisfied with the guest speakers’ presentations.',
  },
]

export const RATING_LABELS = {
  1: 'Poor',
  2: 'Fair',
  3: 'Good',
  4: 'Very good',
  5: 'Excellent',
}

export const AGREEMENT_LABELS = {
  1: 'Strongly disagree',
  2: 'Disagree',
  3: 'Neutral',
  4: 'Agree',
  5: 'Strongly agree',
}

export const APPS_SCRIPT_URL = String(
  import.meta.env.VITE_APPS_SCRIPT_URL ||
    'https://script.google.com/macros/s/AKfycbzsXiHSzlz_cg6Jsux3kox4EKKo2HpTkoKJ8cIBK20Rd3YpaQYb66-F2wwlKJ2prTJP/exec',
).trim()

export const PUBLIC_BASE_URL = String(import.meta.env.VITE_PUBLIC_BASE_URL || '').replace(/\/$/, '')

export const CERT_TEMPLATE_SRC = `${import.meta.env.BASE_URL}img/${encodeURIComponent(
  'OK LANG YAN-MENTAL HEALTH CERT.png',
)}`

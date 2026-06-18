/**
 * ACCES-2025 — single source of truth for all conference content.
 *
 * Every component reads from here. When a database/CMS is introduced,
 * replace these exports with API calls (e.g. an async loader returning the
 * same shapes) and the UI continues to work unchanged.
 *
 * All content below is taken from the official ACCES-2025 website.
 */

export const conference = {
  shortName: "ICICSCET 2026",
  edition: "4th",
  fullName:
    "International Conference on Intelligent Computing, Secure Communications and Emerging Technologies",
  date: "19 December 2026",
  mode: "Hybrid",
  host: "Malineni Lakshmaiah Women's Engineering College (Autonomous)",
  location: "Guntur, Andhra Pradesh, India",
  technicalSponsor: "UCSI University, Kuala Lumpur, Malaysia",
  technicalPartner: "Lived Edutech Services",
  submissionEmail: "ICICSCET2026@malinenicolleges.ac.in",
  submissionDeadline: "19 November 2026",
  // ISO for the live countdown (end of day, IST)
  submissionDeadlineISO: "2026-11-19T23:59:59+05:30",
  previousProceedings: "https://printorders.aip.org/proceedings/2794",
} as const;

// Host college branding assets (place the files in /public)
export const logos = {
  seal: "/mlew-seal.png", // circular MLEW seal
  banner: "/mlew-banner.png", // horizontal college banner
} as const;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "cfp", label: "Call for Papers" },
  { id: "tracks", label: "Tracks" },
  { id: "speakers", label: "Speakers" },
  { id: "publication", label: "Publication" },
  { id: "registration", label: "Registration" },
  { id: "committee", label: "Committee" },
  { id: "schedule", label: "Schedule" },
  { id: "contact", label: "Contact" },
];

export const heroFacts = [
  { icon: "calendar", title: "19 December 2026", sub: "Conference Day" },
  { icon: "globe", title: "Hybrid Mode", sub: "On-site & Online" },
  { icon: "map-pin", title: "MLEW, Guntur", sub: "Andhra Pradesh, India" },
];

export const stripItems = [
  "Scopus-Indexed Publication",
  "Conference Proceedings",
  "Plagiarism Limit 15%",
  "International Speakers",
  "Hybrid Presentation",
  "In Association with UCSI University",
];

export const aboutCards = [
  {
    title: "Host — MLEW",
    body: "Malineni Lakshmaiah Women's Engineering College, founded in 2008 to advance women's technical education. AICTE-approved, ISO 9001:2015 certified and affiliated with JNTU-K. The campus features computer centres, libraries, advanced labs, seminar halls and digital classrooms.",
  },
  {
    title: "Technical Sponsor — UCSI University",
    body: "Ranked 265th in the QS World University Rankings 2025 and among the top 1% of universities worldwide for the third consecutive year. Also ranked 61st in the QS Asia University Rankings 2024.",
  },
  {
    title: "Technical Partner",
    body: "Lived Edutech Services serves as the official technical partner for organizing the conference, supporting submissions, review and proceedings.",
  },
];

export const manuscriptRules = [
  "A4 page format, single column layout",
  "11-point Times New Roman font",
  "1.5 line spacing",
  "Submit as a Microsoft Word document",
  "Numbered referencing style (not APA)",
  "Length: 12–15 pages maximum",
  "Abstract of 150–200 words",
];

export const importantDates = [
  {
    date: "19 November 2026",
    event: "Last date for submission of papers / articles",
    accent: false,
  },
  {
    date: "After review",
    event: "Notification of acceptance (two reviewers)",
    accent: false,
  },
  {
    date: "19 December 2026",
    event: "Conference day — Hybrid presentations",
    accent: true,
  },
];

export type Track = {
  icon: string;
  title: string;
  topics: string[];
};

export const tracks: Track[] = [
  {
    icon: "cpu",
    title: "Track 1 — VLSI & Embedded Systems",
    topics: [
      "VLSI Design and Verification",
      "Embedded Systems and IoT Hardware",
      "FPGA and System-on-Chip Design",
    ],
  },
  {
    icon: "radio",
    title: "Track 2 — Communications & Signal Processing",
    topics: [
      "Wireless and Mobile Communications",
      "Signal, Image and Speech Processing",
      "5G/6G and Next-Generation Networks",
    ],
  },
  {
    icon: "wifi",
    title: "Track 3 — Internet of Things (IoT)",
    topics: [
      "IoT Architectures and Applications",
      "Edge and Cloud Computing",
      "Smart Cities and Industrial IoT",
    ],
  },
  {
    icon: "brain",
    title: "Track 4 — Artificial Intelligence & Machine Learning",
    topics: [
      "Deep Learning and Data Analytics",
      "Computer Vision and NLP",
      "AI Applications and Intelligent Systems",
    ],
  },
  {
    icon: "shield",
    title: "Track 5 — Cybersecurity & Blockchain",
    topics: [
      "Network and Information Security",
      "Blockchain Technologies",
      "Privacy and Secure Computing",
    ],
  },
];

export type Speaker = {
  initials: string;
  name: string;
  role: string;
  org: string;
};

export const speakers: Speaker[] = [
  {
    initials: "RK",
    name: "Dr. Raenu A/L Kolandaisamy",
    role: "Director",
    org: "UCSI University, Kuala Lumpur, Malaysia",
  },
  {
    initials: "GG",
    name: "Prof. George Ghinea",
    role: "Professor — Mulsemedia Computing",
    org: "Brunel University of London, United Kingdom",
  },
  {
    initials: "PC",
    name: "Dr. Prasenjit Chatterjee",
    role: "Dean R&D — Series Editor (Scrivener, Wiley, CRC)",
    org: "MCKV Institute of Engineering, India",
  },
];

export const partnerJournals = [
  {
    name: "International Journal of Sensors, Wireless Communications and Control",
    tags: ["Scopus", "Google Scholar"],
    note: "Special issue for ICICSCET 2026 selected papers.",
  },
  {
    name: "Intelligent Automation & Soft Computing",
    tags: ["Scopus", "Google Scholar"],
    note: "Special issue on 5G networks security.",
  },
];

export const registrationCards = [
  {
    title: "Presentation modes",
    body: "Authors may present on-site or, if unable to attend physically, use the video presentation facility available for the hybrid event.",
    pending: false,
  },
  {
    title: "Visa & travel",
    body: "The visa process and all related arrangements are to be taken care of by the author themselves.",
    pending: false,
  },
  {
    title: "Bank details",
    body: "Banking information for registration fees will be published here shortly. Please check back or contact the convenor for the latest details.",
    pending: true,
  },
];

export type CommitteeGroup = {
  title: string;
  wide?: boolean;
  twoCol?: boolean;
  members: { name: string; detail: string }[];
};

export const committee: CommitteeGroup[] = [
  {
    title: "Chief Patrons",
    members: [
      { name: "Dr. Malineni Perumallu", detail: "Chairman" },
      { name: "Mrs. Madhurima Perumallu", detail: "Secretary" },
    ],
  },
  {
    title: "Patron",
    members: [{ name: "Dr. J. Appa Rao", detail: "Principal, MLEW" }],
  },
  {
    title: "Co-Patrons",
    members: [
      { name: "Dr. P. Ramesh Babu", detail: "Dean" },
      { name: "Prof. J. Kishore Babu", detail: "Dean — Academics" },
      { name: "Dr. K. Gouthami", detail: "Dean — R&D" },
    ],
  },
  {
    title: "Chairs & Convener",
    members: [
      {
        name: "Dr. Raenu A/L Kolandaisamy",
        detail: "General Chair — Director, ICSDI, UCSI University, Malaysia",
      },
      {
        name: "Dr. Budati Anil Kumar",
        detail: "Program Chair — KLH, Aziz Nagar Campus, Hyderabad",
      },
      {
        name: "Dr. Dommeti Vijaya Saradhi",
        detail: "Convener — Head, Dept. of ECE, MLEW",
      },
      {
        name: "Dr. K. Swetha",
        detail: "Co-Convener — Dean Placements, MLEW",
      },
      {
        name: "Dr. Ch. Ramesh",
        detail: "Co-Convener — Professor, Dept. of CSE, MLEW",
      },
    ],
  },
  {
    title: "Technical Program Committee",
    wide: true,
    twoCol: true,
    members: [
      { name: "Dr. S. Sudharani", detail: "Scientist G, DLRL, Hyderabad" },
      { name: "Dr. Achyut Shankar", detail: "UW, UK" },
      { name: "Dr. Li Xingwang", detail: "HPU, China" },
      { name: "Dr. Jafar A. Alzubi", detail: "ABAU, Jordan" },
      { name: "Dr. Syala Islam", detail: "UCSI, Malaysia" },
      { name: "Dr. Pooja Jain", detail: "IIIT, Nagpur" },
      { name: "Dr. S. Gunasundhari", detail: "PU, Pondicherry" },
      { name: "Dr. Anil K. Naik", detail: "NIT Warangal" },
      { name: "Dr. Dileep Kumar Yadav", detail: "Bennett University, Noida" },
      { name: "Dr. Soumya Ranjan Nayak", detail: "AU, Noida" },
      {
        name: "Mr. G. Ramanjaneya Reddy",
        detail: "Scientist 'E', RCI, Hyderabad",
      },
      { name: "Dr. Sudha Rani", detail: "Scientist 'G', DLRL, Hyderabad" },
      { name: "Dr. P. Trinatha Rao", detail: "GU, Hyderabad" },
      { name: "Dr. R. Arthi", detail: "SRM University, Chennai" },
      {
        name: "Mr. R. N. A. Kumar Kuncham",
        detail: "PE, Continental Automotive, Bengaluru",
      },
    ],
  },
  {
    title: "Organizing Committee",
    wide: true,
    twoCol: true,
    members: [
      { name: "Dr. G. Ramaswami", detail: "HOD — Dept. of CSE" },
      { name: "Dr. K. Sunitha", detail: "HOD — Dept. of IT" },
      { name: "Prof. N. Hari Krishna", detail: "HOD — Dept. of CSE-DS" },
      { name: "Dr. N. Charles Jaya Rao", detail: "HOD — Dept. of AI&DS" },
      { name: "Dr. D. Ravi Kiran", detail: "HOD — Dept. of AI&ML" },
    ],
  },
];

export const contacts = [
  {
    tag: "Convenor",
    name: "Dr. Dommeti Vijaya Saradhi",
    title: "Head — Department of ECE, MLEW, Guntur, A.P., India",
    phone: "+91-90522 22407",
    phoneHref: "+919052222407",
    email: "ICICSCET2026@malinenicolleges.ac.in",
  },
  {
    tag: "Program Chair",
    name: "Dr. Budati Anil Kumar",
    title: "KLH, Aziz Nagar Campus, Hyderabad",
    phone: "+91-99850 54084",
    phoneHref: "+919985054084",
    email: "ICICSCET2026@malinenicolleges.ac.in",
  },
];

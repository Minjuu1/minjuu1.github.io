export const Experiences = [
  {
    id: 'grad',
    title: 'Graduate Researcher',
    // Several linked organizations: use `organizations` (joined with "and") plus an optional suffix.
    organizations: [
      { name: 'CSTL', url: 'https://cstlab.org/' },
      { name: 'KIXLAB', url: 'https://www.kixlab.org/' },
    ],
    organizationSuffix: ', KAIST',
    advisor: ['joseph', 'juho'],
    location: 'Daejeon, Korea',
    period: '2025.09 - Present',
  },
  {
    id: 'fol',
    title: 'General Chair Assistant',
    organization: 'Festival of Learning 2026',
    url: 'https://festival-of-learning-2026.info/',
    note: 'Jointly hosted by AIED, EDM, and L@S',
    location: 'Seoul, Korea',
    period: '2026',
  },
  {
    id: 'lalalab',
    title: 'Undergraduate Research Intern',
    organization: 'LaLaLab, Saarland University',
    url: 'https://lala.cs.uni-saarland.de/',
    advisor: ['tomo', 'mirella'],
    location: 'Remote',
    period: '2025.07 - 2025.08',
  },
  {
    id: 'kixlab',
    title: 'Undergraduate Research Intern',
    organization: 'KIXLAB, KAIST',
    url: 'https://www.kixlab.org/',
    advisor: ['juho'],
    mentor: ['hyoungwook'],
    location: 'Daejeon, Korea',
    period: '2024.07 - 2025.06',
  },
];
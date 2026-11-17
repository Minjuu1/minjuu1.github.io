// venue + year: the main conference (e.g. 'CHI' + 2025).
// note: track or workshop name (e.g. 'Poster', 'Workshop: Tools for Thought').
// image: optional file name in public/images. Without it the card looks for teaser-<id>.svg, then .png, then .jpg.
// urls: pdf (file in public/files, e.g. '/files/teachtune.pdf'), acm, springer, arxiv, website.
export const ConfPublications = [
  {
    id: 'reliancescope',
    image: 'teaser-reliancescope.png',
    title: 'RelianceScope: An Analytical Framework for Examining Students\' Reliance on Generative AI Chatbots in Problem Solving',
    authors: ['hyoungwook', 'minju', 'jieun', 'zixin', 'soyeon', 'xu'],
    year: 2026,
    venue: 'L@S',
    award: 'Best Paper',
    urls: {
      pdf: '/files/reliancescope.pdf',
      acm: 'https://doi.org/10.1145/3774398.3811612',
      arxiv: 'https://arxiv.org/abs/2602.16251',
      website: 'https://jhw123.github.io/project/reliancescope',
    },
  },
  {
    id: 'teachtune',
    image: 'teaser-teachtune.png',
    title: 'TeachTune: Reviewing Pedagogical Agents Against Diverse Student Profiles with Simulated Students',
    authors: ['hyoungwook', 'minju', 'jeongeon', 'Yokyung Lee', 'xu', 'juho'],
    year: 2025,
    venue: 'CHI',
    urls: {
      pdf: '/files/teachtune.pdf',
      acm: 'https://doi.org/10.1145/3706598.3714054',
      arxiv: 'https://arxiv.org/abs/2410.04078v3',
      website: 'https://teachtune.kixlab.org/',
    },
  },
];

export const WorkPublications = [
  {
    id: 'ailit',
    title: 'Toward Critical AI Literacy: Embedded Assessment of Students’ Critical Engagement with LLM Responses',
    authors: ['minju', 'Junghee Hwang'],
    equalContribution: ['minju', 'Junghee Hwang'],
    venue: 'AIED',
    year: 2026,
    note: 'Workshop: ALIT4ALL (2nd International Workshop on AI Literacy Education For All) · Poster track',
    urls: {
      pdf: '/files/ailit.pdf',
    },
  },
  {
    id: 'mindful',
    image: 'teaser-mindful.jpg',
    title: 'Conversational AI Meets Mindfulness: Exploring LLMs as a Socio‑Emotional Layer in a Math Intelligent Tutoring System',
    authors: ['Vera Rief', 'Mirella Hladký', 'minju', 'Stephanie Heel', 'Shintaro Sato', 'tomo'],
    venue: 'EC-TEL',
    year: 2026,
    note: 'Poster',
    urls: {
      pdf: '/files/mindful.pdf',
      springer: 'https://doi.org/10.1007/978-3-032-37982-5_30',
      arxiv: 'https://arxiv.org/abs/2609.02611',
    },
  },
  {
    id: 'protoflow',
    title: 'Supporting Design Reasoning in AI-assisted Interface Prototyping for HCI Research',
    authors: ['grace', 'minju', 'jenny', 'daeun'],
    equalContribution: ['grace', 'minju'],
    venue: 'CHI',
    year: 2026,
    note: 'Poster',
    urls: {
      pdf: '/files/protoflow.pdf',
      acm: 'https://doi.org/10.1145/3772363.3798883',
    },
  },
  {
    id: 'teachcraft',
    title: 'How Do Teachers Create Pedagogical Chatbots?: Current Practices and Challenges',
    authors: ['minju', 'hyoungwook', 'juho'],
    venue: 'CHI',
    year: 2025,
    note: 'Workshop: Augmented Educators and AI',
    urls: {
      pdf: '/files/teachcraft.pdf',
      arxiv: 'https://arxiv.org/abs/2503.00967',
    },
  },
  {
    id: 'beyond',
    title: 'Beyond Tools: Understanding How Heavy Users Integrate LLMs into Everyday Tasks and Decision-Making',
    authors: ['grace', 'kiroong', 'minju', 'sadat', 'jinwook'],
    venue: 'CHI',
    year: 2025,
    note: 'Workshop: Tools for Thought',
    urls: {
      pdf: '/files/beyond.pdf',
      arxiv: 'https://arxiv.org/abs/2502.15395',
    },
  },
];
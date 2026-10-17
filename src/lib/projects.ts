// The products shown on the home page and /projects.
// Every number here has a source: Sharpy's from its README and white paper
// (measured on a 16 GB Mac mini M4), Threadify's from the live product and its repository.
// Update them together when the products move.

export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type ProjectProof = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  index: string;
  name: string;
  logo: string;
  status: string;
  headline: string;
  summary: string;
  why: string;
  rule?: string;
  role: string;
  proof: ProjectProof[];
  proofNote: string;
  stack: string;
  image: { src: string; alt: string; width: number; height: number; label: string };
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: 'sharpy',
    index: '01',
    name: 'Sharpy',
    logo: '/images/sharpy-icon.png',
    status: 'Early access · macOS',
    headline: 'A video editor that cuts on meaning, not on silence.',
    summary:
      'Most editing tools cut where the audio drops below a threshold. Sharpy reads what is said, how it is said and what is on screen. Then it plans the edit, cuts it, checks it and renders it. It asks a person only what the footage cannot answer.',
    why:
      "I'm not a video editor, and I don't have time to become one. So I'm building an editor where the recording is the only part a creator has to do. It is a full manual editor too: the agent and the person work on the same edit file.",
    rule: 'Every edit decision carries a basis: the fact or rule that produced it. A decision with no basis does not render.',
    role: 'Built solo since 3 September 2026: 1,145 commits in six weeks. I designed the architecture and the agent build process that writes it.',
    proof: [
      { value: '90', label: 'MCP tools an agent drives it with, plus 171 shell commands' },
      { value: '3,968', label: 'tests, run in full before every commit' },
      { value: '83.4 fps', label: 'four 4K ProRes layers composited in full ACES colour' },
      { value: '2.82%', label: 'character error reading on-screen text, against 11.00% for Apple Vision' },
    ],
    proofNote: 'Measured on a 16 GB Mac mini M4',
    stack: 'Swift 6 · Metal · on-device models · MCP',
    image: {
      src: '/images/sharpy-timeline.png',
      alt: "Illustration of Sharpy's timeline: a cut between two clips, labelled with its basis, a 0.42 second pause",
      width: 1120,
      height: 580,
      label: 'every cut carries its basis',
    },
    links: [
      { label: 'Visit sharpy.live', href: 'https://sharpy.live', primary: true },
      { label: 'Join early access', href: 'https://sharpy.live/#access' },
    ],
  },
  {
    id: 'threadify',
    index: '02',
    name: 'Threadify',
    logo: '/images/threadify-logo.png',
    status: 'Live since January 2026',
    headline: 'A lead generation agent that writes in your voice.',
    summary:
      "Threadify drafts posts, threads and replies from a creator's Brain: a knowledge graph built from their own writing. It publishes to Threads, X, LinkedIn and YouTube, and tracked links tie every post to the clicks, leads and revenue it earned. The creator approves before anything goes out.",
    why: 'It runs on the web, iPhone, iPad, Mac and Android, with a Chrome extension for saving inspiration. Claude, ChatGPT and Gemini can run it too: paste one URL and an agent gets its tools, with OAuth sign-in and an audit log.',
    role: 'Lead engineer, building with Lennox Saint. I wrote 89% of its 5,268 commits and ship every production release.',
    proof: [
      { value: '2,000+', label: 'creators signed up since launch on 15 January 2026' },
      { value: '93', label: 'MCP tools live in production' },
      { value: '7,145', label: 'automated tests' },
      { value: '15', label: "sign-ups from one creator's thread, 18 hours after posting" },
    ],
    proofNote: 'From the live product and its repository, October 2026',
    stack: 'Next.js · Supabase · QStash · Capacitor · MCP',
    image: {
      src: '/images/threadify-home.png',
      alt: 'The Threadify homepage: Your Lead Generation Agent, with a link attribution card tracking posts to leads to revenue',
      width: 1600,
      height: 862,
      label: 'posts → leads → revenue',
    },
    links: [
      { label: 'Visit threadify.app', href: 'https://www.threadify.app/home', primary: true },
      { label: 'App Store', href: 'https://apps.apple.com/app/threadify/id6760282168' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.threadify.app' },
      {
        label: 'Chrome extension',
        href: 'https://chromewebstore.google.com/detail/threadify-vault/iflfhhkkadlfffhpnapgmhlbpfjofmmd',
      },
      { label: 'Changelog', href: 'https://www.threadify.app/changelog' },
    ],
  },
];

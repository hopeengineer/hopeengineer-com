// Testimonials on the home page.
// Threadify quotes are copied from Threadify's own site (lib/plans/plansContent.ts in threadify-app), October 2026.
// Full Circle and book testimonials are the original screenshots.

export type QuoteTestimonial = {
  quote: string;
  author: string;
  /** Threads handle without @; the name links to the profile when set */
  threadsHandle?: string;
  verified?: boolean;
  /** A concrete result, shown as a chip */
  result?: string;
  avatar?: string;
};

export type ScreenshotTestimonial = {
  image: string;
  width: number;
  height: number;
  alt: string;
  source: 'Full Circle' | 'Success by Design';
};

const avatar = (handle: string) => `/images/testimonials/avatar-${handle}.jpg`;

export const threadifyTestimonials: QuoteTestimonial[] = [
  {
    quote: "This AI tool is the one you wish you had in the beginning. To write everything. Can't freaking wait to tell the Threads community about it!",
    author: 'hustle.social',
    threadsHandle: 'hustle.social',
    verified: true,
    avatar: avatar('hustle.social'),
  },
  {
    quote: 'I gave Threadify a link to my sign-up page and posted one 8-part thread. 1,980 people saw it in 18 hours. Only 22 were my followers. I got 15 sign-ups and my first tripwire sales.',
    author: 'Trina Esquivelzeta',
    result: '15 sign-ups from one thread',
  },
  {
    quote: 'I grew my audience from 0 to 6,000 in like 3 months. It makes ChatGPT and other AI tools look basic.',
    author: 'moodflowsanctuary',
    threadsHandle: 'moodflowsanctuary',
    result: '0 to 6,000 followers',
    avatar: avatar('moodflowsanctuary'),
  },
  {
    quote: 'Threadify just changed my life for the content part. I have scheduled my entire next week, and now I can focus on building real stuff.',
    author: 'Utkarsh Kumar',
  },
  {
    quote: "It's absolutely amazing. I'm the queen of feedback, and I haven't found much to complain about. It's everything I wanted in a scheduling app and more.",
    author: 'abidinghopementalhealthcoach',
    threadsHandle: 'abidinghopementalhealthcoach',
    avatar: avatar('abidinghopementalhealthcoach'),
  },
  {
    quote: "I run a pub and I'm building a virtual pub community. Excited to see where this goes!",
    author: 'Stephanie Carr',
    threadsHandle: 'calmcreatorclub',
    result: '+2,484 followers in 30 days',
    avatar: avatar('calmcreatorclub'),
  },
  {
    quote: 'Threadify is an absolute gem of a tool.',
    author: 'Cody Normoyle',
    threadsHandle: 'realcodytye',
    verified: true,
    avatar: avatar('realcodytye'),
  },
  {
    quote: 'I am in love with Threadify and every feature that I discover.',
    author: 'Julia Estrada',
  },
  {
    quote: 'I tried it out step by step, worked like butter. Love the Knowledge Base feature.',
    author: 'eduardobydesign',
    threadsHandle: 'eduardobydesign',
    avatar: avatar('eduardobydesign'),
  },
  {
    quote: "I'm impressed. This might be the shortcut I needed to focus on what truly matters.",
    author: 'Björn Van Egroo',
    threadsHandle: 'formless.artist',
    avatar: avatar('formless.artist'),
  },
];

const shot = (name: string, width: number, height: number, source: ScreenshotTestimonial['source'], alt: string): ScreenshotTestimonial => ({
  image: `/images/testimonials/${name}.png`,
  width,
  height,
  source,
  alt,
});

export const communityTestimonials: ScreenshotTestimonial[] = [
  shot('fc-vivek', 796, 559, 'Full Circle', 'Vivek Iyer on the Full Circle win wall: FC is amazing. The templates, GPTs, circle sessions and seminars taught by Lennox Saint, Heythem Naji, Sameera Samarasinghe and Yasmine Lindsay work. Close to 8k followers.'),
  shot('book-review-alastair', 645, 345, 'Success by Design', 'Alastair (@upliftedrecovery): I purchased Success by Design to deepen my understanding of working with ChatGPT and AI. Since reading the book I have significantly improved my traction on Meta Threads. I highly recommend it.'),
  shot('fc-angela', 765, 363, 'Full Circle', "Angela Youello on the Full Circle win wall: It's happening today! I'm going to hit 10k today. This is entirely due to the foundation I've had in Saints College and Full Circle."),
  shot('book-review-1', 641, 208, 'Success by Design', "A reader's review of Success by Design: an excellent read whether you are wrestling with the basics of AI or have advanced knowledge. 5 out of 5 stars."),
  shot('fc-magda', 795, 389, 'Full Circle', "Magda Mroz on the Full Circle win wall: Thank-you post for Full Circle. My latest long-form post has been catching fire. I wouldn't be here without the Full Circle community."),
  shot('fc-traci', 789, 461, 'Full Circle', "Traci Tournoux on the Full Circle win wall: 100 new followers since day one of FC. Here's to the next milestone, hitting 1K."),
];

// Social proof shown in and right after the hero.
// The post images are Threads' own "Copy as image" cards (metrics on), taken 17 October 2026.
// Numbers in the stats come from the Threads account via Threadify on the same day. Update them together.

export type ProofPost = {
  image: string;
  width: number;
  height: number;
  alt: string;
  url: string;
};

const post = (name: string, height: number, alt: string, url: string): ProofPost => ({
  image: `/images/posts/${name}.png`,
  width: 968,
  height,
  alt,
  url,
});

export const bestPosts: ProofPost[] = [
  post(
    'ferrari',
    544,
    "Threads post by hopeengineer: I don't want to be rich for the Ferrari. I want to surprise my in-laws with flight tickets to Rome, cover a friend's emergency bill, pay for dinner without checking the bank balance, and adopt 1000 homeless kids by 2030. That's wealth. 21.4K likes, 505 replies, 1.1K reposts.",
    'https://www.threads.com/@hopeengineer/post/DNtbUK55BZD',
  ),
  post(
    'me-at-32',
    635,
    "Threads post by hopeengineer: Me at 32: suicidal, depressed, drinking to escape reality. Me at 34: in love with being alive, 800+ days sober and clear, building a life I don't need to escape from. A lot can change in 2 years. Start. 5.3K likes, 215 replies.",
    'https://www.threads.com/@hopeengineer/post/DPDSDlsiDWZ',
  ),
  post(
    'mental-health',
    380,
    "Threads post by hopeengineer: I'm 34. I struggled a lot with my mental health in my 20's. Here are 7 things I wish someone had told me 10 years ago. 5.4K likes, 167 replies, 750 reposts.",
    'https://www.threads.com/@hopeengineer/post/DMu2gL9x3Pr',
  ),
  post(
    'uk-truths',
    434,
    "Threads post by hopeengineer: I'm 34. I lived in the UK for 11 years and last year came back to Sri Lanka. Here are 13 brutal truths you need to know about UK life. 3.1K likes, 1K replies.",
    'https://www.threads.com/@hopeengineer/post/DJ1qzbszkyp',
  ),
  post(
    'resignation',
    417,
    'Threads post by hopeengineer: I handed my resignation letter to my boss, my hands were actually shaking. I was walking away from a 14-year career and a £4,000 take-home pay in the UK. 2.1K likes, 274 replies.',
    'https://www.threads.com/@hopeengineer/post/DRzUnIPlHxh',
  ),
  post(
    'resume',
    739,
    "Threads post by hopeengineer: I'm 34, born in 91, and you won't find this on my resumé: burned out after 14 years in tech, diagnosed with depression and anxiety at 31, moved back to Sri Lanka in 2023, broke but with a plan, built a company from the ground up in 2 years. 1.8K likes, 403 replies.",
    'https://www.threads.com/@hopeengineer/post/DK7EMGkzh97',
  ),
];

// The three in the hero, then the three shown right after it
export const heroPosts = bestPosts.slice(0, 3);
export const morePosts = bestPosts.slice(3);

export const proofStats = [
  { value: '31.8K', label: 'followers on Threads' },
  { value: '1.2M', label: 'views on a single post' },
  { value: '21.4K', label: 'likes on one post' },
  { value: '2,000+', label: 'creators on Threadify' },
];

export const THREADS_PROFILE = 'https://www.threads.com/@hopeengineer';

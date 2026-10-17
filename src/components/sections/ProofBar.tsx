import { THREADS_PROFILE } from '@/lib/proof';

const stats = [
  { value: '1.2M', label: 'views on one post', tone: '-rotate-6 bg-primary text-primary-foreground' },
  { value: '21.4K', label: 'likes on one post', tone: 'rotate-3 bg-white text-black' },
  { value: '2,000+', label: 'creators on Threadify', tone: '-rotate-2 bg-primary text-primary-foreground' },
];

const MARQUEE = '31.8K followers · 1.2M views · 21.4K likes · 2,000+ creators · ';

// Social proof right after the hero: big numbers over a giant scrolling line.
export function ProofBar() {
  return (
    <section aria-label="By the numbers" className="relative z-10 overflow-hidden py-10 md:py-16">
      <div className="relative flex items-center justify-center py-10 md:py-14">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden" aria-hidden="true">
          <div className="marquee-track flex w-max whitespace-nowrap font-headline text-[18vw] font-bold leading-none tracking-tighter text-white/[0.07] md:text-[10rem]">
            <span>{MARQUEE}</span>
            <span>{MARQUEE}</span>
          </div>
        </div>
        <dl className="relative flex flex-wrap items-center justify-center gap-4 px-4 md:gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse rounded-2xl px-6 py-5 shadow-2xl md:px-10 md:py-8 ${s.tone} ${i > 0 ? 'md:-ml-6' : ''}`}
            >
              <dt className="mt-2 text-xs font-semibold uppercase tracking-wider md:text-sm">{s.label}</dt>
              <dd className="font-headline text-4xl font-bold leading-none tabular-nums md:text-7xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="mt-8 text-center text-sm text-white/60 lg:mt-8">
        <a href={THREADS_PROFILE} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center underline decoration-primary/50 underline-offset-4 hover:text-primary">
          Follow @hopeengineer on Threads ↗
        </a>
      </p>
    </section>
  );
}

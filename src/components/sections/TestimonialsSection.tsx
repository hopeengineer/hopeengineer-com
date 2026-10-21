'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BadgeCheck } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import {
  communityTestimonials,
  threadifyTestimonials,
  type QuoteTestimonial,
  type ScreenshotTestimonial,
} from '@/lib/testimonials';
import { ScrollSection } from '../scroll/ScrollSection';

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function QuoteCard({ t }: { t: QuoteTestimonial }) {
  const name = t.threadsHandle ? (
    <a
      href={`https://www.threads.com/@${t.threadsHandle}`}
      target="_blank"
      rel="noopener noreferrer"
      className="truncate font-semibold text-foreground hover:text-primary"
    >
      {t.author}
    </a>
  ) : (
    <span className="truncate font-semibold text-foreground">{t.author}</span>
  );

  return (
    <figure className="flex w-[18.75rem] shrink-0 flex-col gap-4 rounded-2xl border border-white/10 bg-black/60 p-5 shadow-xl backdrop-blur-xl md:w-[340px]">
      <figcaption className="flex items-center gap-3">
        {t.avatar ? (
          <Image src={t.avatar} alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-full object-cover" />
        ) : (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
            {initials(t.author)}
          </span>
        )}
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="flex min-w-0 items-center gap-1">
            {name}
            {t.verified && <BadgeCheck className="h-4 w-4 shrink-0 text-sky-400" aria-label="Verified" />}
          </span>
          <span className="text-xs text-white/50">Threadify user</span>
        </span>
      </figcaption>
      <blockquote className="text-sm leading-relaxed text-white/85">&ldquo;{t.quote}&rdquo;</blockquote>
      {t.result && (
        <span className="mt-auto self-start rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">{t.result}</span>
      )}
    </figure>
  );
}

function ShotCard({ t, onOpen }: { t: ScreenshotTestimonial; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-xl transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`Open testimonial: ${t.alt}`}
    >
      <Image
        src={t.image}
        alt={t.alt}
        width={t.width}
        height={t.height}
        sizes="420px"
        className="h-[12.5rem] w-auto md:h-[240px]"
      />
      <span className="absolute left-3 top-3 rounded-full bg-black/75 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-white backdrop-blur">
        {t.source}
      </span>
    </button>
  );
}

// One row that glides sideways forever: the cards are rendered twice so the loop is seamless.
// Hovering pauses it; with reduced motion it stays still and scrolls by hand.
function Row({ children, reverse = false, duration }: { children: React.ReactNode; reverse?: boolean; duration: number }) {
  return (
    <div className="testimonial-row relative overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div
        className="testimonial-track flex w-max py-2"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {/* Two identical halves (each with trailing space) so moving by exactly half loops seamlessly */}
        <div className="flex items-start gap-5 pr-5">{children}</div>
        <div className="flex items-start gap-5 pr-5" aria-hidden="true" inert>
          {children}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [open, setOpen] = useState<ScreenshotTestimonial | null>(null);

  return (
    <ScrollSection triggerOffset="top 80%" className="py-20 md:py-32 lg:min-h-screen flex flex-col justify-center">
      <div className="w-full">
        <div className="container mb-12 px-4 text-center md:mb-16 md:px-6">
          <p className="text-sm font-code tracking-[0.2em] text-primary uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-gradient-light leading-tight">What people say</h2>
        </div>

        <div className="space-y-6">
          <Row duration={70}>
            {threadifyTestimonials.map((t) => (
              <QuoteCard key={t.author} t={t} />
            ))}
          </Row>
          <Row reverse duration={60}>
            {communityTestimonials.map((t) => (
              <ShotCard key={t.image} t={t} onOpen={() => setOpen(t)} />
            ))}
          </Row>
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl border-white/10 bg-background/95 p-3">
          <DialogTitle className="sr-only">{open?.source} testimonial</DialogTitle>
          <DialogDescription className="sr-only">{open?.alt}</DialogDescription>
          {open && <Image src={open.image} alt={open.alt} width={open.width} height={open.height} className="h-auto w-full rounded-lg" />}
        </DialogContent>
      </Dialog>
    </ScrollSection>
  );
}

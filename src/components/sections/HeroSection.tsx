'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { bestPosts } from '@/lib/proof';
import { WaveCards } from './WaveCards';

const PORTRAIT = 'https://i.imgur.com/uiFxqeG.jpeg';

const products = [
  { href: '#threadify', logo: '/images/threadify-logo.png', name: 'Threadify', job: 'Turns your posts into leads', short: 'Posts into leads' },
  { href: '#sharpy', logo: '/images/sharpy-icon.png', name: 'Sharpy', job: 'Edits your videos by itself', short: 'Edits video itself' },
];

// The two products as chips in one row; each jumps to its section further down the page.
// On phones they get smaller, and the row swipes sideways if it still doesn't fit.
function ProductChips({ className = '' }: { className?: string }) {
  return (
    <ul
      className={`pointer-events-auto flex snap-x snap-mandatory flex-row flex-nowrap gap-2 overflow-x-auto [scrollbar-width:none] sm:gap-3 [&::-webkit-scrollbar]:hidden ${className}`}
      aria-label="What I build"
    >
      {products.map((product) => (
        <li key={product.name} className="shrink-0 snap-start">
          <a
            href={product.href}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-black/50 py-1.5 pl-1.5 pr-3 text-left backdrop-blur-md transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-3 sm:py-2 sm:pl-2 sm:pr-5"
          >
            <Image src={product.logo} alt="" width={40} height={40} className="h-8 w-8 rounded-full sm:h-10 sm:w-10" />
            <span className="flex flex-col whitespace-nowrap leading-tight">
              <span className="text-sm font-headline font-bold text-foreground sm:text-base">{product.name}</span>
              <span className="text-[11px] text-white/60 sm:hidden">{product.short}</span>
              <span className="hidden text-sm text-white/60 sm:inline">{product.job}</span>
            </span>
            <ArrowRight className="ml-1 hidden h-4 w-4 shrink-0 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-primary sm:block" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden lg:min-h-screen">
      {/* The posts people actually read, drifting on a wave behind the portrait (desktop) */}
      <div className="absolute inset-0 hidden lg:block">
        <WaveCards posts={bestPosts} />
      </div>

      <div className="pointer-events-none container relative z-10 grid grid-cols-1 items-center gap-10 px-4 pt-28 pb-14 lg:min-h-screen lg:pb-20 md:px-6 lg:grid-cols-[1fr_minmax(0,560px)] lg:items-stretch lg:gap-12">
        {/* Who I am and what I solve: headline at the top, the wave passes underneath, the button sits below it */}
        <div className="flex flex-col items-center text-center lg:h-full lg:items-start lg:justify-between lg:py-8 lg:text-left">
          <div className="pointer-events-auto flex flex-col items-center lg:items-start">
            <p className="font-code text-xs md:text-sm uppercase tracking-[0.25em] text-white/60">
              Sameera <span aria-hidden="true">·</span> hopeengineer
            </p>
            <h1 className="mt-6 text-[2.6rem] font-headline font-bold tracking-tighter sm:text-6xl lg:text-[4.25rem] leading-[1.03] text-foreground drop-shadow-2xl text-balance">
              I rebuilt my life from zero in under 2 years.
            </h1>
            <p className="mt-6 max-w-[520px] text-xl md:text-2xl font-body leading-snug text-white/80 text-balance">
              Now I build AI that gives you <span className="text-gradient-primary font-semibold">your time back.</span>
            </p>
          </div>
          <div className="mt-10 hidden flex-col items-start gap-6 lg:flex">
            <ProductChips />
            <Button asChild size="lg" className="pointer-events-auto w-[220px] bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 font-semibold text-base py-6">
              <a href="#services">Work with me</a>
            </Button>
          </div>
        </div>

        {/* One focal visual: me. On smaller screens the wave runs behind the photo, full width. */}
        <div className="pointer-events-auto relative mx-auto w-full max-w-[220px] sm:max-w-[300px] lg:max-w-[400px] lg:self-center">
          <div className="absolute inset-y-0 left-[calc(50%-50vw)] w-screen lg:hidden">
            <WaveCards posts={bestPosts} variant="band" />
          </div>
          <div className="relative z-20 aspect-[3/4] w-full overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_80px_rgba(255,170,0,0.18)]">
            <Image src={PORTRAIT} alt="Sameera (hopeengineer)" fill sizes="(min-width: 1024px) 400px, 300px" className="object-cover" priority />
          </div>
          {/* The sticker */}
          <div className="absolute -bottom-5 -right-6 z-30 rotate-[-5deg] rounded-xl bg-primary px-4 py-3 text-primary-foreground shadow-2xl md:px-5 md:py-4">
            <p className="font-headline text-2xl font-bold leading-none tabular-nums md:text-4xl">31.8K</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider md:text-xs">followers on Threads</p>
          </div>
        </div>

        {/* Phones and tablets: the products, then the button, below the photo */}
        <ProductChips className="-mx-4 mt-4 w-[calc(100%+2rem)] px-4 [&>li:first-child]:ml-auto [&>li:last-child]:mr-auto lg:hidden" />
        <Button asChild size="lg" className="pointer-events-auto mx-auto -mt-4 w-full sm:w-[260px] lg:hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 font-semibold text-base py-6">
          <a href="#services">Work with me</a>
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 hidden lg:flex flex-col items-center opacity-70 animate-bounce motion-reduce:animate-none" aria-hidden="true">
        <span className="text-xs uppercase tracking-[0.3em] font-code mb-2">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
}

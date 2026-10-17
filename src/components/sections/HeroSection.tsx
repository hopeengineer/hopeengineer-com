'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  { href: '#threadify', logo: '/images/threadify-logo.png', name: 'Threadify', job: 'Turns your posts into leads' },
  { href: '#sharpy', logo: '/images/sharpy-icon.png', name: 'Sharpy', job: 'Edits your videos by itself' },
];

export function HeroSection() {
  return (
    <div className="container relative h-screen flex flex-col justify-center px-4 md:px-6 z-10 w-full">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        <div className="space-y-6">
          <p className="font-code text-xs md:text-sm uppercase tracking-[0.25em] text-white/60">
            hopeengineer <span aria-hidden="true">·</span> Engineer your hope
          </p>
          <h1 className="text-[2.6rem] font-headline font-bold tracking-tighter sm:text-6xl md:text-[4rem] lg:text-[4.75rem] leading-[1.05] text-foreground drop-shadow-2xl text-balance">
            <span className="block">I rebuilt my life from zero.</span>
            <span className="block text-white/70">
              Now I build AI that gives&nbsp;you <span className="text-gradient-primary">your time back.</span>
            </span>
          </h1>
          <p className="max-w-[700px] mx-auto text-white/80 md:text-xl font-body leading-relaxed text-balance">
            I am Sameera, a former Amazon software engineer, building from Sri Lanka.
          </p>
        </div>

        <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4" aria-label="What I build">
          {products.map((product) => (
            <li key={product.name}>
              <a
                href={product.href}
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-black/40 py-2 pl-2 pr-5 text-left backdrop-blur-md transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Image src={product.logo} alt="" width={40} height={40} className="h-10 w-10 rounded-full" />
                <span className="flex flex-col leading-tight">
                  <span className="font-headline font-bold text-foreground">{product.name}</span>
                  <span className="text-sm text-white/60">{product.job}</span>
                </span>
                <ArrowRight className="ml-1 h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-8 w-full sm:w-auto">
          <Button asChild size="lg" className="w-full sm:w-[220px] bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 backdrop-blur-md font-semibold text-base py-6">
            <Link href="/work-with-me">Work with me</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-70 animate-bounce motion-reduce:animate-none" aria-hidden="true">
        <span className="text-xs uppercase tracking-[0.3em] font-code mb-2">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
}

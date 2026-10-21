'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import type { ProofPost } from '@/lib/proof';

// Posts drift along an S-shaped wave that passes behind the hero portrait,
// each one tilting with the curve. The path is rebuilt for the container's size.
type Variant = 'wide' | 'band';

type Layout = { path: string; count: number; cardWidth: number; duration: number };

const SPEED = 40; // px per second along the wave

function pathLength(d: string) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  el.setAttribute('d', d);
  return el.getTotalLength();
}

// Desktop: in from the left edge just under the headline, nearly level, behind the portrait, then rising to the top right.
// One card per post, spaced evenly and sized to fill the wave with a small gap.
function wideLayout(w: number, h: number, posts: number): Layout {
  const path = `M ${-0.1 * w} ${0.6 * h} C ${0.14 * w} ${0.56 * h}, ${0.32 * w} ${0.68 * h}, ${0.52 * w} ${0.62 * h} S ${0.82 * w} ${0.3 * h}, ${1.12 * w} ${0.16 * h}`;
  const length = pathLength(path);
  const count = Math.min(posts, Math.max(3, Math.floor(length / (260 * 1.15))));
  return { path, count, cardWidth: Math.round(Math.min(380, (length / count) * 0.84)), duration: length / SPEED };
}

// Phones and tablets: a band behind the portrait. The wave is made just long enough for every post with a
// small gap, centred on the screen, so the cards sit close together and loop out of sight past both edges.
function bandLayout(w: number, h: number, posts: number): Layout {
  // Scale with the root font size, which is smaller on phones (globals.css)
  const rem = typeof document === 'undefined' ? 1 : parseFloat(getComputedStyle(document.documentElement).fontSize) / 16 || 1;
  const card = (w >= 640 ? 210 : 150) * rem;
  const gap = 14 * rem;
  const span = (posts * (card + gap)) / 1.06; // the wave adds a little length over its width
  const x = (t: number) => w / 2 - span / 2 + t * span;
  const path = `M ${x(0)} ${0.5 * h} C ${x(0.22)} ${0.3 * h}, ${x(0.38)} ${0.66 * h}, ${x(0.5)} ${0.5 * h} S ${x(0.84)} ${0.32 * h}, ${x(1)} ${0.5 * h}`;
  const length = pathLength(path);
  return { path, count: posts, cardWidth: Math.round(length / posts - gap), duration: length / SPEED };
}

function layoutFor(variant: Variant, w: number, h: number, posts: number): Layout {
  return variant === 'wide' ? wideLayout(w, h, posts) : bandLayout(w, h, posts);
}

// Where a hovered card pops up to: about 500px wide (less on small screens), nudged so it stays fully on screen
function placePopup(e: MouseEvent<HTMLAnchorElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const margin = 12;
  const baseW = el.offsetWidth;
  const baseH = el.offsetHeight;
  const scale = Math.min(500, window.innerWidth - margin * 2) / baseW;
  const w = baseW * scale;
  const h = baseH * scale;
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  let left = Math.min(Math.max(cx - w / 2, margin), window.innerWidth - margin - w);
  let top = Math.min(Math.max(cy - h / 2, 80 + margin), window.innerHeight - margin - h);
  // Keep the popped card under the pointer, or the hover would end and it would flicker
  left = Math.max(Math.min(left, e.clientX - 16), e.clientX + 16 - w);
  top = Math.max(Math.min(top, e.clientY - 16), e.clientY + 16 - h);
  el.style.setProperty('--pop', scale.toFixed(3));
  el.style.setProperty('--dx', `${Math.round(left + w / 2 - cx)}px`);
  el.style.setProperty('--dy', `${Math.round(top + h / 2 - cy)}px`);
}

export function WaveCards({ posts, variant = 'wide' }: { posts: ProofPost[]; variant?: Variant }) {
  const ref = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<Layout | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Skipped while hidden (the other variant is showing); recomputed when it becomes visible
    const update = () => el.clientWidth > 0 && setLayout(layoutFor(variant, el.clientWidth, el.clientHeight, posts.length));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [posts.length, variant]);

  return (
    <div ref={ref} className="wave absolute inset-0 overflow-x-clip" aria-hidden="true">
      {layout &&
        posts.slice(0, layout.count).map((post, i) => (
          <a
            // Keyed by the layout so every card restarts together when it changes, keeping the spacing even
            key={`${layout.path}-${i}`}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            title="Open this post on Threads (new tab)"
            onMouseEnter={placePopup}
            className="wave-card absolute left-0 top-0 block overflow-hidden rounded-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            style={{
              width: layout.cardWidth,
              offsetPath: `path('${layout.path}')`,
              animationDuration: `${layout.duration}s`,
              animationDelay: `${(-layout.duration * i) / layout.count}s`,
            }}
          >
            <Image src={post.image} alt="" width={post.width} height={post.height} sizes={`${layout.cardWidth * 2}px`} className="h-auto w-full" />
          </a>
        ))}
    </div>
  );
}

import Image from 'next/image';
import type { ProofPost } from '@/lib/proof';

// One Threads post screenshot that opens the real post.
export function PostShot({ post, className = '', sizes, style }: { post: ProofPost; className?: string; sizes: string; style?: React.CSSProperties }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-[transform,border-color] duration-300 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
      style={style}
    >
      <Image src={post.image} alt={post.alt} width={post.width} height={post.height} sizes={sizes} className="h-auto w-full" />
      <span className="sr-only"> (opens on Threads in a new tab)</span>
    </a>
  );
}

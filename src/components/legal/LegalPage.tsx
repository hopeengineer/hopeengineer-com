import type { ReactNode } from 'react';

// Shared layout for the Privacy Policy and Terms pages
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <div className="relative z-10 min-h-screen pt-32 pb-24">
      <div className="container max-w-3xl mx-auto px-4 md:px-6">
        <div className="glass-panel p-6 md:p-12">
          <p className="text-sm font-code tracking-[0.2em] text-primary uppercase mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-gradient-light mb-3">{title}</h1>
          <p className="text-sm text-white/50 mb-10">Last updated {updated}</p>
          <div className="prose prose-invert max-w-none font-body prose-headings:font-headline prose-headings:font-bold prose-h2:mt-10 prose-h2:text-2xl prose-p:leading-relaxed prose-p:text-white/75 prose-li:text-white/75 prose-a:text-primary hover:prose-a:text-primary/80">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

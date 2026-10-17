'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollSection } from '../scroll/ScrollSection';
import type { Project } from '@/lib/projects';

interface ProjectSectionProps {
  project: Project;
  headingLevel?: 'h2' | 'h3';
}

export function ProjectSection({ project, headingLevel = 'h3' }: ProjectSectionProps) {
  const Heading = headingLevel;
  const primaryLink = project.links.find((link) => link.primary);
  const otherLinks = project.links.filter((link) => !link.primary);

  return (
    <ScrollSection triggerOffset="top 80%" className="py-20 md:py-32 lg:min-h-screen flex items-center">
      <article
        id={project.id}
        aria-labelledby={`${project.id}-title`}
        className="container px-4 md:px-6 z-10 scroll-mt-24"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start rounded-2xl border border-white/10 bg-black/50 p-6 shadow-2xl backdrop-blur-xl md:p-10 lg:p-12">
          {/* The story of the product */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-code text-xs uppercase tracking-[0.2em] text-primary">
                {project.index} / Building now
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                {project.status}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src={project.logo}
                alt=""
                width={64}
                height={64}
                className="h-14 w-14 shrink-0 rounded-2xl shadow-lg md:h-16 md:w-16"
              />
              <Heading
                id={`${project.id}-title`}
                className="text-5xl md:text-6xl font-headline font-bold tracking-tight text-gradient-light"
              >
                {project.name}
              </Heading>
            </div>

            <p className="text-2xl md:text-3xl font-headline font-medium leading-snug text-foreground text-balance">
              {project.headline}
            </p>

            <p className="text-muted-foreground md:text-lg leading-relaxed text-pretty">{project.summary}</p>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              {primaryLink && (
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto self-start bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 font-semibold text-base h-12 px-6"
                >
                  <a href={primaryLink.href} target="_blank" rel="noopener noreferrer">
                    {primaryLink.label}
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
              )}
              {otherLinks.length > 0 && (
                <ul className="flex flex-wrap gap-2" aria-label={`More ${project.name} links`}>
                  {otherLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white/80 transition-colors hover:border-primary/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {project.rule && (
              <blockquote className="border-l-2 border-primary pl-5 text-white/90 md:text-lg leading-relaxed">
                {project.rule}
              </blockquote>
            )}

            <p className="text-muted-foreground leading-relaxed text-pretty">{project.why}</p>
          </div>

          {/* The evidence */}
          <div className="lg:col-span-7 space-y-6">
            <figure className="glass-panel overflow-hidden">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="ml-3 font-code text-xs text-white/50">{project.image.label}</span>
              </div>
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full"
              />
            </figure>

            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
              {project.proof.map((item) => (
                <div key={item.label} className="flex flex-col-reverse justify-end gap-2 bg-background/85 p-5 md:p-6">
                  <dt className="text-sm leading-snug text-muted-foreground">{item.label}</dt>
                  <dd className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-headline font-bold tabular-nums text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="text-sm leading-relaxed text-white/70">{project.role}</p>

            <p className="font-code text-xs leading-relaxed text-white/50">
              {project.proofNote}
              <br />
              {project.stack}
            </p>
          </div>
        </div>
      </article>
    </ScrollSection>
  );
}

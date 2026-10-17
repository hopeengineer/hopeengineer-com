'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectSection } from '@/components/sections/ProjectSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection';
import { ContactCTASection } from '@/components/sections/ContactCTASection';
import { projects } from '@/lib/projects';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Global Cinematic Snapping Logic (80% Slower than native CSS)
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: ".snap-section",
        duration: { min: 0.8, max: 2.0 }, // Luxurious, slow animation
        delay: 0.1, // Wait briefly after scrolling stops
        ease: "power2.inOut"
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className="w-full relative">
      <div ref={containerRef} className="flex flex-col w-full relative z-10">
        <div className="snap-section w-full"><HeroSection /></div>
        <div className="snap-section w-full"><AboutSection /></div>
        <section aria-labelledby="products-heading">
          <h2 id="products-heading" className="sr-only">What I&apos;m building</h2>
          {projects.map((project) => (
            <div key={project.id} className="snap-section w-full"><ProjectSection project={project} /></div>
          ))}
        </section>
        <div className="snap-section w-full"><ServicesSection /></div>
        <div className="snap-section w-full"><BlogPreviewSection /></div>
        <div className="snap-section w-full"><ContactCTASection /></div>
      </div>
    </div>
  );
}

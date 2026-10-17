'use client';

import { ContactForm } from '@/components/contact-form';
import { ScrollSection } from '../scroll/ScrollSection';

// The closing section of the home page: the contact form the offers' "Details" buttons point to (#contact).
export function ContactCTASection() {
  return (
    <ScrollSection triggerOffset="top 80%" className="py-20 md:py-32 lg:min-h-screen flex items-center justify-center">
      <div className="container px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto glass-panel p-8 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-xs font-code tracking-[0.2em] text-primary uppercase mb-4">Initialize Connection</h2>
            <h3 className="text-3xl md:text-5xl font-headline font-bold text-gradient-light mb-4">Ready to Begin?</h3>
            <p className="text-muted-foreground font-body">
              If you have a project in mind or want to learn more about my services, don&apos;t hesitate to reach out.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </ScrollSection>
  );
}

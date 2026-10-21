import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background/20 backdrop-blur-md relative z-20 mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 py-8 sm:px-8 xl:h-24 xl:flex-row xl:py-0">
        <div className="flex flex-col items-center gap-4 px-8 xl:flex-row xl:gap-4 xl:px-0">
          <Code className="hidden h-5 w-5 text-primary xl:block" />
          <p className="text-center font-code text-xs uppercase tracking-widest text-white/40 xl:text-left">
            &copy; {currentYear} HopeEngineer Hub.
          </p>
        </div>
        <nav aria-label="Products" className="flex items-center gap-6 font-code text-xs uppercase tracking-widest">
          <a href="https://sharpy.live" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center rounded-sm text-white/50 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Sharpy
          </a>
          <a href="https://www.threadify.app/home" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center rounded-sm text-white/50 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Threadify
          </a>
        </nav>
        <nav aria-label="Legal" className="flex items-center gap-6 font-code text-xs uppercase tracking-widest">
          <Link href="/privacy" className="inline-flex h-11 items-center rounded-sm text-white/50 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Privacy
          </Link>
          <Link href="/terms" className="inline-flex h-11 items-center rounded-sm text-white/50 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Terms
          </Link>
        </nav>
        {/* One row on phones too: smaller buttons spread across the width, so ten icons never push past the screen */}
        <div className="flex w-full max-w-sm items-center justify-between sm:w-auto sm:max-w-none sm:justify-center sm:gap-1">
          {SOCIAL_LINKS.map((social) => (
            <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label={social.name} className="h-8 w-8 text-white/40 hover:text-primary hover:bg-white/5 transition-all min-[375px]:h-9 min-[375px]:w-9 sm:h-10 sm:w-10">
                <social.icon className="h-4 w-4" />
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 py-8 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ApexFolio. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6">
          <Link href="#" aria-label="Github profile" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Twitter profile" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

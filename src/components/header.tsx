import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, MountainIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg">ApexFolio</span>
        </Link>
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="/" className="transition-colors hover:text-primary" prefetch={false}>
            Home
          </Link>
          <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary" prefetch={false}>
            About
          </Link>
          <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                <MountainIcon className="h-6 w-6 text-primary" />
                <span className="sr-only">ApexFolio</span>
              </Link>
              <Link href="/" className="hover:text-primary" prefetch={false}>
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary" prefetch={false}>
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary" prefetch={false}>
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
